// Estonian speech to text for voice notes.
// First choice: the TalTech Estonian Whisper model on our own server (ASR_URL,
// ASR_TOKEN). If it is down, busy or slow, Groq whisper-large-v3 answers
// instead (GROQ_API_KEY). An empty text from the first engine means no speech
// and is returned as is: a second engine would only invent words for silence.
const MAX_BYTES = 8 * 1024 * 1024;
const PROMPT = 'Tihend, drenaaž, kätepesu, mustus, vaht, jäägid, puhastatud, korras.';
// Whole answers that Whisper models produce for silence or noise.
const HALLUCINATION = /^(?:subtiitrid?\b.*|tõlkis\b.*|tänan vaatamast|aitäh vaatamast|aitäh|tänan|head aega|thank you|thanks for watching.*)[.!…]*$/i;

export function cleanTranscript(text, prompt = PROMPT) {
  let value = String(text || '').replace(/\s+/g, ' ').trim();
  if (!value || value === prompt) return '';
  if (prompt && value.startsWith(`${prompt} `)) value = value.slice(prompt.length).trim();
  return value;
}

// Sentence case and a closing full stop, so a spoken note reads like a typed one.
export function tidyEstonian(text) {
  let value = String(text || '').replace(/\s+/g, ' ').replace(/\s+([,.!?;:])/g, '$1').trim();
  if (!value || HALLUCINATION.test(value)) return '';
  value = value.charAt(0).toLocaleUpperCase('et') + value.slice(1);
  if (/[\p{L}\p{N}]$/u.test(value)) value += '.';
  return value;
}

// The model runs on a shared CPU: about 8 s for a short note under load,
// roughly half the clip length for a long one.
function ownTimeout(seconds) {
  const spoken = Number(seconds);
  if (!Number.isFinite(spoken) || spoken <= 0) return 30000;
  return Math.min(90000, Math.round(15000 + spoken * 1500));
}

async function viaOwnServer(file, env, seconds) {
  if (!env.ASR_URL || !env.ASR_TOKEN) return null;
  try {
    const response = await fetch(env.ASR_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.ASR_TOKEN}`,
        'Content-Type': file.type || 'application/octet-stream',
        'User-Agent': 'taptoprove-voice/2.0'
      },
      body: await file.arrayBuffer(),
      signal: AbortSignal.timeout(ownTimeout(seconds))
    });
    if (!response.ok) return null;
    const payload = await response.json();
    return typeof payload.text === 'string' ? payload.text : null;
  } catch {
    return null;
  }
}

async function viaGroq(file, env) {
  if (!env.GROQ_API_KEY) return null;
  const body = new FormData();
  body.set('file', file, file.name || 'note.webm');
  body.set('model', 'whisper-large-v3');
  body.set('language', 'et');
  body.set('response_format', 'json');
  body.set('temperature', '0');
  body.set('prompt', PROMPT);
  try {
    const upstream = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.GROQ_API_KEY}`,
        'User-Agent': 'taptoprove-voice/2.0'
      },
      body,
      signal: AbortSignal.timeout(20000)
    });
    if (!upstream.ok) return null;
    const payload = await upstream.json();
    return cleanTranscript(payload.text, PROMPT);
  } catch {
    return null;
  }
}

export async function onRequestPost({ request, env }) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: 'bad form' }, { status: 400 });
  }
  const file = form.get('file');
  if (!file || typeof file.arrayBuffer !== 'function' || !file.size) {
    return Response.json({ error: 'no file' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) return Response.json({ error: 'too big' }, { status: 413 });
  const seconds = form.get('seconds');
  let engine = 'taltech';
  let text = await viaOwnServer(file, env, seconds);
  if (text === null) {
    engine = 'groq';
    text = await viaGroq(file, env);
  }
  if (text === null) return Response.json({ error: 'unavailable' }, { status: 503 });
  return Response.json({ text: tidyEstonian(text), engine });
}
