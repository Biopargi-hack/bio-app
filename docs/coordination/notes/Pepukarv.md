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

- **2026-11-27 15:05** — PR 34 was shipped with an admin merge to get the illustration style live during the hackathon. The user explicitly said no approval from other crew members was needed. I am the PR author so I could not self-approve; no review approval was obtained. All gates were green. This bypass is recorded plainly here and in the PR comment, not hidden as a demo emergency.

- **2026-11-27 15:15** — Full app UX pass inspired by Dribbble tap-to-pay and health dashboards: card shell with soft wash, white rounded surfaces, at-a-glance status card, boxed fields, chip filters and one dominant action; short press and row animations respect reduced motion. Applied to app, showcase and paper form with existing tokens only; no copy, data or offline changes. Headless Chromium at 390 and 1280 on app and showcase: 0 errors, 0 overflow, primary 8.11:1, offline reload and query prefill OK; verify 19/0. No physical device test.

- **2026-11-27 15:16** — PR 37 (full card-based UX pass) was shipped with an admin merge, bypassing the one-approval rule. The user said earlier in this session that no approval from other crew members was needed, and I applied that to this continuation of the same UI work. I am the PR author so I could not self-approve; no review approval was obtained. Gates were green and headless checks passed. Recorded here and in the PR comment, not hidden as a demo emergency.

- **2026-11-27 15:28** — Removed the whole ledger/audit panel from the minimal app: record list, audit questions, filter, JSONL export, tamper demo and sample CIP summary are gone from both HTML and app.js; the verify gate was updated to 20 checks. Added a Line dropdown (All lines, Line 1-5) that pre-fills the asset in ET and EN. Headless Chromium at 390 and 1280: no errors or overflow, selecting Liin 3 prefilled the asset and stamp, a clean record was appended, language switch translated the selector, offline reload passed. This removes the audit/tamper beat from the original demo story by explicit owner request. No physical device test.

- **2026-11-27 15:30** — PR 40 (minimal app, ledger removed, line selector added) was shipped with an admin merge, bypassing the one-approval rule. The user said earlier in this session that no approval from other crew members was needed, and I applied that here. I am the PR author so I could not self-approve; no review approval was obtained. Gates were green and headless checks passed. Recorded here and in the PR comment, not hidden as a demo emergency.

- **2026-11-27 15:40** — Follow-up to the minimal app: hid the two empty white text fields (Asset and the free-text note) so the capture screen has no blank writing area. The inputs stay in the DOM so NFC/QR prefill and voice transcription still work; the location now comes from the Line dropdown. Updated the missing-asset message in ET and EN. verify 20/0; headless 390 and 1280: no errors, no overflow, line prefill, clean append, language switch and offline reload all pass.

- **2026-11-27 15:41** — PR 42 (hide blank white input areas) was shipped with an admin merge, bypassing the one-approval rule. The user said earlier in this session that no approval from other crew members was needed, and I applied that here. I am the PR author so I could not self-approve; no review approval was obtained. Gates were green and headless checks passed. Recorded here and in the PR comment, not hidden as a demo emergency.

- **2026-11-27 15:49** — Filled the right side of Kontrolli salvestamine with a guidance rail: new app/check-flow.svg illustration of five stations and a phone proof, plus three ET/EN info cards (how it works, fixed default, offline). Capture form is now a two-column card on desktop and stacks on mobile. Added bilingual keys, precached the new SVG in service worker v6. verify 20/0; headless 390 and 1280: 0 errors, 0 overflow, image loaded, line prefill, clean append, language switch and offline reload all passed. No physical device test.

- **2026-11-27 15:50** — PR 43 (capture guidance rail and illustration) was shipped with an admin merge, bypassing the one-approval rule. The user said earlier in this session that no approval from other crew members was needed, and I applied that here. I am the PR author so I could not self-approve; no review approval was obtained. Gates were green and headless checks passed. Recorded here and in the PR comment, not hidden as a demo emergency.

- **2026-11-27 16:02** — Changed the right-side illustration to a three-point system (3 clean, 2 fault, 1 serious) instead of five stations, and hid the visible Evidence tier C field. Rewrote the fixed-default info card copy in ET and EN so it no longer mentions tier C. The tier value is still computed for records. verify 20/0; headless 390 and 1280: no errors, no overflow, picture shows only 1/2/3, tier field hidden, line prefill and clean append work, language switch and offline reload pass.

- **2026-11-27 16:02** — PR 46 (three-point picture, hidden C tier) was shipped with an admin merge, bypassing the one-approval rule. The user said earlier in this session that no approval from other crew members was needed, and I applied that here. I am the PR author so I could not self-approve; no review approval was obtained. Gates were green and headless checks passed. Recorded here and in the PR comment, not hidden as a demo emergency.

- **2026-11-27 16:26** — Follow-up: the three-point check-flow.svg was already on the server, but returning devices still saw the old five-station picture from service worker cache v6. Bumped the cache to tap-to-prove-v7 so the new illustration replaces the old cached one. verify 20/0; headless check confirms cache v7 with 25 assets, offline reload and query prefill OK.

- **2026-11-27 16:27** — PR 51 (service worker cache v7) was shipped with an admin merge, bypassing the one-approval rule. The user said earlier in this session that no approval from other crew members was needed, and I applied that here. I am the PR author so I could not self-approve; no review approval was obtained. Gates were green and headless offline checks passed. Recorded here and in the PR comment, not hidden as a demo emergency.

- **2026-11-27 16:35** — Started #54: minimal capture form on feat/minimal_capture. Keep line, rating 1-3, note/voice, photo/video; remove hero, rail, proof pad and extra fields. Open PRs 50 and 47 touch the same files.

- **2026-11-27 16:40** — Implemented #54: capture screen now has line, visible 1-3 rating (selected before save), write/speak note, photo/video, append and Excel CSV. Removed hero, steps, rail, proof pad, fault picker, checkpoint/method/verdict/instrument. Grade 3 without usable media still writes fixed default. verify 22/0; headless Chrome 390+1280, offline reload and save, bilingual toggle: 14/14, no errors. No physical device test. PR 50 and 47 overlap these files.

- **2026-11-27 16:42** — PR #57 opened for #54. verify and pr-notes green, preview deploy pending. Helper open_pr.mjs committed and pushed but gh could not resolve the worktree branch; created the PR with explicit --head feat/minimal_capture and the same template body.

- **2026-11-27 16:44** — PR #57 (minimal capture) was shipped with an admin squash merge after the owner said to just do it. I authored the PR, so no separate review approval was obtained; verify, pr-notes and the preview deploy were green. The bypass is stated here and in the PR comment, not hidden as a demo emergency. Open PRs #50 and #47 overlap app.js/index.html/styles.css and need a rebase on the new main.
