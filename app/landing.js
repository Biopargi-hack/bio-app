// Landing page demo on taptoprove.ee: a simulated NFC card tap that saves a
// record on the phone mock. Nothing is written to storage; real records are made
// on nfc.taptoprove.ee by app.js.
const root = document.documentElement;
const demo = document.getElementById('demo');

if (root.dataset.mode === 'landing' && demo) init();

function init() {
  const phone = document.getElementById('demoPhone');
  const screens = {
    idle: demo.querySelector('.ps-idle'),
    grade: demo.querySelector('.ps-grade'),
    saved: demo.querySelector('.ps-saved')
  };
  const placeEl = document.getElementById('demoPlace');
  const savedMeta = document.getElementById('demoSavedMeta');
  const clock = document.getElementById('demoClock');
  const cards = [...demo.querySelectorAll('.tag')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const ease = 'cubic-bezier(.2, .8, .2, 1)';
  const names = new Map();
  const records = [];
  let active = null;
  let busy = false;
  let savedTimer = 0;
  let suppressClick = null;
  let lastSaved = null;

  const lang = () => (root.lang === 'en' ? 'en' : 'et');
  const word = (key) => document.querySelector(`.demo-words [data-word="${key}"]`)?.textContent || key;
  const placeName = (key) => names.get(key)?.[lang()] || key;
  const seqLabel = (seq) => `#${String(seq).padStart(4, '0')}`;
  const shortHash = (hash) => `${hash.slice(0, 6)}…${hash.slice(-4)}`;
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const rest = (card) => `rotate(${getComputedStyle(card).getPropertyValue('--r').trim() || '0deg'})`;

  for (const card of cards) {
    const et = card.dataset.place;
    names.set(et, { et, en: card.dataset.placeEn || et });
  }

  function tick() {
    clock.textContent = new Date().toLocaleTimeString(lang() === 'en' ? 'en-GB' : 'et-EE', { hour: '2-digit', minute: '2-digit' });
  }
  tick();
  setInterval(tick, 20000);

  function show(name) {
    for (const [key, el] of Object.entries(screens)) el.hidden = key !== name;
    phone.dataset.screen = name;
  }

  function ping() {
    phone.classList.remove('pinging');
    void phone.offsetWidth;
    phone.classList.add('pinging');
  }

  function contact(card) {
    clearTimeout(savedTimer);
    demo.classList.add('touched');
    active = { place: card.dataset.place, tag: card.dataset.tag };
    for (const other of cards) other.classList.toggle('is-active', other === card);
    ping();
    placeEl.textContent = placeName(active.place);
    show('grade');
    screens.grade.querySelector('button')?.focus({ preventScroll: true });
    const rect = phone.getBoundingClientRect();
    if (rect.bottom > window.innerHeight || rect.top < 0) {
      phone.scrollIntoView({ block: 'end', behavior: reduced.matches ? 'auto' : 'smooth' });
    }
  }

  function phoneOffset(card) {
    const from = card.getBoundingClientRect();
    const to = phone.getBoundingClientRect();
    return {
      dx: to.left + to.width / 2 - (from.left + from.width / 2),
      dy: to.top + to.height * 0.44 - (from.top + from.height / 2)
    };
  }

  async function tap(card) {
    if (busy) return;
    if (reduced.matches) { contact(card); return; }
    busy = true;
    const { dx, dy } = phoneOffset(card);
    const touching = `translate(${dx}px, ${dy}px) rotate(-4deg) scale(.9)`;
    card.classList.add('flying');
    const go = card.animate([{ transform: getComputedStyle(card).transform }, { transform: touching }], { duration: 430, easing: ease, fill: 'forwards' });
    try { await go.finished; } catch { /* cancelled */ }
    contact(card);
    await wait(240);
    const back = card.animate([{ transform: touching }, { transform: rest(card) }], { duration: 480, easing: ease });
    go.cancel();
    try { await back.finished; } catch { /* cancelled */ }
    card.classList.remove('flying');
    busy = false;
  }

  function overPhone(event) {
    const rect = phone.getBoundingClientRect();
    const pad = 24;
    return event.clientX > rect.left - pad && event.clientX < rect.right + pad && event.clientY > rect.top - pad && event.clientY < rect.bottom + pad;
  }

  for (const card of cards) {
    let start = null;
    let moved = false;
    let lastTransform = '';

    card.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || busy) return;
      start = { x: event.clientX, y: event.clientY, id: event.pointerId };
      moved = false;
    });
    card.addEventListener('pointermove', (event) => {
      if (!start || event.pointerId !== start.id) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      if (!moved && Math.hypot(dx, dy) < 6) return;
      if (!moved) {
        moved = true;
        try { card.setPointerCapture(event.pointerId); } catch { /* pointer already gone */ }
        card.classList.add('dragging');
      }
      lastTransform = `translate(${dx}px, ${dy}px) rotate(${Math.max(-8, Math.min(8, dx / 30))}deg)`;
      card.style.transform = lastTransform;
      phone.classList.toggle('drop-target', overPhone(event));
    });
    const finish = (event, cancelled) => {
      if (!start || event.pointerId !== start.id) return;
      start = null;
      phone.classList.remove('drop-target');
      if (!moved) return;
      if (!cancelled) suppressClick = card;
      card.classList.remove('dragging');
      card.style.transform = '';
      if (!cancelled && overPhone(event)) contact(card);
      if (!reduced.matches) card.animate([{ transform: lastTransform }, { transform: rest(card) }], { duration: 420, easing: ease });
    };
    card.addEventListener('pointerup', (event) => finish(event, false));
    card.addEventListener('pointercancel', (event) => finish(event, true));
    card.addEventListener('click', () => {
      if (suppressClick === card) { suppressClick = null; return; }
      tap(card);
    });
  }

  screens.grade.addEventListener('click', async (event) => {
    const button = event.target.closest('button[data-grade]');
    if (!button || !active) return;
    const grade = Number(button.dataset.grade);
    const item = active;
    active = null;
    const record = await append(item, grade);
    lastSaved = record;
    savedMeta.textContent = savedText(record);
    show('saved');
    const card = cards.find((candidate) => candidate.dataset.place === item.place);
    card?.focus({ preventScroll: true });
    savedTimer = setTimeout(() => {
      active = null;
      for (const other of cards) other.classList.remove('is-active');
      show('idle');
    }, 2600);
  });

  async function digest(body) {
    const bytes = new TextEncoder().encode(JSON.stringify(body));
    if (globalThis.crypto?.subtle) {
      const buffer = await crypto.subtle.digest('SHA-256', bytes);
      return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
    }
    // Plain-HTTP fallback: FNV-1a stretched to 64 hex characters, only for display.
    let out = '';
    for (let round = 0; round < 8; round++) {
      let h = 0x811c9dc5 ^ round;
      for (const byte of bytes) h = Math.imul(h ^ byte, 0x01000193) >>> 0;
      out += h.toString(16).padStart(8, '0');
    }
    return out;
  }

  // The demo keeps its records in memory only, to number them and show a hash.
  async function append(item, grade) {
    const prev = records.length ? records[records.length - 1].hash : '0'.repeat(64);
    const record = { seq: records.length + 1, place: item.place, tag: item.tag, grade, at: new Date().toISOString(), prev };
    record.hash = await digest(record);
    records.push(record);
    return record;
  }

  function savedText(record) {
    return `${word('record')} ${seqLabel(record.seq)} · ${shortHash(record.hash)}`;
  }

  function relabel() {
    for (const card of cards) card.querySelector('.tag-place').textContent = placeName(card.dataset.place);
    if (active) placeEl.textContent = placeName(active.place);
    if (lastSaved) savedMeta.textContent = savedText(lastSaved);
    tick();
  }

  // app.js rewrites the copy on a language switch; keep the demo in step.
  new MutationObserver(relabel).observe(root, { attributes: true, attributeFilter: ['lang'] });

  show('idle');
}
