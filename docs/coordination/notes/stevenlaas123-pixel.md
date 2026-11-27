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
- **2026-11-27** — Redesigned the landing and capture interface in `app/index.html` and `app/styles.css`: capture first, compact work surface, white/red/black palette; existing controls and ledger retained.
- **2026-11-27** — At the user's request, publishing PR #94 with an admin merge that bypasses the required review; checks passed before the merge. The owner previously bypassed review twice to ship faster.
