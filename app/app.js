const $ = (id) => document.getElementById(id);

const CHECKPOINTS = [
  'Wash', 'Filler head', 'Valve', 'Drain', 'Door',
  'Hand wash sink', 'Crate washer', 'Syrup room wall'
];
const METHODS = ['Visual', 'ATP swab', 'Temperature', 'CIP cycle', 'Declared'];


const WORDS = {
  en: {
    subtitle: 'Proof for the production line',
    rail_caption: 'One tap, one record.',
    flow_title: 'How it works',
    flow1: 'Pick a line or tap the sticker.',
    flow2: 'Press Prove clean.',
    flow3: 'The record saves on this device.',
    default_title: 'No photo?',
    default_copy: 'Use the fixed default. It records a fixed reason and stays traceable.',
    offline_title: 'Works offline',
    offline_copy: 'Checks are written to the device first, even with no network.',
    line: 'Line',
    line_all: 'All lines',
    line_1: 'Line 1',
    line_2: 'Line 2',
    line_3: 'Line 3',
    line_4: 'Line 4',
    line_5: 'Line 5',
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
    audio_hint: 'Speak or record a clip. The mic stays on through short pauses and stops after about 3 seconds of quiet.',
    audio_recording: 'Recording... tap to stop and save',
    audio_saved: 'Voice note saved',
    spoken_saved: 'Spoken text added',
    audio_unsupported: 'This browser cannot record audio.',
    speech_unsupported: 'This browser cannot turn speech into text. Type the note or record a voice clip.',
    speech_lang_unsupported: 'Speech recognition does not support this language here. Try another language or type the note.',
    speech_stopped: 'Voice stopped',
    listening: 'Listening... pause 2-3s to stop',
    audio_denied: 'Microphone permission was denied.',
    audio_stop_first: 'Stop the voice note before saving.',
    note_label: 'What happened — write or speak',
    note_ph: 'Type here, or press Speak to write. Each recording adds a new line.',
    note_hint: 'Tap ET, RU or EN to speak. The app writes the text in the language it hears.',
    what_happened: 'What happened',
    photo: 'Photo evidence',
    evidence: 'Photo or video evidence',
    photo_hint: 'A photo or video only counts as evidence if the app can read it.',
    instrument: 'Instrument reading',
    tier: 'Evidence tier',
    save: 'Append record',
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
    quick_reason: 'Declared clean at the tagged place',
    quick_fault_reason: 'Fault chosen from the NFC quick list',
    quick_done: 'Quick record',
    grade_prompt: 'Rate this spot',
    grade_note: 'Pick 3 clean, 2 dirty, or 1 serious.',
    grade_reason: 'Grade N recorded from the tagged place',
    grade_done: 'Grade N saved',
    grade3_label: '3 clean',
    grade2_label: '2 dirty',
    grade1_label: '1 serious',
    grade_comment_label: 'Comment',
    grade_comment_placeholder: 'what you saw',
    grade_comment_required: 'A comment is required for grade 2 or 1.',
    grade_save: 'Save grade',
    grade_locked_note: 'Grade saved. This tag is closed. Tap a new tag for a new check.',
    grade3_closed: 'Grade 3 saved. Nothing else is needed.',
    grade_closed_title: 'Tag closed',
    grade_closed_hint: 'Tap a new sticker for a new check.',
    grade_closed_record: 'Record',
    record_added: 'Record',
    nfc_tag: 'NFC card',
    qr_link: 'QR link',
    showcase: 'See the example and NFC link',
    footer: 'A. Le Coq challenge 3 at Hack the Future of Food 2026. Tap to prove.',
  },
  et: {
    subtitle: 'Tõend tootmisliinile',
    rail_caption: 'Üks puudutus, üks kirje.',
    flow_title: 'Kuidas see töötab',
    flow1: 'Vali liin või puuduta kleepsu.',
    flow2: 'Vajuta KINNITA PUHAS.',
    flow3: 'Kirje salvestub kohe seadmesse.',
    default_title: 'Pilti ei saa?',
    default_copy: 'Kasuta fikseeritud hinnangut. See salvestab fikseeritud põhjuse ja kirje jääb jälgitavaks.',
    offline_title: 'Töötab võrguta',
    offline_copy: 'Kontroll salvestub esmalt seadmesse, ka ilma võrguta.',
    line: 'Liin',
    line_all: 'Kõik liinid',
    line_1: 'Liin 1',
    line_2: 'Liin 2',
    line_3: 'Liin 3',
    line_4: 'Liin 4',
    line_5: 'Liin 5',
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
    audio_hint: 'Räägi või salvesta klipp. Mikrofon jääb lühikeste pauside ajaks lahti ja sulgub umbes 3 sekundi vaikuse järel.',
    audio_recording: 'Salvestan… vajuta peatamiseks ja salvestamiseks',
    audio_saved: 'Häälmärkus salvestatud',
    spoken_saved: 'Räägitud tekst lisatud',
    audio_unsupported: 'See brauser ei saa heli salvestada.',
    speech_unsupported: 'See brauser ei oska kõnet tekstiks muuta. Kirjuta tekst või salvesta häälmärkus.',
    speech_lang_unsupported: 'Kõnetuvastus ei toeta siin seda keelt. Proovi teist keelt või kirjuta tekst.',
    speech_stopped: 'Kõnetuvastus peatus',
    listening: 'Kuulan… 2–3 s vaikust ja mikrofon sulgub',
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
    grade_comment_label: 'Kommentaar',
    grade_comment_placeholder: 'mida nägid',
    grade_comment_required: 'Hinde 2 või 1 korral tuleb kommentaar.',
    grade_save: 'Salvesta hinne',
    grade_locked_note: 'Hinne salvestatud. See kleeps on kinni. Uueks kontrolliks puuduta uut kleepsu.',
    grade3_closed: 'Hinne 3 salvestatud. Rohkem sisestada ei pea.',
    grade_closed_title: 'Kleeps on kinni',
    grade_closed_hint: 'Uueks kontrolliks puuduta uut kleepsu.',
    grade_closed_record: 'Kirje',
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
const SILENCE_MS = 2500;
let recognition = null;
let audioRecognition = null;
let speechSession = null;
let audioSpeechSession = null;
let photoState = null;
let audioRecorder = null;
let audioState = null;
let currentTag = '';
let currentSource = 'typed';
let dbPromise = null;
let saving = false;
let audioToken = 0;

let gradeMode = false;
let pendingGrade = 0;
let gradeLocked = false;
let lastGradeSeq = 0;
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
  if (lastGradeSeq && $('gradeDone') && !$('gradeDone').hidden) {
    $('gradeDoneDetail').textContent = `${WORDS[lang].grade_closed_record} ${lastGradeSeq}. ${WORDS[lang].grade_closed_hint}`;
  }
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

async function putMedia(key, blob) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('media', 'readwrite');
    tx.objectStore('media').put({ key, blob });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
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

async function appendRecord(payload) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('records', 'readwrite');
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

async function persistMedia(record) {
  if (photoState?.file) await putMedia(`${record.seq}:media`, photoState.file);
  if (audioState?.blob) await putMedia(`${record.seq}:audio`, audioState.blob);
}

function audioBusy(noteId) {
  if (!audioRecorder) return false;
  note(noteId, t('audio_stop_first'), true);
  return true;
}

async function guardedWrite(noteId, work) {
  if (saving) return;
  saving = true;
  try {
    await work();
  } catch (error) {
    note(noteId, `${t('save_failed')} ${error.message}`, true);
  } finally {
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
    });

    await persistMedia(record);
    await finishRecord(record, 'saveNote', `Record ${record.seq} appended. Hash ${record.hash.slice(0, 12)}.`);
  });
}

async function finishRecord(record, noteId, message) {
  setFaultPanel(false);
  if (speechSession) {
    speechSession.stop();
    speechSession = null;
    recognition = null;
  }
  if (audioSpeechSession) {
    audioSpeechSession.stop();
    audioSpeechSession = null;
    audioRecognition = null;
  }
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
  await refreshCount();
  $('assetStamp').classList.add('flash');
  setTimeout(() => $('assetStamp').classList.remove('flash'), 350);
}

function quickRecord(kind, grade = 0) {
  return guardedWrite('quickNote', async () => {
    const asset = $('asset').value.trim();
    if (!asset) {
      note('quickNote', lang === 'et' ? 'Vali liin või puuduta kleepsu.' : 'Select a line or tap the sticker.', true);
      return;
    }
    const isGrade = kind === 'grade';
    if (isGrade && gradeLocked) {
      note('quickNote', WORDS[lang].grade_locked_note);
      return;
    }
    const gradeComment = $('gradeComment').value.trim();
    if (isGrade && grade !== 3 && !gradeComment) {
      note('quickNote', WORDS[lang].grade_comment_required, true);
      $('gradeComment').focus({ preventScroll: true });
      return;
    }
    if (audioBusy('quickNote')) return;
    const isDefault = kind === 'default';
    const noEvidence = !hasEvidence();
    const defaultAssessment = (isDefault || (isGrade && grade === 3)) && noEvidence;
    const isClean = kind === 'clean' || isDefault || (isGrade && grade === 3);
    const tier = isGrade ? 'C' : noEvidence ? 'C' : tierFor();
    const gradeReason = isGrade ? WORDS[lang].grade_reason.replace('N', grade) : '';
    const faultLabel = $('faultType').selectedOptions[0]?.textContent.trim() || WORDS[lang].fault_foam;
    const transcript = isGrade ? (grade === 3 ? gradeReason : gradeComment) : isClean ? WORDS[lang].quick_prompt : faultLabel;
    const verdict = isGrade ? (grade === 1 ? 'serious' : grade === 2 ? 'not clean' : 'clean') : isClean ? 'clean' : 'not clean';
    const reason = defaultAssessment ? WORDS[lang].default_reason : isGrade ? (grade === 3 ? gradeReason : gradeComment) : isClean ? WORDS[lang].quick_reason : WORDS[lang].quick_fault_reason;
    const previous = reusedPhoto(photoState);
    const record = await appendRecord({
      asset,
      tag_sig: currentTag,
      source: currentSource,
      checkpoint: $('checkpoint').value,
      method: isGrade ? 'Rated' : isClean ? 'Declared' : 'Visual',
      verdict,
      grade: isGrade ? grade : null,
      transcript,
      tier,
      reason,
      supervisor: '',
      instrument: '',
      photo_hash: photoState?.hash || '',
      photo_thumb: photoState?.thumb || '',
      photo_usable: photoState?.usable || false,
      photo_reuse_of: previous?.seq || null,
      language: speechLang,
      default_assessment: defaultAssessment,
      quick: true,
      ...mediaPayload()
    });
    await persistMedia(record);
    if (isGrade) {
      gradeLocked = true;
      pendingGrade = 0;
      $('gradeRow').hidden = true;
      $('gradeCommentField').hidden = true;
      $('gradeSaveBtn').hidden = true;
      $('faultBtn').hidden = true;
      $('gradeDoneDetail').textContent = `${WORDS[lang].grade_closed_record} ${record.seq}. ${WORDS[lang].grade_closed_hint}`;
      lastGradeSeq = record.seq;
      $('gradeDone').hidden = false;
      navigator.vibrate?.(18);
    }
    const done = isGrade ? (grade === 3 ? WORDS[lang].grade3_closed : WORDS[lang].grade_done.replace('N', grade)) : isDefault ? WORDS[lang].default_done : WORDS[lang].quick_done;
    await finishRecord(record, 'quickNote', `${done} ${record.seq}.`);
  });
}

async function refreshCount() {
  allRecordsCache = await allRecords();
  $('queueCount').textContent = `${allRecordsCache.length} queued`;
}

function sourceLabel() {
  if (currentSource === 'nfc') return currentTag ? `${WORDS[lang].nfc_tag} ${currentTag}` : WORDS[lang].nfc_tag;
  if (currentSource === 'link') return currentTag ? `${WORDS[lang].qr_link} ${currentTag}` : WORDS[lang].qr_link;
  return WORDS[lang].no_tag;
}

function resetGradeUi() {
  pendingGrade = 0;
  gradeLocked = false;
  if ($('gradeRow')) $('gradeRow').hidden = !gradeMode;
  if ($('gradeCommentField')) $('gradeCommentField').hidden = true;
  if ($('gradeSaveBtn')) $('gradeSaveBtn').hidden = true;
  if ($('gradeComment')) $('gradeComment').value = '';
  if ($('gradeDone')) $('gradeDone').hidden = true;
  if ($('faultBtn')) $('faultBtn').hidden = gradeMode;
}

function setAsset(name, tagId = '', origin = 'typed') {
  currentTag = tagId;
  currentSource = origin;
  $('asset').value = name;
  $('assetStampName').textContent = name;
  $('assetSource').textContent = sourceLabel();
  if (gradeMode) resetGradeUi();
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

function speechErrorNote(error) {
  if (error === 'language-not-supported' || error === 'language-unavailable') {
    note('audioNote', t('speech_lang_unsupported'), true);
  } else if (error === 'not-allowed' || error === 'service-not-allowed') {
    note('audioNote', t('audio_denied'), true);
  } else {
    note('audioNote', `${t('speech_stopped')}: ${error}`, true);
  }
}

function startSpeechSession(langCode, handlers) {
  const Recognition = speechRecognition();
  if (!Recognition) return null;
  const recognition = new Recognition();
  recognition.lang = langCode;
  recognition.continuous = true;
  recognition.interimResults = true;
  const session = {
    recognition,
    langCode,
    texts: [],
    finalIndices: new Set(),
    timer: null,
    finished: false
  };
  const finish = () => {
    if (session.finished) return;
    session.finished = true;
    clearTimeout(session.timer);
    try { recognition.stop(); } catch { /* already stopped */ }
    const text = session.texts.join(' ').trim();
    if (text && handlers.onText) handlers.onText(text, langCode);
    if (handlers.onDone) handlers.onDone();
  };
  const scheduleStop = () => {
    clearTimeout(session.timer);
    session.timer = setTimeout(finish, SILENCE_MS);
  };
  session.stop = finish;
  recognition.onresult = (event) => {
    if (session.finished) return;
    let heard = false;
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i];
      if (!result || !result[0]) continue;
      heard = true;
      if (result.isFinal && !session.finalIndices.has(i)) {
        session.finalIndices.add(i);
        session.texts.push(String(result[0].transcript).trim());
      }
    }
    if (heard) scheduleStop();
  };
  recognition.onerror = (event) => {
    if (session.finished) return;
    const error = event.error;
    finish();
    speechErrorNote(error);
  };
  recognition.onend = () => {
    if (session.finished) return;
    finish();
  };
  try {
    recognition.start();
    scheduleStop();
  } catch (error) {
    speechErrorNote(error.message);
    return null;
  }
  return session;
}

function toggleVoice() {
  if (speechSession) {
    speechSession.stop();
    return;
  }
  if (!speechRecognition()) {
    note('audioNote', t('speech_unsupported'), true);
    return;
  }
  if (audioSpeechSession) {
    audioSpeechSession.stop();
    audioSpeechSession = null;
    audioRecognition = null;
  }
  speechSession = startSpeechSession(speechLang, {
    onText: (text, langCode) => appendSpoken(text, langCode),
    onDone: () => {
      speechSession = null;
      recognition = null;
      $('voiceBtn').classList.remove('listening');
      $('voiceBtn').textContent = t('speak');
    }
  });
  if (!speechSession) return;
  recognition = speechSession.recognition;
  $('voiceBtn').classList.add('listening');
  $('voiceBtn').textContent = t('listening');
  note('audioNote', t('listening'));
}

async function toggleAudio() {
  if (audioRecorder) {
    audioRecorder.stop();
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
    note('audioNote', t('audio_unsupported'), true);
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const langCode = speechLang;
    let speechStartError = '';
    if (speechRecognition()) {
      audioSpeechSession = startSpeechSession(langCode, {
        onText: (text, code) => appendSpoken(text, code),
        onDone: () => {
          audioSpeechSession = null;
          audioRecognition = null;
        }
      });
      audioRecognition = audioSpeechSession ? audioSpeechSession.recognition : null;
      if (!audioSpeechSession) speechStartError = 'start failed';
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
      if (audioSpeechSession) {
        audioSpeechSession.stop();
        audioSpeechSession = null;
      }
      audioRecognition = null;
      const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
      stream.getTracks().forEach((track) => track.stop());
      if (audioRecorder === recorder) {
        audioRecorder = null;
        $('audioBtn').classList.remove('recording');
        $('audioBtn').textContent = t('record_audio');
      }
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
    };
    recorder.start();
    $('audioBtn').classList.add('recording');
    $('audioBtn').textContent = t('record_audio_stop');
    note('audioNote', speechStartError ? `${t('speech_stopped')}: ${speechStartError}` : t('audio_recording'), Boolean(speechStartError));
  } catch (error) {
    if (audioSpeechSession) {
      audioSpeechSession.stop();
      audioSpeechSession = null;
    }
    audioRecognition = null;
    audioRecorder = null;
    audioToken += 1;
    note('audioNote', `${t('audio_denied')}: ${error.message}`, true);
  }
}

function updateNetwork() {
  const el = $('net');
  el.textContent = navigator.onLine ? 'Online' : 'Offline, queueing locally';
  el.classList.toggle('offline', !navigator.onLine);
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
  $('cleanBtn').hidden = open || gradeMode;
  $('defaultBtn').hidden = open || gradeMode;
  if (open) $('faultType').selectedIndex = 0;
}

function bind() {
  $('langToggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'et' : 'en';
    applyLanguage();
    if (recognition) toggleVoice();
    refreshCount();
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
    btn.addEventListener('click', () => {
      const value = Number(btn.dataset.grade);
      if (gradeLocked) {
        note('quickNote', WORDS[lang].grade_locked_note);
        return;
      }
      if (value === 3) {
        quickRecord('grade', 3);
        return;
      }
      pendingGrade = value;
      $('gradeCommentField').hidden = false;
      $('gradeSaveBtn').hidden = false;
      $('gradeComment').focus({ preventScroll: true });
      note('quickNote', WORDS[lang].grade_comment_required);
    });
  });
  $('gradeSaveBtn').addEventListener('click', () => {
    if (pendingGrade) quickRecord('grade', pendingGrade);
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
      if (audioSpeechSession) {
        audioSpeechSession.stop();
        audioSpeechSession = null;
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
    const file = event.target.files?.[0];
    if (!file) return;
    photoState = file.type.startsWith('video/') ? await analyseVideo(file) : await analysePhoto(file);
    note('photoNote', photoState.reason, !photoState.usable);
    updateTier();
  });
  for (const id of ['instrument', 'method', 'verdict']) $(id).addEventListener('change', updateTier);
  $('saveBtn').addEventListener('click', saveRecord);
  $('line').addEventListener('change', () => {
    const value = $('line').value;
    setAsset(t(value === 'all' ? 'line_all' : `line_${value}`), '', 'typed');
  });
  window.addEventListener('online', updateNetwork);
  window.addEventListener('offline', updateNetwork);
}

async function start() {
  const params = new URLSearchParams(location.search);
  const asset = params.get('asset');
  const tag = params.get('tag');
  const via = params.get('via');
  gradeMode = Boolean(asset && (via === 'nfc' || via === 'link'));
  document.body.classList.toggle('grade-mode', gradeMode);
  populateSelects();
  applyLanguage();
  bind();
  setSpeechLang(speechLang);
  updateTier();
  updateNetwork();
  if (gradeMode) {
    $('gradeRow').hidden = false;
    $('cleanBtn').hidden = true;
    $('defaultBtn').hidden = true;
    $('faultBtn').hidden = true;
    $('gradeCommentField').hidden = true;
    $('gradeSaveBtn').hidden = true;
    note('quickNote', WORDS[lang].grade_note);
  }
  if (asset) {
    setAsset(asset, tag || '', via === 'nfc' ? 'nfc' : 'link');
    document.querySelector('.proof-pad')?.scrollIntoView({ block: 'center' });
    if (gradeMode) $('grade3').focus({ preventScroll: true });
    else $('cleanBtn').focus({ preventScroll: true });
  }
  await refreshCount();
  await registerServiceWorker();
}

start().catch((error) => note('saveNote', `Startup failed: ${error.message}`, true));
