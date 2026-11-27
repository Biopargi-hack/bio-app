// Pure helpers shared by the capture app, the live sheet and the offline gate.
// No DOM or browser API here, so they can be tested with plain Node.

const FORMULA_PREFIX = /^[=+\-@\t\r]/;

export function csvCell(value) {
  const text = value === null || value === undefined ? "" : String(value);
  const safe = FORMULA_PREFIX.test(text) ? `'${text}` : text;
  return `"${safe.replaceAll('"', '""')}"`;
}

export function imageHashBits(bits) {
  if (typeof bits !== "string" || bits.length === 0 || /[^01]/.test(bits)) {
    throw new Error("imageHashBits expects a non-empty binary string");
  }
  const padded = bits.padStart(Math.ceil(bits.length / 4) * 4, "0");
  const chunks = padded.match(/.{4}/g) ?? [];
  return chunks.map((chunk) => Number.parseInt(chunk, 2).toString(16)).join("").padStart(16, "0");
}

const PREFERRED_HEADERS = [
  "seq", "created_at", "device_id", "asset", "checkpoint", "method", "verdict",
  "reason", "grade", "tier", "tag_sig", "source", "transcript", "instrument",
  "language", "speech_lang", "prev_hash", "hash", "photo_hash", "photo_usable",
  "photo_reuse_of", "media_hash", "media_mime", "media_size", "media_duration",
  "audio_hash", "audio_mime", "audio_size", "audio_duration",
  "default_assessment", "media_missing",
];

export function recordHeaders(records) {
  const present = new Set();
  for (const record of records ?? []) {
    for (const key of Object.keys(record)) present.add(key);
  }
  const ordered = PREFERRED_HEADERS.filter((key) => present.has(key));
  const rest = [...present].filter((key) => !ordered.includes(key) && key !== "photo_thumb").sort();
  return [...ordered, ...rest];
}

function zonedDate(iso, timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(iso));
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return new Date(Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day)));
}

export function isoWeekKey(iso, timeZone = "Europe/Tallinn") {
  const date = zonedDate(iso, timeZone);
  const weekday = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - weekday);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${date.getUTCFullYear()}-W${week}`;
}
