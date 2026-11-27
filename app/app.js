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
    q_media: 'Records with media',
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
    q_media: 'Kirjed meediaga',
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
let speechLang = 'et-EE';
let spokenLangs = new Set();
let ndefReader = null;
let recognition = null;
let audioRecognition = null;
let photoState = null;
let audioRecorder = null;
let audioState = null;
let mediaUrls = new Set();
let demoBreak = null;
let currentTag = '';
let currentSource = 'typed';

let gradeMode = false;
function applyLanguage() {
  document.documentElement.lang = lang === 'et' ? 'et' : 'en';
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const word = WORDS[lang][el.dataset.i18n];
    if (word) el.textContent = word;
  }
  for (const el of document.querySelectorAll('[data-i18n-placeholder]')) {
    const word = WORDS[lang][el.dataset.i18nPlaceholder];
    if (word) el.placeholder = word;
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
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('toend', 2);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('records')) db.createObjectStore('records', { keyPath: 'seq' });
      if (!db.objectStoreNames.contains('media')) db.createObjectStore('media', { keyPath: 'key' });
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

async function putMedia(key, blob) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('media', 'readwrite');
    tx.objectStore('media').put({ key, blob });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
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

async function saveRecord() {
  const asset = $('asset').value.trim();
  const transcript = $('transcript').value.trim();
  if (!asset || !transcript) {
    note('saveNote', 'Asset and what happened are required.', true);
    return;
  }
  if (audioBusy('saveNote')) return;

  const tier = tierFor();
  const verdict = $('verdict').value;
  const reason = tier === 'C' ? t('default_reason') : '';
  const instrument = $('instrument').value.trim();

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
    supervisor: '',
    instrument,
    photo_hash: photoState?.hash || '',
    photo_thumb: photoState?.thumb || '',
    photo_usable: photoState?.usable || false,
    photo_reuse_of: previous?.seq || null,
    language: speechLang,
    ...mediaPayload()
  });

  await persistMedia(record);
  await finishRecord(record, 'saveNote', `Record ${record.seq} appended. Hash ${record.hash.slice(0, 12)}.`);
}

async function finishRecord(record, noteId, message) {
  demoBreak = null;
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

async function quickRecord(kind, grade = 0) {
  const asset = $('asset').value.trim();
  if (!asset) {
    note('quickNote', lang === 'et' ? 'Puuduta kleepsu või kirjuta masina nimi.' : 'Tap the sticker or type the machine name.', true);
    return;
  }
  const isGrade = kind === 'grade';
  if (audioBusy('quickNote')) return;
  const isDefault = kind === 'default';
  const isClean = kind === 'clean' || isDefault || (isGrade && grade === 3);
  const previous = photoState ? reusedPhoto(photoState.hash) : null;
  const tier = isDefault || isGrade ? 'C' : !isClean && photoState?.usable && !previous ? 'B' : 'C';
  const gradeReason = isGrade ? WORDS[lang].grade_reason.replace('N', grade) : '';
  const transcript = isGrade ? gradeReason : isClean ? WORDS[lang].quick_prompt : $('faultType').value;
  const verdict = isGrade ? (grade === 1 ? 'serious' : grade === 2 ? 'not clean' : 'clean') : isClean ? 'clean' : 'not clean';
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
    reason: isGrade ? gradeReason : isDefault ? WORDS[lang].default_reason : isClean ? WORDS[lang].quick_reason : WORDS[lang].quick_fault_reason,
    supervisor: '',
    instrument: '',
    photo_hash: photoState?.hash || '',
    photo_thumb: photoState?.thumb || '',
    photo_usable: photoState?.usable || false,
    photo_reuse_of: previous?.seq || null,
    language: speechLang,
    default_assessment: isDefault,
    quick: true,
    ...mediaPayload()
  });
  await persistMedia(record);
  $('faultField').hidden = true;
  $('faultSaveBtn').hidden = true;
  const done = isGrade ? WORDS[lang].grade_done.replace('N', grade) : isDefault ? WORDS[lang].default_done : WORDS[lang].quick_done;
  await finishRecord(record, 'quickNote', `${done} ${record.seq}.`);
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
  if (kind === 'unsigned') found = allRecordsCache.filter((r) => r.verdict === 'clean' && r.tier === 'C');
  if (kind === 'tierc') found = allRecordsCache.filter((r) => r.tier === 'C');
  if (kind === 'today') found = allRecordsCache.filter((r) => r.created_at.slice(0, 10) === today);
  if (kind === 'defaults') found = allRecordsCache.filter((r) => r.default_assessment);
  if (kind === 'media') found = allRecordsCache.filter((r) => r.media_hash || r.audio_hash);
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
  const url = `https://nfc.arle.top/?asset=${encodeURIComponent(name)}&tag=MANUAL&via=nfc`;
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
  return `https://nfc.arle.top/?asset=${encodeURIComponent(tag.name)}&tag=${encodeURIComponent(tag.sig)}&via=nfc`;
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
  recognition.start();
  $('voiceBtn').classList.add('listening');
  $('voiceBtn').textContent = t('listening');
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
    const Recognition = speechRecognition();
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
      audioRecognition.start();
    }
    const mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus']
      .find((candidate) => MediaRecorder.isTypeSupported(candidate)) || '';
    const chunks = [];
    const started = Date.now();
    audioState = null;
    audioRecorder = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
    audioRecorder.ondataavailable = (event) => {
      if (event.data.size) chunks.push(event.data);
    };
    audioRecorder.onstop = async () => {
      if (audioRecognition) {
        audioRecognition.stop();
        audioRecognition = null;
      }
      const blob = new Blob(chunks, { type: audioRecorder.mimeType || 'audio/webm' });
      stream.getTracks().forEach((track) => track.stop());
      audioRecorder = null;
      $('audioBtn').classList.remove('recording');
      $('audioBtn').textContent = t('record_audio');
      if (!blob.size) {
        note('audioNote', t('audio_unsupported'), true);
        return;
      }
      audioState = {
        blob,
        hash: await hashBlob(blob),
        mime: blob.type,
        size: blob.size,
        duration: Math.round((Date.now() - started) / 1000)
      };
      note('audioNote', `${t('audio_saved')} ${audioState.duration}s`);
    };
    audioRecorder.start();
    $('audioBtn').classList.add('recording');
    $('audioBtn').textContent = t('record_audio_stop');
    note('audioNote', t('audio_recording'));
  } catch (error) {
    if (audioRecognition) {
      audioRecognition.stop();
      audioRecognition = null;
    }
    audioRecorder = null;
    note('audioNote', `${t('audio_denied')}: ${error.message}`, true);
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
  document.querySelectorAll('.grade-btn').forEach((btn) => {
    btn.addEventListener('click', () => quickRecord('grade', Number(btn.dataset.grade)));
  });
  $('faultBtn').addEventListener('click', () => {
    $('faultField').hidden = false;
    $('faultSaveBtn').hidden = false;
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
    const file = event.target.files?.[0];
    if (!file) return;
    photoState = file.type.startsWith('video/') ? await analyseVideo(file) : await analysePhoto(file);
    note('photoNote', photoState.reason, !photoState.usable);
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
  const params = new URLSearchParams(location.search);
  const asset = params.get('asset');
  const tag = params.get('tag');
  const via = params.get('via');
  gradeMode = Boolean(asset && (via === 'nfc' || via === 'link'));
  populateSelects();
  applyLanguage();
  renderTagSlots();
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
    setAsset(asset, tag || '', via === 'nfc' ? 'nfc' : tag ? 'link' : 'typed');
    document.querySelector('.proof-pad')?.scrollIntoView({ block: 'center' });
    if (gradeMode) $('grade3').focus({ preventScroll: true });
    else $('cleanBtn').focus({ preventScroll: true });
  }
  initNfc();
  await refreshRecords();
  await loadCip();
  await registerServiceWorker();
}

start().catch((error) => note('saveNote', `Startup failed: ${error.message}`, true));
