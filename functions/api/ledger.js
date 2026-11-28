const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SHEETS_URL = 'https://sheets.googleapis.com/v4/spreadsheets';
const MAX_CHUNK = 4 * 1024 * 1024;
const MAX_BODY = 32 * 1024 * 1024;
const EVIDENCE_ID = /^(?:[a-f0-9]{64}|[a-f0-9]{16})-(?:0|[1-9][0-9]*)$/;

let tokenCache = null;

const encoder = new TextEncoder();

function toBase64Url(bytes) {
  let binary = '';
  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function pemToDer(pem) {
  const raw = String(pem || '')
    .replace(/-----BEGIN [A-Z ]+-----/g, '')
    .replace(/-----END [A-Z ]+-----/g, '')
    .replace(/\s+/g, '');
  const binary = atob(raw);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function dataUrlBytes(dataUrl) {
  if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:') || !dataUrl.includes(',')) {
    return new Uint8Array(0);
  }
  const comma = dataUrl.indexOf(',');
  const header = dataUrl.slice(0, comma);
  const body = dataUrl.slice(comma + 1);
  if (!header.includes(';base64')) return encoder.encode(decodeURIComponent(body));
  let binary;
  try {
    binary = atob(body.replace(/\s/g, ''));
  } catch {
    return new Uint8Array(0);
  }
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function serviceToken(sa) {
  if (tokenCache && tokenCache.expiry > Date.now() / 1000 + 60) return tokenCache.value;
  const key = await crypto.subtle.importKey(
    'pkcs8',
    pemToDer(sa.private_key),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const now = Math.floor(Date.now() / 1000);
  const header = toBase64Url(encoder.encode(JSON.stringify({
    alg: 'RS256',
    typ: 'JWT',
    kid: sa.private_key_id
  })));
  const claim = toBase64Url(encoder.encode(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600
  })));
  const input = `${header}.${claim}`;
  const signature = new Uint8Array(await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, encoder.encode(input)));
  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${input}.${toBase64Url(signature)}`
    })
  });
  if (!response.ok) throw new Error(`google token ${response.status}`);
  const data = await response.json();
  tokenCache = {
    value: data.access_token,
    expiry: now + Number(data.expires_in || 3600)
  };
  return tokenCache.value;
}



const ledgerTabIds = new Map();
const FORMULA = Symbol('formula');

async function ledgerTab(token, sheetId) {
  if (ledgerTabIds.has(sheetId)) return ledgerTabIds.get(sheetId);
  const response = await fetch(
    `${SHEETS_URL}/${encodeURIComponent(sheetId)}?fields=sheets(properties(title,sheetId))`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!response.ok) throw new Error(`sheet metadata ${response.status}: ${await response.text()}`);
  const info = await response.json();
  const tab = (info.sheets || []).find((item) => item.properties?.title === 'Kirjed')?.properties?.sheetId;
  if (tab === undefined) throw new Error('Kirjed tab is missing');
  ledgerTabIds.set(sheetId, tab);
  return tab;
}

async function insertLedgerRow(token, sheetId, row) {
  const tab = await ledgerTab(token, sheetId);
  const lookupUrl = `${SHEETS_URL}/${encodeURIComponent(sheetId)}/values/${encodeURIComponent('Kirjed!A2:A')}`;
  const lookup = await fetch(lookupUrl, { headers: { Authorization: `Bearer ${token}` } });
  if (!lookup.ok) throw new Error(`sheet lookup ${lookup.status}: ${await lookup.text()}`);
  const used = (await lookup.json()).values || [];
  const insertIndex = 1 + used.length;
  // Concurrent lookups may choose the same position, changing relative order,
  // but inserting and writing in one batch preserves both rows.
  const response = await fetch(`${SHEETS_URL}/${encodeURIComponent(sheetId)}:batchUpdate`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      requests: [
        {
          insertDimension: {
            range: { sheetId: tab, dimension: 'ROWS', startIndex: insertIndex, endIndex: insertIndex + 1 },
            inheritFromBefore: false,
          }
        },
        {
          updateCells: {
            start: { sheetId: tab, rowIndex: insertIndex, columnIndex: 0 },
            rows: [{ values: row.map((value) => ({
              userEnteredValue: typeof value === 'number' ? { numberValue: value } :
                value && typeof value === 'object' && FORMULA in value ? { formulaValue: value[FORMULA] } : { stringValue: String(value ?? '') }
            })) }],
            fields: 'userEnteredValue'
          }
        }
      ]
    })
  });
  if (!response.ok) throw new Error(`sheet insert Kirjed ${response.status}: ${await response.text()}`);
  return insertIndex + 1;
}


function allowedOrigin(request) {
  const origin = request.headers.get('Origin');
  const fetchSite = request.headers.get('Sec-Fetch-Site');
  if (origin) {
    try { return new URL(origin).host === new URL(request.url).host; } catch { return false; }
  }
  return !fetchSite || fetchSite === 'same-origin';
}

function evidenceMetadata(item) {
  if (typeof item.name !== 'string' || !item.name || item.name.length > 255 ||
      typeof item.mime !== 'string' || item.mime.length > 255 || !/^[\w!#$&^_.+-]+\/[\w!#$&^_.+-]+(?:;[ -~]+)?$/.test(item.mime) ||
      !['photo', 'image', 'video', 'audio'].includes(item.kind)) throw new Error('invalid media metadata');
  return { name: item.name, mime: item.mime, kind: item.kind };
}

async function storeEvidence(env, item, base) {
  if (!env.EVIDENCE) throw new Error('evidence unavailable');
  const metadata = evidenceMetadata(item);
  const bytes = dataUrlBytes(item.dataUrl);
  if (!bytes.length || bytes.length > MAX_CHUNK) throw new Error('invalid or oversized legacy media');
  const key = `ev-${crypto.randomUUID().replace(/-/g, '')}`;
  await env.EVIDENCE.put(key, bytes, { metadata });
  return `${base}/api/evidence/${key}`;
}

async function onRequestEvidencePost({ request, env }) {
  if (!allowedOrigin(request)) return Response.json({ error: 'forbidden' }, { status: 403 });
  if (!env.EVIDENCE) return Response.json({ error: 'evidence unavailable' }, { status: 503 });
  try {
    const text = await request.text();
    if (text.length > Math.ceil(MAX_CHUNK / 3) * 4 + 4096) return Response.json({ error: 'chunk too big' }, { status: 413 });
    const item = JSON.parse(text);
    if (!EVIDENCE_ID.test(item.id) || !Number.isSafeInteger(item.index) || !Number.isSafeInteger(item.total) ||
        item.index < 0 || item.total < 1 || item.total > 10000 || item.index >= item.total ||
        typeof item.data !== 'string' || !/^data:[^,]*;base64,[A-Za-z0-9+/]*={0,2}$/.test(item.data)) {
      return Response.json({ error: 'invalid chunk' }, { status: 400 });
    }
    const metadata = evidenceMetadata(item);
    const bytes = dataUrlBytes(item.data);
    if (!bytes.length || bytes.length > MAX_CHUNK) return Response.json({ error: 'invalid chunk size' }, { status: 400 });
    const digest = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)), (b) => b.toString(16).padStart(2, '0')).join('');
    const manifestKey = `manifest-${item.id}`;
    const manifest = await env.EVIDENCE.get(manifestKey, 'json');
    const matches = (value) => value && value.total === item.total && value.name === metadata.name &&
      value.mime === metadata.mime && value.kind === metadata.kind;
    if (manifest) {
      const chunk = manifest.chunks[item.index];
      if (!matches(manifest) || !chunk || chunk.digest !== digest || chunk.size !== bytes.length) {
        return Response.json({ error: 'upload conflict' }, { status: 409 });
      }
    } else {
      const chunks = [];
      let size = 0;
      for (let index = item.index === item.total - 1 ? 0 : Math.max(0, item.index - 1); index < item.index; index++) {
        const entry = await env.EVIDENCE.getWithMetadata(`chunk-${item.id}-${index}`, 'arrayBuffer');
        if (!entry.value) return Response.json({ error: 'earlier chunk not yet available; retry' }, { status: 409 });
        const part = entry.metadata;
        if (!matches(part) || part.index !== index || part.size !== entry.value.byteLength || typeof part.digest !== 'string') {
          return Response.json({ error: 'upload conflict' }, { status: 409 });
        }
        chunks.push({ size: part.size, digest: part.digest });
        size += part.size;
      }
      const chunkKey = `chunk-${item.id}-${item.index}`;
      const existing = await env.EVIDENCE.getWithMetadata(chunkKey, 'arrayBuffer');
      if (existing.value) {
        const part = existing.metadata;
        if (!matches(part) || part.index !== item.index || part.digest !== digest ||
            part.size !== bytes.length || existing.value.byteLength !== bytes.length) {
          return Response.json({ error: 'upload conflict' }, { status: 409 });
        }
      } else {
        await env.EVIDENCE.put(chunkKey, bytes, {
          metadata: { ...metadata, total: item.total, index: item.index, size: bytes.length, digest }
        });
      }
      chunks.push({ size: bytes.length, digest });
      size += bytes.length;
      if (item.index === item.total - 1) {
        await env.EVIDENCE.put(manifestKey, JSON.stringify({ ...metadata, total: item.total, chunks, size }));
      }
    }
    return Response.json({ ok: true, url: `${new URL(request.url).origin}/api/evidence/${item.id}` });
  } catch (error) {
    console.error('evidence upload failed', error);
    return Response.json({ error: 'evidence upload failed' }, { status: 502 });
  }
}

async function onRequestGet({ request, env }) {
  if (!env.EVIDENCE) return Response.json({ error: 'unavailable' }, { status: 503 });
  const key = new URL(request.url).pathname.split('/').pop() || '';
  if (!/^[a-zA-Z0-9_-]{1,90}$/.test(key)) return Response.json({ error: 'not found' }, { status: 404 });
  try {
    const manifest = EVIDENCE_ID.test(key) ? await env.EVIDENCE.get(`manifest-${key}`, 'json') : null;
    const legacy = manifest ? null : await env.EVIDENCE.getWithMetadata(key, 'arrayBuffer');
    if (!manifest && !legacy.value) return Response.json({ error: 'not found' }, { status: 404 });
    const size = manifest ? manifest.size : legacy.value.byteLength;
    const metadata = manifest || legacy.metadata || {};
    let start = 0, end = size - 1, status = 200;
    const range = request.headers.get('Range');
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match || (!match[1] && !match[2])) return new Response(null, { status: 416, headers: { 'content-range': `bytes */${size}` } });
      if (!match[1]) {
        const suffix = Number(match[2]);
        if (!Number.isSafeInteger(suffix) || suffix < 1) return new Response(null, { status: 416, headers: { 'content-range': `bytes */${size}` } });
        start = Math.max(0, size - suffix);
      } else {
        start = Number(match[1]);
        if (match[2]) end = Math.min(Number(match[2]), end);
      }
      if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || end < start) return new Response(null, { status: 416, headers: { 'content-range': `bytes */${size}` } });
      status = 206;
    }
    const headers = {
      'content-type': metadata.mime || 'application/octet-stream',
      'content-disposition': `inline; filename="${String(metadata.name || 'evidence').replace(/[^\x20-\x7e]|["\\]/g, '_')}"`,
      'cache-control': 'public, max-age=31536000, immutable',
      'accept-ranges': 'bytes',
      'content-length': String(end - start + 1)
    };
    if (status === 206) headers['content-range'] = `bytes ${start}-${end}/${size}`;
    if (!manifest) return new Response(legacy.value.slice(start, end + 1), { status, headers });
    let offset = 0;
    const selected = [];
    for (let i = 0; i < manifest.chunks.length; i++) {
      const chunkEnd = offset + manifest.chunks[i].size - 1;
      if (chunkEnd >= start && offset <= end) selected.push({ index: i, from: Math.max(0, start - offset), to: Math.min(manifest.chunks[i].size, end - offset + 1) });
      offset = chunkEnd + 1;
    }
    let index = 0;
    const stream = new ReadableStream({
      async pull(controller) {
        if (index === selected.length) return controller.close();
        const part = selected[index++];
        const chunk = await env.EVIDENCE.get(`chunk-${key}-${part.index}`, 'arrayBuffer');
        if (!chunk) return controller.error(new Error('missing evidence chunk'));
        controller.enqueue(new Uint8Array(chunk, part.from, part.to - part.from));
      }
    });
    return new Response(stream, { status, headers });
  } catch (error) {
    console.error('evidence retrieval failed', error);
    return Response.json({ error: 'evidence retrieval failed' }, { status: 502 });
  }
}

function plain(value) {
  return String(value ?? '').replace(/[\r\n\t]+/g, ' ').trim();
}


function hyperlink(url, label) {
  const safeLabel = String(label || 'tõend').replace(/"/g, '""').replace(/[\r\n\t]+/g, ' ');
  return { [FORMULA]: `=HYPERLINK("${url}","${safeLabel}")` };
}

function gradeFor(record) {
  if (record.grade !== null && record.grade !== undefined && record.grade !== '') return record.grade;
  const grades = { clean: 3, 'not clean': 2, serious: 1, 'cannot sign': 2 };
  return grades[record.verdict] || '';
}

const CHECKPOINT_PAIRS = [
  ['Kätepesu', 'Hand wash sink'], ['Siirupituba', 'Syrup room wall'],
  ['Kastipesu', 'Crate washer'], ['Täitepea', 'Filler head'],
  ['Äravool', 'Drain'], ['Äravool', 'Drenaaž'], ['Klapp', 'Valve'], ['Pesu', 'Wash'], ['Uks', 'Door']
];

const HYGIENE_LABELS = [
  'Täitepea', 'Äravool', 'Klapp', 'Pesu', 'Uks'
];

function displayCheckpoint(record) {
  const text = String(record.checkpoint || record.asset || '').toLocaleLowerCase();
  for (const [estonian, english] of CHECKPOINT_PAIRS) {
    if (text.includes(estonian.toLocaleLowerCase()) || text.includes(english.toLocaleLowerCase())) return estonian;
  }
  return String(record.checkpoint || '');
}

function weekParts(value) {
  const source = new Date(value);
  if (Number.isNaN(source.getTime())) return null;
  const day = new Date(Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate()));
  const shift = (day.getUTCDay() + 6) % 7;
  day.setUTCDate(day.getUTCDate() - shift + 3);
  const first = new Date(Date.UTC(day.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((day - first) / 86400000) + 1) / 7);
  return { year: day.getUTCFullYear(), week };
}

function localDay(value) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Tallinn', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(value);
  const valueFor = (type) => parts.find((part) => part.type === type).value;
  return new Date(Date.UTC(Number(valueFor('year')), Number(valueFor('month')) - 1, Number(valueFor('day'))));
}

function weekKey(parts) {
  return `${parts.year}-${parts.week}`;
}

function currentWeekKeys() {
  const monday = localDay(new Date());
  monday.setUTCDate(monday.getUTCDate() - ((monday.getUTCDay() + 6) % 7));
  const previous = new Date(monday);
  previous.setUTCDate(previous.getUTCDate() - 7);
  return [previous, monday].map((day) => weekKey(weekParts(day.toISOString().slice(0, 10))));
}

function hygieneTarget(record) {
  const parts = weekParts(record.created_at);
  if (!parts) return null;
  const columnIndex = currentWeekKeys().indexOf(weekKey(parts));
  if (columnIndex < 0) return null;
  const rowIndex = HYGIENE_LABELS.indexOf(displayCheckpoint(record));
  if (rowIndex < 0) return null;
  return { range: `Hügieen!${String.fromCharCode(66 + columnIndex)}${11 + rowIndex}`, grade: gradeFor(record) };
}

async function readCell(token, sheetId, range) {
  const url = `${SHEETS_URL}/${encodeURIComponent(sheetId)}/values/${encodeURIComponent(range)}`;
  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!response.ok) throw new Error(`sheet read ${range} ${response.status}`);
  const data = await response.json();
  const value = Number((data.values || [[]])[0]?.[0]);
  return Number.isFinite(value) ? value : null;
}

async function updateCell(token, sheetId, range, value) {
  const url = `${SHEETS_URL}/${encodeURIComponent(sheetId)}/values/${encodeURIComponent(range)}`;
  const response = await fetch(`${url}?valueInputOption=USER_ENTERED`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify({ values: [[value]] })
  });
  if (!response.ok) throw new Error(`sheet update ${range} ${response.status}: ${await response.text()}`);
  return response.json();
}

const hygieneTabIds = new Map();
async function hygieneTab(token, sheetId) {
  if (hygieneTabIds.has(sheetId)) return hygieneTabIds.get(sheetId);
  const response = await fetch(
    `${SHEETS_URL}/${encodeURIComponent(sheetId)}?fields=sheets(properties(title,sheetId))`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!response.ok) throw new Error(`sheet metadata ${response.status}: ${await response.text()}`);
  const info = await response.json();
  const tab = (info.sheets || []).find((item) => item.properties?.title === 'Hügieen')?.properties?.sheetId;
  if (tab === undefined) throw new Error('Hügieen tab is missing');
  hygieneTabIds.set(sheetId, tab);
  return tab;
}

async function colorHygieneCell(token, sheetId, range, grade) {
  const match = range.match(/^Hügieen!([A-Z]+)(\d+)$/);
  if (!match) return;
  let column = 0;
  for (const letter of match[1]) column = column * 26 + letter.charCodeAt(0) - 64;
  const row = Number(match[2]) - 1;
  const rgb = {
    3: { red: 198 / 255, green: 239 / 255, blue: 206 / 255 },
    2: { red: 1, green: 235 / 255, blue: 156 / 255 },
    1: { red: 1, green: 199 / 255, blue: 206 / 255 },
  }[Number(grade)];
  if (!rgb) return;
  const tab = await hygieneTab(token, sheetId);
  const response = await fetch(`${SHEETS_URL}/${encodeURIComponent(sheetId)}:batchUpdate`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify({ requests: [{
      repeatCell: {
        range: { sheetId: tab, startRowIndex: row, endRowIndex: row + 1, startColumnIndex: column - 1, endColumnIndex: column },
        cell: { userEnteredFormat: { backgroundColor: rgb } },
        fields: 'userEnteredFormat.backgroundColor'
      }
    }] })
  });
  if (!response.ok) throw new Error(`sheet color ${response.status}: ${await response.text()}`);
}

async function onRequestPost({ request, env }) {
  if (!env.GOOGLE_SERVICE_ACCOUNT || !env.SHEET_ID) {
    return Response.json({ error: 'unavailable' }, { status: 503 });
  }
  if (!allowedOrigin(request)) return Response.json({ error: 'forbidden' }, { status: 403 });

  const text = await request.text();
  if (text.length > MAX_BODY) return Response.json({ error: 'too big' }, { status: 413 });
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    return Response.json({ error: 'bad json' }, { status: 400 });
  }
  const record = payload.record;
  if (!record || !Number.isInteger(record.seq) || record.seq < 1 || !record.created_at || Number.isNaN(new Date(record.created_at).getTime()) ||
      (record.record_type === 'inspection_completion' && record.signed_by !== undefined && (typeof record.signed_by !== 'string' || !record.signed_by.trim()))) {
    return Response.json({ error: 'bad record' }, { status: 400 });
  }
  if (payload.media !== undefined && !Array.isArray(payload.media)) return Response.json({ error: 'bad media' }, { status: 400 });
  if (record.record_type !== 'inspection_completion' && payload.recovery !== true && ![1, 2, 3].includes(Number(record.grade))) {
    return Response.json({ error: 'grade required' }, { status: 400 });
  }
  const media = payload.media || [];

  try {
    const sa = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT);
    const token = await serviceToken(sa);

    const links = [];
    for (const item of media) {
      const metadata = evidenceMetadata(item);
      let url;
      if (item.url) {
        const parsed = new URL(item.url, request.url);
        if (parsed.origin !== new URL(request.url).origin || parsed.search || parsed.hash ||
            !/^\/api\/evidence\/(?:[a-f0-9]{64}|[a-f0-9]{16})-(?:0|[1-9][0-9]*)$/.test(parsed.pathname)) throw new Error('invalid evidence URL');
        if (!env.EVIDENCE) throw new Error('evidence unavailable');
        const id = parsed.pathname.split('/').pop();
        const manifest = await env.EVIDENCE.get(`manifest-${id}`, 'json');
        if (!manifest || manifest.name !== metadata.name || manifest.mime !== metadata.mime || manifest.kind !== metadata.kind) throw new Error('missing evidence');
        for (let index = 0; index < manifest.chunks.length; index++) {
          const entry = await env.EVIDENCE.getWithMetadata(`chunk-${id}-${index}`, 'arrayBuffer');
          const expected = manifest.chunks[index];
          if (!entry.value || entry.value.byteLength !== expected.size || entry.metadata?.digest !== expected.digest) {
            throw new Error('evidence chunk not yet available');
          }
        }
        url = parsed.href;
      } else {
        url = await storeEvidence(env, item, new URL(request.url).origin);
      }
      const label = metadata.kind === 'video' ? 'video' : metadata.kind === 'audio' ? 'audio' : 'foto';
      links.push({ url, label });
    }
    const photos = links.filter((link) => link.label === 'foto');
    const videos = links.filter((link) => link.label === 'video');
    const others = links.filter((link) => link.label === 'audio');
    const evidence = links.map((link) => link.label).join(', ');
    const photoCells = Array.from({ length: 6 }, (_, index) => photos[index] ? hyperlink(photos[index].url, photos[index].label) : '');
    const videoCell = videos[0] ? hyperlink(videos[0].url, videos[0].label) : '';
    const extraCells = [...photos.slice(6), ...videos.slice(1), ...others].map((link) => hyperlink(link.url, link.label));
    const stamp = new Date(record.created_at);
    const safeStamp = Number.isNaN(stamp.getTime()) ? new Date() : stamp;
    const dateText = new Intl.DateTimeFormat('et-EE', {
      timeZone: 'Europe/Tallinn', day: '2-digit', month: '2-digit', year: 'numeric'
    }).format(safeStamp);
    const timeText = new Intl.DateTimeFormat('et-EE', {
      timeZone: 'Europe/Tallinn', hour: '2-digit', minute: '2-digit', hour12: false
    }).format(safeStamp);
    const ledgerRow = [
      dateText,
      timeText,
      record.record_type === 'inspection_completion' ? `Ülevaatuse kinnitamine / Inspection completion${record.inspection_line ? ` — ${plain(record.inspection_line)}` : ''}` : plain(displayCheckpoint(record)),
      record.record_type === 'inspection_completion' ? '' : payload.recovery === true && record.auto_default !== true ? '3 — taastatud, kontrollimata / recovered, unverified' : record.auto_default === true ? '3 — automaatne, kontrollimata / automatic, unverified' : gradeFor(record),
      record.record_type === 'inspection_completion' ? (record.signed_by ? 'Allkirjastatud, enda kinnitus / Signed, self-declared confirmation' : 'Lõpetatud, allkiri puudub / Completed, no signature') : payload.recovery === true && record.auto_default === true ? 'Taastatud automaatne kontrollimata hinnang / Recovered automatic unverified default' : payload.recovery === true ? 'Taastatud varasema kirje tõendid, vaikimisi hinne 3 / Recovered attachments from an earlier record, grade set to 3' : record.auto_default === true ? 'Automaatne kontrollimata vaikimisi hinnang / Automatic unverified default assessment' : plain(record.transcript),
      plain(record.record_type === 'inspection_completion' ? record.signed_by || record.supervisor : record.supervisor || record.device_id),
      evidence,
      ...photoCells,
      videoCell,
      ...extraCells,
      ...(record.record_type === 'inspection_completion' ? [plain(record.created_at)] : []),
    ];
    const ledgerRowNumber = await insertLedgerRow(token, env.SHEET_ID, ledgerRow);
    let hygieneUpdated = false;
    const target = record.record_type === 'inspection_completion' ? null : hygieneTarget(record);
    if (target) {
      const current = await readCell(token, env.SHEET_ID, target.range);
      const next = current === null ? target.grade : Math.min(current, target.grade);
      const changed = current === null || next < current;
      let cellValue = next;
      if (changed && [1, 2].includes(Number(next))) {
        const gid = await ledgerTab(token, env.SHEET_ID);
        cellValue = `=HYPERLINK("#gid=${gid}&range=A${ledgerRowNumber}", "${next}")`;
      }
      await updateCell(token, env.SHEET_ID, target.range, cellValue);
      await colorHygieneCell(token, env.SHEET_ID, target.range, next);
      hygieneUpdated = true;
    }
    return Response.json({ ok: true, seq: record.seq, files: links.length, hygieneUpdated });
  } catch (error) {
    console.error('ledger sync failed', error);
    return Response.json({ error: 'sheet write failed' }, { status: 502 });
  }
}

export { onRequestPost, onRequestGet, onRequestEvidencePost };
