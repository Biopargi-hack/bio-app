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
    worker: 'Worker',
    session_name: 'Inspector name',
    session_start: 'Start inspection',
    session_signature: 'Signature: type your name again',
    session_finish: 'Confirm and finish inspection',
    asset_required: 'Tap the NFC card.',
    skip: 'Skip to capture',
    hero_note: 'An NFC card and a phone app for recording production line checks. Tap the card, pick a grade and the record is there.',
    intro_title: 'Visual hygiene checks in one tap.',
    what_body: 'Tap to Prove is an NFC card and phone app for visual hygiene checks on a production line. A waterproof card sits on each place to check. Tapping it opens the right place on the phone and the checker can save a grade at once.',
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
    done_btn: 'Done',
    audio_hint: 'Tap Speak and talk. Tap Done when you finish.',
    audio_unsupported: 'This browser cannot record audio.',
    speech_stopped: 'Voice stopped',
    listening: 'Listening…',
    record_stop_hint: 'Tap Done when you finish.',
    speech_to_record: 'Browser speech is not answering, recording instead. Tap Done when you finish.',
    record_failed: 'Could not write the voice down. Check the microphone permission and the connection.',
    record_short: 'The recording was too short. Tap, speak, and tap again.',
    polishing: 'Cleaning up the text…',
    text_ready: 'Text is ready. Fix anything that is wrong.',
    voice_pending_offline: 'No connection. The text is written down when you are back online.',
    audio_denied: 'Allow the microphone in the browser settings and try again.',
    audio_stop_first: 'Stop the voice note before saving.',
    note_label: 'What happened — write or speak',
    note_ph: 'Type here or tap Speak.',
    note_hint: 'Spoken text is cleaned up in Estonian. Your own edits stay.',
    what_happened: 'What happened',
    photo: 'Photo evidence',
    take_photo: 'Take photo',
    record_video: 'Filmi video',
    instrument: 'Instrument reading',
    save: 'Append record',
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
    media_unreadable: 'Preview unavailable. The file will still be sent, but does not count as verified evidence.',
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
    sheet_note: 'Checks go straight to Google Sheets when online. A failed send retries when the connection returns. The table opens in a new tab.',
    sync_idle: 'Saved on this device',
    sync_pending: 'Sending to Google Sheets',
    sync_retry: 'Retry sending',
    sync_keep_open: 'Keep this page open and online until everything is sent. If a response is lost, a retry may create a duplicate row.',
    sync_done: 'Sent to Google Sheets',
    sync_failed: 'Waiting to send, check connection',
    landing_table: 'View table',

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
    worker: 'Teostaja',
    session_name: 'Inspektori nimi',
    session_start: 'Alusta inspektsiooni',
    session_signature: 'Allkiri: kirjuta oma nimi uuesti',
    session_finish: 'Kinnita ja lõpeta kontroll',
    asset_required: 'Puuduta NFC-kaarti.',
    skip: 'Liigu salvestamise juurde',
    hero_note: 'NFC-kaart ja telefonirakendus tootmisliini kontrollide salvestamiseks. Puuduta kaarti, vali hinne ja kirje on kohe olemas.',
    intro_title: 'Visuaalne hügieenikontroll ühe puudutusega.',
    what_body: 'Tap to Prove on NFC-kaartide ja telefonirakenduse lahendus tootmisliini visuaalse hügieeni kontrollimiseks. Iga kontrollitava koha küljes on veekindel kaart. Selle puudutamisel avaneb telefonis õige koht ja kontrollija saab hinnangu kohe salvestada.',
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
    done_btn: 'Valmis',
    audio_hint: 'Vajuta „Räägi“ ja räägi. Kui oled valmis, vajuta „Valmis“.',
    audio_unsupported: 'See brauser ei saa heli salvestada.',
    speech_stopped: 'Kõnetuvastus peatus',
    listening: 'Kuulan…',
    record_stop_hint: 'Vajuta „Valmis“, kui oled lõpetanud.',
    speech_to_record: 'Brauseri kõnetuvastus ei vasta, salvestan ise. Vajuta „Valmis“, kui oled lõpetanud.',
    record_failed: 'Häält ei saanud üles kirjutada. Kontrolli mikrofoniluba ja ühendust.',
    record_short: 'Salvestus jäi liiga lühikeseks. Vajuta, räägi ja vajuta uuesti.',
    polishing: 'Kirjutan teksti puhtaks…',
    text_ready: 'Tekst on valmis. Paranda, kui midagi on valesti.',
    voice_pending_offline: 'Võrku pole. Kirjutan teksti üles, kui ühendus tagasi tuleb.',
    audio_denied: 'Luba mikrofon brauseri seadetes ja proovi uuesti.',
    audio_stop_first: 'Peata häälmärkus enne salvestamist.',
    note_label: 'Mis juhtus — kirjuta või räägi',
    note_ph: 'Kirjuta siia või vajuta „Räägi“.',
    note_hint: 'Räägitud tekst kirjutatakse eesti keeles puhtaks. Sinu enda parandused jäävad alles.',
    what_happened: 'Mis juhtus',
    photo: 'Foto tõend',
    take_photo: 'Tee foto',
    record_video: 'Filmi video',
    media_badge: 'Meedia',
    audio_badge: 'Häälmärkus',
    instrument: 'Mõõteriista näit',
    save: 'Lisa kirje',
    sheet: 'Elavad kirjed',
    ledger_title: 'Jälgitav andmestik',
    chain_empty: 'Kirjeid veel pole. Esimene käivitab ahela.',
    filter: 'Otsi koha või kontrollpunkti järgi',
    export: 'Ekspordi JSONL',
    tamper: 'Näita ahela murdu',
    sheet_title: 'Tabel',
    sheet_open: 'Ava Google Sheetsis',
    sheet_note: 'Kontrollid lähevad võrgus olles kohe Google Sheetsi. Ebaõnnestunud saatmine proovib uuesti, kui ühendus naaseb. Tabel avaneb uues aknas.',
    sync_idle: 'Salvestatud selles seadmes',
    sync_pending: 'Saadan Google Sheetsi',
    sync_retry: 'Proovi uuesti saata',
    sync_keep_open: 'Hoia leht avatuna ja võrguühendusega, kuni kõik on saadetud. Kadunud vastuse järel võib uuesti saatmine tekitada korduva rea.',
    sync_done: 'Saadetud Google Sheetsi',
    sync_failed: 'Ootab saatmist, kontrolli ühendust',
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
    media_unreadable: 'Eelvaade pole saadaval. Fail saadetakse siiski, kuid seda ei loeta kontrollitud tõendiks.',
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

let lang = localStorage.getItem('toend-lang') === 'en' ? 'en' : 'et';
// The recogniser, the stored record and the server all speak one language.
let speechLang = 'et-EE';
const SILENCE_MS = 7000;
// Chrome stops growing one speech hypothesis near a few hundred characters.
// Flush and open the next session before that, so a spoken note has no length cap.
const SPEECH_CHUNK_CHARS = 160;
const SPEECH_CHUNK_MS = 8000;
// Consecutive sessions that heard nothing before the recording path takes over,
// so a speech service that dies quietly cannot restart forever.
const SPEECH_RESTART_LIMIT = 2;
let voiceHold = false;
let speechRestarts = 0;
let speechBase = '';
let utteranceBase = '';
let userOwned = false;
let polishing = false;
let polishToken = 0;
let speechSession = null;
let audioSpeechSession = null;
let mediaItems = [];
let galleryUrls = [];
const MAX_MEDIA = 6;
let audioState = null;
let currentTag = '';
let currentSource = 'typed';
let dbPromise = null;
let saving = false;
let audioToken = 0;
let photoToken = 0;
let photoPending = false;
let photoFailed = false;

let gradeMode = false;
let selectedGrade = 0;
let lastSavedRecord = null;
const SESSION_KEY = 'inspection:active';
const START_INTENT_KEY = 'toend-inspection-start';
const SESSION_PENDING = 'inspection:pending:';
const DEMO_CHECKPOINTS = ['Pesu', 'Täitepea', 'Klapp', 'Äravool', 'Uks'];
const AUTO_DEFAULT_TEXT = 'Automaatne kontrollimata vaikimisi hinnang';
const sessionParams = new URLSearchParams(location.search);
const sessionAsset = (sessionParams.get('asset') || '').trim();
const sessionNames = [sessionAsset, sessionParams.get('tag') || '']
  .map((value) => value.trim().normalize('NFC').toLocaleLowerCase('et'));
const namedSessionMode = sessionNames.some((value) => value === 'algus' || value === 'alustus') ? 'start'
  : sessionNames.some((value) => value === 'lõpp' || value === 'lopp') ? 'end' : '';
const sessionMode = sessionParams.get('session') || namedSessionMode;
const sessionLine = (sessionParams.get('line') || (namedSessionMode ? 'demo' : '')).trim();
const sessionTag = (sessionParams.get('tag') || (namedSessionMode ? sessionAsset : '')).trim();
let activeSession = null;
let reviewSnapshot = '';
const SESSION_TEXT = {
  et: {
    start: 'Algus',
    end: 'Kontrolli ülevaade ja lõpetamine',
    active: 'Aktiivne kontroll',
    identity: 'Nimi on ise deklareeritud; isikut ei kontrollita. Kontroll jääb esmalt sellesse brauserisse ja seadmesse ning kirjed sünkroonitakse võrguühenduse olemasolul.',
    start_desc: 'Näidisnimekiri: Pesu, Täitepea, Klapp, Äravool ja Uks. Sisesta nimi ning alusta selgesõnaliselt.',
    end_desc: 'Näidisnimekiri, mitte tegeliku liini täielik nimekiri. Kinnitamisel lisatakse puuduvatele punktidele automaatne kontrollimata hinne 3. See ei tõenda kontrollimist.',
    completed: 'Kontroll lõpetatud.',
    no_session: 'Selle liini aktiivset kontrolli ei leitud.',
    invalid: 'Link vajab kehtivat session=start või end, line, tag ja via=nfc.',
    conflict: 'Aktiivset kontrolli ei asendata. Lõpeta see esmalt selle liini lõppkaardiga.',
    started: 'Kontroll on alustatud. Puuduta kontrollpunkti kaarti ja salvesta hinnang.',
    name_required: 'Sisesta kontrollija nimi.',
    signature_required: 'Kirjuta allkirjaks sama nimi, mille sisestasid alguses.',
    missing: 'Hinne 3 — automaatne, KONTROLLIMATA vaikimisi hinnang',
    saved: 'Salvestatud hinne',
    changed: 'Kontroll või kirjed muutusid. Vaata ülevaade uuesti üle ja kinnita uuesti.',
    other: 'See koht ei kuulu viie näidispunkti hulka ega täida ühtegi neist.',
    line: 'Liin',
    inspector: 'Kontrollija'
  },
  en: {
    start: 'Start',
    end: 'Review and finish inspection',
    active: 'Active inspection',
    identity: 'Name is self-declared, not identity verified. The inspection is stored in this browser and device first; records sync when online.',
    start_desc: 'Example roster: Pesu, Täitepea, Klapp, Äravool and Uks. Enter a name and explicitly start.',
    end_desc: 'Example roster, not a complete real line roster. Confirmation adds automatic unverified grade 3 defaults for missing checkpoints. This does not prove an inspection.',
    completed: 'Inspection completed.',
    no_session: 'No inspection for this line was found.',
    invalid: 'The link needs session=start or end, line, tag and via=nfc.',
    conflict: 'The active inspection will not be replaced. Finish it first with its line’s end card.',
    started: 'Inspection started. Tap a checkpoint card and save its grade.',
    name_required: 'Enter the inspector name.',
    signature_required: 'For your signature, enter the same name you used at the start.',
    missing: 'Grade 3 — automatic UNVERIFIED default',
    saved: 'Saved grade',
    changed: 'The inspection or its records changed. Review again and confirm again.',
    other: 'This place is not one of the five example checkpoints and does not satisfy any of them.',
    line: 'Line',
    inspector: 'Inspector'
  }
};
function st(key) { return SESSION_TEXT[lang][key]; }

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
  setVoiceButton();
  if (polishing) note('audioNote', t('polishing'));
  else if (recordState === 'sending') note('audioNote', t('polishing'));
  else if (pendingClip) note('audioNote', t('voice_pending_offline'));
  else if (voiceHold || recordState === 'listening') note('audioNote', t('listening'));
  renderMediaPreview();
  showMediaNote();
  setSyncStatus($('syncStatus')?.dataset.state || 'sync_idle', $('syncStatus')?.title || '');
  refreshSavedRecord();
  if ($('sessionPanel')) void refreshSession().catch((error) => note('sessionNote', error.message, true));
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
    let failure = null;
    const sessionRequest = tx.objectStore('media').get(SESSION_KEY);
    sessionRequest.onsuccess = () => {
      const stored = sessionRequest.result?.session;
      const current = stored?.status === 'active' ? stored : null;
      if ((current?.id || '') !== (activeSession?.status === 'active' ? activeSession.id : '')) {
        failure = new Error(st('changed'));
        tx.abort();
        return;
      }
      if (current) payload = {
        ...payload,
        inspection_session_id: current.id,
        inspection_line: current.line,
        supervisor: current.supervisor,
        auto_default: false
      };
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
        media.put({ key: position === 0 ? `${seq}:media` : `${seq}:media:${position}`, blob: file });
      });
      if (audioBlob) media.put({ key: `${seq}:audio`, blob: audioBlob });
      media.put({ key: `${SESSION_PENDING}${seq}`, seq });
      };
    };
    tx.oncomplete = () => {
      setSyncStatus('sync_pending');
      resolve(record);
      void flushQueue();
    };
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(failure || tx.error || new Error('Record write aborted'));
  });
}

const SYNC_QUEUE_KEY = 'toend-sync-queue';
const SYNC_ACK = 'sync:ack:';
const SYNC_MIGRATION = 'sync:migration:media-recovery-v1';
const SYNC_LEASE = 'sync:lease';
const CHUNK_SIZE = 4 * 1024 * 1024;

// Move the old localStorage queue and historical completion/media records into
// the transactional outbox once. The recovery flag distinguishes rows which
// may previously have been acknowledged without their attachments.
async function migrateOutbox() {
  let legacy = [];
  try {
    const parsed = JSON.parse(localStorage.getItem(SYNC_QUEUE_KEY) || '[]');
    if (Array.isArray(parsed)) legacy = parsed.filter(Number.isInteger);
  } catch { /* The durable outbox remains authoritative. */ }
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(['records', 'media'], 'readwrite');
    const media = tx.objectStore('media');
    const records = tx.objectStore('records').getAll();
    const entries = media.getAllKeys();
    entries.onsuccess = () => {
      const byKey = new Set(entries.result);
      const migrated = byKey.has(SYNC_MIGRATION);
      for (const record of records.result) {
        const key = `${SESSION_PENDING}${record.seq}`;
        if (byKey.has(key) || byKey.has(`${SYNC_ACK}${record.seq}`)) continue;
        const pending = legacy.includes(record.seq);
        const completion = record.record_type === 'inspection_completion';
        const hasMedia = Boolean(record.media_items?.length || record.media_count || record.media_hash ||
          record.media_kind || record.audio_hash || record.audio_size);
        if (pending || (!migrated && (completion || hasMedia || record.auto_default === true))) {
          media.put({ key, seq: record.seq, recovery: !pending && !completion });
        }
      }
      for (const seq of legacy) {
        if (!byKey.has(`${SESSION_PENDING}${seq}`) && !byKey.has(`${SYNC_ACK}${seq}`) &&
            !records.result.some((record) => record.seq === seq)) {
          media.put({ key: `${SESSION_PENDING}${seq}`, seq });
        }
      }
      if (!migrated) media.put({ key: SYNC_MIGRATION });
    };
    tx.oncomplete = resolve;
    tx.onabort = tx.onerror = () => reject(tx.error || new Error('Outbox migration failed'));
  });
  localStorage.removeItem(SYNC_QUEUE_KEY);
}

function setSyncStatus(state, detail = '') {
  const el = $('syncStatus');
  if (!el) return;
  el.textContent = detail ? `${t(state)}: ${detail}` : t(state);
  el.title = detail;
  el.dataset.state = state;
}

async function mediaBlob(key) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction('media', 'readonly').objectStore('media').get(key);
    request.onsuccess = () => resolve(request.result?.blob || null);
    request.onerror = () => reject(request.error);
  });
}

async function syncFetch(url, options) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 120000);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function mediaKind(mime, name, fallback = '') {
  if (/^video\//i.test(mime) || ((!mime || mime === 'application/octet-stream') && /\.(mp4|mov|m4v|webm|ogv|avi|mkv|3gp)$/i.test(name))) return 'video';
  if (/^audio\//i.test(mime)) return 'audio';
  return fallback || 'image';
}

function mediaMime(mime, name) {
  if (mime && mime !== 'application/octet-stream') return mime;
  const ext = String(name).split('.').pop().toLowerCase();
  return ({ mp4: 'video/mp4', mov: 'video/quicktime', m4v: 'video/x-m4v', webm: 'video/webm', ogv: 'video/ogg', avi: 'video/x-msvideo', mkv: 'video/x-matroska', '3gp': 'video/3gpp' })[ext] || mime || 'application/octet-stream';
}

async function syncMedia(record, records) {
  const metas = Array.isArray(record.media_items) && record.media_items.length
    ? record.media_items
    : (record.media_hash || record.media_kind || record.media_count)
      ? [{ name: record.media_name, mime: record.media_mime, kind: record.media_kind }] : [];
  if (Number(record.media_count || 0) > metas.length) throw new Error(`${t('media_missing')} ${record.seq}`);
  const attachments = [];
  for (let position = 0; position < metas.length; position += 1) {
    const meta = metas[position] || {};
    let seq = record.seq;
    let blob = await mediaBlob(position ? `${seq}:media:${position}` : `${seq}:media`);
    let current = record;
    const seen = new Set([seq]);
    while (!blob && position === 0 && (current.photo_reuse_of || current.media_items?.[0]?.reuse_of)) {
      seq = current.photo_reuse_of || current.media_items[0].reuse_of;
      if (seen.has(seq)) break;
      seen.add(seq);
      blob = await mediaBlob(`${seq}:media`);
      current = records.find((item) => item.seq === seq) || {};
    }
    if (!blob) throw new Error(`${t('media_missing')} ${record.seq}:${position + 1}`);
    const name = meta.name || blob.name || record.media_name || `media-${position + 1}`;
    const mime = mediaMime(meta.mime || blob.type || record.media_mime || '', name);
    attachments.push({ blob, name, mime, kind: mediaKind(mime, name, meta.kind || record.media_kind) });
  }
  if (record.audio_hash || record.audio_size) {
    const blob = await mediaBlob(`${record.seq}:audio`);
    if (!blob) throw new Error(`${t('media_missing')} ${record.seq}:audio`);
    const mime = record.audio_mime || blob.type || 'audio/webm';
    attachments.push({ blob, name: audioFileName(mime), mime, kind: 'audio' });
  }
  const uploaded = [];
  for (let position = 0; position < attachments.length; position += 1) {
    const { blob, name, mime, kind } = attachments[position];
    const id = `${record.hash}-${position}`;
    const total = Math.max(1, Math.ceil(blob.size / CHUNK_SIZE));
    let url = '';
    for (let index = 0; index < total; index += 1) {
      const data = await mediaDataUrl(blob.slice(index * CHUNK_SIZE, (index + 1) * CHUNK_SIZE, mime));
      const response = await syncFetch('/api/evidence', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ id, index, total, name, mime, kind, data })
      });
      if (!response.ok) throw new Error(`evidence ${response.status}`);
      const result = await response.json();
      if (!result.ok) throw new Error('Evidence upload was not acknowledged');
      if (index === total - 1) {
        const resolved = new URL(result.url, location.origin);
        if (resolved.origin !== location.origin || resolved.pathname !== `/api/evidence/${id}` || resolved.search || resolved.hash) {
          throw new Error('Invalid evidence URL');
        }
        url = resolved.href;
      }
    }
    uploaded.push({ name, mime, kind, url });
  }
  return uploaded;
}

async function pushRecord(record, records, recovery) {
  const media = await syncMedia(record, records);
  const response = await syncFetch('/api/ledger', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ record, media, ...(recovery ? { recovery: true } : {}) })
  });
  if (!response.ok) throw new Error(`sync ${response.status}`);
  const result = await response.json();
  if (!result.ok || result.files !== media.length) throw new Error('Ledger did not acknowledge every attachment');
}

let queueFlush = null;
let retryTimer = null;
let queueDirty = false;
function flushQueue() {
  queueDirty = true;
  if (queueFlush) return queueFlush;
  clearTimeout(retryTimer);
  const run = async () => {
    do {
      queueDirty = false;
      await flushQueueRecords();
    } while (queueDirty);
  };
  queueFlush = (navigator.locks
    ? navigator.locks.request('toend-sync', run)
    : withSyncLease(run)).catch((error) => {
      console.warn('Sheets sync failed', error);
      setSyncStatus('sync_failed', error.message);
      retryTimer = setTimeout(() => { void flushQueue(); }, 30000);
    }).finally(() => { queueFlush = null; });
  return queueFlush;
}

// Web Locks are not available in every browser. A renewable IndexedDB lease
// keeps fallback tabs from concurrently submitting the same outbox entries.
async function withSyncLease(run) {
  const db = await openDb();
  const owner = `${Date.now()}-${Math.random()}`;
  const lease = (release = false) => new Promise((resolve, reject) => {
    const tx = db.transaction('media', 'readwrite');
    const store = tx.objectStore('media');
    const request = store.get(SYNC_LEASE);
    let held = false;
    request.onsuccess = () => {
      const existing = request.result;
      if (release) {
        if (existing?.owner === owner) store.delete(SYNC_LEASE);
      } else if (!existing || existing.owner === owner || existing.expires < Date.now()) {
        store.put({ key: SYNC_LEASE, owner, expires: Date.now() + 60000 });
        held = true;
      }
    };
    tx.oncomplete = () => resolve(held);
    tx.onabort = tx.onerror = () => reject(tx.error || new Error('Sync lease failed'));
  });
  if (!await lease()) {
    retryTimer = setTimeout(() => { void flushQueue(); }, 5000);
    return;
  }
  const timer = setInterval(() => { void lease().catch(console.warn); }, 10000);
  try { await run(); } finally { clearInterval(timer); await lease(true); }
}

async function flushQueueRecords() {
  await migrateOutbox();
  const pending = await pendingSessionSeqs();
  if (!pending.length) {
    if (!queueDirty && $('syncStatus')?.dataset.state === 'sync_pending') setSyncStatus('sync_done');
    return;
  }
  setSyncStatus('sync_pending');
  const records = await allRecords();
  let failure = null;
  for (const entry of pending) {
    try {
      const record = records.find((item) => item.seq === entry.seq);
      if (!record) throw new Error(`${t('media_missing')} record ${entry.seq}`);
      await pushRecord(record, records, entry.recovery);
      await clearSessionPending(entry.seq);
    } catch (error) {
      failure ||= error;
    }
  }
  if (failure) throw failure;
  // Entries may have been added by another tab while this batch was sending.
  if ((await pendingSessionSeqs()).length) return flushQueueRecords();
  if (!queueDirty) setSyncStatus('sync_done');
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
    speech_lang: speechLang,
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
  if (photoPending || photoFailed) {
    note(noteId, t('media_pending'), true);
    return true;
  }
  // A live microphone is stopped or saved first: resetting the form now would
  // leave the recorder open and its words would land in the next note.
  if (recordState !== 'idle' || voiceHold) {
    note(noteId, t('audio_stop_first'), true);
    return true;
  }
  return false;
}

async function guardedWrite(noteId, work) {
  if (saving) return;
  $('photo').disabled = true;
  saving = true;
  try {
    await work();
  } catch (error) {
    note(noteId, `${t('save_failed')} ${error.message}`, true);
    await refreshSession().catch(() => {});
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
  // A saved or cleared note is not the place for a clip the server has not seen.
  pendingClip = null;
  polishing = false;
  polishToken += 1;
  stopLevelMeter();
  speechBase = '';
  $('transcript').value = '';
  setGrade(0);
  $('photo').value = '';
  mediaItems = [];
  audioState = null;
  photoFailed = false;
  hideMediaPreview();
  note('photoNote', '');
  note('audioNote', t('audio_hint'));
  setVoiceButton();
  if ($('worker') && activeSession?.status !== 'active') $('worker').value = '';
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
      note('quickNote', t('asset_required'), true);
      return;
    }
    if (activeSession?.status === 'active' && !DEMO_CHECKPOINTS.includes(checkpointFor(asset))) {
      note('quickNote', st('other'), true);
      return;
    }
    const isGrade = kind === 'grade';
    if (audioBusy('quickNote')) return;
    const isDefault = kind === 'default';
    const noEvidence = !hasEvidence();
    const defaultAssessment = (isDefault || (isGrade && grade === 3)) && noEvidence;
    const gradeReason = isGrade ? WORDS[lang].grade_reason.replace('N', grade) : '';
    const typed = $('transcript').value.trim();
    const transcript = typed;
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
  ['Äravool', 'Drain'],
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

// Session state and its durable outbox live in the existing media store.
function sessionRead() {
  return openDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(['records', 'media'], 'readonly');
    const state = tx.objectStore('media').get(SESSION_KEY);
    const records = tx.objectStore('records').getAll();
    tx.oncomplete = () => resolve({ session: state.result?.session || null, records: records.result });
    tx.onabort = tx.onerror = () => reject(tx.error || new Error('Session read failed'));
  }));
}

function sessionRecords(records, id) {
  return records.filter((record) => record.inspection_session_id === id);
}

function sessionSnapshot(records, id) {
  return JSON.stringify(sessionRecords(records, id).map((record) => [record.seq, record.hash]));
}

async function refreshSession() {
  const { session, records } = await sessionRead();
  activeSession = session;
  const active = session?.status === 'active';
  $('worker').readOnly = Boolean(active);
  if (active) $('worker').value = session.supervisor;
  const panel = $('sessionPanel');
  const mode = sessionMode;
  panel.hidden = !mode && !active;
  document.querySelector('.capture-layout').hidden = Boolean(mode);
  if (panel.hidden) return;
  $('sessionStartFields').hidden = true;
  $('sessionReview').hidden = true;
  $('sessionFinish').hidden = true;
  $('sessionSignatureField').hidden = true;
  $('sessionIdentity').textContent = st('identity');
  const valid = (mode === 'start' || mode === 'end') && sessionLine && sessionTag && (sessionParams.get('via') === 'nfc' || Boolean(namedSessionMode));
  $('sessionTitle').textContent = mode === 'start' ? st('start') : mode === 'end' ? st('end') : st('active');
  if (mode) $('capture-title').textContent = mode === 'start' ? st('start') : st('end');
  if (mode && !valid) {
    $('sessionDescription').textContent = st('invalid');
    return;
  }
  if (mode === 'start') {
    $('sessionDescription').textContent = active
      ? `${session.line === sessionLine && session.start_tag === sessionTag ? st('started') : st('conflict')} ${st('line')}: ${session.line}. ${st('inspector')}: ${session.supervisor}.`
      : `${st('line')}: ${sessionLine}. ${st('start_desc')}`;
    $('sessionStartFields').hidden = Boolean(active);
    return;
  }
  if (mode === 'end') {
    if (!session || session.line !== sessionLine) {
      $('sessionDescription').textContent = st('no_session');
      return;
    }
    $('sessionDescription').textContent = `${st('line')}: ${session.line}. ${st('inspector')}: ${session.supervisor}. ${session.status === 'completed' ? st('completed') : st('end_desc')}`;
    const entries = sessionRecords(records, session.id);
    reviewSnapshot = sessionSnapshot(records, session.id);
    const list = $('sessionReview');
    list.replaceChildren();
    for (const checkpoint of DEMO_CHECKPOINTS) {
      const item = document.createElement('li');
      const matching = entries.filter((record) => record.checkpoint === checkpoint);
      const last = matching.at(-1);
      const grades = matching.filter((record) => !record.auto_default).map((record) => record.grade).join(', ');
      item.textContent = `${checkpoint}: ${grades ? `${st('saved')}: ${grades}` : st('missing')}`;
      if (!last || last.auto_default) item.className = 'unverified';
      list.append(item);
    }
    list.hidden = false;
    $('sessionSignatureField').hidden = session.status !== 'active';
    $('sessionFinish').hidden = session.status !== 'active';
    return;
  }
  $('sessionDescription').textContent = `${st('line')}: ${session.line}. ${st('inspector')}: ${session.supervisor}. ${st('start_desc')}`;
  if ($('asset').value && !DEMO_CHECKPOINTS.includes(checkpointFor($('asset').value))) note('quickNote', st('other'), true);
}

function clearStartIntent(id) {
  const value = localStorage.getItem(START_INTENT_KEY);
  if (value && JSON.parse(value).id === id) localStorage.removeItem(START_INTENT_KEY);
}

async function persistStartIntent(session) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('media', 'readwrite');
    const store = tx.objectStore('media');
    const request = store.get(SESSION_KEY);
    let conflict = false;
    request.onsuccess = () => {
      const existing = request.result?.session;
      if (existing?.status === 'active' && existing.id !== session.id) {
        conflict = true;
        return;
      }
      if (existing?.id !== session.id) {
        store.put({ key: SESSION_KEY, session });
        store.put({ key: `inspection:session:${session.id}`, session });
      }
    };
    tx.oncomplete = () => resolve(!conflict);
    tx.onabort = tx.onerror = () => reject(tx.error || new Error('Session start failed'));
  });
}

async function recoverStartIntent() {
  const value = localStorage.getItem(START_INTENT_KEY);
  if (!value) return;
  const session = JSON.parse(value);
  const saved = await persistStartIntent(session);
  clearStartIntent(session.id);
  if (!saved) note('quickNote', st('conflict'), true);
  else notifyRecords({ seq: 0 });
}

async function startInspection() {
  const supervisor = $('sessionName').value.trim();
  if (!supervisor) { note('sessionNote', st('name_required'), true); return; }
  const session = {
    id: crypto.randomUUID(), line: sessionLine, supervisor, status: 'active',
    start_tag: sessionTag, started_at: new Date().toISOString()
  };
  // Persist the explicit start synchronously before a later NFC navigation.
  localStorage.setItem(START_INTENT_KEY, JSON.stringify(session));
  const saved = await persistStartIntent(session);
  clearStartIntent(session.id);
  if (!saved) throw new Error(st('conflict'));
  notifyRecords({ seq: 0 });
  await refreshSession();
}

async function finishInspection() {
  const signature = $('sessionSignature').value.trim();
  const normalizeName = (value) => value.normalize('NFC').replace(/\s+/g, ' ').trim().toLocaleLowerCase('et');
  if (!signature || !activeSession || normalizeName(signature) !== normalizeName(activeSession.supervisor)) {
    note('sessionNote', st('signature_required'), true);
    return;
  }
  const expectedId = activeSession?.id;
  const expectedSnapshot = reviewSnapshot;
  const db = await openDb();
  const added = await new Promise((resolve, reject) => {
    const tx = db.transaction(['records', 'media'], 'readwrite');
    const media = tx.objectStore('media');
    const store = tx.objectStore('records');
    const request = media.get(SESSION_KEY);
    const created = [];
    let failure;
    request.onsuccess = () => {
      const session = request.result?.session;
      if (!session || session.id !== expectedId || session.line !== sessionLine) {
        failure = new Error(st('changed')); tx.abort(); return;
      }
      if (normalizeName(signature) !== normalizeName(session.supervisor)) {
        failure = new Error(st('signature_required')); tx.abort(); return;
      }
      if (session.status === 'completed') return;
      const read = store.getAll();
      read.onsuccess = () => {
        const records = read.result.sort((a, b) => a.seq - b.seq);
        if (sessionSnapshot(records, session.id) !== expectedSnapshot) {
          failure = new Error(st('changed')); tx.abort(); return;
        }
        const entries = sessionRecords(records, session.id);
        let last = records.at(-1);
        for (const checkpoint of DEMO_CHECKPOINTS) {
          if (entries.some((record) => record.checkpoint === checkpoint)) continue;
          const seq = last ? last.seq + 1 : 1;
          const body = {
            asset: checkpoint, checkpoint, tag_sig: '', source: 'default', end_tag: sessionTag,
            method: 'Declared', verdict: 'clean', grade: 3, transcript: AUTO_DEFAULT_TEXT,
            reason: AUTO_DEFAULT_TEXT, supervisor: session.supervisor,
            inspection_session_id: session.id, inspection_line: session.line,
            auto_default: true, default_assessment: true, quick: true,
            seq, local_seq: seq, device_id: deviceId(),
            prev_hash: last ? last.hash : '0'.repeat(64), created_at: new Date().toISOString()
          };
          last = { ...body, hash: sha256Sync(body) };
          store.add(last);
          // This durable outbox is committed atomically with the defaults.
          media.put({ key: `${SESSION_PENDING}${seq}`, seq });
          created.push(last);
        }
        const completedAt = new Date().toISOString();
        const seq = last ? last.seq + 1 : 1;
        const completion = {
          record_type: 'inspection_completion',
          inspection_session_id: session.id, inspection_line: session.line,
          supervisor: session.supervisor, signed_by: signature, signature_method: 'typed_self_declared', start_tag: session.start_tag, end_tag: sessionTag,
          started_at: session.started_at, created_at: completedAt,
          seq, local_seq: seq, device_id: deviceId(),
          prev_hash: last ? last.hash : '0'.repeat(64)
        };
        const marker = { ...completion, hash: sha256Sync(completion) };
        store.add(marker);
        media.put({ key: `${SESSION_PENDING}${seq}`, seq });
        created.push(marker);
        const completed = { ...session, status: 'completed', signed_by: signature, signature_method: 'typed_self_declared', end_tag: sessionTag, completed_at: completedAt };
        media.put({ key: SESSION_KEY, session: completed });
        media.put({ key: `inspection:session:${session.id}`, session: completed });
      };
    };
    tx.oncomplete = () => resolve(created);
    tx.onabort = tx.onerror = () => reject(failure || tx.error || new Error('Session completion failed'));
  });
  if (added.length) setSyncStatus('sync_pending');
  for (const record of added) notifyRecords(record);
  notifyRecords({ seq: 0 });
  await refreshSession();
  void flushQueue();
}

async function pendingSessionSeqs() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction('media', 'readonly').objectStore('media')
      .getAll(IDBKeyRange.bound(SESSION_PENDING, `${SESSION_PENDING}\uffff`));
    request.onsuccess = () => resolve(request.result
      .filter((entry) => typeof entry.key === 'string' && entry.key.startsWith(SESSION_PENDING))
      .sort((a, b) => a.seq - b.seq));
    request.onerror = () => reject(request.error);
  });
}

async function clearSessionPending(seq) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('media', 'readwrite');
    const store = tx.objectStore('media');
    store.delete(`${SESSION_PENDING}${seq}`);
    store.put({ key: `${SYNC_ACK}${seq}`, seq });
    tx.oncomplete = resolve;
    tx.onabort = tx.onerror = () => reject(tx.error || new Error('Outbox update failed'));
  });
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
  if (commit) speechBase = field.value;
  growTranscript(field);
  const end = field.value.length;
  field.setSelectionRange(end, end);
}

// The server text lands as a new line under whatever is already typed.
function appendSpoken(text) {
  const field = $('transcript');
  if (!field || !text) return;
  const prefix = String(field.value || '').trim();
  field.value = prefix ? `${prefix}\n${text}` : text;
  speechBase = field.value;
  growTranscript(field);
}

// The guessed browser words are swapped for the server text, anchored on the
// note exactly as it was before the speaking started.
function replaceSpoken(base, text) {
  const field = $('transcript');
  if (!field || !text) return;
  const prefix = String(base || '').trim();
  field.value = prefix ? `${prefix}\n${text}` : text;
  speechBase = field.value;
  growTranscript(field);
}

let recorder = null;
let recordChunks = [];
let recordStream = null;
let recorderReady = null;
let recordMime = '';
let recordError = '';
let recordStartedAt = 0;
let recordSeconds = 0;
let levelContext = null;
let levelFrame = 0;
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
  recordStartedAt = 0;
  recordSeconds = 0;
  recorderReady = navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    if (!voiceHold) {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }
    recordStream = stream;
    startLevelMeter(stream);
    const mime = pickAudioMime();
    recorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
    recordMime = recorder.mimeType || mime;
    recordChunks = [];
    recorder.ondataavailable = (event) => { if (event.data && event.data.size) recordChunks.push(event.data); };
    recorder.onstart = () => { recordStartedAt = performance.now(); };
    recordStartedAt = performance.now();
    recorder.start();
  }).catch((error) => { recorder = null; recordError = error?.name || 'unknown'; stopLevelMeter(); });
}

// The duration the server needs is the time the recorder was actually running.
function stopRecorder() {
  return Promise.resolve(recorderReady).catch(() => {}).then(() => new Promise((resolve) => {
    const finish = (blob) => {
      recordStream?.getTracks().forEach((track) => track.stop());
      recordStream = null;
      recorder = null;
      recordChunks = [];
      stopLevelMeter();
      resolve(blob && blob.size ? blob : null);
    };
    if (recordStartedAt) {
      recordSeconds = Math.max(0, (performance.now() - recordStartedAt) / 1000);
      recordStartedAt = 0;
    }
    if (!recorder || recorder.state === 'inactive') {
      finish(recordChunks.length ? new Blob(recordChunks, { type: recordMime || 'audio/webm' }) : null);
      return;
    }
    recorder.onstop = () => finish(new Blob(recordChunks, { type: recorder.mimeType || recordMime || 'audio/webm' }));
    try { recorder.stop(); } catch { finish(null); }
  }));
}

let recordState = 'idle';
// One clip the server has not written down yet, kept until the connection returns.
let pendingClip = null;
let switchingToRecording = false;

function startLevelMeter(stream) {
  stopLevelMeter();
  const meter = $('voiceLevel');
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!meter || !stream || !AudioCtx) return;
  try {
    levelContext = new AudioCtx();
    levelContext.resume().catch(() => {});
  } catch {
    return;
  }
  const analyser = levelContext.createAnalyser();
  analyser.fftSize = 512;
  levelContext.createMediaStreamSource(stream).connect(analyser);
  const samples = new Uint8Array(analyser.fftSize);
  const draw = () => {
    analyser.getByteTimeDomainData(samples);
    let sum = 0;
    for (const sample of samples) {
      const value = (sample - 128) / 128;
      sum += value * value;
    }
    const rms = Math.sqrt(sum / samples.length);
    meter.style.setProperty('--level', Math.min(1, rms * 4).toFixed(2));
    levelFrame = requestAnimationFrame(draw);
  };
  draw();
}

function stopLevelMeter() {
  if (levelFrame) cancelAnimationFrame(levelFrame);
  levelFrame = 0;
  const context = levelContext;
  levelContext = null;
  if (context) {
    try { context.close().catch(() => {}); } catch { /* already closed */ }
  }
  const meter = $('voiceLevel');
  if (meter) meter.style.setProperty('--level', '0');
}

function clipForm(blob, seconds) {
  const body = new FormData();
  body.set('file', blob, audioFileName(blob.type || recordMime));
  body.set('language', 'et');
  body.set('seconds', Number(seconds || 0).toFixed(1));
  return body;
}

async function postClip(blob, seconds) {
  const response = await fetch('./api/transcribe', { method: 'POST', body: clipForm(blob, seconds) });
  if (!response.ok) throw new Error(`transcribe ${response.status}`);
  const payload = await response.json().catch(() => ({}));
  return String(payload.text || '').trim();
}

async function transcribeRecording(blob) {
  return postClip(blob, recordSeconds);
}

// iPhone Safari has no Web Speech API, so the same button records a clip and
// sends it to Whisper on the server; the text is written into the note.
async function toggleRecordOnly() {
  if (recordState === 'sending') {
    note('audioNote', t('polishing'));
    return;
  }
  if (recordState === 'listening') {
    recordState = 'sending';
    voiceHold = false;
    setVoiceButton();
    note('audioNote', t('polishing'));
    const blob = await stopRecorder();
    // A tap-length clip is mostly silence, which Whisper can invent a word for.
    const tooShort = Boolean(blob) && blob.size < 400;
    const seconds = recordSeconds;
    let text = null;
    if (blob && !tooShort && navigator.onLine) {
      try {
        text = await transcribeRecording(blob);
      } catch {
        text = null;
      }
    }
    recordState = 'idle';
    resetVoiceUI();
    if (text) {
      appendSpoken(text);
      note('audioNote', t('text_ready'));
      flushPendingClip();
      return;
    }
    if (blob && !tooShort) {
      pendingClip = { blob, seconds };
      if (navigator.onLine) note('audioNote', t('record_failed'), true);
      else note('audioNote', t('voice_pending_offline'));
      return;
    }
    const denied = recordError === 'NotAllowedError' || recordError === 'SecurityError' || recordError === 'PermissionDeniedError';
    note('audioNote', t(tooShort ? 'record_short' : denied ? 'audio_denied' : 'record_failed'), true);
    flushPendingClip();
    return;
  }
  recordState = 'listening';
  voiceHold = true;
  userOwned = false;
  setVoiceButton();
  note('audioNote', t('listening'));
  startRecorder();
}

// The server was not reachable, so the clip waits for the connection instead of
// being lost; the online event sends it without another tap.
async function resumePendingClip() {
  const clip = pendingClip;
  // A live session owns the note; the clip waits until it ends.
  if (!clip || !navigator.onLine || polishing || voiceHold
    || recordState !== 'idle' || switchingToRecording) return;
  pendingClip = null;
  // The user typed after speaking, so their own words win over the clip.
  if (userOwned) return;
  // A save or a new session clears the note this text belongs to.
  const token = polishToken;
  polishing = true;
  note('audioNote', t('polishing'));
  try {
    const text = await postClip(clip.blob, clip.seconds);
    if (token !== polishToken || userOwned) return;
    if (text) {
      appendSpoken(text);
      note('audioNote', t('text_ready'));
    } else {
      note('audioNote', t('record_failed'), true);
    }
  } catch {
    if (token !== polishToken) return;
    pendingClip = clip;
    note('audioNote', t('voice_pending_offline'));
  } finally {
    if (token === polishToken) polishing = false;
  }
}

// A clip kept for the network must not land in the middle of a session.
function flushPendingClip() {
  if (!pendingClip || !navigator.onLine || polishing || voiceHold
    || recordState !== 'idle' || switchingToRecording) return;
  void resumePendingClip();
}

// A browser can expose speech recognition and still refuse it after the
// microphone was granted; then the recording path is used instead.
async function switchToRecording() {
  if (switchingToRecording) return;
  switchingToRecording = true;
  try {
    resetVoiceUI();
    await stopRecorder();
    toggleRecordOnly();
    note('audioNote', t('speech_to_record'));
  } finally {
    switchingToRecording = false;
  }
}

async function polishUtterance(base, owned, token) {
  const blob = await stopRecorder();
  // Offline, owned by the user, or too short: the browser text stays as it is.
  if (owned || token !== polishToken || !blob || blob.size < 400 || !navigator.onLine) {
    if (token === polishToken) {
      polishing = false;
      note('audioNote', t('audio_hint'));
      flushPendingClip();
    }
    return;
  }
  note('audioNote', t('polishing'));
  try {
    const text = await transcribeRecording(blob);
    if (token !== polishToken || userOwned) return;
    if (text) replaceSpoken(base, text);
  } catch {
    // The browser text stays when the clean-up cannot run.
  } finally {
    if (token === polishToken) {
      polishing = false;
      note('audioNote', t('text_ready'));
      flushPendingClip();
    }
  }
}

function speechRecognition() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function speechErrorNote(error) {
  note('audioNote', `${t('speech_stopped')}: ${error}`, true);
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
    if (handlers.onDone) handlers.onDone({ restart, heard: Boolean(text) });
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
    // Words already in the note must not be recorded a second time: ending the
    // session normally lets the clip replace them with the cleaned-up text.
    const heard = [...session.texts, session.interim].join(' ').trim().length > 0;
    // A refused microphone is the recording path's problem, not the browser's.
    if (error === 'not-allowed' || error === 'audio-capture') {
      if (heard) {
        finish();
        return;
      }
      session.cancel();
      if (handlers.onDenied) handlers.onDenied(error);
      return;
    }
    // This service cannot speak Estonian or cannot be reached at all. Recording
    // the clip is the only way forward, and a retry loop must not start.
    if (error === 'language-not-supported' || error === 'language-unavailable'
      || error === 'network' || error === 'service-not-allowed') {
      if (heard) {
        finish();
        return;
      }
      session.cancel();
      if (handlers.onUnusable) handlers.onUnusable(error);
      return;
    }
    const quiet = error === 'no-speech' || error === 'aborted';
    if (quiet && voiceHold && handlers.onChunkFull) {
      finish({ restart: true });
      return;
    }
    if (quiet) {
      if (handlers.onSilence) handlers.onSilence();
      finish();
      return;
    }
    if (handlers.onChunkFull) {
      finish({ restart: true });
      return;
    }
    if (handlers.onSilence) handlers.onSilence();
    finish();
    speechErrorNote(error);
  };
  recognition.onend = () => {
    if (!session.finished) {
      finish({ restart: Boolean(handlers.onChunkFull) && voiceHold });
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
  stopLevelMeter();
  const field = $('transcript');
  if (field) {
    speechBase = field.value;
    growTranscript(field);
  }
  note('audioNote', t('audio_hint'));
  setVoiceButton();
}

// One button starts a session and ends it, so its label and pressed state
// follow the microphone, and the level bar only shows while it is open.
function setVoiceButton() {
  const active = voiceHold || recordState === 'listening';
  const meter = $('voiceLevel');
  if (meter) meter.classList.toggle('on', active);
  const button = $('voiceBtn');
  if (!button) return;
  button.classList.toggle('listening', active);
  button.setAttribute('aria-pressed', String(active));
  button.textContent = t(active ? 'done_btn' : 'speak');
  if (active) button.title = t('record_stop_hint');
  else button.removeAttribute('title');
}

function afterVoiceStop() {
  const base = utteranceBase;
  const owned = userOwned;
  const token = polishToken;
  // The pass, even the one that decides not to run, keeps the button closed.
  polishing = true;
  resetVoiceUI();
  polishUtterance(base, owned, token);
}

function beginHeldSpeech(langCode, attempt = 0) {
  const session = startSpeechSession(langCode, {
    onProgress: (text) => {
      if (text) speechRestarts = 0;
      writeSpeech(text, false);
    },
    onText: (text) => {
      speechRestarts = 0;
      writeSpeech(text, true);
    },
    onSilence: () => { voiceHold = false; },
    onChunkFull: () => { voiceHold = true; },
    onDenied: () => { switchToRecording(); },
    onUnusable: () => { switchToRecording(); },
    onDone: ({ restart, heard } = {}) => {
      if (!restart) {
        afterVoiceStop();
        return;
      }
      speechRestarts = heard ? 0 : speechRestarts + 1;
    },
    onMicFree: () => {
      if (!voiceHold) return;
      // A service that keeps giving the mic back without a word is recorded instead.
      if (speechRestarts > SPEECH_RESTART_LIMIT) {
        switchToRecording();
        return;
      }
      beginHeldSpeech(langCode);
    }
  });
  if (!session) {
    if (voiceHold && attempt < 2) {
      setTimeout(() => beginHeldSpeech(langCode, attempt + 1), 300);
      return;
    }
    if (recordState === 'idle') resetVoiceUI();
    return;
  }
  if (!session.finished) speechSession = session;
}

function toggleVoice() {
  if (switchingToRecording) return;
  // The server pass owns the note until it finishes.
  if (polishing) {
    note('audioNote', t('polishing'));
    return;
  }
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
  speechRestarts = 0;
  polishToken += 1;
  utteranceBase = $('transcript').value;
  speechBase = utteranceBase;
  setVoiceButton();
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
  $('sessionStart').addEventListener('click', async () => {
    $('sessionStart').disabled = true;
    try { await startInspection(); }
    catch (error) { note('sessionNote', error.message, true); await refreshSession(); }
    finally { $('sessionStart').disabled = false; }
  });
  $('sessionFinish').addEventListener('click', async () => {
    $('sessionFinish').disabled = true;
    try { await finishInspection(); }
    catch (error) { await refreshSession(); note('sessionNote', error.message, true); }
    finally { $('sessionFinish').disabled = false; }
  });
  $('langToggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'et' : 'en';
    localStorage.setItem('toend-lang', lang);
    applyLanguage();
    if (speechSession || voiceHold || recordState !== 'idle') toggleVoice();
    refreshCount();
  });
  // The workbook table follows records saved in another tab on this device.
  recordsChannel?.addEventListener('message', () => {
    refreshCount().catch(() => {});
    refreshSession().catch(() => {});
    setSyncStatus('sync_pending');
    void flushQueue();
  });
  window.addEventListener('storage', (event) => {
    if (event.key === 'toend-records-event') refreshCount().catch(() => {});
    if (event.key === 'toend-records-event') refreshSession().catch(() => {});
    if (event.key === 'toend-records-event') { setSyncStatus('sync_pending'); void flushQueue(); }
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
  $('transcript').addEventListener('input', (event) => {
    if (!event.isTrusted || (!voiceHold && !polishing && !pendingClip)) return;
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
        const result = mediaKind(file.type, file.name) === 'video' ? await analyseVideo(file) : await analysePhoto(file);
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
  $('syncRetry').addEventListener('click', () => { setSyncStatus('sync_pending'); void flushQueue(); });
  window.addEventListener('online', () => { updateNetwork(); flushPendingClip(); void flushQueue(); });
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
  if (asset && !sessionMode && document.documentElement.dataset.mode === 'record') {
    setAsset(asset, tag || '', via === 'nfc' ? 'nfc' : 'link');
    if (via === 'nfc') setGrade(3);
    document.getElementById('capture')?.scrollIntoView({ block: 'start' });
    $('grade3').focus({ preventScroll: true });
  }
  navigator.storage?.persist?.().catch(() => {});
  await recoverStartIntent();
  await refreshCount();
  await refreshSession();
  $('saveBtn').disabled = false;
  $('sessionStart').disabled = false;
  $('sessionFinish').disabled = false;
  void flushQueue();
  await registerServiceWorker();
}

start().catch((error) => note('saveNote', `Startup failed: ${error.message}`, true));
