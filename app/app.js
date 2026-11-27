const $ = (id) => document.getElementById(id);

const CHECKPOINTS = [
  'Wash', 'Filler head', 'Valve', 'Drain', 'Door',
  'Hand wash sink', 'Crate washer', 'Syrup room wall'
];
const METHODS = ['Visual', 'ATP swab', 'Temperature', 'CIP cycle', 'Declared'];


const WORDS = {
  en: {
    subtitle: 'Proof for the production line',
    skip: 'Skip to capture',
    hero_alt: 'Worker taps a waterproof red NFC card on a clean machine; the phone shows a proof card that can only be appended to.',
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
    asset: 'Asset',
    checkpoint: 'Checkpoint',
    method: 'Method',
    voice_lang: 'Speech language',
    verdict: 'Verdict',
    clean: 'Clean',
    not_clean: 'Not clean',
    cannot_sign: 'Cannot sign',
    speak: 'Speak to write',
    record_audio: 'Record voice note',
    record_audio_stop: 'Stop and save voice note',
    audio_hint: 'Use the microphone to speak or record a clip. The clip and text are saved with the record.',
    audio_recording: 'Recording... tap to stop and save',
    audio_saved: 'Voice note saved',
    spoken_saved: 'Spoken text added',
    audio_unsupported: 'This browser cannot record audio.',
    speech_unsupported: 'This browser cannot turn speech into text. Type the note or record a voice clip.',
    speech_lang_unsupported: 'Speech recognition does not support this language here. Try another language or type the note.',
    speech_stopped: 'Voice stopped',
    listening: 'Listening... tap to stop',
    audio_denied: 'Microphone permission was denied.',
    audio_stop_first: 'Stop the voice note before saving.',
    note_label: 'What happened — write or speak',
    note_ph: 'Type here, or press Speak to write. Each recording adds a new line.',
    note_hint: 'Tap ET, RU or EN to speak. The app writes the text in the language it hears.',
    what_happened: 'What happened',
    photo: 'Photo evidence',
    evidence: 'Photo or video evidence',
    photo_hint: 'A photo or video only counts as evidence if the app can read it.',
    media_badge: 'Media',
    audio_badge: 'Voice note',
    instrument: 'Instrument reading',
    tier: 'Evidence tier',
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
    save_failed: 'Save failed:',
    media_pending: 'Wait for the selected media to finish processing.',
    media_missing: 'An attachment is missing from device storage:',
    quick_reason: 'Declared clean at the tagged place',
    quick_fault_reason: 'Fault chosen from the NFC quick list',
    quick_done: 'Quick record',
    grade_prompt: 'Rate this spot',
    grade_note: 'Pick 3 clean, 2 dirty, or 1 serious.',
    grade_reason: 'Grade N recorded from the tagged place',
    grade_done: 'Grade N saved',
    grade_short: 'grade',
    grade3_label: '3 clean',
    grade2_label: '2 dirty',
    grade1_label: '1 serious',
    record_added: 'Record',
    record_one: 'record',
    record_many: 'records',
    chain_intact: 'chain intact, append only.',
    chain_break_prev: 'Break at record',
    chain_prev_detail: 'previous hash does not match.',
    chain_break_hash: 'fields no longer match the stored hash.',
    tamper_demo: 'Demo: record N was edited in a copy. The chain breaks at N. Stored records are untouched.',
    nfc_tag: 'NFC card',
    q_unsigned: 'Unsigned clean checks',
    q_tierc: 'Tier C without signature',
    q_today: 'Everything today',
    q_defaults: 'Fixed defaults',
    q_media: 'Records with media',
    empty_records: 'Nothing here yet. Tap a tag and append a check.',
    answer_note: 'matching records. Answered in',
    ms_from_device: 'ms from this device.',
    qr_link: 'QR link',
    showcase: 'See the example and NFC link',
    footer: 'A. Le Coq challenge 3 at Hack the Future of Food 2026. Tap to prove.',
  },
  et: {
    subtitle: 'Tõend tootmisliinile',
    skip: 'Liigu salvestamise juurde',
    hero_alt: 'Töötaja puudutab puhastatud masinal vesikindlat punast NFC-kaarti; telefonis tekib muudatusi näitav, ainult lisatav puhas tõendikaart.',
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
    asset: 'Koht',
    checkpoint: 'Kontrollpunkt',
    method: 'Meetod',
    voice_lang: 'Kõne keel',
    verdict: 'Otsus',
    clean: 'Puhas',
    not_clean: 'Ei ole puhas',
    cannot_sign: 'Ei saa allkirjastada',
    speak: 'Räägi ja kirjuta',
    record_audio: 'Salvesta häälmärkus',
    record_audio_stop: 'Peata ja salvesta häälmärkus',
    audio_hint: 'Mikrofoniga saad rääkida või klippi salvestada. Klipp ja tekst salvestatakse kirjega.',
    audio_recording: 'Salvestan… vajuta peatamiseks ja salvestamiseks',
    audio_saved: 'Häälmärkus salvestatud',
    spoken_saved: 'Räägitud tekst lisatud',
    audio_unsupported: 'See brauser ei saa heli salvestada.',
    speech_unsupported: 'See brauser ei oska kõnet tekstiks muuta. Kirjuta tekst või salvesta häälmärkus.',
    speech_lang_unsupported: 'Kõnetuvastus ei toeta siin seda keelt. Proovi teist keelt või kirjuta tekst.',
    speech_stopped: 'Kõnetuvastus peatus',
    listening: 'Kuulan… vajuta peatamiseks',
    audio_denied: 'Mikrofoni luba keelati.',
    audio_stop_first: 'Peata häälmärkus enne salvestamist.',
    note_label: 'Mis juhtus — kirjuta või räägi',
    note_ph: 'Kirjuta siia või vajuta „Räägi ja kirjuta“. Iga salvestus lisab uue rea.',
    note_hint: 'Vajuta ET, RU või EN ja räägi. Rakendus kirjutab teksti selles keeles, mida ta kuuleb.',
    what_happened: 'Mis juhtus',
    photo: 'Foto tõend',
    evidence: 'Foto või video tõend',
    photo_hint: 'Foto või video loeb tõendina ainult siis, kui rakendus suudab selle lugeda.',
    media_badge: 'Meedia',
    audio_badge: 'Häälmärkus',
    instrument: 'Mõõteriista näit',
    tier: 'Tõendi tase',
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
    save_failed: 'Salvestamine ebaõnnestus:',
    media_pending: 'Oota, kuni valitud meedia töötlemine lõpeb.',
    media_missing: 'Manus puudub seadme salvestusest:',
    quick_reason: 'Märgistatud kohas kinnitatud puhas',
    quick_fault_reason: 'Viga valitud NFC kiirlistist',
    quick_done: 'Kiirkirje',
    grade_prompt: 'Hinna see koht',
    grade_note: 'Vali 3 korras, 2 must või 1 tõsine.',
    grade_reason: 'Hinne N märgitud kleepsu kohas',
    grade_done: 'Hinne N salvestatud',
    grade_short: 'hinne',
    grade3_label: '3 korras',
    grade2_label: '2 must',
    grade1_label: '1 tõsine',
    record_added: 'Kirje',
    record_one: 'kirje',
    record_many: 'kirjet',
    chain_intact: 'ahel terve, ainult lisamine.',
    chain_break_prev: 'Murdekoht kirjes',
    chain_break_hash: 'väljad ei ühti salvestatud räsiga.',
    chain_prev_detail: 'eelmine räs ei ühti.',
    tamper_demo: 'Demo: kirje N muudeti koopias. Ahel murdub kohas N. Salvestatud kirjed on puutumata.',
    nfc_tag: 'NFC kaart',
    q_unsigned: 'Allkirjastamata puhtad kontrollid',
    q_tierc: 'C tase ilma allkirjata',
    q_today: 'Kõik tänased',
    q_defaults: 'Fikseeritud hinnangud',
    q_media: 'Kirjed meediaga',
    empty_records: 'Kirjeid veel pole. Puuduta kleepsu ja lisa kontroll.',
    answer_note: 'vastavat kirjet. Vastus leiti',
    ms_from_device: 'ms jooksul seadmest.',
    qr_link: 'QR link',
    showcase: 'Vaata näidet ja NFC linki',
    footer: 'A. Le Coqi väljakutse 3 hackathonil Hack the Future of Food 2026. Tap to prove.',
  }
};

let lang = 'et';
let speechLang = 'et-EE';
let spokenLangs = new Set();
let recognition = null;
let audioRecognition = null;
let photoState = null;
let audioRecorder = null;
let audioState = null;
let mediaUrls = new Set();
let demoBreak = null;
let currentTag = '';
let currentSource = 'typed';
let dbPromise = null;
let saving = false;
let audioToken = 0;
let photoToken = 0;
let photoPending = false;
let photoFailed = false;
let audioStarting = false;

let gradeMode = false;
function applyLanguage() {
  document.documentElement.lang = lang === 'et' ? 'et' : 'en';
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const word = WORDS[lang][el.dataset.i18n];
    if (word && !(el.id === 'assetStampName' && $('asset').value.trim())) el.textContent = word;
  }
  for (const el of document.querySelectorAll('[data-i18n-placeholder]')) {
    const word = WORDS[lang][el.dataset.i18nPlaceholder];
    if (word) el.placeholder = word;
  }
  for (const el of document.querySelectorAll('[data-i18n-alt]')) {
    const word = WORDS[lang][el.dataset.i18nAlt];
    if (word) el.alt = word;
  }
  if (audioRecorder) $('audioBtn').textContent = t('record_audio_stop');
  $('langToggle').textContent = lang === 'en' ? 'ET' : 'EN';
  $('langToggle').setAttribute('aria-label', lang === 'en' ? 'Switch to Estonian' : 'Switch to English');
  if ($('assetSource')) $('assetSource').textContent = sourceLabel();
  if (gradeMode && $('quickPrompt')) $('quickPrompt').textContent = WORDS[lang].grade_prompt;
}

function note(id, text, isError = false) {
  const el = $(id);
  el.textContent = text;
  el.classList.toggle('error', isError);
}

function t(key) {
  return WORDS[lang][key] || key;
}

function setSpeechLang(code) {
  speechLang = code;
  document.querySelectorAll('.lang-btn').forEach((button) => {
    const active = button.dataset.lang === code;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function detectSpokenLang(text) {
  const value = String(text || '');
  if (/[\u0400-\u04FF]/.test(value)) return 'ru-RU';
  if (/[õÕäÄöÖüÜšŠžŽ]/.test(value) || /\b(puhas|must|tihend|drenaaž|kätepesu|vaht|jäägid|korras|masin)\b/i.test(value)) return 'et-EE';
  return 'en-US';
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
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open('toend', 2);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('records')) db.createObjectStore('records', { keyPath: 'seq' });
      if (!db.objectStoreNames.contains('media')) db.createObjectStore('media', { keyPath: 'key' });
    };
    req.onsuccess = () => {
      const db = req.result;
      db.onversionchange = () => {
        db.close();
        dbPromise = null;
      };
      resolve(db);
    };
    req.onerror = () => {
      dbPromise = null;
      reject(req.error);
    };
  });
  return dbPromise;
}

async function allRecords() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const req = db.transaction('records', 'readonly').objectStore('records').getAll();
    req.onsuccess = () => resolve(req.result.sort((a, b) => a.seq - b.seq));
    req.onerror = () => reject(req.error);
  });
}

async function mediaDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

async function getMedia(key) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const req = db.transaction('media', 'readonly').objectStore('media').get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

async function hashBlob(blob) {
  const buffer = await blob.arrayBuffer();
  if (globalThis.crypto?.subtle) {
    const digest = await crypto.subtle.digest('SHA-256', buffer);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }
  const bytes = new Uint8Array(buffer);
  let hash = 0x811c9dc5;
  for (let i = 0; i < bytes.length; i += 1) hash = Math.imul(hash ^ bytes[i], 16777619) >>> 0;
  return hash.toString(16).padStart(8, '0');
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

const rotr = (value, bits) => (value >>> bits) | (value << (32 - bits));
const SHA_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];

function sha256Sync(value) {
  const bytes = new TextEncoder().encode(JSON.stringify(stable(value)));
  const padded = Math.ceil((bytes.length + 9) / 64) * 64;
  const message = new Uint8Array(padded);
  message.set(bytes);
  message[bytes.length] = 0x80;
  const view = new DataView(message.buffer);
  const bits = bytes.length * 8;
  view.setUint32(padded - 8, Math.floor(bits / 4294967296));
  view.setUint32(padded - 4, bits >>> 0);
  const h = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
  ];
  const w = new Uint32Array(64);
  for (let offset = 0; offset < padded; offset += 64) {
    for (let i = 0; i < 16; i += 1) w[i] = view.getUint32(offset + i * 4);
    for (let i = 16; i < 64; i += 1) {
      const x = w[i - 15];
      const y = w[i - 2];
      const s0 = rotr(x, 7) ^ rotr(x, 18) ^ (x >>> 3);
      const s1 = rotr(y, 17) ^ rotr(y, 19) ^ (y >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, hh] = h;
    for (let i = 0; i < 64; i += 1) {
      const s1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const t1 = (hh + s1 + ch + SHA_K[i] + w[i]) >>> 0;
      const s0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (s0 + maj) >>> 0;
      hh = g;
      g = f;
      f = e;
      e = (d + t1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (t1 + t2) >>> 0;
    }
    h[0] = (h[0] + a) >>> 0;
    h[1] = (h[1] + b) >>> 0;
    h[2] = (h[2] + c) >>> 0;
    h[3] = (h[3] + d) >>> 0;
    h[4] = (h[4] + e) >>> 0;
    h[5] = (h[5] + f) >>> 0;
    h[6] = (h[6] + g) >>> 0;
    h[7] = (h[7] + hh) >>> 0;
  }
  return h.map((word) => word.toString(16).padStart(8, '0')).join('');
}

async function chainHash(value) {
  if (globalThis.crypto?.subtle) {
    const data = new TextEncoder().encode(JSON.stringify(stable(value)));
    const digest = await crypto.subtle.digest('SHA-256', data);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }
  return sha256Sync(value);
}

function legacyHash(value) {
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

async function checkChain(records) {
  if (!records.length) return { valid: true, breakSeq: null, message: WORDS[lang].chain_empty };
  for (let i = 0; i < records.length; i += 1) {
    const record = records[i];
    const { hash, ...body } = record;
    const expectedPrev = i === 0 ? '0'.repeat(64) : records[i - 1].hash;
    if (record.prev_hash !== expectedPrev) {
      return { valid: false, breakSeq: record.seq, message: `${WORDS[lang].chain_break_prev} ${record.seq}: ${WORDS[lang].chain_prev_detail}` };
    }
    const recomputed = hash.length === 16 ? legacyHash(body) : await chainHash(body);
    if (recomputed !== hash) {
      return { valid: false, breakSeq: record.seq, message: `${WORDS[lang].chain_break_prev} ${record.seq}: ${WORDS[lang].chain_break_hash}` };
    }
  }
  return { valid: true, breakSeq: null, message: `${records.length} ${records.length === 1 ? WORDS[lang].record_one : WORDS[lang].record_many}, ${WORDS[lang].chain_intact}` };
}

async function appendRecord(payload, mediaFile, audioBlob) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['records', 'media'], 'readwrite');
    const store = tx.objectStore('records');
    let record = null;
    const request = store.getAll();
    request.onsuccess = () => {
      const records = request.result.sort((a, b) => a.seq - b.seq);
      const last = records.at(-1);
      const seq = last ? last.seq + 1 : 1;
      const body = {
        ...payload,
        seq,
        local_seq: seq,
        device_id: deviceId(),
        prev_hash: last ? last.hash : '0'.repeat(64),
        created_at: new Date().toISOString()
      };
      // Keep hashing synchronous so the IndexedDB transaction cannot close before put.
      record = { ...body, hash: sha256Sync(body) };
      store.put(record);
      const media = tx.objectStore('media');
      if (mediaFile) media.put({ key: `${seq}:media`, blob: mediaFile });
      if (audioBlob) media.put({ key: `${seq}:audio`, blob: audioBlob });
    };
    tx.oncomplete = () => resolve(record);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('Record write aborted'));
  });
}

async function bitmapFor(file) {
  if ('createImageBitmap' in window) return createImageBitmap(file);
  const url = URL.createObjectURL(file);
  const img = new Image();
  try {
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
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
  const byteHash = await hashBlob(file);
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
      kind: 'image',
      hash: imageHash(canvas),
      media_hash: byteHash,
      thumb: thumb.toDataURL('image/png'),
      file,
      name: file.name,
      mime: file.type,
      size: file.size,
      reason: usable ? 'Usable photo' : `Unusable: variance ${variance.toFixed(0)}, edge ${edges.toFixed(1)}, light ${mean.toFixed(0)}`
    };
  } catch (error) {
    return {
      usable: false,
      kind: 'image',
      hash: '',
      media_hash: byteHash,
      thumb: '',
      file,
      name: file.name,
      mime: file.type,
      size: file.size,
      reason: `Could not read photo: ${error.message}`
    };
  }
}

async function analyseVideo(file) {
  const byteHash = await hashBlob(file);
  const meta = { kind: 'video', media_hash: byteHash, file, name: file.name, mime: file.type, size: file.size };
  const url = URL.createObjectURL(file);
  try {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.muted = true;
    video.src = url;
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('video decode timeout')), 3000);
      video.onloadeddata = () => { clearTimeout(timer); resolve(); };
      video.onerror = () => { clearTimeout(timer); reject(new Error('video decode failed')); };
    });
    const canvas = document.createElement('canvas');
    canvas.width = 72;
    canvas.height = 72;
    canvas.getContext('2d').drawImage(video, 0, 0, 72, 72);
    const thumb = canvas.toDataURL('image/png');
    URL.revokeObjectURL(url);
    return { ...meta, usable: file.size > 0, hash: byteHash, thumb, reason: `Video ${file.name}` };
  } catch (error) {
    URL.revokeObjectURL(url);
    return { ...meta, usable: false, hash: byteHash, thumb: '', reason: `Could not read video: ${error.message}` };
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

function hasEvidence() {
  return Boolean(photoState?.usable || $('instrument').value.trim());
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

function reusedPhoto(photo) {
  if (!photo?.hash || !photo?.media_hash) return null;
  const cutoff = Date.now() - 30 * 24 * 3600 * 1000;
  return allRecordsCache.find((r) => r.photo_hash === photo.hash && r.media_hash === photo.media_hash && Date.parse(r.created_at) > cutoff) || null;
}

let allRecordsCache = [];

function mediaPayload() {
  return {
    speech_lang: spokenLangs.size ? [...spokenLangs].join(',') : speechLang,
    media_kind: photoState?.kind || '',
    media_hash: photoState?.media_hash || photoState?.hash || '',
    media_name: photoState?.name || '',
    media_mime: photoState?.mime || '',
    media_size: photoState?.size || 0,
    audio_hash: audioState?.hash || '',
    audio_mime: audioState?.mime || '',
    audio_size: audioState?.size || 0,
    audio_duration: audioState?.duration || 0
  };
}

function audioBusy(noteId) {
  if (!audioRecorder && !audioStarting && !photoPending && !photoFailed) return false;
  if (photoPending || photoFailed) {
    note(noteId, t('media_pending'), true);
    return true;
  }
  note(noteId, t('audio_stop_first'), true);
  return true;
}

async function guardedWrite(noteId, work) {
  if (saving) return;
  $('photo').disabled = true;
  $('audioBtn').disabled = true;
  saving = true;
  try {
    await work();
  } catch (error) {
    note(noteId, `${t('save_failed')} ${error.message}`, true);
  } finally {
    $('photo').disabled = false;
    $('audioBtn').disabled = false;
    saving = false;
  }
}

function saveRecord() {
  return guardedWrite('saveNote', async () => {
    const asset = $('asset').value.trim();
    const transcript = $('transcript').value.trim();
    if (!asset || !transcript) {
      note('saveNote', 'Asset and what happened are required.', true);
      return;
    }
    if (audioBusy('saveNote')) return;

    const tier = tierFor();
    const verdict = $('verdict').value;
    const instrument = $('instrument').value.trim();
    const previous = reusedPhoto(photoState);
    const record = await appendRecord({
      asset,
      tag_sig: currentTag,
      source: currentSource,
      checkpoint: $('checkpoint').value,
      method: $('method').value,
      verdict,
      transcript,
      tier,
      reason: '',
      supervisor: '',
      instrument,
      photo_hash: photoState?.hash || '',
      photo_thumb: photoState?.thumb || '',
      photo_usable: photoState?.usable || false,
      photo_reuse_of: previous?.seq || null,
      language: speechLang,
      default_assessment: false,
      ...mediaPayload()
    }, photoState?.file, audioState?.blob);
    await finishRecord(record, 'saveNote', `Record ${record.seq} appended. Hash ${record.hash.slice(0, 12)}.`);
  });
}

async function finishRecord(record, noteId, message) {
  demoBreak = null;
  setFaultPanel(false);
  note(noteId, message || `${WORDS[lang].record_added} ${record.seq}.`);
  $('transcript').value = '';
  spokenLangs = new Set();
  $('instrument').value = '';
  $('photo').value = '';
  photoState = null;
  audioState = null;
  $('audioBtn').classList.remove('recording');
  $('audioBtn').textContent = t('record_audio');
  note('photoNote', t('photo_hint'));
  note('audioNote', t('audio_hint'));
  updateTier();
  await refreshRecords();
  $('assetStamp').classList.add('flash');
  setTimeout(() => $('assetStamp').classList.remove('flash'), 350);
}

function quickRecord(kind, grade = 0) {
  return guardedWrite('quickNote', async () => {
    const asset = $('asset').value.trim();
    if (!asset) {
      note('quickNote', lang === 'et' ? 'Puuduta kleepsu või kirjuta masina nimi.' : 'Tap the sticker or type the machine name.', true);
      return;
    }
    const isGrade = kind === 'grade';
    if (audioBusy('quickNote')) return;
    const isDefault = kind === 'default';
    const noEvidence = !hasEvidence();
    const defaultAssessment = isDefault && noEvidence;
    const isClean = kind === 'clean' || isDefault || (isGrade && grade === 3);
    const tier = isGrade ? 'C' : noEvidence ? 'C' : tierFor();
    const gradeReason = isGrade ? WORDS[lang].grade_reason.replace('N', grade) : '';
    const faultLabel = $('faultType').selectedOptions[0]?.textContent.trim() || WORDS[lang].fault_foam;
    const transcript = $('transcript').value.trim() || (isGrade ? gradeReason : isClean ? WORDS[lang].quick_prompt : faultLabel);
    const verdict = isGrade ? (grade === 1 ? 'serious' : grade === 2 ? 'not clean' : 'clean') : isClean ? 'clean' : 'not clean';
    const reason = isGrade ? gradeReason : defaultAssessment ? WORDS[lang].default_reason : isClean ? WORDS[lang].quick_reason : WORDS[lang].quick_fault_reason;
    const previous = reusedPhoto(photoState);
    const record = await appendRecord({
      asset,
      tag_sig: currentTag,
      source: currentSource,
      checkpoint: $('checkpoint').value,
      method: isGrade ? 'Rated' : noEvidence ? (isClean ? 'Declared' : 'Visual') : $('method').value,
      verdict,
      grade: isGrade ? grade : null,
      transcript,
      tier,
      reason,
      supervisor: '',
      instrument: $('instrument').value.trim(),
      photo_hash: photoState?.hash || '',
      photo_thumb: photoState?.thumb || '',
      photo_usable: photoState?.usable || false,
      photo_reuse_of: previous?.seq || null,
      language: speechLang,
      default_assessment: isDefault && noEvidence,
      quick: true,
      ...mediaPayload()
    }, photoState?.file, audioState?.blob);
    const done = isGrade ? WORDS[lang].grade_done.replace('N', grade) : isDefault ? WORDS[lang].default_done : WORDS[lang].quick_done;
    await finishRecord(record, 'quickNote', `${done} ${record.seq}.`);
  });
}

function renderRecords(records) {
  const host = $('records');
  const query = $('filter').value.trim().toLowerCase();
  const shown = records.filter((r) => !query || `${r.asset} ${r.checkpoint} ${r.transcript}`.toLowerCase().includes(query));
  if (!shown.length) {
    host.innerHTML = `<div class="empty-row">${WORDS[lang].empty_records}</div>`;
    void hydrateMedia(host).catch(() => {});
    return;
  }
  host.innerHTML = shown.map((r) => {
    const broken = demoBreak !== null && r.seq >= demoBreak;
    const thumb = r.photo_thumb ? `<img src="${r.photo_thumb}" width="30" height="30" alt="evidence thumbnail">` : '';
    const reuse = r.photo_reuse_of ? `<br>reused photo from record ${r.photo_reuse_of}` : '';
    const origin = r.source || 'typed';
    const card = r.tag_sig ? ` · ${origin} ${escapeHtml(r.tag_sig)}` : '';
    const defaultMark = r.default_assessment ? ` · <em class="default-flag">${WORDS[lang].default_done}</em>` : '';
    const gradeMark = r.grade ? ` · <em class="default-flag">${WORDS[lang].grade_short} ${r.grade}</em>` : '';
    const reason = r.reason ? ` · ${escapeHtml(r.reason)}` : '';
    const speech = r.speech_lang ? ` · ${escapeHtml(r.speech_lang)}` : '';
    const attachments = [
      r.media_kind ? `<a class="media-link" href="#" data-media-key="${r.seq}:media">${WORDS[lang].media_badge}: ${escapeHtml(r.media_kind)}</a>` : '',
      r.audio_hash ? `<a class="media-link" href="#" data-media-key="${r.seq}:audio">${WORDS[lang].audio_badge}</a>` : ''
    ].join('');
    return `<div class="record-row">
      <span class="seq">#${r.seq}</span>
      <span class="main"><strong>${escapeHtml(r.asset)} · ${escapeHtml(r.checkpoint)}</strong>
      <small>${escapeHtml(r.transcript || '')}</small>
      <small>${escapeHtml(r.verdict)} · tier ${r.tier}${card}${gradeMark}${defaultMark}${reason}${speech} · ${escapeHtml(new Date(r.created_at).toLocaleString())} ${thumb}${reuse}${attachments}</small></span>
      <span class="hash ${broken ? 'broken' : ''}">${r.hash.slice(0, 8)}<br>${broken ? 'BROKEN' : 'ok'}</span>
    </div>`;
  }).join('');
  void hydrateMedia(host).catch(() => {});
}

async function hydrateMedia(host) {
  for (const url of mediaUrls) URL.revokeObjectURL(url);
  mediaUrls = new Set();
  for (const link of host.querySelectorAll('[data-media-key]')) {
    const item = await getMedia(link.dataset.mediaKey);
    if (!item?.blob) {
      link.hidden = true;
      continue;
    }
    const url = URL.createObjectURL(item.blob);
    mediaUrls.add(url);
    link.href = url;
    const ext = (item.blob.type.split('/')[1] || 'bin').split(';')[0];
    link.download = `${link.dataset.mediaKey.replace(':', '-')}.${ext}`;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

async function refreshRecords() {
  allRecordsCache = await allRecords();
  const status = await checkChain(allRecordsCache);
  const box = $('chainStatus');
  const shown = demoBreak === null ? status : { valid: false, message: WORDS[lang].tamper_demo.replaceAll('N', demoBreak) };
  box.textContent = shown.message;
  box.classList.toggle('broken', !shown.valid);
  $('chainBadge').textContent = `${allRecordsCache.length} ${allRecordsCache.length === 1 ? 'record' : 'records'}`;
  $('chainBadge').className = `badge ${shown.valid ? 'good' : 'bad'}`;
  $('chainCount').textContent = `${allRecordsCache.length} ${allRecordsCache.length === 1 ? 'record' : 'records'}`;
  $('queueCount').textContent = `${allRecordsCache.length} queued`;
  renderRecords(allRecordsCache);
}

function localDate(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function runQuestion(kind) {
  const started = performance.now();
  const today = localDate();
  let found = [];
  if (kind === 'unsigned') found = allRecordsCache.filter((r) => r.verdict === 'clean' && r.tier === 'C');
  if (kind === 'tierc') found = allRecordsCache.filter((r) => r.tier === 'C');
  if (kind === 'today') found = allRecordsCache.filter((r) => localDate(r.created_at) === today);
  if (kind === 'defaults') found = allRecordsCache.filter((r) => r.default_assessment);
  if (kind === 'media') found = allRecordsCache.filter((r) => r.media_hash || r.audio_hash);
  const elapsed = (performance.now() - started).toFixed(1);
  note('answerNote', `${found.length} ${WORDS[lang].answer_note} ${elapsed} ${WORDS[lang].ms_from_device}`);
  $('filter').value = '';
  renderRecords(found);
}

async function exportJsonl() {
  try {
    const lines = [];
    for (const record of allRecordsCache) {
      lines.push(JSON.stringify(record));
      for (const kind of ['media', 'audio']) {
        if (kind === 'media' ? !record.media_kind : !record.audio_hash) continue;
        const key = `${record.seq}:${kind}`;
        const item = await getMedia(key);
        if (!item?.blob) throw new Error(`${t('media_missing')} ${key}`);
        lines.push(JSON.stringify({ type: 'attachment', record_seq: record.seq, key, data_url: await mediaDataUrl(item.blob) }));
      }
    }
    const url = URL.createObjectURL(new Blob([lines.join('\n') + '\n'], { type: 'application/x-ndjson' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'toend-records.jsonl';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    note('answerNote', `${t('save_failed')} ${error.message}`, true);
  }
}

async function showTamper() {
  if (!allRecordsCache.length) {
    note('answerNote', 'Append one record first, then break it.', true);
    return;
  }
  const copy = allRecordsCache.map((record, index) => index ? record : { ...record, transcript: `${record.transcript} (edited)` });
  const result = await checkChain(copy);
  if (result.valid) {
    note('answerNote', result.message, true);
    return;
  }
  demoBreak = result.breakSeq;
  await refreshRecords();
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


function appendSpoken(text, langCode) {
  const field = $('transcript');
  const paragraph = String(text || '').trim();
  if (!paragraph) return;
  field.value = field.value.trim() ? `${field.value.trim()}\n${paragraph}` : paragraph;
  field.focus({ preventScroll: true });
  field.setSelectionRange(field.value.length, field.value.length);
  const detected = detectSpokenLang(paragraph) || langCode;
  spokenLangs.add(detected);
  note('audioNote', `${t('spoken_saved')} ${detected.slice(0, 2).toUpperCase()}`);
}

function speechRecognition() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function toggleVoice() {
  const Recognition = speechRecognition();
  if (!Recognition) {
    note('audioNote', t('speech_unsupported'), true);
    return;
  }
  if (recognition) {
    recognition.stop();
    recognition = null;
    $('voiceBtn').classList.remove('listening');
    $('voiceBtn').textContent = t('speak');
    return;
  }
  if (audioRecognition) {
    audioRecognition.stop();
    audioRecognition = null;
  }
  const langCode = speechLang;
  recognition = new Recognition();
  recognition.lang = langCode;
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.onresult = (event) => {
    const text = Array.from(event.results).map((result) => result[0].transcript).join(' ');
    appendSpoken(text, langCode);
  };
  recognition.onerror = (event) => {
    if (event.error === 'language-not-supported' || event.error === 'language-unavailable') {
      note('audioNote', t('speech_lang_unsupported'), true);
    } else if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      note('audioNote', t('audio_denied'), true);
    } else {
      note('audioNote', `${t('speech_stopped')}: ${event.error}`, true);
    }
    recognition = null;
    $('voiceBtn').classList.remove('listening');
    $('voiceBtn').textContent = t('speak');
  };
  recognition.onend = () => {
    recognition = null;
    $('voiceBtn').classList.remove('listening');
    $('voiceBtn').textContent = t('speak');
  };
  try {
    recognition.start();
  } catch (error) {
    recognition = null;
    $('voiceBtn').classList.remove('listening');
    $('voiceBtn').textContent = t('speak');
    note('audioNote', `${t('speech_stopped')}: ${error.message}`, true);
    return;
  }
  $('voiceBtn').classList.add('listening');
  $('voiceBtn').textContent = t('listening');
}

async function toggleAudio() {
  if (audioRecorder) {
    if (audioRecorder.state !== 'inactive') audioRecorder.stop();
    return;
  }
  if (audioStarting) return;
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
    note('audioNote', t('audio_unsupported'), true);
    return;
  }
  audioStarting = true;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const langCode = speechLang;
    const Recognition = speechRecognition();
    let speechStartError = '';
    if (Recognition) {
      audioRecognition = new Recognition();
      audioRecognition.lang = langCode;
      audioRecognition.interimResults = false;
      audioRecognition.continuous = false;
      audioRecognition.onresult = (event) => {
        const text = Array.from(event.results).map((result) => result[0].transcript).join(' ');
        appendSpoken(text, langCode);
      };
      audioRecognition.onerror = () => {
        audioRecognition = null;
      };
      audioRecognition.onend = () => {
        audioRecognition = null;
      };
      try {
        audioRecognition.start();
      } catch (error) {
        audioRecognition = null;
        speechStartError = error.message;
      }
    }
    const mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus']
      .find((candidate) => MediaRecorder.isTypeSupported(candidate)) || '';
    const chunks = [];
    const started = Date.now();
    const token = ++audioToken;
    audioState = null;
    const recorder = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
    audioRecorder = recorder;
    recorder.ondataavailable = (event) => {
      if (event.data.size) chunks.push(event.data);
    };
    recorder.onstop = async () => {
      if (audioRecognition) {
        audioRecognition.stop();
        audioRecognition = null;
      }
      const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
      stream.getTracks().forEach((track) => track.stop());
      try {
        if (!blob.size) {
          if (token === audioToken) note('audioNote', t('audio_unsupported'), true);
          return;
        }
        const hash = await hashBlob(blob);
        if (token !== audioToken) return;
        audioState = {
          blob,
          hash,
          mime: blob.type,
          size: blob.size,
          duration: Math.round((Date.now() - started) / 1000)
        };
        note('audioNote', `${t('audio_saved')} ${audioState.duration}s`);
      } catch (error) {
        note('audioNote', `${t('save_failed')} ${error.message}`, true);
      } finally {
        if (audioRecorder === recorder) {
          audioRecorder = null;
          $('audioBtn').classList.remove('recording');
          $('audioBtn').textContent = t('record_audio');
        }
      }
    };
    recorder.start();
    $('audioBtn').classList.add('recording');
    $('audioBtn').textContent = t('record_audio_stop');
    note('audioNote', speechStartError ? `${t('speech_stopped')}: ${speechStartError}` : t('audio_recording'), Boolean(speechStartError));
  } catch (error) {
    if (audioRecognition) {
      audioRecognition.stop();
      audioRecognition = null;
    }
    audioRecorder = null;
    audioToken += 1;
    note('audioNote', `${t('audio_denied')}: ${error.message}`, true);
  } finally {
    audioStarting = false;
  }
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
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
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

function setFaultPanel(open) {
  $('faultField').hidden = !open;
  $('faultSaveBtn').hidden = !open;
  $('cleanBtn').hidden = open;
  $('defaultBtn').hidden = open || gradeMode;
  if (open) $('faultType').selectedIndex = 0;
}

function bind() {
  $('langToggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'et' : 'en';
    applyLanguage();
    if (recognition) toggleVoice();
    refreshRecords();
  });
  $('asset').addEventListener('input', () => {
    currentTag = '';
    currentSource = 'typed';
    $('assetStampName').textContent = $('asset').value.trim() || t('untagged');
    $('assetSource').textContent = sourceLabel();
  });
  $('cleanBtn').addEventListener('click', () => quickRecord('clean'));
  $('defaultBtn').addEventListener('click', () => quickRecord('default'));
  document.querySelectorAll('.grade-btn').forEach((btn) => {
    btn.addEventListener('click', () => quickRecord('grade', Number(btn.dataset.grade)));
  });
  $('faultBtn').addEventListener('click', () => {
    setFaultPanel(true);
    $('faultType').focus();
  });
  $('faultSaveBtn').addEventListener('click', () => quickRecord('fault'));
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      setSpeechLang(button.dataset.lang);
      if (recognition) toggleVoice();
      if (audioRecognition) {
        audioRecognition.stop();
        audioRecognition = null;
      }
      if (audioRecorder) {
        note('audioNote', t('audio_stop_first'), true);
        return;
      }
      toggleVoice();
    });
  });
  $('voiceBtn').addEventListener('click', toggleVoice);
  $('audioBtn').addEventListener('click', toggleAudio);
  $('photo').addEventListener('change', async (event) => {
    const token = ++photoToken;
    const file = event.target.files?.[0];
    photoState = null;
    photoPending = Boolean(file);
    photoFailed = false;
    if (!file) { updateTier(); return; }
    try {
      const result = file.type.startsWith('video/') ? await analyseVideo(file) : await analysePhoto(file);
      if (token !== photoToken) return;
      photoState = result;
      note('photoNote', result.reason, !result.usable);
    } catch (error) {
      if (token === photoToken) {
        photoFailed = true;
        note('photoNote', `${t('save_failed')} ${error.message}`, true);
      }
    } finally {
      if (token === photoToken) { photoPending = false; updateTier(); }
    }
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
  const params = new URLSearchParams(location.search);
  const asset = params.get('asset');
  const tag = params.get('tag');
  const via = params.get('via');
  gradeMode = Boolean(asset && (via === 'nfc' || via === 'link'));
  populateSelects();
  applyLanguage();
  bind();
  setSpeechLang(speechLang);
  updateTier();
  updateNetwork();
  if (gradeMode) {
    $('gradeRow').hidden = false;
    document.querySelector('.pad-actions').hidden = true;
    $('defaultBtn').hidden = true;
    note('quickNote', WORDS[lang].grade_note);
  }
  if (asset) {
    setAsset(asset, tag || '', via === 'nfc' ? 'nfc' : 'link');
    document.querySelector('.proof-pad')?.scrollIntoView({ block: 'center' });
    if (gradeMode) $('grade3').focus({ preventScroll: true });
    else $('cleanBtn').focus({ preventScroll: true });
  }
  await refreshRecords();
  await loadCip();
  await registerServiceWorker();
}

start().catch((error) => note('saveNote', `Startup failed: ${error.message}`, true));
