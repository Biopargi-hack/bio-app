import { imageHashBits } from './data.js';

const $ = (id) => document.getElementById(id);

const WORDS = {
  en: {
    rail_caption: 'One tap, one record.',
    flow1: 'Stick the card on the place you check.',
    flow2: 'Tap the card with your phone.',
    flow3: 'Pick grade 3, 2 or 1.',
    flow4: 'The record saves straight away.',
    default_title: 'No photo?',
    default_copy: 'Use the fixed default. It records a fixed reason and stays traceable.',
    offline_title: 'Works offline',
    offline_copy: 'Checks are written to the device first, even with no network.',
    line: 'Line',
    worker: 'Worker',
    line_all: 'All lines',
    place_prompt: 'Choose a place',
    place_required: 'Choose a place or tap the NFC card.',
    line_1: 'Line 1',
    line_2: 'Line 2',
    line_3: 'Line 3',
    line_4: 'Line 4',
    line_5: 'Line 5',
    skip: 'Skip to capture',
    hero_note: 'An NFC card and a phone app for recording production line checks. Tap the card, pick a grade and the record is there.',
    intro_title: 'Hygiene checks in one tap.',
    what_body: 'Tap to Prove is an NFC card and phone app for hygiene checks on a production line. A waterproof card sits on each place to check. Tapping it opens the right place on the phone and the checker can save a grade at once.',
    what_note: 'When a photo is not possible, a fixed grade keeps the record complete. It can still be reviewed later. The card replaces the paper form instead of adding another step.',
    nav_what: 'What it is',
    nav_how: 'How it works',
    nav_try: 'Try on your phone',
    nav_table: 'Table',
    nav_cta: 'Try a check',
    landing_start: 'Try a check',
    hero_proof: 'No paper form. No photo needed.',
    what_heading: 'A check that writes itself.',
    how_heading: 'Four steps, one record.',
    benefits_title: 'Made for the line.',
    benefit1_title: 'Faster than paper',
    benefit1_body: 'Tap the card, pick a grade and the check is written in seconds.',
    benefit2_title: 'Proof without a photo',
    benefit2_body: 'When a photo is not possible, a fixed grade keeps the record complete.',
    benefit3_title: 'Records in one place',
    benefit3_body: 'The live sheet shows new checks on the same device.',
    sample_toggle: 'See the synthetic sample month',
    capture_title: 'Check capture',
    untagged: 'Untagged asset',
    no_tag: 'No tag read yet',
    asset: 'Asset',
    checkpoint: 'Checkpoint',
    method: 'Method',
    verdict: 'Verdict',
    clean: 'Clean',
    not_clean: 'Not clean',
    cannot_sign: 'Cannot sign',
    speak: 'Speak',
    record_audio: 'Record voice note',
    record_audio_stop: 'Stop and save voice note',
    audio_hint: 'Press Speak, then talk. A long note is kept in full. Spelling is corrected when you are online.',
    audio_recording: 'Recording... tap to stop and save',
    audio_saved: 'Voice note saved',
    spoken_saved: 'Spoken text added',
    audio_unsupported: 'This browser cannot record audio.',
    speech_lang_unsupported: 'Speech recognition is not available in this browser. Type the note instead.',
    speech_fallback: 'Estonian is unavailable for speech here. Listening in English.',
    speech_stopped: 'Voice stopped',
    listening: 'Listening',
    record_stop_hint: 'Press the button again when you are done.',
    speech_to_record: 'Browser speech is not answering, recording instead. Press again when you are done.',
    transcribing: 'Writing it down...',
    record_failed: 'Could not write the voice down. Check the microphone permission and the connection.',
    record_short: 'The recording was too short. Press, speak, and press again.',
    polishing: 'Correcting spelling',
    audio_denied: 'Microphone permission was denied.',
    audio_stop_first: 'Stop the voice note before saving.',
    note_label: 'What happened — write or speak',
    note_ph: 'Type here, or press Speak. Each recording adds a new line.',
    note_hint: 'A letter you add stays. Spelling is corrected when you are online.',
    what_happened: 'What happened',
    photo: 'Photo evidence',
    take_photo: 'Take photo',
    record_video: 'Filmi video',
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
    grade_escalated: 'Four consecutive grade 2 checks: saved as grade 1.',
    grade3_label: '3 clean',
    grade2_label: '2 dirty',
    grade1_label: '1 serious',
    record_added: 'Record',
    media_photo_ready: 'Photo added',
    media_video_ready: 'Video added',
    media_rejected: 'Attached, but it does not count as evidence',
    media_clear: 'Remove',
    media_clear_all: 'Remove all',
    media_unusable_flag: 'does not count',
    media_ready_many: 'N files added',
    media_ready_many_note: 'N files go with the record.',
    media_partly_unusable: 'N files do not count as evidence.',
    media_limit: 'Up to 6 files per record.',
    saved_with_files: 'saved with N files',
    media_ready_hint: 'This is what will be attached to the record.',
    photo_readable: 'Photo is readable and goes with the record.',
    video_readable: 'Video goes with the record.',
    photo_unusable: 'Too flat or too dark for evidence. The record still saves.',
    media_unreadable: 'This file cannot be read. Choose another one.',
    saved_with_photo: 'saved with the photo',
    saved_with_video: 'saved with the video',
    saved_no_media: 'saved without media',
    open_sheet: 'See the records',
    nfc_tag: 'NFC card',
    qr_link: 'QR link',
    showcase: 'See the example and NFC link',
    footer: 'A. Le Coq challenge 3 at Hack the Future of Food 2026. Tap to prove.',
    sheet_title: 'Table',
    sheet_open: 'Open in Google Sheets',
    sheet_note: 'The checks live in Google Sheets. The table opens in a new tab and only people it is shared with can see it.',
    landing_table: 'View table',
    paper: 'Print the paper form',
    grade_short: 'grade',
    grade3_word: 'clean',
    grade2_word: 'dirty',
    grade1_word: 'serious',
    capture_intro: 'Save a real check from this browser. On a phone the same form opens when an NFC card is tapped.',
    try_title: 'Try it on your phone.',
    try_body: 'Scan the code with your phone camera. It opens the same checkpoint that an NFC card tap opens.',
    try_cta: 'Open the checkpoint',
    try_caption: 'Sample place and card',
    demo_title: 'Try it here',
    demo_hint: 'Drag a card onto the phone, or press a card.',
    demo_idle: 'Hold the phone to a card',
    demo_saved: 'Record saved',
    demo_place: 'Place',
  },
  et: {
    rail_caption: 'Üks puudutus, üks kirje.',
    flow1: 'Kleebi kaart kontrollitava koha külge.',
    flow2: 'Puuduta kaarti telefoniga.',
    flow3: 'Vali hinne 3, 2 või 1.',
    flow4: 'Kirje salvestub kohe.',
    default_title: 'Pilti ei saa?',
    default_copy: 'Kasuta fikseeritud hinnangut. See salvestab fikseeritud põhjuse ja kirje jääb jälgitavaks.',
    offline_title: 'Töötab võrguta',
    offline_copy: 'Kontroll salvestub esmalt seadmesse, ka ilma võrguta.',
    line: 'Liin',
    worker: 'Teostaja',
    line_all: 'Kõik liinid',
    place_prompt: 'Vali koht',
    place_required: 'Vali koht või puuduta NFC-kaarti.',
    line_1: 'Liin 1',
    line_2: 'Liin 2',
    line_3: 'Liin 3',
    line_4: 'Liin 4',
    line_5: 'Liin 5',
    skip: 'Liigu salvestamise juurde',
    hero_note: 'NFC-kaart ja telefonirakendus tootmisliini kontrollide salvestamiseks. Puuduta kaarti, vali hinne ja kirje on kohe olemas.',
    intro_title: 'Hügieenikontroll ühe puudutusega.',
    what_body: 'Tap to Prove on NFC-kaartide ja telefonirakenduse lahendus tootmisliini hügieenikontrolliks. Iga kontrollitava koha küljes on veekindel kaart. Selle puudutamisel avaneb telefonis õige koht ja kontrollija saab hinnangu kohe salvestada.',
    what_note: 'Kui pilti teha ei saa, kasutatakse fikseeritud hinnangut. Kirje jääb ikkagi täielikuks ja selle saab hiljem üle vaadata. Kaart asendab pabervormi, mitte ei lisa uut sammu.',
    nav_what: 'Mis see on',
    nav_how: 'Kuidas töötab',
    nav_try: 'Proovi telefonis',
    nav_table: 'Tabel',
    nav_cta: 'Proovi kontrolli',
    landing_start: 'Proovi kontrolli',
    hero_proof: 'Pabervormi ega fotot pole vaja.',
    what_heading: 'Kontroll, mis kirjutab end ise.',
    how_heading: 'Neli sammu, üks kirje.',
    benefits_title: 'Loodud liinile.',
    benefit1_title: 'Kiirem kui paber',
    benefit1_body: 'Puuduta kaarti, vali hinne ja kontroll on kirjas mõne sekundiga.',
    benefit2_title: 'Tõend ilma pildita',
    benefit2_body: 'Kui pilti ei saa, hoiab fikseeritud hinnang kirje täielikuna.',
    benefit3_title: 'Kirjed ühes kohas',
    benefit3_body: 'Elav tabel näitab uusi kontrolle samas seadmes kohe.',
    sample_toggle: 'Vaata sünteetilist näidis kuud',
    capture_title: 'Kontrolli salvestamine',
    untagged: 'Märgistamata koht',
    no_tag: 'Silti veel loetud pole',
    asset: 'Koht',
    checkpoint: 'Kontrollpunkt',
    method: 'Meetod',
    verdict: 'Otsus',
    clean: 'Puhas',
    not_clean: 'Ei ole puhas',
    cannot_sign: 'Ei saa allkirjastada',
    speak: 'Räägi',
    record_audio: 'Salvesta häälmärkus',
    record_audio_stop: 'Peata ja salvesta häälmärkus',
    audio_hint: 'Vajuta Räägi ja räägi. Pikk jutt jääb tervenisti alles ja kirjaviis täpsustub.',
    audio_recording: 'Salvestan… vajuta peatamiseks ja salvestamiseks',
    audio_saved: 'Häälmärkus salvestatud',
    spoken_saved: 'Räägitud tekst lisatud',
    audio_unsupported: 'See brauser ei saa heli salvestada.',
    speech_lang_unsupported: 'Kõnetuvastus ei ole selles brauseris saadaval. Kirjuta tekst.',
    speech_fallback: 'Eesti keel pole kõnetuvastuses saadaval. Kuulan inglise keeles.',
    speech_stopped: 'Kõnetuvastus peatus',
    listening: 'Kuulan',
    record_stop_hint: 'Vajuta nuppu uuesti, kui oled lõpetanud.',
    speech_to_record: 'Brauseri kõnetuvastus ei vasta, salvestan ise. Vajuta uuesti, kui oled lõpetanud.',
    transcribing: 'Kirjutan üles…',
    record_failed: 'Häält ei saanud üles kirjutada. Kontrolli mikrofoniluba ja ühendust.',
    record_short: 'Salvestus jäi liiga lühikeseks. Vajuta, räägi ja vajuta uuesti.',
    polishing: 'Parandan kirjavigu',
    audio_denied: 'Mikrofoni luba keelati.',
    audio_stop_first: 'Peata häälmärkus enne salvestamist.',
    note_label: 'Mis juhtus — kirjuta või räägi',
    note_ph: 'Kirjuta siia või vajuta „Räägi“. Puuduv täht jääb alles.',
    note_hint: 'Kui lisad puuduva tähe, jääb see alles. Võrgus parandatakse ka kirjavead.',
    what_happened: 'Mis juhtus',
    photo: 'Foto tõend',
    take_photo: 'Tee foto',
    record_video: 'Filmi video',
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
    sheet_title: 'Tabel',
    sheet_open: 'Ava Google Sheetsis',
    sheet_note: 'Kontrollid on Google Sheetsis. Tabel avaneb uues aknas ja seda näevad need, kellele see on jagatud.',
    landing_table: 'Vaata tabelit',
    grade3_word: 'korras',
    grade2_word: 'must',
    grade1_word: 'tõsine',
    capture_intro: 'Salvesta päris kontroll siit brauserist. Telefonis avaneb sama vorm NFC-kaardi puudutusel.',
    try_title: 'Proovi telefonis.',
    try_body: 'Skaneeri kood telefoni kaameraga. Avaneb sama kontrollpunkt, mis avaneb NFC-kaardi puudutusel.',
    try_cta: 'Ava kontrollpunkt',
    try_caption: 'Näidiskoht ja kaart',
    demo_title: 'Proovi siin',
    demo_hint: 'Lohista kaart telefonile või vajuta kaardile.',
    demo_idle: 'Hoia telefoni kaardi vastas',
    demo_saved: 'Kirje salvestatud',
    demo_place: 'Koht',
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
    grade_escalated: 'Neli järjestikust hinnet 2: salvestati hindena 1.',
    grade_short: 'hinne',
    grade3_label: '3 korras',
    grade2_label: '2 must',
    grade1_label: '1 tõsine',
    record_added: 'Kirje',
    media_photo_ready: 'Pilt lisatud',
    media_video_ready: 'Video lisatud',
    media_rejected: 'Lisatud, aga tõendina ei loe',
    media_clear: 'Eemalda',
    media_clear_all: 'Eemalda kõik',
    media_unusable_flag: 'ei loe tõendina',
    media_ready_many: 'N faili lisatud',
    media_ready_many_note: 'N faili läheb kirje külge.',
    media_partly_unusable: 'N faili ei loe tõendina.',
    media_limit: 'Korraga kuni 6 faili.',
    saved_with_files: 'salvestatud koos N failiga',
    media_ready_hint: 'See läheb kirje külge.',
    photo_readable: 'Pilt on loetav ja läheb kirje külge.',
    video_readable: 'Video läheb kirje külge.',
    photo_unusable: 'Pilt on liiga ühtlane või liiga tume, et tõendina lugeda. Kirje salvestub ikka.',
    media_unreadable: 'Seda faili ei saa lugeda. Vali teine.',
    saved_with_photo: 'salvestatud koos pildiga',
    saved_with_video: 'salvestatud koos videoga',
    saved_no_media: 'salvestatud ilma meediata',
    open_sheet: 'Vaata kirjeid',
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

const SPEECH_FALLBACK = 'en-US';

// One recogniser accepts one language, so the first words choose it.
function detectSpokenLang(text) {
  const value = String(text || '');
  if (/[\u0400-\u04FF]/.test(value)) return 'ru-RU';
  if (/[õÕäÄöÖüÜšŠžŽ]/.test(value) || /\b(puhas|mustus|tihend|drenaaž|kätepesu|vaht|jäägid|korras|masin|puhastatud|kontroll|seade|viga)\b/i.test(value)) return 'et-EE';
  return 'en-US';
}

let lang = localStorage.getItem('toend-lang') === 'en' ? 'en' : 'et';
let speechLang = 'et-EE';
let spokenLangs = new Set();
const SILENCE_MS = 2500;
// Chrome stops growing one speech hypothesis near a few hundred characters.
// Flush and open the next session before that, so a spoken note has no length cap.
const SPEECH_CHUNK_CHARS = 160;
const SPEECH_CHUNK_MS = 8000;
let voiceHold = false;
let speechBase = '';
let utteranceBase = '';
let userOwned = false;
let polishing = false;
let polishToken = 0;
let speechGraceUntil = 0;
let speechSession = null;
let audioSpeechSession = null;
let mediaItems = [];
let galleryUrls = [];
const MAX_MEDIA = 6;
let audioRecorder = null;
let audioState = null;
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
let selectedGrade = 0;
let lastSavedRecord = null;

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
  renderMediaPreview();
  showMediaNote();
  refreshSavedRecord();
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
  let index = 0;
  // Python counts code points, so iterate characters rather than UTF-16 units.
  for (const char of text) {
    const code = char.codePointAt(0);
    h1 = Math.imul(h1 ^ code, 16777619) >>> 0;
    h2 = Math.imul(h2 + code + index, 2246822519) >>> 0;
    index += 1;
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
  if (!recordsChannel) {
    try {
      localStorage.setItem('toend-records-event', JSON.stringify(event));
    } catch (error) {
      console.warn('record event fallback failed', error);
    }
  }
}

async function appendRecord(payload, mediaFiles = [], audioBlob) {
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
      if (payload.grade === 2) {
        let consecutive = 0;
        for (let i = records.length - 1; i >= 0; i -= 1) {
          if (records[i].asset !== payload.asset) continue;
          if (records[i].grade !== 2) break;
          if (++consecutive === 3) break;
        }
        if (consecutive === 3) {
          const gradeReason = WORDS[lang].grade_reason.replace('N', 2);
          payload = {
            ...payload,
            selected_grade: 2,
            grade: 1,
            verdict: 'serious',
            reason: t('grade_escalated'),
            transcript: payload.transcript === gradeReason ? t('grade_escalated') : payload.transcript
          };
        }
      }
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
      mediaFiles.forEach((file, position) => {
        if (!file) return;
        // The first file can be a re-shot of an earlier photo; that blob stays on the earlier record.
        if (position === 0 && payload.photo_reuse_of) return;
        media.put({ key: position === 0 ? `${seq}:media` : `${seq}:media:${position}`, blob: file });
      });
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
  return imageHashBits(bits);
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
      reason: usable ? 'ok' : 'unusable',
      detail: `variance ${variance.toFixed(0)}, edge ${edges.toFixed(1)}, light ${mean.toFixed(0)}`
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
      reason: 'unreadable',
      detail: error.message
    };
  }
}

async function analyseVideo(file) {
  const byteHash = await hashBlob(file);
  const meta = { kind: 'video', media_hash: byteHash, file, name: file.name, mime: file.type, size: file.size };
  const url = URL.createObjectURL(file);
  try {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    video.src = url;
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('video decode timeout')), 3000);
      video.onloadeddata = () => { clearTimeout(timer); resolve(); };
      video.onerror = () => { clearTimeout(timer); reject(new Error('video decode failed')); };
    });
    // A frame at time zero is often black, so seek into the clip before drawing.
    await new Promise((resolve) => {
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        video.removeEventListener('seeked', done);
        resolve();
      };
      const timer = setTimeout(done, 1200);
      video.addEventListener('seeked', done);
      const target = Math.min(0.2, (video.duration || 0) / 2);
      if (target > 0) video.currentTime = target;
      else done();
    });
    const canvas = document.createElement('canvas');
    canvas.width = 72;
    canvas.height = 72;
    canvas.getContext('2d').drawImage(video, 0, 0, 72, 72);
    const thumb = canvas.toDataURL('image/png');
    URL.revokeObjectURL(url);
    return { ...meta, usable: file.size > 0, hash: byteHash, thumb, reason: 'ok', detail: `${file.type} ${formatBytes(file.size)}` };
  } catch (error) {
    URL.revokeObjectURL(url);
    return { ...meta, usable: false, hash: byteHash, thumb: '', reason: 'unreadable', detail: error.message };
  }
}

function formatBytes(bytes) {
  const size = Number(bytes);
  if (!Number.isFinite(size) || size <= 0) return '';
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} kB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function releaseGalleryUrls() {
  for (const url of galleryUrls) URL.revokeObjectURL(url);
  galleryUrls = [];
}

function hideMediaPreview() {
  const box = $('mediaPreview');
  const gallery = $('mediaGallery');
  releaseGalleryUrls();
  gallery?.replaceChildren();
  if (box) box.hidden = true;
}

// Every chosen photo or video stays on screen, so the checker sees all attachments
// before the record is appended. A sticker on one line often needs three photos.
function renderMediaPreview() {
  const box = $('mediaPreview');
  const gallery = $('mediaGallery');
  if (!box || !gallery) return;
  releaseGalleryUrls();
  gallery.replaceChildren();
  if (!mediaItems.length) {
    box.hidden = true;
    return;
  }
  mediaItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'media-item';
    if (!item.usable) li.classList.add('is-unusable');
    const frame = document.createElement('div');
    frame.className = 'media-item-frame';
    if (item.file) {
      const url = URL.createObjectURL(item.file);
      galleryUrls.push(url);
      if (item.kind === 'video') {
        const video = document.createElement('video');
        video.src = url;
        video.controls = true;
        video.playsInline = true;
        video.muted = true;
        frame.append(video);
      } else {
        const image = document.createElement('img');
        image.src = url;
        image.alt = item.name || '';
        frame.append(image);
      }
    }
    const bar = document.createElement('div');
    bar.className = 'media-item-bar';
    const name = document.createElement('span');
    name.className = 'media-item-name';
    name.textContent = item.name || String(index + 1);
    name.title = [item.name, formatBytes(item.size), item.detail].filter(Boolean).join(' · ');
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'quiet small';
    remove.dataset.remove = String(index);
    remove.textContent = '×';
    remove.title = t('media_clear');
    remove.setAttribute('aria-label', `${t('media_clear')} ${index + 1}: ${item.name || ''}`.trim());
    bar.append(name, remove);
    li.append(frame, bar);
    if (!item.usable) {
      const flag = document.createElement('span');
      flag.className = 'media-item-flag';
      flag.textContent = t('media_unusable_flag');
      li.append(flag);
    }
    gallery.append(li);
  });
  const total = mediaItems.reduce((sum, item) => sum + (Number(item.size) || 0), 0);
  $('mediaPreviewTitle').textContent = mediaTitle();
  $('mediaPreviewDetail').textContent = formatBytes(total);
  box.hidden = false;
}

function mediaTitle() {
  if (!mediaItems.length) return '';
  if (mediaItems.length === 1) {
    const item = mediaItems[0];
    if (!item.usable) return t('media_rejected');
    return t(item.kind === 'video' ? 'media_video_ready' : 'media_photo_ready');
  }
  if (mediaItems.every((item) => !item.usable)) return t('media_rejected');
  return t('media_ready_many').replace('N', mediaItems.length);
}


function showSavedRecord(record) {
  const card = $('lastRecord');
  if (!card) return;
  lastSavedRecord = record;
  const thumb = $('lastRecordThumb');
  if (record.photo_thumb) {
    thumb.src = record.photo_thumb;
    thumb.hidden = false;
  } else {
    thumb.removeAttribute('src');
    thumb.hidden = true;
  }
  $('lastRecordTitle').textContent = `${t('record_added')} ${record.seq}`;
  const items = Array.isArray(record.media_items) ? record.media_items : [];
  const count = Number(record.media_count) || items.length;
  let detail;
  if (count > 1) {
    detail = [
      t('saved_with_files').replace('N', count),
      items.map((item) => item.name).filter(Boolean).slice(0, 2).join(', '),
      formatBytes(record.media_size_total)
    ].filter(Boolean).join(' · ');
  } else {
    const mediaWord = record.media_kind === 'video' ? 'saved_with_video' : record.media_kind === 'image' ? 'saved_with_photo' : 'saved_no_media';
    detail = [t(mediaWord), record.media_name || '', formatBytes(record.media_size)].filter(Boolean).join(' · ');
  }
  $('lastRecordDetail').textContent = detail;
  card.hidden = false;
}

function refreshSavedRecord() {
  if (lastSavedRecord) showSavedRecord(lastSavedRecord);
}

function clearMedia(index = null) {
  if (index === null) {
    mediaItems = [];
    photoFailed = false;
  } else {
    mediaItems = mediaItems.filter((_, position) => position !== index);
  }
  $('photo').value = '';
  photoPending = false;
  renderMediaPreview();
  updateTier();
}


function hasEvidence() {
  return mediaItems.some((item) => item.usable);
}

function mediaNoteText() {
  if (!mediaItems.length) return '';
  const rejected = mediaItems.filter((item) => !item.usable);
  const good = mediaItems.length - rejected.length;
  if (!rejected.length) {
    if (mediaItems.length === 1) {
      return mediaItems[0].kind === 'video' ? t('video_readable') : t('photo_readable');
    }
    return t('media_ready_many_note').replace('N', mediaItems.length);
  }
  if (!good) {
    return rejected.some((item) => item.reason === 'unreadable') ? t('media_unreadable') : t('photo_unusable');
  }
  return t('media_partly_unusable').replace('N', rejected.length);
}

function showMediaNote() {
  const el = $('photoNote');
  if (!el) return;
  el.title = mediaItems.map((item) => item.detail).filter(Boolean).join(' | ');
  note('photoNote', mediaNoteText(), mediaItems.some((item) => !item.usable));
}

function updateTier() {
  showMediaNote();
}

function reusedPhoto(photo) {
  if (!photo?.hash || !photo?.media_hash) return null;
  const cutoff = Date.now() - 30 * 24 * 3600 * 1000;
  return allRecordsCache.find((r) => r.photo_hash === photo.hash && r.media_hash === photo.media_hash && Date.parse(r.created_at) > cutoff) || null;
}

let allRecordsCache = [];

function mediaPayload(previous = null) {
  const first = mediaItems[0] || null;
  return {
    speech_lang: spokenLangs.size ? [...spokenLangs].join(',') : speechLang,
    media_count: mediaItems.length,
    media_size_total: mediaItems.reduce((sum, item) => sum + (Number(item.size) || 0), 0),
    media_items: mediaItems.map((item, index) => ({
      index,
      kind: item.kind,
      name: item.name || '',
      mime: item.mime || '',
      size: Number(item.size) || 0,
      usable: Boolean(item.usable),
      media_hash: item.media_hash || '',
      photo_hash: item.hash || '',
      photo_thumb: item.thumb || '',
      reuse_of: index === 0 ? previous?.seq || null : null
    })),
    media_kind: first?.kind || '',
    media_hash: first?.media_hash || first?.hash || '',
    media_name: first?.name || '',
    media_mime: first?.mime || '',
    media_size: first ? Number(first.size) || 0 : 0,
    photo_hash: first?.hash || '',
    photo_thumb: first?.thumb || '',
    photo_usable: Boolean(first?.usable),
    photo_reuse_of: previous?.seq || null,
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
  voiceHold = false;
  if (speechSession) {
    speechSession.stop();
    speechSession = null;
  }
  speechBase = '';
  $('transcript').value = '';
  setGrade(0);
  spokenLangs = new Set();
  $('photo').value = '';
  mediaItems = [];
  audioState = null;
  photoFailed = false;
  hideMediaPreview();
  note('photoNote', '');
  note('audioNote', t('audio_hint'));
  if ($('worker')) $('worker').value = '';
  updateTier();
}

async function finishRecord(record, noteId, message) {
  note(noteId, message || `${WORDS[lang].record_added} ${record.seq}.`);
  resetCaptureInputs();
  showSavedRecord(record);
  await refreshCount();
  $('assetStamp').classList.add('flash');
  setTimeout(() => $('assetStamp').classList.remove('flash'), 350);
}

function quickRecord(kind, grade = 0) {
  return guardedWrite('quickNote', async () => {
    const asset = $('asset').value.trim();
    if (!asset) {
      note('quickNote', t('place_required'), true);
      return;
    }
    const isGrade = kind === 'grade';
    if (audioBusy('quickNote')) return;
    const isDefault = kind === 'default';
    const noEvidence = !hasEvidence();
    const defaultAssessment = (isDefault || (isGrade && grade === 3)) && noEvidence;
    const gradeReason = isGrade ? WORDS[lang].grade_reason.replace('N', grade) : '';
    const typed = $('transcript').value.trim();
    const transcript = isGrade ? (typed || gradeReason) : typed || WORDS[lang].default_reason;
    const verdict = isGrade ? (grade === 1 ? 'serious' : grade === 2 ? 'not clean' : 'clean') : 'clean';
    const reason = defaultAssessment ? WORDS[lang].default_reason : isGrade ? gradeReason : WORDS[lang].quick_reason;
    const previous = reusedPhoto(mediaItems[0]);
    const record = await appendRecord({
      asset,
      checkpoint: checkpointFor(asset),
      tag_sig: currentTag,
      source: currentSource,
      method: isGrade ? 'Rated' : isDefault ? 'Declared' : 'Visual',
      verdict,
      grade: isGrade ? grade : isDefault ? 3 : null,
      transcript,
      reason,
      supervisor: $('worker')?.value.trim() || '',
      language: speechLang,
      default_assessment: defaultAssessment,
      quick: true,
      ...mediaPayload(previous)
    }, mediaItems.map((item) => item.file), audioState?.blob);
    notifyRecords(record);
    const done = isGrade ? WORDS[lang].grade_done.replace('N', grade) : isDefault ? WORDS[lang].default_done : WORDS[lang].quick_done;
    await finishRecord(record, 'quickNote', `${done} ${record.seq}.`);
    if (record.selected_grade === 2) note('quickNote', t('grade_escalated'));
  });
}

async function refreshCount() {
  allRecordsCache = await allRecords();
}

/* Longest name first, so Kätepesu is not read as Pesu. */
const CHECKPOINT_NAMES = [
  ['Kätepesu', 'Hand wash sink'],
  ['Siirupituba', 'Syrup room wall'],
  ['Kastipesu', 'Crate washer'],
  ['Täitepea', 'Filler head'],
  ['Drenaaž', 'Drain'],
  ['Klapp', 'Valve'],
  ['Pesu', 'Wash'],
  ['Uks', 'Door']
];

/* The record keeps the checkpoint name the Google Sheet groups by. */
function checkpointFor(asset) {
  const text = String(asset || '').toLocaleLowerCase('et');
  if (!text) return '';
  for (const [estonian, english] of CHECKPOINT_NAMES) {
    if (text.includes(estonian.toLocaleLowerCase('et')) || text.includes(english.toLocaleLowerCase('et'))) return estonian;
  }
  return '';
}

function setAsset(name, tagId = '', origin = 'typed') {
  currentTag = tagId;
  currentSource = origin;
  $('asset').value = name;
  $('assetStampName').textContent = name;
}


function growTranscript(field) {
  if (!field) return;
  field.style.height = 'auto';
  const cap = Math.round(window.innerHeight * 0.7);
  field.style.height = `${Math.min(Math.max(field.scrollHeight, 100), cap)}px`;
}

function writeSpeech(extra, commit) {
  const field = $('transcript');
  if (!field) return;
  if (userOwned) {
    speechBase = field.value;
    growTranscript(field);
    return;
  }
  const base = speechBase.trim();
  const tail = String(extra || '').trim();
  field.value = tail ? (base ? `${base} ${tail}` : tail) : base;
  if (commit) {
    speechBase = field.value;
    if (tail) spokenLangs.add(detectSpokenLang(tail));
  }
  growTranscript(field);
  const end = field.value.length;
  field.setSelectionRange(end, end);
}

let recorder = null;
let recordChunks = [];
let recordStream = null;
let recorderReady = null;
let recordMime = '';
let recordError = '';
// iPhone Safari has no Web Speech API; MediaRecorder there writes audio/mp4.
const AUDIO_TYPES = [
  'audio/webm;codecs=opus',
  'audio/webm',
  'audio/mp4;codecs=mp4a.40.2',
  'audio/mp4',
  'audio/aac',
  'audio/ogg;codecs=opus'
];

function pickAudioMime() {
  if (typeof MediaRecorder === 'undefined') return '';
  return AUDIO_TYPES.find((type) => {
    try { return MediaRecorder.isTypeSupported(type); } catch { return false; }
  }) || '';
}

function audioFileName(type) {
  const value = String(type || '').toLowerCase();
  if (value.includes('mp4') || value.includes('aac') || value.includes('m4a')) return 'note.m4a';
  if (value.includes('ogg')) return 'note.ogg';
  if (value.includes('mpeg')) return 'note.mp3';
  if (value.includes('wav')) return 'note.wav';
  return 'note.webm';
}

function canRecordAudio() {
  return Boolean(navigator.mediaDevices?.getUserMedia) && typeof MediaRecorder !== 'undefined';
}

// iPhone Safari exposes a speech service that can refuse after the mic is
// granted, so the phone uses the microphone and Whisper directly.
function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function startRecorder() {
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') return;
  recordError = '';
  recorderReady = navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    if (!voiceHold) {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }
    recordStream = stream;
    const mime = pickAudioMime();
    recorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
    recordMime = recorder.mimeType || mime;
    recordChunks = [];
    recorder.ondataavailable = (event) => { if (event.data && event.data.size) recordChunks.push(event.data); };
    recorder.start();
  }).catch((error) => { recorder = null; recordError = error?.name || 'unknown'; });
}

function stopRecorder() {
  return Promise.resolve(recorderReady).catch(() => {}).then(() => new Promise((resolve) => {
    const finish = (blob) => {
      recordStream?.getTracks().forEach((track) => track.stop());
      recordStream = null;
      recorder = null;
      recordChunks = [];
      resolve(blob && blob.size ? blob : null);
    };
    if (!recorder || recorder.state === 'inactive') {
      finish(recordChunks.length ? new Blob(recordChunks, { type: recordMime || 'audio/webm' }) : null);
      return;
    }
    recorder.onstop = () => finish(new Blob(recordChunks, { type: recorder.mimeType || recordMime || 'audio/webm' }));
    try { recorder.stop(); } catch { finish(null); }
  }));
}

let recordState = 'idle';

async function transcribeRecording(blob) {
  const body = new FormData();
  body.set('file', blob, audioFileName(blob.type || recordMime));
  body.set('language', 'et');
  const response = await fetch('./api/transcribe', { method: 'POST', body });
  if (!response.ok) return '';
  const payload = await response.json().catch(() => ({}));
  return String(payload.text || '').trim();
}

// iPhone Safari has no Web Speech API, so the same button records a clip and
// sends it to Whisper on the server; the text is written into the note.
async function toggleRecordOnly() {
  const button = $('voiceBtn');
  if (recordState === 'sending') {
    note('audioNote', t('transcribing'));
    return;
  }
  if (recordState === 'recording') {
    recordState = 'sending';
    voiceHold = false;
    button.classList.remove('listening');
    button.textContent = t('speak');
    note('audioNote', t('transcribing'));
    const blob = await stopRecorder();
    // A tap-length clip is mostly silence, which Whisper can invent a word for.
    const tooShort = Boolean(blob) && blob.size < 400;
    let text = '';
    try {
      text = blob && !tooShort ? await transcribeRecording(blob) : '';
    } catch {
      text = '';
    }
    recordState = 'idle';
    if (!text) {
      resetVoiceUI();
      const denied = recordError === 'NotAllowedError' || recordError === 'SecurityError' || recordError === 'PermissionDeniedError';
      note('audioNote', t(tooShort ? 'record_short' : denied ? 'audio_denied' : 'record_failed'), true);
      return;
    }
    const field = $('transcript');
    const prefix = String(field.value || '').trim();
    field.value = prefix ? `${prefix}\n${text}` : text;
    speechBase = field.value;
    spokenLangs.add(detectSpokenLang(text));
    growTranscript(field);
    resetVoiceUI();
    return;
  }
  recordState = 'recording';
  voiceHold = true;
  userOwned = false;
  button.classList.add('listening');
  button.textContent = t('listening');
  note('audioNote', t('record_stop_hint'));
  startRecorder();
}

// A browser can expose speech recognition and still refuse it after the
// microphone was granted; then the recording path is used instead.
async function switchToRecording() {
  resetVoiceUI();
  await stopRecorder();
  toggleRecordOnly();
  note('audioNote', t('speech_to_record'));
}

async function polishUtterance(base, owned, token) {
  const blob = await stopRecorder();
  if (owned || token !== polishToken || !blob || blob.size < 400 || !navigator.onLine) return;
  polishing = true;
  note('audioNote', t('polishing'));
  try {
    const body = new FormData();
    const type = blob.type || recordMime || 'audio/webm';
    body.set('file', blob, audioFileName(type));
    body.set('language', String(speechLang || 'et-EE').slice(0, 2));
    const response = await fetch('./api/transcribe', { method: 'POST', body });
    if (!response.ok || token !== polishToken || userOwned) return;
    const payload = await response.json();
    const text = String(payload.text || '').trim();
    if (!text) return;
    const field = $('transcript');
    const prefix = String(base || '').trim();
    field.value = prefix ? `${prefix}\n${text}` : text;
    speechBase = field.value;
    spokenLangs.add(detectSpokenLang(text));
    growTranscript(field);
  } catch {
    // The browser text stays when the spelling check cannot run.
  } finally {
    if (token === polishToken) {
      polishing = false;
      note('audioNote', t('audio_hint'));
    }
  }
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
    restartTimer: null,
    startedAt: Date.now(),
    heardAt: 0,
    finished: false,
    restart: false
  };
  const releaseMic = () => {
    if (!session.restart) return;
    session.restart = false;
    clearTimeout(session.restartTimer);
    if (handlers.onMicFree) handlers.onMicFree();
  };
  const finish = ({ restart = false } = {}) => {
    if (session.finished) return;
    session.finished = true;
    session.restart = restart;
    clearTimeout(session.timer);
    // Interim words are all some browsers ever deliver before the mic closes.
    const text = [...session.texts, session.interim].join(' ').trim();
    if (text && handlers.onText) handlers.onText(text, langCode);
    if (handlers.onDone) handlers.onDone({ restart });
    try { recognition.stop(); } catch { /* already stopped */ }
    if (restart) session.restartTimer = setTimeout(releaseMic, 400);
  };
  const scheduleStop = () => {
    clearTimeout(session.timer);
    session.timer = setTimeout(() => {
      if (handlers.onSilence) handlers.onSilence();
      finish();
    }, SILENCE_MS);
  };
  session.stop = () => finish();
  // Dropping the first guess when the language changes must not append text.
  session.cancel = () => {
    session.finished = true;
    session.restart = false;
    clearTimeout(session.timer);
    clearTimeout(session.restartTimer);
    try { recognition.stop(); } catch { /* already stopped */ }
  };
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
    if (heard) session.heardAt = Date.now();
    const text = [...session.texts, session.interim].join(' ').trim();
    if (interim && handlers.onInterim) handlers.onInterim(interim, langCode);
    if (handlers.onProgress) handlers.onProgress(text, langCode);
    if (heard) scheduleStop();
    const aged = Date.now() - session.startedAt >= SPEECH_CHUNK_MS;
    if (heard && text && handlers.onChunkFull && (text.length >= SPEECH_CHUNK_CHARS || aged)) {
      handlers.onChunkFull(text, langCode);
      finish({ restart: true });
    }
  };
  recognition.onerror = (event) => {
    if (session.finished) return;
    const error = event.error;
    const retried = handlers.onUnsupported?.(error) ?? false;
    if (retried) {
      session.cancel();
      if (handlers.onMicFree) handlers.onMicFree();
      return;
    }
    const denied = error === 'not-allowed' || error === 'service-not-allowed' || error === 'audio-capture';
    const quiet = error === 'no-speech' || error === 'aborted';
    if (quiet && handlers.onChunkFull && Date.now() < speechGraceUntil) {
      finish({ restart: true });
      return;
    }
    if (quiet) {
      if (handlers.onSilence) handlers.onSilence();
      finish();
      return;
    }
    if (denied && handlers.onDenied) {
      session.cancel();
      handlers.onDenied(error);
      return;
    }
    if (!denied && handlers.onChunkFull) {
      finish({ restart: true });
      return;
    }
    if (handlers.onSilence) handlers.onSilence();
    finish();
    speechErrorNote(error);
  };
  recognition.onend = () => {
    if (!session.finished) {
      const recent = session.heardAt && Date.now() - session.heardAt < SILENCE_MS;
      finish({ restart: Boolean(handlers.onChunkFull) && recent });
    }
    releaseMic();
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

function resetVoiceUI() {
  speechSession = null;
  voiceHold = false;
  recordState = 'idle';
  const field = $('transcript');
  if (field) {
    speechBase = field.value;
    growTranscript(field);
  }
  note('audioNote', t('audio_hint'));
  const button = $('voiceBtn');
  if (!button) return;
  button.classList.remove('listening');
  button.textContent = t('speak');
}

function afterVoiceStop() {
  const base = utteranceBase;
  const owned = userOwned;
  const token = polishToken;
  resetVoiceUI();
  polishUtterance(base, owned, token);
}

function beginHeldSpeech(langCode, attempt = 0) {
  const session = startSpeechSession(langCode, {
    onProgress: (text) => writeSpeech(text, false),
    onText: (text) => writeSpeech(text, true),
    onSilence: () => { voiceHold = false; },
    onChunkFull: () => { voiceHold = true; },
    onDenied: () => { switchToRecording(); },
    onUnsupported: (error) => {
      if (langCode === SPEECH_FALLBACK) return false;
      if (error !== 'language-not-supported' && error !== 'language-unavailable') return false;
      speechLang = SPEECH_FALLBACK;
      note('audioNote', t('speech_fallback'));
      voiceHold = true;
      return true;
    },
    onDone: ({ restart } = {}) => {
      if (restart) return;
      afterVoiceStop();
    },
    onMicFree: () => {
      if (!voiceHold) return;
      speechGraceUntil = Date.now() + 1500;
      beginHeldSpeech(speechLang);
    }
  });
  if (!session && voiceHold && attempt < 2) {
    setTimeout(() => beginHeldSpeech(langCode, attempt + 1), 300);
    return;
  }
  speechSession = session;
  if (!session) resetVoiceUI();
}

function toggleVoice() {
  if (recordState !== 'idle') {
    toggleRecordOnly();
    return;
  }
  if (speechSession || voiceHold) {
    voiceHold = false;
    if (speechSession && !speechSession.finished) speechSession.stop();
    else resetVoiceUI();
    return;
  }
  if (canRecordAudio() && isIOS()) {
    toggleRecordOnly();
    return;
  }
  if (!speechRecognition()) {
    if (canRecordAudio()) {
      toggleRecordOnly();
      return;
    }
    note('audioNote', t('audio_unsupported'), true);
    return;
  }
  voiceHold = true;
  userOwned = false;
  polishToken += 1;
  utteranceBase = $('transcript').value;
  speechBase = utteranceBase;
  $('voiceBtn').classList.add('listening');
  $('voiceBtn').textContent = t('listening');
  note('audioNote', t('listening'));
  startRecorder();
  beginHeldSpeech(speechLang);
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
    localStorage.setItem('toend-lang', lang);
    applyLanguage();
    if (speechSession) toggleVoice();
    refreshCount();
  });
  // The workbook table follows records saved in another tab on this device.
  recordsChannel?.addEventListener('message', () => {
    refreshCount().catch(() => {});
  });
  window.addEventListener('storage', (event) => {
    if (event.key === 'toend-records-event') refreshCount().catch(() => {});
  });
  $('asset').addEventListener('input', () => {
    currentTag = '';
    currentSource = 'typed';
    $('assetStampName').textContent = $('asset').value.trim() || t('untagged');
  });
  $('line').addEventListener('change', () => {
    const value = $('line').value;
    setAsset(value ? t(`line_${value}`) : '', '', 'typed');
  });
  document.querySelectorAll('.grade-btn').forEach((btn) => {
    btn.addEventListener('click', () => setGrade(Number(btn.dataset.grade)));
  });
  $('voiceBtn').addEventListener('click', toggleVoice);
  $('transcript').addEventListener('input', (event) => {
    if (!event.isTrusted || (!voiceHold && !polishing)) return;
    userOwned = true;
    speechBase = $('transcript').value;
  });
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
    const files = [...(event.target.files || [])];
    // Clearing the value lets the same camera file be picked again next time.
    event.target.value = '';
    if (!files.length) { updateTier(); return; }
    photoPending = true;
    photoFailed = false;
    try {
      for (const file of files) {
        if (token !== photoToken) return;
        if (mediaItems.length >= MAX_MEDIA) {
          note('photoNote', t('media_limit'), true);
          break;
        }
        const result = file.type.startsWith('video/') ? await analyseVideo(file) : await analysePhoto(file);
        if (token !== photoToken) return;
        mediaItems = [...mediaItems, result];
        renderMediaPreview();
        showMediaNote();
      }
    } catch (error) {
      if (token === photoToken) {
        photoFailed = true;
        note('photoNote', `${t('save_failed')} ${error.message}`, true);
      }
    } finally {
      if (token === photoToken) { photoPending = false; updateTier(); }
    }
  });
  $('mediaGallery')?.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-remove]');
    if (!button) return;
    clearMedia(Number(button.dataset.remove));
  });
  $('saveBtn').addEventListener('click', saveFromForm);
  $('mediaClearBtn')?.addEventListener('click', () => clearMedia());
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
  if (asset && document.documentElement.dataset.mode === 'record') {
    setAsset(asset, tag || '', via === 'nfc' ? 'nfc' : 'link');
    if (via === 'nfc') setGrade(3);
    document.getElementById('capture')?.scrollIntoView({ block: 'start' });
    $('grade3').focus({ preventScroll: true });
  }
  navigator.storage?.persist?.().catch(() => {});
  await refreshCount();
  await registerServiceWorker();
}

start().catch((error) => note('saveNote', `Startup failed: ${error.message}`, true));
