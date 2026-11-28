import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { onRequestPost, onRequestGet, onRequestEvidencePost } from '../functions/api/ledger.js';

function insertedRow(call, sheetId = 42, insertIndex = 1) {
  const requests = JSON.parse(call.options.body).requests;
  assert.equal(requests.length, 2);
  assert.deepEqual(requests[0].insertDimension.range, { sheetId, dimension: 'ROWS', startIndex: insertIndex, endIndex: insertIndex + 1 });
  const update = requests[1].updateCells;
  assert.deepEqual(update.start, { sheetId, rowIndex: insertIndex, columnIndex: 0 });
  assert.equal(update.fields, 'userEnteredValue');
  return update.rows[0].values.map(({ userEnteredValue }) =>
    userEnteredValue.formulaValue ?? userEnteredValue.numberValue ?? userEnteredValue.stringValue);
}

function batchCalls(calls) {
  return calls.filter((call) => call.url.includes(':batchUpdate'));
}

test('unverified automatic defaults are labelled and do not overwrite hygiene results', async () => {
  const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const env = { SHEET_ID: 'test-default', GOOGLE_SERVICE_ACCOUNT: JSON.stringify({
    client_email: 'test@example.invalid', private_key: privateKey.export({ type: 'pkcs8', format: 'pem' })
  }) };
  const calls = [];
  let usedRows = 0;
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    if (String(url).includes('oauth2.googleapis.com')) return Response.json({ access_token: 'test', expires_in: 3600 });
    if (String(url).includes('?fields=sheets(')) return Response.json({ sheets: [{ properties: { title: 'Kirjed', sheetId: 42 } }, { properties: { title: 'Hügieen', sheetId: 43 } }] });
    if (String(url).includes(encodeURIComponent('Kirjed!A2:A'))) return Response.json({ values: Array.from({ length: usedRows }, () => ['date']) });
    if ((options.method || 'GET') === 'GET') return Response.json({ values: [[2]] });
    return Response.json({});
  };
  const post = (record) => onRequestPost({ env, request: new Request('https://example.invalid/api/ledger', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ record })
  }) });
  try {
    const day = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Tallinn', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    const base = { seq: 1, created_at: `${day}T12:00:00Z`, checkpoint: 'Pesu', grade: 3, supervisor: 'Test', transcript: '=HYPERLINK("https://evil.invalid")' };
    let response = await post({ ...base, auto_default: true });
    assert.equal(response.status, 200);
    assert.equal((await response.json()).hygieneUpdated, true);
    assert.equal(calls.filter((call) => call.url.includes('?fields=sheets(')).length, 2);
    let sheetCalls = batchCalls(calls);
    assert.equal(sheetCalls.length, 2);
    let row = insertedRow(sheetCalls[0]);
    assert.match(String(row[3]), /kontrollimata/);
    assert.equal(row[5], 'Test');
    assert.match(row[1], /^\d{2}:\d{2}$/);
    calls.length = 0;
    usedRows = 3;
    response = await post({ ...base, seq: 2, auto_default: false });
    assert.equal((await response.json()).hygieneUpdated, true);
    sheetCalls = calls.filter((call) => call.url.includes('sheets.googleapis.com'));
    assert.equal(sheetCalls.length, 5);
    row = insertedRow(batchCalls(calls)[0], 42, 4);
    assert.equal(row[3], 3);
    const numericCell = JSON.parse(batchCalls(calls)[0].options.body).requests[1].updateCells.rows[0].values[3];
    assert.deepEqual(numericCell.userEnteredValue, { numberValue: 3 });
    const transcriptCell = JSON.parse(batchCalls(calls)[0].options.body).requests[1].updateCells.rows[0].values[4];
    assert.deepEqual(transcriptCell.userEnteredValue, { stringValue: base.transcript });
    const putCell = calls.find((call) => call.url.includes('/values/') && call.options.method === 'PUT');
    assert.equal(JSON.parse(putCell.options.body).values[0][0], 2);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

function memoryKV() {
  const entries = new Map();
  return {
    async put(key, value, options = {}) {
      const stored = typeof value === 'string' ? value : new Uint8Array(value).slice();
      entries.set(key, { value: stored, metadata: options.metadata });
    },
    async get(key, type) {
      const entry = entries.get(key);
      if (!entry) return null;
      if (type === 'json') return JSON.parse(entry.value);
      if (type === 'arrayBuffer') return entry.value.slice().buffer;
      return entry.value;
    },
    async getWithMetadata(key) {
      const entry = entries.get(key);
      return { value: entry ? entry.value.slice().buffer : null, metadata: entry?.metadata };
    }
  };
}

test('chunked video supports retry, complete retrieval and byte ranges', async () => {
  const env = { EVIDENCE: memoryKV() };
  const id = `${'a'.repeat(64)}-0`;
  const base = { id, total: 2, name: 'clip.mp4', mime: 'video/mp4', kind: 'video' };
  const upload = (index, bytes, changes = {}) => onRequestEvidencePost({ env, request: new Request('https://example.invalid/api/evidence', {
    method: 'POST', body: JSON.stringify({ ...base, index, data: `data:video/mp4;base64,${Buffer.from(bytes).toString('base64')}`, ...changes })
  }) });
  const get = (range) => onRequestGet({ env, request: new Request(`https://example.invalid/api/evidence/${id}`, {
    headers: range ? { range } : {}
  }) });
  assert.equal((await upload(1, [4, 5])).status, 409);
  assert.equal((await upload(0, [1, 2, 3])).status, 200);
  assert.equal((await get()).status, 404);
  assert.equal((await upload(0, [1, 2, 3])).status, 200);
  assert.equal((await upload(0, [9])).status, 409);
  assert.equal((await upload(1, [4, 5])).status, 200);
  let response = await get();
  assert.equal(response.headers.get('content-type'), 'video/mp4');
  assert.deepEqual([...new Uint8Array(await response.arrayBuffer())], [1, 2, 3, 4, 5]);
  response = await get('bytes=2-3');
  assert.equal(response.status, 206);
  assert.equal(response.headers.get('content-range'), 'bytes 2-3/5');
  assert.deepEqual([...new Uint8Array(await response.arrayBuffer())], [3, 4]);
  response = await get('bytes=-2');
  assert.deepEqual([...new Uint8Array(await response.arrayBuffer())], [4, 5]);
  assert.equal((await get('bytes=5-')).status, 416);
  const visibilityKV = memoryKV();
  let visible = false;
  const eventualEnv = { EVIDENCE: { ...visibilityKV, async getWithMetadata(key, type) {
    if (key === `chunk-${id}-0` && !visible) return { value: null, metadata: null };
    return visibilityKV.getWithMetadata(key, type);
  } } };
  const eventualUpload = (index, data) => onRequestEvidencePost({ env: eventualEnv, request: new Request('https://example.invalid/api/evidence', {
    method: 'POST', body: JSON.stringify({ ...base, index, data })
  }) });
  assert.equal((await eventualUpload(0, 'data:video/mp4;base64,AQID')).status, 200);
  assert.equal((await eventualUpload(1, 'data:video/mp4;base64,BAU=')).status, 409);
  assert.equal((await onRequestGet({ env: eventualEnv, request: new Request(`https://example.invalid/api/evidence/${id}`) })).status, 404);
  visible = true;
  assert.equal((await eventualUpload(1, 'data:video/mp4;base64,BAU=')).status, 200);
  assert.equal((await upload(0, [1, 2, 3])).status, 200);
  assert.equal((await upload(1, [4, 5])).status, 200);
  assert.notEqual((await upload(0, new Uint8Array(4 * 1024 * 1024 + 1), { id: `${'e'.repeat(64)}-0`, total: 1 })).status, 200);
  const failedEnv = { EVIDENCE: { ...env.EVIDENCE, async put() { throw new Error('KV failure'); } } };
  assert.notEqual((await onRequestEvidencePost({ env: failedEnv, request: new Request('https://example.invalid/api/evidence', {
    method: 'POST', body: JSON.stringify({ ...base, id: `${'f'.repeat(64)}-0`, index: 0, total: 1, data: 'data:video/mp4;base64,AQ==' })
  }) })).status, 200);
  assert.equal((await upload(0, [1], { id: `${'b'.repeat(16)}-1`, total: 1 })).status, 200);
  assert.equal((await upload(0, [1], { id: 'invalid', total: 1 })).status, 400);
  assert.equal((await onRequestEvidencePost({ env: {}, request: new Request('https://example.invalid/api/evidence', { method: 'POST' }) })).status, 503);
});

test('ledger stores all media, rejects missing evidence and records signed completion and recovery', async () => {
  const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const env = { EVIDENCE: memoryKV(), SHEET_ID: 'test-media', GOOGLE_SERVICE_ACCOUNT: JSON.stringify({
    client_email: 'test@example.invalid', private_key: privateKey.export({ type: 'pkcs8', format: 'pem' })
  }) };
  const calls = [];
  const originalFetch = globalThis.fetch;
  let failBatch = false;
  let failLookup = false;
  globalThis.fetch = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    if (String(url).includes('oauth2.googleapis.com')) return Response.json({ access_token: 'test', expires_in: 3600 });
    if (String(url).includes('?fields=sheets(')) return Response.json({ sheets: [{ properties: { title: 'Kirjed', sheetId: 42 } }, { properties: { title: 'Hügieen', sheetId: 43 } }] });
    if (String(url).includes(encodeURIComponent('Kirjed!A2:A'))) return failLookup ? new Response('failure', { status: 500 }) : Response.json({ values: Array.from({ length: 1301 }, () => ['date']) });
    if (String(url).includes(':batchUpdate') && failBatch) return new Response('failure', { status: 500 });
    if ((options.method || 'GET') === 'GET') return Response.json({ values: [[2]] });
    return Response.json({});
  };
  const post = (payload) => onRequestPost({ env, request: new Request('https://example.invalid/api/ledger', {
    method: 'POST', body: JSON.stringify(payload)
  }) });
  const base = { seq: 1, created_at: '2026-11-27T12:00:00Z', checkpoint: 'Pesu', grade: 3, supervisor: 'Inspector' };
  try {
    const media = [];
    for (let i = 0; i < 3; i++) {
      const item = { id: `${'c'.repeat(64)}-${i}`, index: 0, total: 1, name: `${i}.mp4`, mime: 'video/mp4', kind: 'video', data: 'data:video/mp4;base64,AQID' };
      const response = await onRequestEvidencePost({ env, request: new Request('https://example.invalid/api/evidence', {
        method: 'POST', body: JSON.stringify(item)
      }) });
      media.push({ name: item.name, mime: item.mime, kind: item.kind, url: (await response.json()).url });
    }
    media.push({ name: 'photo.jpg', mime: 'image/jpeg', kind: 'image', dataUrl: 'data:image/jpeg;base64,AQID' });
    let response = await post({ record: base, media });
    assert.equal(response.status, 200);
    assert.equal((await response.json()).files, 4);
    assert.equal(calls.filter((call) => call.url.includes('?fields=sheets(')).length, 2);
    let rows = batchCalls(calls);
    let row = insertedRow(rows[0], 42, 1302);
    assert.equal(row.filter((cell) => String(cell).startsWith('=HYPERLINK')).length, 4);
    const cells = JSON.parse(rows[0].options.body).requests[1].updateCells.rows[0].values;
    assert.equal(cells.filter((cell) => cell.userEnteredValue.formulaValue?.startsWith('=HYPERLINK')).length, 4);
    assert.equal(cells[1].userEnteredValue.stringValue, row[1]);
    calls.length = 0;
    response = await post({ record: base, media: [{ ...media[0], url: `https://example.invalid/api/evidence/${'d'.repeat(64)}-0` }] });
    assert.notEqual(response.status, 200);
    assert.equal(batchCalls(calls).length, 0);
    const originalGetWithMetadata = env.EVIDENCE.getWithMetadata;
    env.EVIDENCE.getWithMetadata = async () => ({ value: null, metadata: null });
    response = await post({ record: base, media: [media[0]] });
    assert.notEqual(response.status, 200);
    assert.equal(batchCalls(calls).length, 0);
    env.EVIDENCE.getWithMetadata = originalGetWithMetadata;
    response = await post({ record: base, media: [{ ...media[0], url: 'https://evil.invalid/api/evidence/file' }] });
    assert.notEqual(response.status, 200);
    calls.length = 0;
    response = await post({ record: { ...base, record_type: 'inspection_completion', signed_by: 'Signer' } });
    assert.equal((await response.json()).hygieneUpdated, false);
    rows = batchCalls(calls);
    assert.equal(rows.length, 1);
    row = insertedRow(rows[0], 42, 1302);
    assert.match(row[2], /Inspection completion/);
    assert.equal(row[3], '');
    assert.equal(row[5], 'Signer');
    assert.equal(row.at(-1), base.created_at);
    calls.length = 0;
    response = await post({ record: { ...base, record_type: 'inspection_completion' } });
    assert.equal((await response.json()).hygieneUpdated, false);
    rows = batchCalls(calls);
    row = insertedRow(rows[0], 42, 1302);
    assert.match(row[4], /allkiri puudub/);
    assert.equal(row[5], 'Inspector');
    calls.length = 0;
    response = await post({ record: { ...base, auto_default: true }, recovery: true });
    assert.equal((await response.json()).hygieneUpdated, true);
    rows = batchCalls(calls);
    assert.equal(rows.length, 2);
    row = insertedRow(rows[0], 42, 1302);
    assert.match(row[3], /kontrollimata/);
    assert.match(row[4], /Taastatud automaatne/);
    calls.length = 0;
    response = await post({ record: base, recovery: true, media });
    assert.equal((await response.json()).hygieneUpdated, true);
    rows = batchCalls(calls);
    assert.equal(rows.length, 2);
    row = insertedRow(rows[0], 42, 1302);
    assert.match(row[4], /Recovered attachments/);
    assert.equal(row[2], 'Pesu');
    assert.equal(row[5], 'Inspector');
    assert.equal(row.filter((cell) => String(cell).startsWith('=HYPERLINK')).length, 4);
    calls.length = 0;
    failBatch = true;
    response = await post({ record: base });
    assert.notEqual(response.status, 200);
    assert.equal(batchCalls(calls).length, 1);
    assert.equal(calls.filter((call) => call.options.method === 'PUT').length, 0);
    calls.length = 0;
    failBatch = false;
    failLookup = true;
    response = await post({ record: base });
    assert.notEqual(response.status, 200);
    assert.equal(batchCalls(calls).length, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
