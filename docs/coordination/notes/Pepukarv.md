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

- **2026-11-27 15:00** — Applied the illustration style site-wide on feat/illustration-style: red A30029 primary actions, mint 0B7A59 clean states, F3F6F7 soft wash and rounded cards through tokens in app/styles.css; showcase.html and paper.html now use the same tokens instead of local hex. verify 19 passed 0 failed; Playwright 390+1280 no errors or overflow, white on red 8.11:1 and ink on paper 13.62:1; offline reload and query prefill OK. No physical device test.
