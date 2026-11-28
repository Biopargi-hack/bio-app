const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SHEETS_URL = 'https://sheets.googleapis.com/v4/spreadsheets';
const MAX_FILE = 8 * 1024 * 1024;
const MAX_TOTAL = 24 * 1024 * 1024;
const MAX_BODY = 32 * 1024 * 1024;

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



async function appendRow(token, sheetId, sheetName, row) {
  const url = `${SHEETS_URL}/${encodeURIComponent(sheetId)}/values/${encodeURIComponent(sheetName + '!A:A')}:append`;
  const response = await fetch(`${url}?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({ values: [row] })
  });
  if (!response.ok) throw new Error(`sheet append ${sheetName} ${response.status}: ${await response.text()}`);
  return response.json();
}


async function storeEvidence(env, item, base) {
  if (!env.EVIDENCE) return '';
  const bytes = dataUrlBytes(item.dataUrl);
  if (!bytes.length || bytes.length > MAX_FILE) return '';
  const mime = String(item.mime || 'application/octet-stream').slice(0, 100);
  const name = String(item.name || 'evidence').replace(/[^\p{L}\p{N}._ -]/gu, '_').slice(0, 80);
  const key = `ev-${crypto.randomUUID().replace(/-/g, '')}`;
  await env.EVIDENCE.put(key, bytes, { metadata: { mime, name } });
  return `${base}/api/evidence/${key}`;
}

async function onRequestGet({ request, env }) {
  if (!env.EVIDENCE) return Response.json({ error: 'unavailable' }, { status: 503 });
  const key = new URL(request.url).pathname.split('/').pop() || '';
  if (!/^[a-zA-Z0-9_-]{1,80}$/.test(key)) return Response.json({ error: 'not found' }, { status: 404 });
  const entry = await env.EVIDENCE.getWithMetadata(key, 'arrayBuffer');
  if (!entry.value) return Response.json({ error: 'not found' }, { status: 404 });
  const mime = entry.metadata?.mime || 'application/octet-stream';
  const name = String(entry.metadata?.name || 'evidence').replace(/["\\]/g, '_');
  return new Response(entry.value, {
    headers: {
      'content-type': mime,
      'content-disposition': `inline; filename="${name}"`,
      'cache-control': 'public, max-age=31536000, immutable'
    }
  });
}

function plain(value) {
  const text = String(value ?? '').replace(/[\r\n\t]+/g, ' ').trim();
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}


function hyperlink(url, label) {
  const safeLabel = String(label || 'tõend').replace(/"/g, '""').replace(/[\r\n\t]+/g, ' ');
  return `=HYPERLINK("${url}","${safeLabel}")`;
}

function gradeFor(record) {
  if (record.grade !== null && record.grade !== undefined && record.grade !== '') return record.grade;
  const grades = { clean: 3, 'not clean': 2, serious: 1, 'cannot sign': 2 };
  return grades[record.verdict] || '';
}

const CHECKPOINT_PAIRS = [
  ['Kätepesu', 'Hand wash sink'], ['Siirupituba', 'Syrup room wall'],
  ['Kastipesu', 'Crate washer'], ['Täitepea', 'Filler head'],
  ['Drenaaž', 'Drain'], ['Klapp', 'Valve'], ['Pesu', 'Wash'], ['Uks', 'Door']
];

const HYGIENE_LABELS = [
  'Täitepea', 'Villija uksed ja villija alune',
  'Villijast väljuvad pleksiklaasid. Alates maist on seal plastikkardinad.',
  'Villijast väljuv liin', 'Villija esine põrand',
  'Villija lagi ja klaasseinte kohal olevad plekkseinad', 'Pudeli kuivataja',
  'Torustikud (mix, vill, past)', 'Mixer + põrand',
  'VP keskuse lähiümbruse põrand', 'Õhuliinid', 'Õhuliinide alune põrand',
  'Pudelipress', 'Pudelipressi ruumi uks-puhas', 'Pudelipressi välissein',
  'Preformi etteanne', 'Pressi alune', 'Pressi jahutuse alune',
  'Pressikapi sahtlid', 'Korkide ladustamise ala laos', 'Alumine korgikolu',
  'Ülemine korgikolu', 'Ülemise platvormi käepiirded', 'Korgilift',
  'Liin villijast Spectrumini',
  'Drenaaž', 'Klapp', 'Pesu', 'Uks'
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

function hygieneTarget(record) {
  const parts = weekParts(record.created_at);
  if (!parts) return null;
  const bucket = Math.min(53, Math.max(1, Math.floor((parts.week + 4) / 5) * 5));
  const columnIndex = [15, 20, 25, 30, 35, 40, 45, 50].indexOf(bucket);
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

async function onRequestPost({ request, env }) {
  if (!env.GOOGLE_SERVICE_ACCOUNT || !env.SHEET_ID) {
    return Response.json({ error: 'unavailable' }, { status: 503 });
  }
  const origin = request.headers.get('Origin');
  const fetchSite = request.headers.get('Sec-Fetch-Site');
  const ownHost = new URL(request.url).host;
  if (origin) {
    try {
      if (new URL(origin).host !== ownHost) return Response.json({ error: 'forbidden' }, { status: 403 });
    } catch {
      return Response.json({ error: 'forbidden' }, { status: 403 });
    }
  } else if (fetchSite && fetchSite !== 'same-origin') {
    return Response.json({ error: 'forbidden' }, { status: 403 });
  }

  const text = await request.text();
  if (text.length > MAX_BODY) return Response.json({ error: 'too big' }, { status: 413 });
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    return Response.json({ error: 'bad json' }, { status: 400 });
  }
  const record = payload.record;
  if (!record || !Number.isInteger(record.seq) || record.seq < 1 || !record.created_at) {
    return Response.json({ error: 'bad record' }, { status: 400 });
  }
  const media = Array.isArray(payload.media) ? payload.media.slice(0, 8) : [];

  try {
    const sa = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT);
    const token = await serviceToken(sa);

    const links = [];
    let total = 0;
    for (const item of media) {
      if (item.kind === 'audio') continue;
      const size = typeof item.dataUrl === 'string' ? item.dataUrl.length * 0.75 : 0;
      if (total + size > MAX_TOTAL) break;
      total += size;
      const url = await storeEvidence(env, item, new URL(request.url).origin);
      if (!url) continue;
      const label = item.label || ((item.mime || '').startsWith('video/') ? 'video' : 'foto');
      links.push({ url, label });
    }
    const photos = links.filter((link) => link.label === 'foto' || link.label.startsWith('foto '));
    const videos = links.filter((link) => link.label === 'video');
    const evidence = photos.concat(videos).map((link) => link.label).join(', ');
    const photoCells = Array.from({ length: 6 }, (_, index) => {
      const item = photos[index];
      return item ? hyperlink(item.url, item.label) : '';
    });
    const videoCell = videos[0] ? hyperlink(videos[0].url, videos[0].label) : '';
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
      `'${timeText}`,
      plain(displayCheckpoint(record)),
      gradeFor(record),
      plain(record.transcript),
      plain(record.supervisor || record.device_id),
      evidence,
      ...photoCells,
      videoCell,
    ];
    await appendRow(token, env.SHEET_ID, 'Kirjed', ledgerRow);
    let hygieneUpdated = false;
    const target = hygieneTarget(record);
    if (target) {
      const current = await readCell(token, env.SHEET_ID, target.range);
      const next = current === null ? target.grade : Math.min(current, target.grade);
      await updateCell(token, env.SHEET_ID, target.range, next);
      hygieneUpdated = true;
    }
    return Response.json({ ok: true, seq: record.seq, files: links.length, hygieneUpdated });
  } catch (error) {
    console.error('ledger sync failed', error);
    return Response.json({ error: 'sheet write failed' }, { status: 502 });
  }
}

export { onRequestPost, onRequestGet };
