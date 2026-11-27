# Notes — @stevenlaas123-pixel

Append-only. Newest at the bottom. One line per session is enough; include the
file or line number when it helps the next person.

Format:

```
- **2026-11-27 14:05** — what changed, what you learned, what is next
```

---

- **2026-11-27 09:00** — hardened the repo: public visibility, protected `main`,
  `crew` team, CI gate, coordination kit. Next: assign roles in `STATUS.md`.
- **2026-11-27** — resolved `fix/capture-integrity` merge with `origin/main`: retained atomic record and attachment writes alongside the minimal capture UI; audit panel remains removed by main.
- **2026-11-27** — Simplified capture controls in `app/`; speech uses the browser language by request, not automatic language detection. Physical NFC and speech need device testing.
- **2026-11-27** — Corrected video action and removed requested header and media copy in `app/`; media status remains available. Physical camera and offline capture not tested.
- **2026-11-27** — Grade escalation in `app/app.js`: the fourth consecutive grade 2 for an asset is recorded as grade 1 within the append transaction; original choice and reason remain traceable. Device-local history only.
- **2026-11-27** — Redesigned the capture-first interface with a white/red/black palette, retaining upstream copy changes. At the user's request, publishing via an admin merge bypassing required review; the owner previously bypassed review twice to ship faster. Phone and offline capture not tested.
- **2026-11-27** — Removed slide-like boxes from the landing and recording views, retaining the separate hosts. At the user's request, publishing via an admin merge bypassing review; the owner previously bypassed review twice to ship faster.
- **2026-11-27** — Reverted the unboxed layout at the user's request, keeping the separate landing and NFC views. Publishing via admin merge without review as requested; the owner previously bypassed review twice to ship faster.
- **2026-11-27** — Removed the speech-language selector from the NFC capture view; speech starts with the browser language and retains its existing fallback. Publishing via admin merge without review as requested; the owner previously bypassed review twice to ship faster. Physical speech recognition not tested.
- **2026-11-27** — Removed the line selector from the NFC view; the landing page keeps its manual selector. Physical NFC and offline capture not tested.
- **2026-11-27** — Publishing the NFC selector removal via admin merge without review at the user's request; the owner previously bypassed review twice to ship faster.
- **2026-11-27** — Simplified Excel CSV by omitting hashes, media_items and photo thumbnails; stored records and JSONL exports remain unchanged.
