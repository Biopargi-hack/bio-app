# Notes — @AARenor

Append-only. Newest at the bottom. One line per session is enough; include the
file or line number when it helps the next person.

Format:

```
- **2026-11-27 14:05** — what changed, what you learned, what is next
```

---


- **2026-11-27 09:51** — Added one tap KINNITA and red fault flow with Estonian and English copy; idea description now in README; live domain moved to nfc.arle.top

- **2026-11-27 09:55** — Localized all generated NFC, chain and audit messages. verify 13 passed, browser checks at 1280 and 390 clean, offline capture kept two records.

- **2026-11-27 09:56** Owner bypassed review and admin merged PR 3 to ship faster.

- **2026-11-27 10:19** — Five tag writer slots now store a name and unique signature per card and write URL plus text records. Query link opens with asset filled and KINNITA focused. Browser check with mocked NDEF passed, physical phone still untested.

- **2026-11-27 10:21** Owner bypassed review and admin merged PR 5 to ship faster.

- **2026-11-27 10:35** — Renamed the app to Tap to Prove and rebuilt the visual system in steel, amber and mono type. Card ID now goes into every record with source nfc, link or typed, manual edits clear it, and the ledger row shows it. Added docs/demo_runbook.md and a fast branch loop in AGENTS. Owner bypassed review earlier to ship faster and that is now stated plainly.

- **2026-11-27 10:38** — Owner bypassed review and admin merged PR 7 to ship the Tap to Prove redesign faster during the hackathon. A review was requested from Steven first.

- **2026-11-27 10:41** — Fixed the demo ledger rows by calling populateSelects at startup, so a tap record shows Wash and Visual instead of an empty checkpoint. Owner bypassed review to ship this small fix faster during the hackathon.

- **2026-11-27 11:01** — White theme is live in the branch. Barlow Condensed and IBM Plex Mono now ship as local woff2 files and are pre-cached by the service worker. Offline reload and a tap record were verified at 1280 and 390 with fonts still loaded and no console errors. Owner bypassed review to ship this faster during the hackathon.

- **2026-11-27 11:05** — Live offline check found that navigating to a query URL offline failed because the service worker matched the exact URL. The fallback now ignores the query and also accepts document navigations. Cache bumped to tap-to-prove-white-v2. Owner bypassed review to ship this faster.

- **2026-11-27 11:08** — PR body was completed with the Not tested section so the pr-notes gate can read the current payload.

- **2026-11-27 11:22** — Aligned the product with A. Le Coq challenge 3: simplified hygiene documentation without disrupting production, fixed default assessment when no photo is possible, and a traceable dataset. Added a fixed default button that writes default_assessment true, tier C and a fixed reason. Owner bypassed review to ship this faster during the hackathon.

- **2026-11-27 11:58**, PR 12 reduced the UI to black, white and one blue accent, made fixed defaults visible in the audit console, and fixed the Estonian quick reason. Owner used admin merge because the demo needs it live now.

- **2026-11-27 12:37**, Added showcase.html with 100 checkpoints, editor and viewer roles, grades 3, 2 and 1, proof types, automatic escalation after four dirty marks, and the NFC demo link TAP-DEMO-01. The link opens the work view with the right asset and card prefilled. Gate reports 18 passed, browser checked at 1280 and 390 with no errors.

- **2026-11-27 12:38**, Owner will use admin merge for PR 15 because the demo needs the showcase live now.

- **2026-11-27 12:42**, Custom domain moved to taptoprove.ee in all repo references, including showcase, runbook and verify. Cloudflare zone added with nameservers brady.ns.cloudflare.com and elma.ns.cloudflare.com; registrar still needs the switch.

- **2026-11-27 12:44**, Opened PR 16 for the taptoprove.ee domain change. PR template now has all four required sections.

- **2026-11-27 12:48**, Moved URL tag prefill ahead of startup fetches so an NFC tap fills the form on first read. Showcase now uses one filling line, thicker dark borders and the plain /showcase path. Gate reports 18 passed, browser checked at 1280 and 390, first read prefill verified. Owner will use admin merge because the demo needs it live now.

- **2026-11-27 12:54**, Live check found taptoprove.ee still parked at the registrar, so NFC links there do not open the app. Restored nfc.arle.top for generated tags and the showcase demo link until DNS switches. The verify gate now accepts either domain. Owner will use admin merge because the demo needs a working link now.

- **2026-11-27 13:01**, Narrowed the root absolute link check to accept real files or their .html version. The service worker now precaches /showcase and the cache is version 3. Owner will use admin merge because the demo needs these fixes live now.

- **2026-11-27 13:07**, NFC and QR links now open a grade view with buttons 3, 2 and 1 instead of the clean only prompt. The grade is stored on the record and shown in the ledger. Gate reports 19 passed, browser checked at 1280 and 390. Owner will use admin merge because the demo needs it live now.

- **2026-11-27 13:42**, Grade buttons follow the language switch. The showcase no longer carries the repeated dirty mark rule. Gate reports 19 passed, browser checked, no page errors. Owner will use admin merge because the demo needs this live now.
