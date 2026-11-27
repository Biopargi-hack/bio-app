const MAX_BYTES = 8 * 1024 * 1024;
const PROMPT = 'Tihend, drenaaž, kätepesu, mustus, vaht, jäägid, puhastatud, korras.';
const LANGUAGES = new Set(['et', 'ru', 'en']);

export function cleanTranscript(text, prompt = PROMPT) {
  let value = String(text || '').replace(/\s+/g, ' ').trim();
  if (!value || value === prompt) return '';
  if (prompt && value.startsWith(`${prompt} `)) value = value.slice(prompt.length).trim();
  return value;
}

export async function onRequestPost({ request, env }) {
  const key = env.GROQ_API_KEY;
  if (!key) return Response.json({ error: 'unavailable' }, { status: 503 });
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
  const asked = String(form.get('language') || 'et').slice(0, 2);
  const language = LANGUAGES.has(asked) ? asked : 'et';
  const body = new FormData();
  body.set('file', file, file.name || 'note.webm');
  body.set('model', 'whisper-large-v3');
  body.set('language', language);
  body.set('response_format', 'json');
  body.set('temperature', '0');
  if (language === 'et') body.set('prompt', PROMPT);
  const upstream = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'User-Agent': 'taptoprove-voice/1.0'
    },
    body
  });
  if (!upstream.ok) return Response.json({ error: 'unavailable' }, { status: 502 });
  const payload = await upstream.json();
  return Response.json({ text: cleanTranscript(payload.text, language === 'et' ? PROMPT : '') });
}
