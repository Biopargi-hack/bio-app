const $ = (id) => document.getElementById(id);

const CHECKPOINTS = [
  'Wash', 'Filler head', 'Valve', 'Drain', 'Door',
  'Hand wash sink', 'Crate washer', 'Syrup room wall'
];
const METHODS = ['Visual', 'ATP swab', 'Temperature', 'CIP cycle', 'Declared'];

const TAGS_KEY = 'toend-tags';
const TAG_DEFAULTS = ['Täitepea', 'Klapp', 'Drenaaž', 'Uks', 'Kätepesu'];

const WORDS = {
  en: {
    subtitle: 'Proof for the production line',
    intro_kicker: 'Live demo, records stay on this device',
    hero_note: 'Tap the card. Say what you did. No photo needed. The record writes itself.',
    intro_title: 'Hygiene checks documented in two seconds.',
    intro_body: 'A. Le Coq hygiene checks still end in a paper form. A waterproof NFC card on each place opens the check on the phone. Tap, say what you did, and the record writes itself. When no photo is possible, a fixed default assessment keeps the data complete.',
    beat1: 'Tap the card',
    beat2: 'Clean button, done in 2 seconds',
    beat3: 'Fault button and a fault from the list',
    beat4: 'No photo? Use the fixed default',
    beat5: 'Audit the traceable record later',
    capture_title: 'Check capture',
    untagged: 'Untagged asset',
    no_tag: 'No tag read yet',
    scan: 'Tap NFC tag',
    write_tag: 'Write tag',
    asset: 'Asset',
    checkpoint: 'Checkpoint',
    method: 'Method',
    voice_lang: 'Voice language',
    verdict: 'Verdict',
    clean: 'Clean',
    not_clean: 'Not clean',
    cannot_sign: 'Cannot sign',
    speak: 'Hold to speak',
    what_happened: 'What happened',
    photo: 'Photo evidence',
    photo_hint: 'A photo only counts as evidence if the app can read it.',
    instrument: 'Instrument reading',
    tier: 'Evidence tier',
    reason: 'Reason when there is no hard evidence',
    supervisor: 'Supervisor signature',
    save: 'Append record',
    ledger_title: 'Traceable dataset',
    chain_empty: 'No records yet. The first one starts the chain.',
    filter: 'Filter by asset or checkpoint',
    export: 'Export JSONL',
    tamper: 'Show tamper break',
    sample_title: 'Sample CIP month',
    sample_label: 'Sample data, synthetic, not A. Le Coq',
    cip_note: 'Cycles below the 72 °C hold are short; one record cannot be signed. Sample data, synthetic.',
    paper: 'Print the paper form',
    quick_title: 'Document the check',
    quick_prompt: 'Everything is clean and in order',
    confirm: 'PROVE CLEAN',
    default_cta: 'No photo? Use fixed default',
    default_reason: 'Fixed default, machine closed, no photo possible',
    default_done: 'Default assessment',
    fault: 'Problem',
    fault_type: 'What is wrong',
    fault_foam: 'foam on the floor',
    fault_seal: 'residue on the seal',
    fault_floor: 'dirt on the floor',
    fault_nophoto: 'photo not possible',
    fault_save: 'Save fault',
    quick_reason: 'Declared clean at the tagged place',
    quick_fault_reason: 'Fault chosen from the NFC quick list',
    quick_done: 'Quick record',
    record_added: 'Record',
    record_one: 'record',
    record_many: 'records',
    chain_intact: 'chain intact, append only.',
    chain_break_prev: 'Break at record',
    chain_prev_detail: 'previous hash does not match.',
    chain_break_hash: 'fields no longer match the stored hash.',
    tamper_demo: 'Demo: record N was edited in a copy. The chain breaks at N. Stored records are untouched.',
    nfc_unsupported: 'This browser cannot read NFC. Type the asset name or open a QR link with ?asset=...',
    nfc_armed: 'NFC reader armed. Tap a sticker.',
    nfc_tap_again: 'Reader armed. Tap a sticker.',
    nfc_tag_read: 'Tag read',
    nfc_tagged_asset: 'tagged asset',
    nfc_tag: 'NFC card',
    nfc_permission: 'NFC needs permission and HTTPS',
    nfc_write_no_reader: 'Write needs a working NFC reader first.',
    nfc_write_no_asset: 'Type the asset name before writing the tag.',
    nfc_write_done: 'Wrote to the tag.',
    nfc_write_failed: 'Tag write failed',
    q_unsigned: 'Unsigned clean checks',
    q_tierc: 'Tier C without signature',
    q_today: 'Everything today',
    q_defaults: 'Fixed defaults',
    empty_records: 'Nothing here yet. Tap a tag and append a check.',
    answer_note: 'matching records. Answered in',
    ms_from_device: 'ms from this device.',
    tag_kit_title: 'Write 5 cards',
    tag_kit_hint: 'Each card gets its own name and card ID. The ID opens this place on the phone. It is not a cryptographic signature. Real signing needs NTAG424.',
    tag_slot: 'Card',
    tag_sign: 'Card ID',
    tag_write: 'Write tag',
    tag_written: 'Wrote tag',
    qr_link: 'QR link',
    tag_read_sign: 'Tag read',
    footer: 'A. Le Coq challenge 3 at Hack the Future of Food 2026. Tap to prove.',
  },
  et: {
    subtitle: 'Tõend tootmisliinile',
    intro_kicker: 'Otse demo, kirjed jäävad seadmesse',
    hero_note: 'Puuduta kaarti. Ütle, mis tegid. Pilti pole vaja. Kirje kirjutab end ise.',
    intro_title: 'Hügieenikontroll dokumenteeritakse kahe sekundiga.',
    intro_body: 'A. Le Coq hügieenikontroll lõppeb praegu pabervormiga. Iga kontrollitava koha NFC kaart avab kontrolli telefonis. Puuduta, ütle, mis tegid, ja kirje kirjutab end ise. Kui pilti ei saa, hoiab fikseeritud hinnang andmed tervena.',
    beat1: 'Puuduta kaarti',
    beat2: 'Puhas nupp, valmis 2 sekundiga',
    beat3: 'Probleeminupp ja viga listist',
    beat4: 'Pilti ei saa? Kasuta fikseeritud hinnangut',
    beat5: 'Kontrolli jälgitavat kirjet hiljem',
    capture_title: 'Kontrolli salvestamine',
    untagged: 'Märgistamata koht',
    no_tag: 'Silti veel loetud pole',
    scan: 'Puuduta NFC silti',
    write_tag: 'Kirjuta silt',
    asset: 'Koht',
    checkpoint: 'Kontrollpunkt',
    method: 'Meetod',
    voice_lang: 'Hääle keel',
    verdict: 'Otsus',
    clean: 'Puhas',
    not_clean: 'Ei ole puhas',
    cannot_sign: 'Ei saa allkirjastada',
    speak: 'Vajuta ja räägi',
    what_happened: 'Mis juhtus',
    photo: 'Foto tõend',
    photo_hint: 'Foto loeb tõendina ainult siis, kui rakendus suudab selle lugeda.',
    instrument: 'Mõõteriista näit',
    tier: 'Tõendi tase',
    reason: 'Põhjus, kui kõva tõend puudub',
    supervisor: 'Vastutaja allkiri',
    save: 'Lisa kirje',
    ledger_title: 'Jälgitav andmestik',
    chain_empty: 'Kirjeid veel pole. Esimene käivitab ahela.',
    filter: 'Otsi koha või kontrollpunkti järgi',
    export: 'Ekspordi JSONL',
    tamper: 'Näita ahela murdu',
    sample_title: 'Näidis CIP kuu',
    sample_label: 'Näidisandmed, sünteetilised, mitte A. Le Coq',
    cip_note: '72 °C kuumutusest lühemale jäävad tsüklid on lühikesed; ühte kirjet ei saa allkirjastada. Näidisandmed, sünteetilised.',
    paper: 'Prindi pabervorm',
    quick_title: 'Dokumenteeri kontroll',
    quick_prompt: 'Kõik on puhas ja korras',
    confirm: 'KINNITA PUHAS',
    default_cta: 'Pilti ei saa? Kasuta fikseeritud hinnangut',
    default_reason: 'Fikseeritud hinnang, masin suletud, pilti ei saa',
    default_done: 'Fikseeritud hinnang',
    fault: 'Probleem',
    fault_type: 'Mis viga on',
    fault_foam: 'vaht maas',
    fault_seal: 'jäägid tihendil',
    fault_floor: 'mustus põrandal',
    fault_nophoto: 'foto ei ole võimalik',
    fault_save: 'Salvesta viga',
    quick_reason: 'Märgistatud kohas kinnitatud puhas',
    quick_fault_reason: 'Viga valitud NFC kiirlistist',
    quick_done: 'Kiirkirje',
    record_added: 'Kirje',
    record_one: 'kirje',
    record_many: 'kirjet',
    chain_intact: 'ahel terve, ainult lisamine.',
    chain_break_prev: 'Murdekoht kirjes',
    chain_break_hash: 'väljad ei ühti salvestatud räsiga.',
    chain_prev_detail: 'eelmine räs ei ühti.',
    tamper_demo: 'Demo: kirje N muudeti koopias. Ahel murdub kohas N. Salvestatud kirjed on puutumata.',
    nfc_unsupported: 'See brauser ei saa NFC silti lugeda. Kirjuta masina nimi või ava QR link parametriga ?asset=...',
    nfc_armed: 'NFC lugeja on valmis. Puuduta kleepsu.',
    nfc_tap_again: 'Lugeja on valmis. Puuduta kleepsu.',
    nfc_tag_read: 'Silt loetud',
    nfc_tagged_asset: 'märgistatud koht',
    nfc_tag: 'NFC kaart',
    nfc_permission: 'NFC vajab luba ja HTTPS ühendust',
    nfc_write_no_reader: 'Silti saab kirjutada ainult töötava NFC lugejaga.',
    nfc_write_no_asset: 'Kirjuta enne sildile kirjutamist masina nimi.',
    nfc_write_done: 'Kirjutasime sildile.',
    nfc_write_failed: 'Sildi kirjutamine ebaõnnestus',
    q_unsigned: 'Allkirjastamata puhtad kontrollid',
    q_tierc: 'C tase ilma allkirjata',
    q_today: 'Kõik tänased',
    q_defaults: 'Fikseeritud hinnangud',
    empty_records: 'Kirjeid veel pole. Puuduta kleepsu ja lisa kontroll.',
    answer_note: 'vastavat kirjet. Vastus leiti',
    ms_from_device: 'ms jooksul seadmest.',
    tag_kit_title: 'Kirjuta 5 kaarti',
    tag_kit_hint: 'Iga kaart saab oma nime ja kaardi ID. ID avab telefoni otse selle koha vaatele. See ei ole krüptograafiline allkiri. Päris allkirjastamine vajab NTAG424.',
    tag_slot: 'Kaart',
    tag_sign: 'Kaardi ID',
    tag_write: 'Kirjuta silt',
    tag_written: 'Kirjutasime sildi',
    qr_link: 'QR link',
    tag_read_sign: 'Silt loetud',
    footer: 'A. Le Coqi väljakutse 3 hackathonil Hack the Future of Food 2026. Tap to prove.',
  }
};

let lang = 'et';
let ndefReader = null;
let recognition = null;
let photoState = null;
let demoBreak = null;
let currentTag = '';
let currentSource = 'typed';

function applyLanguage() {
  document.documentElement.lang = lang === 'et' ? 'et' : 'en';
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const word = WORDS[lang][el.dataset.i18n];
    if (word) el.textContent = word;
  }
  $('langToggle').textContent = lang === 'en' ? 'ET' : 'EN';
  $('langToggle').setAttribute('aria-label', lang === 'en' ? 'Switch to Estonian' : 'Switch to English');
  if ($('assetSource')) $('assetSource').textContent = sourceLabel();
}

function note(id, text, isError = false) {
  const el = $(id);
  el.textContent = text;
  el.classList.toggle('error', isError);
}

function populateSelects() {
  const cp = $('checkpoint');
  for (const name of CHECKPOINTS) cp.add(new Option(name, name));
  cp.value = CHECKPOINTS[0];
  const method = $('method');
  for (const name of METHODS) method.add(new Option(name, name));
  method.value = METHODS[0];
}

function deviceId() {
  let id = localStorage.getItem('toend-device');
  if (!id) {
    id = 'dev-' + Math.random().toString(36).slice(2, 10);
    localStorage.setItem('toend-device', id);
  }
  return id;
}

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('toend', 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('records')) db.createObjectStore('records', { keyPath: 'seq' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function allRecords() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const req = db.transaction('records', 'readonly').objectStore('records').getAll();
    req.onsuccess = () => resolve(req.result.sort((a, b) => a.seq - b.seq));
    req.onerror = () => reject(req.error);
  });
}

async function putRecord(record) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('records', 'readwrite');
    tx.objectStore('records').put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    return Object.keys(value).sort().reduce((out, key) => {
      out[key] = stable(value[key]);
      return out;
    }, {});
  }
  return value;
}


function checkChain(records) {
  if (!records.length) return { valid: true, breakSeq: null, message: WORDS[lang].chain_empty };
  for (let i = 0; i < records.length; i += 1) {
    const record = records[i];
    const { hash, ...body } = record;
    const expectedPrev = i === 0 ? '0'.repeat(64) : records[i - 1].hash;
    if (record.prev_hash !== expectedPrev) {
      return { valid: false, breakSeq: record.seq, message: `${WORDS[lang].chain_break_prev} ${record.seq}: ${WORDS[lang].chain_prev_detail}` };
    }
    const recomputed = sha256Local(body);
    if (recomputed !== hash) {
      return { valid: false, breakSeq: record.seq, message: `${WORDS[lang].chain_break_prev} ${record.seq}: ${WORDS[lang].chain_break_hash}` };
    }
  }
  return { valid: true, breakSeq: null, message: `${records.length} ${records.length === 1 ? WORDS[lang].record_one : WORDS[lang].record_many}, ${WORDS[lang].chain_intact}` };
}

// Hash check must be synchronous for the demo view, so use a small non-crypto
// digest that still changes completely when any field changes.
function sha256Local(value) {
  const text = JSON.stringify(stable(value));
  let h1 = 0x811c9dc5;
  let h2 = 0x01000193;
  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ code, 16777619) >>> 0;
    h2 = Math.imul(h2 + code + i, 2246822519) >>> 0;
  }
  return h1.toString(16).padStart(8, '0') + h2.toString(16).padStart(8, '0');
}

async function appendRecord(payload) {
  const records = await allRecords();
  const last = records.at(-1);
  const seq = last ? last.seq + 1 : 1;
  const body = {
    seq,
    local_seq: seq,
    device_id: deviceId(),
    prev_hash: last ? last.hash : '0'.repeat(64),
    created_at: new Date().toISOString(),
    ...payload
  };
  const record = { ...body, hash: sha256Local(body) };
  await putRecord(record);
  return record;
}

async function bitmapFor(file) {
  if ('createImageBitmap' in window) return createImageBitmap(file);
  const url = URL.createObjectURL(file);
  const img = new Image();
  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
    img.src = url;
  });
  return img;
}

function imageHash(canvas) {
  const ctx = canvas.getContext('2d');
  const small = document.createElement('canvas');
  small.width = 9;
  small.height = 8;
  small.getContext('2d').drawImage(canvas, 0, 0, 9, 8);
  const pixels = small.getContext('2d').getImageData(0, 0, 9, 8).data;
  const lum = [];
  for (let i = 0; i < pixels.length; i += 4) lum.push(0.299 * pixels[i] + 0.587 * pixels[i + 1] + 0.114 * pixels[i + 2]);
  let bits = '';
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) bits += lum[y * 9 + x] > lum[y * 9 + x + 1] ? '1' : '0';
  }
  return parseInt(bits, 2).toString(16).padStart(16, '0');
}

async function analysePhoto(file) {
  try {
    const bitmap = await bitmapFor(file);
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bitmap, 0, 0, 64, 64);
    const data = ctx.getImageData(0, 0, 64, 64).data;
    const lum = [];
    for (let i = 0; i < data.length; i += 4) lum.push(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
    const mean = lum.reduce((a, b) => a + b, 0) / lum.length;
    const variance = lum.reduce((a, b) => a + (b - mean) ** 2, 0) / lum.length;
    let edges = 0;
    for (let y = 0; y < 64; y += 1) {
      for (let x = 0; x < 63; x += 1) edges += Math.abs(lum[y * 64 + x] - lum[y * 64 + x + 1]);
    }
    edges /= 64 * 63;
    const usable = variance > 85 && edges > 3.5 && mean > 28 && mean < 232;
    const thumb = document.createElement('canvas');
    thumb.width = 72;
    thumb.height = 72;
    thumb.getContext('2d').drawImage(canvas, 0, 0, 72, 72);
    return {
      usable,
      hash: imageHash(canvas),
      thumb: thumb.toDataURL('image/png'),
      reason: usable ? 'Usable photo' : `Unusable: variance ${variance.toFixed(0)}, edge ${edges.toFixed(1)}, light ${mean.toFixed(0)}`
    };
  } catch (error) {
    return { usable: false, hash: '', thumb: '', reason: `Could not read photo: ${error.message}` };
  }
}

function tierFor() {
  const verdict = $('verdict').value;
  if (verdict === 'cannot sign') return 'C';
  const method = $('method').value;
  const instrument = $('instrument').value.trim();
  if (instrument && ['ATP swab', 'Temperature', 'CIP cycle'].includes(method)) return 'A';
  if (photoState?.usable && method === 'Visual') return 'B';
  return 'C';
}

function updateTier() {
  const tier = tierFor();
  const out = $('tier');
  out.textContent = tier;
  out.className = `tier ${tier.toLowerCase()}`;
  if (photoState) {
    note('photoNote', photoState.reason, !photoState.usable);
  }
}

function reusedPhoto(hash) {
  if (!hash) return null;
  const cutoff = Date.now() - 30 * 24 * 3600 * 1000;
  return allRecordsCache.find((r) => r.photo_hash === hash && Date.parse(r.created_at) > cutoff) || null;
}

let allRecordsCache = [];

async function saveRecord() {
  const asset = $('asset').value.trim();
  const transcript = $('transcript').value.trim();
  if (!asset || !transcript) {
    note('saveNote', 'Asset and what happened are required.', true);
    return;
  }

  const tier = tierFor();
  const verdict = $('verdict').value;
  const reason = $('reason').value.trim();
  const supervisor = $('supervisor').value.trim();
  const instrument = $('instrument').value.trim();

  if (verdict === 'cannot sign' && supervisor) {
    note('saveNote', 'Cannot sign: remove the supervisor signature.', true);
    return;
  }
  if (tier === 'C' && !reason) {
    note('saveNote', 'Tier C needs a reason. Say why there is no hard evidence.', true);
    return;
  }
  if (tier === 'C' && verdict !== 'cannot sign' && !supervisor) {
    note('saveNote', 'Tier C needs a supervisor signature.', true);
    return;
  }

  const previous = photoState ? reusedPhoto(photoState.hash) : null;
  const effectiveTier = previous ? 'C' : tier;
  const record = await appendRecord({
    asset,
    tag_sig: currentTag,
    source: currentSource,
    checkpoint: $('checkpoint').value,
    method: $('method').value,
    verdict,
    transcript,
    tier: effectiveTier,
    reason,
    supervisor: verdict === 'cannot sign' ? '' : supervisor,
    instrument,
    photo_hash: photoState?.hash || '',
    photo_thumb: photoState?.thumb || '',
    photo_usable: photoState?.usable || false,
    photo_reuse_of: previous?.seq || null,
    language: $('voiceLang').value
  });

  await finishRecord(record, 'saveNote', `Record ${record.seq} appended. Hash ${record.hash.slice(0, 12)}.`);
}

async function finishRecord(record, noteId, message) {
  demoBreak = null;
  note(noteId, message || `${WORDS[lang].record_added} ${record.seq}.`);
  $('transcript').value = '';
  $('reason').value = '';
  $('supervisor').value = '';
  $('instrument').value = '';
  $('photo').value = '';
  photoState = null;
  note('photoNote', WORDS[lang].photo_hint);
  updateTier();
  await refreshRecords();
  $('assetStamp').classList.add('flash');
  setTimeout(() => $('assetStamp').classList.remove('flash'), 350);
}

async function quickRecord(kind) {
  const asset = $('asset').value.trim();
  if (!asset) {
    note('quickNote', lang === 'et' ? 'Puuduta kleepsu või kirjuta masina nimi.' : 'Tap the sticker or type the machine name.', true);
    return;
  }
  const isDefault = kind === 'default';
  const isClean = kind === 'clean' || isDefault;
  const previous = photoState ? reusedPhoto(photoState.hash) : null;
  const tier = isDefault ? 'C' : !isClean && photoState?.usable && !previous ? 'B' : 'C';
  const transcript = isClean ? WORDS[lang].quick_prompt : $('faultType').value;
  const record = await appendRecord({
    asset,
    tag_sig: currentTag,
    source: currentSource,
    checkpoint: $('checkpoint').value,
    method: isClean ? 'Declared' : 'Visual',
    verdict: isClean ? 'clean' : 'not clean',
    transcript,
    tier,
    reason: isDefault ? WORDS[lang].default_reason : isClean ? WORDS[lang].quick_reason : WORDS[lang].quick_fault_reason,
    supervisor: '',
    instrument: '',
    photo_hash: photoState?.hash || '',
    photo_thumb: photoState?.thumb || '',
    photo_usable: photoState?.usable || false,
    photo_reuse_of: previous?.seq || null,
    language: $('voiceLang').value,
    default_assessment: isDefault,
    quick: true
  });
  $('faultField').hidden = true;
  $('faultSaveBtn').hidden = true;
  const done = isDefault ? WORDS[lang].default_done : WORDS[lang].quick_done;
  await finishRecord(record, 'quickNote', `${done} ${record.seq}.`);
}

function renderRecords(records) {
  const host = $('records');
  const query = $('filter').value.trim().toLowerCase();
  const shown = records.filter((r) => !query || `${r.asset} ${r.checkpoint} ${r.transcript}`.toLowerCase().includes(query));
  if (!shown.length) {
    host.innerHTML = `<div class="empty-row">${WORDS[lang].empty_records}</div>`;
    return;
  }
  host.innerHTML = shown.map((r) => {
    const broken = demoBreak !== null && r.seq >= demoBreak;
    const thumb = r.photo_thumb ? `<img src="${r.photo_thumb}" width="30" height="30" alt="evidence thumbnail">` : '';
    const reuse = r.photo_reuse_of ? `<br>reused photo from record ${r.photo_reuse_of}` : '';
    const origin = r.source || 'typed';
    const card = r.tag_sig ? ` · ${origin} ${escapeHtml(r.tag_sig)}` : '';
    const defaultMark = r.default_assessment ? ` · <em class="default-flag">${WORDS[lang].default_done}</em>` : '';
    const reason = r.reason ? ` · ${escapeHtml(r.reason)}` : '';
    return `<div class="record-row">
      <span class="seq">#${r.seq}</span>
      <span class="main"><strong>${escapeHtml(r.asset)} · ${escapeHtml(r.checkpoint)}</strong>
      <small>${escapeHtml(r.verdict)} · tier ${r.tier}${card}${defaultMark}${reason} · ${escapeHtml(new Date(r.created_at).toLocaleString())} ${thumb}${reuse}</small></span>
      <span class="hash ${broken ? 'broken' : ''}">${r.hash.slice(0, 8)}<br>${broken ? 'BROKEN' : 'ok'}</span>
    </div>`;
  }).join('');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

async function refreshRecords() {
  allRecordsCache = await allRecords();
  const status = checkChain(allRecordsCache);
  const box = $('chainStatus');
  box.textContent = status.message;
  box.classList.toggle('broken', !status.valid);
  $('chainBadge').textContent = `${allRecordsCache.length} ${allRecordsCache.length === 1 ? 'record' : 'records'}`;
  $('chainBadge').className = `badge ${status.valid ? 'good' : 'bad'}`;
  $('chainCount').textContent = `${allRecordsCache.length} ${allRecordsCache.length === 1 ? 'record' : 'records'}`;
  $('queueCount').textContent = `${allRecordsCache.length} queued`;
  renderRecords(allRecordsCache);
}

function runQuestion(kind) {
  const started = performance.now();
  const today = new Date().toISOString().slice(0, 10);
  let found = [];
  if (kind === 'unsigned') found = allRecordsCache.filter((r) => r.verdict === 'clean' && r.tier === 'C' && !r.supervisor);
  if (kind === 'tierc') found = allRecordsCache.filter((r) => r.tier === 'C' && !r.supervisor);
  if (kind === 'today') found = allRecordsCache.filter((r) => r.created_at.slice(0, 10) === today);
  if (kind === 'defaults') found = allRecordsCache.filter((r) => r.default_assessment);
  const elapsed = (performance.now() - started).toFixed(1);
  note('answerNote', `${found.length} ${WORDS[lang].answer_note} ${elapsed} ${WORDS[lang].ms_from_device}`);
  $('filter').value = '';
  renderRecords(found);
}

function exportJsonl() {
  const body = allRecordsCache.map((r) => JSON.stringify(r)).join('\n') + '\n';
  const url = URL.createObjectURL(new Blob([body], { type: 'application/x-ndjson' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'toend-records.jsonl';
  link.click();
  URL.revokeObjectURL(url);
}

function showTamper() {
  if (!allRecordsCache.length) {
    note('answerNote', 'Append one record first, then break it.', true);
    return;
  }
  demoBreak = allRecordsCache[0].seq;
  const box = $('chainStatus');
  box.textContent = WORDS[lang].tamper_demo.replaceAll('N', demoBreak);
  box.classList.add('broken');
  renderRecords(allRecordsCache);
}

async function initNfc() {
  if (!('NDEFReader' in window)) {
    note('nfcNote', WORDS[lang].nfc_unsupported);
    return;
  }
  const reader = new NDEFReader();
  try {
    await reader.scan();
    reader.onreading = (event) => {
      const records = event.message.records;
      const urlRecord = records.find((r) => r.recordType === 'url' || r.recordType === 'absolute-url');
      const textRecord = records.find((r) => r.recordType === 'text');
      let asset = textRecord ? new TextDecoder().decode(textRecord.data) : WORDS[lang].nfc_tagged_asset;
      let signature = '';
      if (urlRecord) {
        const raw = typeof urlRecord.data === 'string' ? urlRecord.data : new TextDecoder().decode(urlRecord.data);
        try {
          const url = new URL(raw);
          asset = url.searchParams.get('asset') || asset;
          signature = url.searchParams.get('tag') || '';
        } catch {
          asset = raw;
        }
      }
      setAsset(asset, signature, 'nfc');
      note('nfcNote', `${WORDS[lang].tag_read_sign}: ${asset}${signature ? ', ' + signature : ''}`);
    };
    ndefReader = reader;
    note('nfcNote', WORDS[lang].nfc_armed);
  } catch (error) {
    note('nfcNote', `${WORDS[lang].nfc_permission}: ${error.message}`, true);
  }
}

async function writeTag() {
  if (!ndefReader) {
    note('nfcNote', WORDS[lang].nfc_write_no_reader, true);
    return;
  }
  const name = $('asset').value.trim();
  if (!name) {
    note('nfcNote', WORDS[lang].nfc_write_no_asset, true);
    return;
  }
  const url = `https://taptoprove.ee/?asset=${encodeURIComponent(name)}&tag=MANUAL&via=nfc`;
  try {
    await ndefReader.write({ records: [
      { recordType: 'url', data: url },
      { recordType: 'text', data: name }
    ] });
    note('nfcNote', `${WORDS[lang].nfc_write_done} ${name}`);
  } catch (error) {
    note('nfcNote', `${WORDS[lang].nfc_write_failed}: ${error.message}`, true);
  }
}

function sourceLabel() {
  if (currentSource === 'nfc') return currentTag ? `${WORDS[lang].nfc_tag} ${currentTag}` : WORDS[lang].nfc_tag;
  if (currentSource === 'link') return currentTag ? `${WORDS[lang].qr_link} ${currentTag}` : WORDS[lang].qr_link;
  return WORDS[lang].no_tag;
}

function setAsset(name, tagId = '', origin = 'typed') {
  currentTag = tagId;
  currentSource = origin;
  $('asset').value = name;
  $('assetStampName').textContent = name;
  $('assetSource').textContent = sourceLabel();
}

let tags = [];

function loadTags() {
  try {
    const saved = JSON.parse(localStorage.getItem(TAGS_KEY) || '[]');
    if (Array.isArray(saved) && saved.length === 5) return saved;
  } catch {
    // A broken saved list is replaced by fresh signatures.
  }
  return TAG_DEFAULTS.map((name, index) => ({
    name,
    sig: `T${index + 1} ${Math.random().toString(16).slice(2, 6).toUpperCase()}`
  }));
}

function saveTags() {
  localStorage.setItem(TAGS_KEY, JSON.stringify(tags));
}

function tagUrl(tag) {
  return `https://taptoprove.ee/?asset=${encodeURIComponent(tag.name)}&tag=${encodeURIComponent(tag.sig)}&via=nfc`;
}

function renderTagSlots() {
  const host = $('tagSlots');
  if (!host) return;
  host.innerHTML = tags.map((tag, index) => `
    <div class="tag-slot">
      <span class="tag-index" aria-hidden="true">${index + 1}</span>
      <label class="field">
        <span>${WORDS[lang].tag_slot} ${index + 1}</span>
        <input data-tag-name="${index}" value="${escapeHtml(tag.name)}" spellcheck="false">
      </label>
      <span class="tag-sign"><small>${WORDS[lang].tag_sign}</small>${escapeHtml(tag.sig)}</span>
      <button class="ghost small" type="button" data-tag-write="${index}">${WORDS[lang].tag_write}</button>
    </div>`).join('');
  for (const input of host.querySelectorAll('[data-tag-name]')) {
    input.addEventListener('change', () => {
      const index = Number(input.dataset.tagName);
      tags[index].name = input.value.trim() || TAG_DEFAULTS[index];
      input.value = tags[index].name;
      saveTags();
    });
  }
  for (const button of host.querySelectorAll('[data-tag-write]')) {
    button.addEventListener('click', () => writeTagSlot(Number(button.dataset.tagWrite)));
  }
}

async function writeTagSlot(index) {
  if (!ndefReader) await initNfc();
  if (!ndefReader) {
    note('nfcNote', WORDS[lang].nfc_write_no_reader, true);
    return;
  }
  const tag = tags[index];
  tag.name = tag.name.trim() || TAG_DEFAULTS[index];
  saveTags();
  try {
    await ndefReader.write({ records: [
      { recordType: 'url', data: tagUrl(tag) },
      { recordType: 'text', data: tag.name }
    ] });
    note('nfcNote', `${WORDS[lang].tag_written} ${index + 1}: ${tag.name}, ${tag.sig}`);
  } catch (error) {
    note('nfcNote', `${WORDS[lang].nfc_write_failed}: ${error.message}`, true);
  }
}

function toggleVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    note('saveNote', 'This browser has no speech recognition. Type the sentence instead.', true);
    return;
  }
  if (recognition) {
    recognition.stop();
    recognition = null;
    $('voiceBtn').classList.remove('listening');
    $('voiceBtn').textContent = WORDS[lang].speak;
    return;
  }
  recognition = new SpeechRecognition();
  recognition.lang = $('voiceLang').value;
  recognition.interimResults = false;
  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    $('transcript').value = ($('transcript').value.trim() + ' ' + text).trim();
  };
  recognition.onerror = (event) => {
    note('saveNote', `Voice stopped: ${event.error}`, true);
    recognition = null;
    $('voiceBtn').classList.remove('listening');
  };
  recognition.onend = () => {
    recognition = null;
    $('voiceBtn').classList.remove('listening');
    $('voiceBtn').textContent = WORDS[lang].speak;
  };
  recognition.start();
  $('voiceBtn').classList.add('listening');
  $('voiceBtn').textContent = 'Listening...';
}

function updateNetwork() {
  const el = $('net');
  el.textContent = navigator.onLine ? 'Online' : 'Offline, queueing locally';
  el.classList.toggle('offline', !navigator.onLine);
}

// No chart: sample CIP shown as text summary only.

let cipRows = [];

async function loadCip() {
  try {
    const response = await fetch('sample_cip.csv');
    const text = await response.text();
    cipRows = text.replace(/\r/g, '').trim().split('\n').slice(1).map((line) => {
      const [day, cycle, peak, hold, conductivity, verdict] = line.split(',');
      return { day: Number(day), cycle: Number(cycle), peak: Number(peak), hold: Number(hold), conductivity: Number(conductivity), verdict };
    });
    const short = cipRows.filter((r) => r.peak < 72).length;
    const clean = cipRows.filter((r) => r.verdict === 'signed clean').length;
    const unsigned = cipRows.filter((r) => r.verdict === 'cannot sign').length;
    $('cipSummary').innerHTML = `<span>${cipRows.length} cycles</span><span class="warn">${short} short of 72 C</span><span>${clean} signed clean</span><span class="warn">${unsigned} cannot sign</span>`;
  } catch (error) {
    $('cipSummary').textContent = 'Sample CSV unavailable.';
  }
}

async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  try {
    await navigator.serviceWorker.register('sw.js');
  } catch (error) {
    console.warn('Service worker unavailable', error);
  }
}

function bind() {
  $('langToggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'et' : 'en';
    applyLanguage();
    renderTagSlots();
    if (recognition) toggleVoice();
    refreshRecords();
  });
  $('scanBtn').addEventListener('click', () => {
    if (!ndefReader) initNfc();
    else note('nfcNote', WORDS[lang].nfc_tap_again);
  });
  $('writeBtn').addEventListener('click', writeTag);
  $('asset').addEventListener('input', () => {
    currentTag = '';
    currentSource = 'typed';
    $('assetSource').textContent = sourceLabel();
  });
  $('cleanBtn').addEventListener('click', () => quickRecord('clean'));
  $('defaultBtn').addEventListener('click', () => quickRecord('default'));
  $('faultBtn').addEventListener('click', () => {
    $('faultField').hidden = false;
    $('faultSaveBtn').hidden = false;
    $('faultType').focus();
  });
  $('faultSaveBtn').addEventListener('click', () => quickRecord('fault'));
  $('voiceBtn').addEventListener('click', toggleVoice);
  $('photo').addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    photoState = await analysePhoto(file);
    updateTier();
  });
  for (const id of ['instrument', 'method', 'verdict']) $(id).addEventListener('change', updateTier);
  $('saveBtn').addEventListener('click', saveRecord);
  $('filter').addEventListener('input', () => renderRecords(allRecordsCache));
  $('exportBtn').addEventListener('click', exportJsonl);
  $('tamperBtn').addEventListener('click', showTamper);
  for (const button of document.querySelectorAll('[data-question]')) {
    button.addEventListener('click', () => runQuestion(button.dataset.question));
  }
  window.addEventListener('online', updateNetwork);
  window.addEventListener('offline', updateNetwork);
}

async function start() {
  tags = loadTags();
  populateSelects();
  applyLanguage();
  renderTagSlots();
  bind();
  updateTier();
  updateNetwork();
  await refreshRecords();
  await loadCip();
  await registerServiceWorker();
  const params = new URLSearchParams(location.search);
  const asset = params.get('asset');
  const tag = params.get('tag');
  const via = params.get('via');
  if (asset) {
    setAsset(asset, tag || '', via === 'nfc' ? 'nfc' : tag ? 'link' : 'typed');
    document.querySelector('.proof-pad')?.scrollIntoView({ block: 'center' });
    $('cleanBtn').focus({ preventScroll: true });
  }
  initNfc();
}

start().catch((error) => note('saveNote', `Startup failed: ${error.message}`, true));
