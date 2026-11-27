const $ = (id) => document.getElementById(id);

const WORDS = {
  en: {
    subtitle: 'Proof for the production line',
    rail_caption: 'One tap, one record.',
    flow_title: 'How it works',
    flow1: 'Stick the card on the place you check.',
    flow2: 'Tap the card with your phone.',
    flow3: 'Pick grade 3, 2 or 1.',
    flow4: 'The record saves straight away.',
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
    hero_note: 'An NFC card and a phone app for recording production line checks. Tap the card, pick a grade and the record is there.',
    intro_title: 'Hygiene checks in one tap.',
    what_title: 'What it is',
    what_body: 'Tap to Prove is an NFC card and phone app for hygiene checks on a production line. A waterproof card sits on each place to check. Tapping it opens the right place on the phone and the checker can save a grade at once.',
    what_note: 'When a photo is not possible, a fixed grade keeps the record complete. It can still be reviewed later. The card replaces the paper form instead of adding another step.',
    nav_what: 'What it is',
    nav_how: 'How it works',
    nav_try: 'Try',
    nav_cta: 'Try a check',
    hero_kicker: 'Hygiene checks on the line',
    hero_proof: 'No paper form. No photo needed.',
    float_card: 'NFC card',
    float_grade: '3 · 2 · 1',
    float_record: 'Record saved',
    float_default: 'No photo, still complete',
    what_heading: 'A check that writes itself.',
    how_heading: 'Four steps, one record.',
    benefits_kicker: 'Why a card',
    benefits_title: 'Made for the line.',
    benefit1_title: 'Faster than paper',
    benefit1_body: 'Tap the card, pick a grade and the check is written in seconds.',
    benefit2_title: 'Proof without a photo',
    benefit2_body: 'When a photo is not possible, a fixed grade keeps the record complete.',
    benefit3_title: 'Records in one place',
    benefit3_body: 'The live sheet shows new checks on the same device.',
    capture_kicker: 'Try a check',
    sample_toggle: 'See the synthetic sample month',
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
    speak: 'Speak',
    record_audio: 'Record voice note',
    record_audio_stop: 'Stop and save voice note',
    audio_hint: 'Press Speak and talk. The app detects your language from the first words.',
    audio_recording: 'Recording... tap to stop and save',
    audio_saved: 'Voice note saved',
    spoken_saved: 'Spoken text added',
    audio_unsupported: 'This browser cannot record audio.',
    speech_unsupported: 'This browser cannot turn speech into text. Type the note instead.',
    speech_lang_unsupported: 'Speech recognition is not available in this browser. Type the note instead.',
    speech_detected: 'Speech language detected',
    speech_fallback: 'Your browser language is unavailable for speech. Listening in English.',
    speech_stopped: 'Voice stopped',
    listening: 'Listening... pause 2-3s to stop',
    audio_denied: 'Microphone permission was denied.',
    audio_stop_first: 'Stop the voice note before saving.',
    note_label: 'What happened — write or speak',
    note_ph: 'Type here, or press Speak. Each recording adds a new line.',
    note_hint: 'Press Speak and talk. Estonian, Russian and English are detected from the first words; recognition may need an internet connection.',
    what_happened: 'What happened',
    photo: 'Photo evidence',
    evidence: 'Photo or video evidence',
    take_photo: 'Take photo',
    record_video: 'Record video',
    photo_hint: 'A photo or video only counts as evidence if the app can read it.',
    instrument: 'Instrument reading',
    save: 'Append record',
    excel: 'Excel CSV',
    excel_empty: 'No records yet. Append one first.',
    excel_done: 'Excel CSV ready. Rows:',
    excel_failed: 'Excel export failed.',
    sheet: 'Live records',
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
    grade_required: 'Pick a rating first.',
    grade_reason: 'Grade N recorded from the tagged place',
    grade_done: 'Grade N saved',
    grade3_label: '3 clean',
    grade2_label: '2 dirty',
    grade1_label: '1 serious',
    record_added: 'Record',
    nfc_tag: 'NFC card',
    qr_link: 'QR link',
    showcase: 'See the example and NFC link',
    footer: 'A. Le Coq challenge 3 at Hack the Future of Food 2026. Tap to prove.',
    hygiene_title: 'Hygiene log',
    hygiene_note: 'Last six weeks.',
    hygiene_download: 'Download workbook',
    hygiene_live: 'Grades: 3 clean, 2 needs review, 1 not clean. Cells fill from records on this device. The full year is in the workbook.',
    hygiene_checkpoint: 'Checkpoint',
    hygiene_date: 'Date',
    hygiene_unavailable: 'Hygiene grid data is unavailable.',
    landing_table: 'View table',
  },
  et: {
    subtitle: 'Tõend tootmisliinile',
    rail_caption: 'Üks puudutus, üks kirje.',
    flow_title: 'Kuidas see töötab',
    flow1: 'Kleebi kaart kontrollitava koha külge.',
    flow2: 'Puuduta kaarti telefoniga.',
    flow3: 'Vali hinne 3, 2 või 1.',
    flow4: 'Kirje salvestub kohe.',
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
    hero_note: 'NFC-kaart ja telefonirakendus tootmisliini kontrollide salvestamiseks. Puuduta kaarti, vali hinne ja kirje on kohe olemas.',
    intro_title: 'Hügieenikontroll ühe puudutusega.',
    what_title: 'Mis see on',
    what_body: 'Tap to Prove on NFC-kaartide ja telefonirakenduse lahendus tootmisliini hügieenikontrolliks. Iga kontrollitava koha küljes on veekindel kaart. Selle puudutamisel avaneb telefonis õige koht ja kontrollija saab hinnangu kohe salvestada.',
    what_note: 'Kui pilti teha ei saa, kasutatakse fikseeritud hinnangut. Kirje jääb ikkagi täielikuks ja selle saab hiljem üle vaadata. Kaart asendab pabervormi, mitte ei lisa uut sammu.',
    nav_what: 'Mis see on',
    nav_how: 'Kuidas töötab',
    nav_try: 'Proovi',
    nav_cta: 'Proovi kontrolli',
    hero_kicker: 'Tootmisliini hügieenikontroll',
    hero_proof: 'Pabervormi ega fotot pole vaja.',
    float_card: 'NFC kaart',
    float_grade: '3 · 2 · 1',
    float_record: 'Kirje on olemas',
    float_default: 'Pilti pole vaja',
    what_heading: 'Kontroll, mis kirjutab end ise.',
    how_heading: 'Neli sammu, üks kirje.',
    benefits_kicker: 'Miks kaart',
    benefits_title: 'Loodud liinile.',
    benefit1_title: 'Kiirem kui paber',
    benefit1_body: 'Puuduta kaarti, vali hinne ja kontroll on kirjas mõne sekundiga.',
    benefit2_title: 'Tõend ilma pildita',
    benefit2_body: 'Kui pilti ei saa, hoiab fikseeritud hinnang kirje täielikuna.',
    benefit3_title: 'Kirjed ühes kohas',
    benefit3_body: 'Elav tabel näitab uusi kontrolle samas seadmes kohe.',
    capture_kicker: 'Proovi kontrolli',
    sample_toggle: 'Vaata sünteetilist näidis kuud',
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
    speak: 'Räägi',
    record_audio: 'Salvesta häälmärkus',
    record_audio_stop: 'Peata ja salvesta häälmärkus',
    audio_hint: 'Vajuta „Räägi“ ning räägi. Rakendus tuvastab keele esimestest sõnadest.',
    audio_recording: 'Salvestan… vajuta peatamiseks ja salvestamiseks',
    audio_saved: 'Häälmärkus salvestatud',
    spoken_saved: 'Räägitud tekst lisatud',
    audio_unsupported: 'See brauser ei saa heli salvestada.',
    speech_unsupported: 'See brauser ei oska kõnet tekstiks muuta. Kirjuta tekst.',
    speech_lang_unsupported: 'Kõnetuvastus ei ole selles brauseris saadaval. Kirjuta tekst.',
    speech_detected: 'Tuvastatud kõne keel',
    speech_fallback: 'Brauseri keel pole kõnetuvastuses saadaval. Kuulan inglise keeles.',
    speech_stopped: 'Kõnetuvastus peatus',
    listening: 'Kuulan… 2–3 s vaikust ja mikrofon sulgub',
    audio_denied: 'Mikrofoni luba keelati.',
    audio_stop_first: 'Peata häälmärkus enne salvestamist.',
    note_label: 'Mis juhtus — kirjuta või räägi',
    note_ph: 'Kirjuta siia või vajuta „Räägi“. Iga salvestus lisab uue rea.',
    note_hint: 'Kõnetuvastus kasutab brauseri keelt ja võib vajada internetiühendust.',
    what_happened: 'Mis juhtus',
    photo: 'Foto tõend',
    evidence: 'Foto või video tõend',
    take_photo: 'Tee foto',
    record_video: 'Film video',
    photo_hint: 'Foto või video loeb tõendina ainult siis, kui rakendus suudab selle lugeda.',
    media_badge: 'Meedia',
    audio_badge: 'Häälmärkus',
    instrument: 'Mõõteriista näit',
    save: 'Lisa kirje',
    excel: 'Excel CSV',
    excel_empty: 'Kirjeid veel pole. Lisa esmalt üks kirje.',
    excel_done: 'Excel CSV on valmis. Ridu:',
    excel_failed: 'Exceli eksport ebaõnnestus.',
    sheet: 'Elavad kirjed',
    ledger_title: 'Jälgitav andmestik',
    chain_empty: 'Kirjeid veel pole. Esimene käivitab ahela.',
    filter: 'Otsi koha või kontrollpunkti järgi',
    export: 'Ekspordi JSONL',
    tamper: 'Näita ahela murdu',
    hygiene_title: 'Hügieenipäevik',
    hygiene_note: 'Viimased kuus nädalat.',
    hygiene_download: 'Laadi tööraamat alla',
    hygiene_live: 'Hinded: 3 korras, 2 vajab ülevaatamist, 1 ei ole korras. Lahtrid täituvad selle seadme kirjetest. Kogu aasta on Exceli failis.',
    hygiene_checkpoint: 'Kontrollpunkt',
    hygiene_date: 'Kuupäev',
    hygiene_unavailable: 'Hügieenitabeli andmed pole saadaval.',
    landing_table: 'Vaata tabelit',
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
    grade_prompt: 'Hinda seda kohta',
    grade_note: 'Vali 3 korras, 2 must või 1 tõsine.',
    grade_required: 'Vali esmalt hinne.',
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

const SPEECH_LOCALES = { et: 'et-EE', ru: 'ru-RU', en: 'en-US' };
const SPEECH_FALLBACK = 'en-US';
const SPEECH_LABELS = { 'et-EE': 'ET', 'ru-RU': 'RU', 'en-US': 'EN' };

// The Web Speech API needs a regional locale. A bare or unknown browser
// language used to leave recognition with no usable locale at all.
function speechLocale(code) {
  const base = String(code || '').toLowerCase().split('-')[0];
  return SPEECH_LOCALES[base] || SPEECH_FALLBACK;
}

function speechLabel(code) {
  return SPEECH_LABELS[code] || String(code || '').slice(0, 2).toUpperCase();
}

// One recogniser accepts one language, so the first words choose it.
function detectSpokenLang(text) {
  const value = String(text || '');
  if (/[\u0400-\u04FF]/.test(value)) return 'ru-RU';
  if (/[õÕäÄöÖüÜšŠžŽ]/.test(value) || /\b(puhas|mustus|tihend|drenaaž|kätepesu|vaht|jäägid|korras|masin|puhastatud|kontroll|seade|viga)\b/i.test(value)) return 'et-EE';
  return 'en-US';
}

let lang = 'et';
let speechLang = speechLocale(navigator.language);
let spokenLangs = new Set();
const SILENCE_MS = 2500;
let speechSession = null;
let audioSpeechSession = null;
let photoState = null;
let audioRecorder = null;
let audioState = null;
let currentTag = '';
let currentSource = 'typed';
let hygieneData = null;
let dbPromise = null;
let saving = false;
let audioToken = 0;
let photoToken = 0;
let photoPending = false;
let photoFailed = false;
let audioStarting = false;

let gradeMode = false;
let selectedGrade = 0;

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
  $('langToggle').textContent = lang === 'en' ? 'ET' : 'EN';
  $('langToggle').setAttribute('aria-label', lang === 'en' ? 'Switch to Estonian' : 'Switch to English');
  renderHygieneGrid();
}

function note(id, text, isError = false) {
  const el = $(id);
  el.textContent = text;
  el.classList.toggle('error', isError);
}

function t(key) {
  return WORDS[lang][key] || key;
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

const recordsChannel = 'BroadcastChannel' in window ? new BroadcastChannel('toend-records') : null;

function notifyRecords(record) {
  const event = { type: 'record', seq: record.seq, at: Date.now() };
  try {
    recordsChannel?.postMessage(event);
  } catch (error) {
    console.warn('record broadcast failed', error);
  }
  try {
    localStorage.setItem('toend-records-event', JSON.stringify(event));
  } catch (error) {
    console.warn('record event fallback failed', error);
  }
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
  return photoState?.usable ? 'B' : 'C';
}

function hasEvidence() {
  return Boolean(photoState?.usable);
}

function updateTier() {
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
  saving = true;
  try {
    await work();
  } catch (error) {
    note(noteId, `${t('save_failed')} ${error.message}`, true);
  } finally {
    $('photo').disabled = false;
    saving = false;
  }
}

function resetCaptureInputs() {
  if (speechSession) {
    speechSession.stop();
    speechSession = null;
  }
  $('transcript').value = '';
  setGrade(0);
  spokenLangs = new Set();
  $('photo').value = '';
  photoState = null;
  audioState = null;
  note('photoNote', t('photo_hint'));
  note('audioNote', t('audio_hint'));
  updateTier();
}

async function finishRecord(record, noteId, message) {
  resetCaptureInputs();
  await refreshCount();
  $('assetStamp').classList.add('flash');
  setTimeout(() => $('assetStamp').classList.remove('flash'), 350);
}

function quickRecord(kind, grade = 0) {
  return guardedWrite('quickNote', async () => {
    const asset = $('asset').value.trim();
    if (!asset) {
      note('quickNote', lang === 'et' ? 'Puuduta NFC-kaarti.' : 'Tap the NFC card.', true);
      return;
    }
    const isGrade = kind === 'grade';
    if (audioBusy('quickNote')) return;
    const isDefault = kind === 'default';
    const noEvidence = !hasEvidence();
    const defaultAssessment = (isDefault || (isGrade && grade === 3)) && noEvidence;
    const tier = isGrade ? 'C' : noEvidence ? 'C' : tierFor();
    const gradeReason = isGrade ? WORDS[lang].grade_reason.replace('N', grade) : '';
    const typed = $('transcript').value.trim();
    const transcript = isGrade ? (typed || gradeReason) : typed || WORDS[lang].default_reason;
    const verdict = isGrade ? (grade === 1 ? 'serious' : grade === 2 ? 'not clean' : 'clean') : 'clean';
    const reason = defaultAssessment ? WORDS[lang].default_reason : isGrade ? gradeReason : WORDS[lang].quick_reason;
    const previous = reusedPhoto(photoState);
    const record = await appendRecord({
      asset,
      tag_sig: currentTag,
      source: currentSource,
      method: isGrade ? 'Rated' : isDefault ? 'Declared' : 'Visual',
      verdict,
      grade: isGrade ? grade : isDefault ? 3 : null,
      transcript,
      tier,
      reason,
      supervisor: '',
      photo_hash: photoState?.hash || '',
      photo_thumb: photoState?.thumb || '',
      photo_usable: photoState?.usable || false,
      photo_reuse_of: previous?.seq || null,
      language: speechLang,
      default_assessment: defaultAssessment,
      quick: true,
      ...mediaPayload()
    }, photoState?.file, audioState?.blob);
    const done = isGrade ? WORDS[lang].grade_done.replace('N', grade) : isDefault ? WORDS[lang].default_done : WORDS[lang].quick_done;
    await finishRecord(record, 'quickNote', `${done} ${record.seq}.`);
  });
}

async function refreshCount() {
  allRecordsCache = await allRecords();
  fillHygieneFromRecords();
}



function isoWeek(value) {
  const source = new Date(value);
  if (Number.isNaN(source.getTime())) return null;
  const date = new Date(Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate()));
  const day = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
}

function gradeClass(grade) {
  return Number(grade) === 3 ? 'good' : Number(grade) === 2 ? 'warn' : Number(grade) === 1 ? 'bad' : '';
}

function setHygieneCell(cell, grade) {
  if (!cell || !grade) return;
  cell.textContent = String(grade);
  cell.className = gradeClass(grade);
}

function hygieneKey(asset) {
  if (!hygieneData) return null;
  const lower = String(asset || '').toLocaleLowerCase('et');
  const aliases = {
    siirupiruumi_sein: 'Siirupituba',
    syrup_room_wall: 'Siirupituba'
  };
  const alias = aliases[lower.replace(/\s+/g, '_')];
  if (alias) return alias;
  for (const label of hygieneData.rows) {
    const parts = label.split('/').map((part) => part.trim().toLocaleLowerCase('et'));
    if (parts.includes(lower)) return label.split('/')[0].trim();
  }
  return null;
}

function gradeFromRecord(record) {
  if (record.grade) return Number(record.grade);
  if (record.verdict === 'clean') return 3;
  if (record.verdict === 'not clean') return 2;
  if (record.verdict === 'serious') return 1;
  return null;
}

function visibleHygieneWeeks() {
  const weeks = hygieneData.weeks;
  const current = `N${isoWeek(new Date())}`;
  let end = weeks.indexOf(current);
  if (end < 0) end = weeks.length - 1;
  return weeks.slice(Math.max(0, end - 5), end + 1);
}

function renderHygieneGrid() {
  const host = $('hygieneGrid');
  if (!host || !hygieneData) return;
  const weeks = visibleHygieneWeeks();
  const head = `<tr><th class="cp-col">${t('hygiene_checkpoint')}</th>${weeks.map((week) => `<th>${week}</th>`).join('')}</tr>`;
  const dates = `<tr><td class="cp-col">${t('hygiene_date')}</td>${weeks.map((week) => `<td class="date-cell">${(hygieneData.dates?.[week] || '').slice(0, 5)}</td>`).join('')}</tr>`;
  const rows = hygieneData.rows.map((label) => {
    const key = label.split('/')[0].trim();
    const cells = weeks.map((week) => {
      const grade = hygieneData.seed?.[key]?.[week] || '';
      return `<td class="${gradeClass(grade)}" data-asset="${key}" data-week="${week}">${grade}</td>`;
    }).join('');
    return `<tr><th class="cp-col">${label}</th>${cells}</tr>`;
  }).join('');
  host.innerHTML = `<table id="hygieneTable"><thead>${head}${dates}</thead><tbody>${rows}</tbody></table>`;
  fillHygieneFromRecords();
}

function fillHygieneFromRecords() {
  if (!hygieneData || !allRecordsCache) return;
  for (const record of allRecordsCache) {
    const key = hygieneKey(record.asset);
    const week = isoWeek(record.created_at);
    if (!key || !week) continue;
    const cell = document.querySelector(`#hygieneTable td[data-asset="${key}"][data-week="N${week}"]`);
    setHygieneCell(cell, gradeFromRecord(record));
  }
}

async function loadHygieneGrid() {
  try {
    const response = await fetch('hygieen.json');
    if (!response.ok) throw new Error(String(response.status));
    hygieneData = await response.json();
    renderHygieneGrid();
  } catch (error) {
    const host = $('hygieneGrid');
    if (host) host.textContent = t('hygiene_unavailable');
  }
}


function setAsset(name, tagId = '', origin = 'typed') {
  currentTag = tagId;
  currentSource = origin;
  $('asset').value = name;
  $('assetStampName').textContent = name;
}


function appendSpoken(text) {
  const field = $('transcript');
  const paragraph = String(text || '').trim();
  if (!paragraph) return;
  const detected = detectSpokenLang(paragraph);
  field.value = field.value.trim() ? `${field.value.trim()}\n${paragraph}` : paragraph;
  field.focus({ preventScroll: true });
  field.setSelectionRange(field.value.length, field.value.length);
  spokenLangs.add(detected);
  note('audioNote', `${t('spoken_saved')} ${speechLabel(detected)}`);
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
    interim: '',
    finalIndices: new Set(),
    timer: null,
    finished: false
  };
  const stopRecognition = () => {
    session.finished = true;
    clearTimeout(session.timer);
    try { recognition.stop(); } catch { /* already stopped */ }
  };
  const finish = () => {
    if (session.finished) return;
    stopRecognition();
    // Interim words are all some browsers ever deliver before the mic closes.
    const text = [...session.texts, session.interim].join(' ').trim();
    if (text && handlers.onText) handlers.onText(text, langCode);
    if (handlers.onDone) handlers.onDone();
  };
  const scheduleStop = () => {
    clearTimeout(session.timer);
    session.timer = setTimeout(finish, SILENCE_MS);
  };
  session.stop = finish;
  // Dropping the first guess when the language changes must not append text.
  session.cancel = stopRecognition;
  recognition.onresult = (event) => {
    if (session.finished) return;
    let heard = false;
    let interim = '';
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i];
      if (!result || !result[0]) continue;
      heard = true;
      const value = String(result[0].transcript).trim();
      if (result.isFinal) {
        if (!session.finalIndices.has(i)) {
          session.finalIndices.add(i);
          session.texts.push(value);
        }
      } else {
        interim = `${interim} ${value}`.trim();
      }
    }
    session.interim = interim;
    if (interim && handlers.onInterim) handlers.onInterim(interim, langCode);
    if (heard) scheduleStop();
  };
  recognition.onerror = (event) => {
    if (session.finished) return;
    const retried = handlers.onUnsupported?.(event.error) ?? false;
    if (retried) return;
    finish();
    speechErrorNote(event.error);
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

// One mic press can span several recogniser sessions: the first words choose
// the language, then the rest of the dictation runs in that language.
function startAutoSpeechSession(handlers) {
  const auto = { session: null, detected: null, finished: false, fallbackUsed: false, stop: null };

  const begin = (code) => {
    if (auto.finished) return;
    const session = startSpeechSession(code, {
      onInterim: (text) => {
        if (auto.finished || auto.detected) return;
        const guess = detectSpokenLang(text);
        if (guess === code) return;
        auto.detected = guess;
        speechLang = guess;
        session.cancel();
        note('audioNote', `${t('speech_detected')}: ${speechLabel(guess)}`);
        begin(guess);
      },
      onText: (text) => {
        if (auto.finished) return;
        auto.detected = auto.detected || detectSpokenLang(text);
        speechLang = auto.detected;
        if (handlers.onText) handlers.onText(text, auto.detected);
      },
      onUnsupported: (error) => {
        if (auto.finished || auto.fallbackUsed) return false;
        if (error !== 'language-not-supported' && error !== 'language-unavailable') return false;
        auto.fallbackUsed = true;
        auto.detected = null;
        session.cancel();
        speechLang = SPEECH_FALLBACK;
        note('audioNote', t('speech_fallback'));
        begin(SPEECH_FALLBACK);
        return true;
      },
      onDone: () => {
        if (auto.finished) return;
        auto.finished = true;
        if (handlers.onDone) handlers.onDone();
      }
    });
    if (!session) {
      auto.finished = true;
      if (handlers.onDone) handlers.onDone();
      return;
    }
    auto.session = session;
  };

  begin(speechLang);
  auto.stop = () => {
    if (auto.finished) return;
    if (auto.session) auto.session.stop();
    else {
      auto.finished = true;
      if (handlers.onDone) handlers.onDone();
    }
  };
  return auto;
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
  speechSession = startAutoSpeechSession({
    onText: (text) => appendSpoken(text),
    onDone: () => {
      speechSession = null;
      $('voiceBtn').classList.remove('listening');
      $('voiceBtn').textContent = t('speak');
    }
  });
  if (speechSession.finished) return;
  $('voiceBtn').classList.add('listening');
  $('voiceBtn').textContent = t('listening');
  note('audioNote', t('listening'));
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

function setGrade(value) {
  selectedGrade = value;
  document.querySelectorAll('.grade-btn').forEach((button) => {
    const active = Number(button.dataset.grade) === value;
    button.classList.toggle('selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (value) note('quickNote', '');
}

function saveFromForm() {
  if (!selectedGrade) {
    note('quickNote', t('grade_required'), true);
    return;
  }
  if (selectedGrade === 3 && !hasEvidence()) return quickRecord('default');
  return quickRecord('grade', selectedGrade);
}

function bind() {
  $('langToggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'et' : 'en';
    applyLanguage();
    if (speechSession) toggleVoice();
    refreshCount();
  });
  $('asset').addEventListener('input', () => {
    currentTag = '';
    currentSource = 'typed';
    $('assetStampName').textContent = $('asset').value.trim() || t('untagged');
  });
  document.querySelectorAll('.grade-btn').forEach((btn) => {
    btn.addEventListener('click', () => setGrade(Number(btn.dataset.grade)));
  });
  $('voiceBtn').addEventListener('click', toggleVoice);
  $('photoBtn').addEventListener('click', () => {
    $('photo').accept = 'image/*';
    $('photo').capture = 'environment';
    $('photo').click();
  });
  $('videoBtn').addEventListener('click', () => {
    $('photo').accept = 'video/*';
    $('photo').capture = 'environment';
    $('photo').click();
  });
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
  $('saveBtn').addEventListener('click', saveFromForm);
  window.addEventListener('online', updateNetwork);
  window.addEventListener('offline', updateNetwork);
}

async function start() {
  const params = new URLSearchParams(location.search);
  const asset = params.get('asset');
  const tag = params.get('tag');
  const via = params.get('via');
  gradeMode = Boolean(asset && (via === 'nfc' || via === 'link'));
  applyLanguage();
  bind();
  updateTier();
  updateNetwork();
  if (asset) {
    setAsset(asset, tag || '', via === 'nfc' ? 'nfc' : 'link');
    document.getElementById('capture')?.scrollIntoView({ block: 'start' });
    $('grade3').focus({ preventScroll: true });
  }
  await loadHygieneGrid();
  await refreshCount();
  await registerServiceWorker();
}

start().catch((error) => note('saveNote', `Startup failed: ${error.message}`, true));
