import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { onRequestPost } from '../functions/api/ledger.js';

test('unverified automatic defaults are labelled and do not overwrite hygiene results', async () => {
  const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const env = { SHEET_ID: 'test', GOOGLE_SERVICE_ACCOUNT: JSON.stringify({
    client_email: 'test@example.invalid', private_key: privateKey.export({ type: 'pkcs8', format: 'pem' })
  }) };
  const calls = [];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    if (String(url).includes('oauth2.googleapis.com')) return Response.json({ access_token: 'test', expires_in: 3600 });
    if ((options.method || 'GET') === 'GET') return Response.json({ values: [[2]] });
    return Response.json({});
  };
  const post = (record) => onRequestPost({ env, request: new Request('https://example.invalid/api/ledger', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ record })
  }) });
  try {
    const base = { seq: 1, created_at: '2026-11-27T12:00:00Z', checkpoint: 'Pesu', grade: 3, supervisor: 'Test' };
    let response = await post({ ...base, auto_default: true });
    assert.equal(response.status, 200);
    assert.equal((await response.json()).hygieneUpdated, false);
    let sheetCalls = calls.filter((call) => call.url.includes('sheets.googleapis.com'));
    assert.equal(sheetCalls.length, 1);
    let row = JSON.parse(sheetCalls[0].options.body).values[0];
    assert.match(String(row[3]), /kontrollimata/);
    assert.equal(row[5], 'Test');
    calls.length = 0;
    response = await post({ ...base, seq: 2, auto_default: false });
    assert.equal((await response.json()).hygieneUpdated, true);
    sheetCalls = calls.filter((call) => call.url.includes('sheets.googleapis.com'));
    assert.equal(sheetCalls.length, 3);
    row = JSON.parse(sheetCalls[0].options.body).values[0];
    assert.equal(row[3], 3);
    assert.equal(JSON.parse(sheetCalls[2].options.body).values[0][0], 2);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
