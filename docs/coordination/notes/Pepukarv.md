# Notes — @Pepukarv

Append-only. Newest at the bottom. One line per session is enough; include the
file or line number when it helps the next person.

Format:

```
- **2026-11-27 14:05** — what changed, what you learned, what is next
```

---


- **2026-11-27 12:53** — Added app/illustration.svg (hand-crafted, no chart) + hero-art + .hero grid + sw cache on feat/hero-illustration; no app.js/showcase/styles-replacement. verify 18/18; Playwright 390+1280 no errors no overflow, img loads. NOTE main has evolved: black/white/blue (34d90d2), showcase.html, domain taptoprove.ee; my snapshot-based full red redesign NOT applied here. Not pushed.

- **2026-11-27 14:23** — More colorful on PR26 + no-chart; verify 18/18.

- **2026-11-27 14:48** — Verified production deploy of PR 29 (drop in-app NFC writer, shorter showcase copy). AARenor rebased and merged it while I was resolving the AARenor.md conflict locally, so I pushed no app code and discarded my local merge branch. Confirmed main squash commit 5f1202c, Deploy run 46018968714 success, live nfc.arle.top without the card writer and /showcase with the Supabase handoff. No physical device test by me.
