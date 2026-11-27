// Pure helpers shared by the capture app, the live sheet and the offline gate.
// No DOM or browser API here, so they can be tested with plain Node.


export function imageHashBits(bits) {
  if (typeof bits !== "string" || bits.length === 0 || /[^01]/.test(bits)) {
    throw new Error("imageHashBits expects a non-empty binary string");
  }
  const padded = bits.padStart(Math.ceil(bits.length / 4) * 4, "0");
  const chunks = padded.match(/.{4}/g) ?? [];
  return chunks.map((chunk) => Number.parseInt(chunk, 2).toString(16)).join("").padStart(16, "0");
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
