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

- **2026-11-27 14:32** — Reviewed PR 26 for Pepukarv. Checks were green; corrected the SVG title and image alt so they no longer claim a cryptographic signature, which the runbook says is false.

- **2026-11-27 14:43** — PR 26 was admin merged during the hackathon after all checks passed and the illustration copy was corrected. Live deploy verified.
- **2026-11-27 14:38**, Removed the in app NFC reader, card writer and five card kit. Cards are written with a separate tool. Showcase copy is shorter in Estonian and English and names Supabase as the next storage step. Gate reports 19 passed, browser checked at 1280 and 390 with no errors. Owner will use admin merge because the demo needs this live now.

- **2026-11-27 14:52** — Added start_task.mjs and open_pr.mjs so teammates branch from origin/main and open PRs with the four required sections. open_pr.mjs stages only explicit paths. Runbook and PR template updated.

- **2026-11-27 14:54** — PR 32 was admin merged during the hackathon after all checks passed. The workflow helpers are now on main.

- **2026-11-27 15:10** — AGENTS.md and AGENT-BRIEF.md now bind agents to start_task.mjs and open_pr.mjs with explicit paths. open_pr.mjs fetches origin and refuses branches behind origin/main, so a merged branch cannot be reused. The repo already deletes head branches on merge. This PR was admin merged during the hackathon after all checks passed.

- **2026-11-27 15:14**, Ran a full bug and flow sweep with two independent agents. Fixed duplicate showcase grid cells, undefined spot names, stale language state, translated proof keys, wrong NFC demo asset, small touch targets, duplicate record writes, false default reasons, UTC day filtering, stale asset stamp, fault panel state, unhandled save errors, CIP error parsing, voice and audio races and incomplete localization. The chain now uses SHA-256 while still accepting legacy record hashes. Gate reports 19 passed, browser checked at 1280 and 390 with no errors, 0 failed requests and one record from two rapid taps. Owner will use admin merge because the demo needs these fixes live now.

- **2026-11-27 15:22**, Follow-up fix for the grade flow. Grade 3 from an NFC tap with no photo now writes the fixed default flag and reason, matching the runbook and the mission. The fault control stays visible in grade mode. Gate reports 19 passed, browser check on the grade URL showed the default flag and no page errors. Owner will use admin merge because the demo needs this live now.

- **2026-11-27 16:26**, Fixed the Excel problem. `sample_cip.csv` now has a UTF-8 BOM, semicolon separators and comma decimals, so Estonian Excel opens six columns. Added an Excel CSV button that exports current app records from IndexedDB as an Excel friendly file. The sample CSV is static and not synced; the export is a current device snapshot, not a live spreadsheet link. Gate reports 22 passed, browser checked at 390 with no errors and a real download parsed as 15 columns. Owner will use admin merge because the demo needs it live now.

- **2026-11-27 16:52** — Started NFC machine links task from current origin/main.

- **2026-11-27 16:58** — Added the eight hygiene sheet checkpoints as plain NFC example links in showcase.html under the NFC link section. No select was added. Links use the existing nfc.arle.top pattern and cover Pesu, Täitepea, Klapp, Drenaaž, Uks, Kätepesu, Kastipesu and Siirupituba. Verify passed and desktop plus mobile browser checks showed 8 links with no errors or overflow. This PR was admin merged during the hackathon after checks passed.

- **2026-11-27 17:10** — Changed all showcase NFC example URLs from nfc.arle.top to taptoprove.ee and labelled the demo tags as demo only, since TAP-DEMO-01 to 09 have no physical stickers. Verify passed and desktop plus mobile checks showed 8 taptoprove.ee links with no errors. Live taptoprove.ee still answers with the Zone parking page because DNS still points to ns.zone.eu, though the Cloudflare zone is active. This PR was admin merged during the hackathon after checks passed.

- **2026-11-27 17:15** — Started taptoprove landing page task from current origin/main.

- **2026-11-27 17:19** — Added a landing hero to the root page with a short explanation, four demo steps, a Start a check button and an Open records dashboard button linking to /sheet. A live record count card updates from IndexedDB. Verify passed and desktop plus mobile browser checks showed no errors or overflow. DNS check: registrar is Zone Media OÜ, registry name servers are already Cloudflare, no DS record exists, but recursive DNS still returns ns.zone.eu and the live title is Domain is Registered. This PR was admin merged during the hackathon after checks passed.

- **2026-11-27 17:36** — Rebuilt the landing page as a logbook style hero with a three step flow and a clickable list of eight checkpoints. Choosing a checkpoint clears the old rating, photo, audio and transcript, sets a stable English asset value, shows the translated label, and opens the rating view. The dashboard button still targets /sheet, which returns the live records page with an empty table. Verify passed and desktop plus mobile browser checks showed 8 checkpoints, no console errors and no horizontal overflow.

- **2026-11-27 18:05** — Landing explains what Tap to Prove is and how a check works. Removed the eight-place list, device record count and queue badge.

- **2026-11-27 18:07** — Admin squash merge by AARenor. No separate reviewer approval; the owner merged this landing copy directly for the demo.

- **2026-11-27 18:16** — Embedded the Excel friendly sample CIP month directly on the landing page as a 28 row table with a CSV download button. Verdicts and summary counts translate with the language switch. Upstream landing copy removed the checkpoint list, so there is no checkpoint path left to align. The NFC link with asset Pesu still writes Pesu to IndexedDB. Verify passed 30 checks and headless mobile showed 28 rows, no errors and no overflow.

- **2026-11-27 18:22** — Restyled the landing page from the supplied Dribbble motion reference: pill nav, pale panels, centered hero with floating cards, step and benefit panels, folded sample data, blurred wordmark footer. Both languages updated.

- **2026-11-27 18:23** — Admin squash merge by AARenor, the owner. No separate reviewer approval; this visual direction was shipped directly from the supplied reference.

- **2026-11-27 18:26** — Resolved the restyle merge on feat/hygiene_grid. Kept the new pill nav, hero and step panels, added the View table link to the hero and the real Hügieen grid after the steps. Removed the folded sample CIP table because its renderer was not part of this branch. Verify passes 32 checks and headless desktop and mobile show 8 rows, 54 columns, both links, no errors and no overflow.

- **2026-11-27 18:35** — Made the landing hygiene table compact. It now shows only the last six ISO weeks with eight checkpoint rows, shorter dates and a 620px minimum width instead of a 2480px full year grid. The heading is short and the grade scale moved to the note. Verify passes 33 checks. Playwright desktop and mobile showed seven columns, a saved grade in N48, no console errors and no page overflow.

- **2026-11-27 18:45** — Compacted the downloaded workbook from five sheets to two: Hügieen and Kirjed. Hügieen is now one eleven row grid with a single legend row, and Kirjed combines the old Ledger, Audit, Evidence and Chain views into fourteen columns. The generator at AI-drop/taptoprove_sheets/sync_ledger.py now writes this compact workbook by default and has a --workbook-only flag that leaves the cloud sheet unchanged. Ruff F,E9 and ty pass, excel_hygiene reports no errors and the app verify passes.

- **2026-11-27 19:06** — Made the hygiene table work like a mobile app. At 560px and below the table becomes one card per checkpoint with six week chips, the sticky nav becomes static, and there is no sideways scroll. Also restored teostaja in the workbook Kirjed sheet and unified the grade scale across app and workbook to 3 clean, 2 dirty, 1 serious. A not clean record now shows 2 in both places. Verify passes and headless desktop and mobile showed no errors or page overflow.
- **2026-11-27 18:48** — Split hosts: landing taptoprove.ee, NFC cards nfc.taptoprove.ee. Canonical added, showcase and machine links moved, README, runbook, DECISIONS, DOMAINS doc and verify gate updated. Cloudflare domain nfc.taptoprove.ee added to Pages project toend.

- **2026-11-27 18:53** — PR 89 admin merged to main. Live check: taptoprove.ee serves the canonical landing page and nfc.taptoprove.ee/showcase serves NFC links; card URL returns 200. Four fresh demo card links TAP-NFC-001 to 004 sent to Telegram. Physical NFC taps still not device tested.

- **2026-11-27 19:03** — Split the views by host. taptoprove.ee now shows only the landing description, nfc.taptoprove.ee only the record form, neither shows the hygiene table. Mode is chosen before CSS from the hostname. All records stay in the nfc origin store; offline warm-up moves to the NFC host. Old landing-host asset links no longer record. verify 50/0, browser checks at 390 and 1280 show the right view with no errors or overflow.

- **2026-11-27 19:20** — Photo and video preview on capture: the chosen file is drawn in the form with its name and size, an unreadable photo is labelled as not counting as evidence and the note is localized. A saved-record card keeps the thumbnail. The live sheet has a Proof column that opens the full photo, video or voice note from IndexedDB. The JSONL export keeps every hashed field so the ledger chain verifies again, and sync_ledger.py writes media/ next to the workbook, uploads each file to Drive once and puts a foto or video hyperlink in Kirjed and in the Evidence tab. Verify 50/0; headless 390 and 1280 with photo, video, proof dialog and offline capture; workbook and cloud sheet read back with chain_ok TRUE and two Drive links at HTTP 200.
- **2026-11-27 19:13** — Resolved the host split merge. The table now stays visible on both hosts, has a hero link on the landing host and keeps the mobile card layout. The duplicate older sections were removed. The grade copy and workbook mapping both say 3 clean, 2 dirty, 1 serious. Verify passes 50 checks and headless landing and record views at 390 and 1440 show the table with no errors or page overflow.
- **2026-11-27 19:06** — PR 97 admin merged to main. Live Playwright at 390px: taptoprove.ee shows landing only with no capture or table, nfc.taptoprove.ee shows the record form only with asset Pesu prefilled, no hero, no table, no footer. Both 200 with zero console errors and no horizontal overflow. Records and offline shell live on the NFC origin only.

- **2026-11-27 21:45** — Several attachments per record. The picker accepts a batch, each photo or video is analysed and shown as its own tile with a remove button, and the record carries `media_items` with one hash and thumbnail per file while the old flat `photo_*`/`media_*` fields stay for older rows. The live sheet's Proof cell shows the first thumbnail plus `×N` and the dialog stacks every attachment. `sync_ledger.py` writes each file (`1_1_foto.jpg`, `1_2_foto.jpg`), links `media` through `media_6`, numbers the labels, and prunes files no record points at. Verify 50/0, headless check on 390 and 1280 showed two tiles, a removed tile, a saved record with `salvestatud koos 2 failiga`, the sheet dialog with two images, and `chain_ok TRUE` with three media files.

- **2026-11-27 22:05** — Removed the six week hygiene grid from the landing page on the owner's request. The section that held `#hygieneGrid` now carries only the workbook download with a `Tööraamat` heading and one line saying the full year is in the file. The grid renderer, the JSON fetch, the iso week helpers and 52 lines of grid CSS are gone, `hygieen.json` left the service worker precache list, and `verify.mjs` now checks that no grid remains and that the download is present. Cache stamp `tap-to-prove-226d05007b20`.

- **2026-11-27 20:10** — Embedded the workbook Kirjed table on taptoprove.ee at the owner's request. The Tööraamat section renders the 22 Excel columns from the same IndexedDB store, newest 12 rows first, with a fresh-row tint and a client-side chain check over hash plus prev_hash links; a save fills the row at once and a second tab follows over the existing broadcast. Verify 52/0. Headless Chrome at 390 and 1280: empty state, one save, 13 saves showing seq 2 to 13, a tampered seq 5 turning chain_ok FALSE from 5 on while 2 to 4 stay TRUE, no console errors, no page overflow.

- **2026-11-27 20:27** — Voice mode keeps a long spoken note. Chrome freezes one result near 300 characters, so each chunk is saved and listening continues until quiet. verify 53 passed. Headless Chrome kept a 629 character note at 390 and 1280, no errors, no overflow. Real microphone not tested.

- **2026-11-27 20:46** — Voice spelling: a letter typed into the note stays, and an online check replaces the browser text with Whisper large v3 in Estonian. verify 54 passed. Headless Chrome kept a typed s in puhas and replaced masin on puha with Masin on puhas. Real microphone not tested.
- **2026-11-27 20:40** — The Tööraamat section is now the workbook itself at the owner's request: Hügieen and Kirjed tabs with Excel column letters, row numbers, the blue header row, the 5 week bucket columns, the eight checkpoint rows, the yellow label column, graded fills and the legend, all built from this device's records. Cell values follow sync_ledger.py: teostaja from supervisor or device_id, grade from verdict, evidence hashes, foto/video/hääl media labels, chain_ok with the 16 character legacy digest recomputed the Python way, and records in workbook order. Proven cell for cell: built /tmp/wb_cmp/taptoprove_ledger.xlsx from the same export with sync_ledger.py --workbook-only, injected the export records into the browser store, and every Kirjed and Hügieen cell equals openpyxl's read. Legacy fixture: Python and the page both say TRUE, a tampered row turns both FALSE. New records now carry checkpoint from the place name so the Hügieen grid fills. Verify 53/0; 60 records render in 0.65 s; frozen header and row numbers checked.

- **2026-11-27 20:41** — Landing redesign on taptoprove.ee: black, white and red, Barlow body type, a live card tap demo with an in-page hash chain and tamper toggle, a steps band, and a QR to the NFC host. landing.css imports styles.css as a cascade layer, so the capture form and workbook keep their styles.css look with the landing red. The NFC record view at 390px is pixel identical to main. JS-off fallback hides the demo.

- **2026-11-27 20:53** — Removed the Kirjete ahel block from the landing at the owner's request. The hero now ends after the demo; the card tap still saves onto the phone mock with a record number and hash. Chain CSS, chain JS (verify, render, edit/restore), the chain copy keys and the no-JS chain rule are gone. NFC record view pixel identical to main at 390px.
- **2026-11-27 23:05** — Landing cleanup at the owner's request. The Tööraamat block shows only the Hügieen sheet: the Kirjed tab, the tab strip, the record renderer, the chain column and their styles are gone, while the downloadable file keeps both sheets and `/sheet` keeps the record list. The TAP-DEMO-01 card is gone from the landing demo (Täitepea and Kastipesu stay) and the QR caption is generic. The speech language picker is gone because the app is Estonian only: speech always asks for et-EE, falls back to English only when the browser has no Estonian recogniser, and records keep `language: et`. verify 55 passed. Headless Chrome at 1280 and 390: two cards, no tab strip, no language buttons, a save of Pesu grade 2 filled the Hügieen N50 cell and the status read 1 record, no console errors, no horizontal overflow; the card tap demo still plays.
- **2026-11-27 23:15** — iPhone microphone at the owner's request. Safari has no Web Speech API, so the Räägi button used to answer only "unsupported"; it now records with MediaRecorder and sends the clip to `/api/transcribe`, and the Whisper text lands in the note after the second press, with its own listening hint, sending note and failure and too-short messages. Recording MIME candidates now include `audio/mp4;codecs=mp4a.40.2`, `audio/mp4` and `audio/aac`; the blob keeps the recorder's real type on every stop path and the upload is named `note.m4a`, `note.ogg`, `note.mp3`, `note.wav` or `note.webm` to match, which fixes iPhone clips that were labelled webm. A clip under 400 bytes is not sent, because Whisper invents words from silence. verify 57 passed. Headless Chrome with no SpeechRecognition and a fake mic: a 1.8 s press wrote "Masin on puhas, vaht on maha võetud." from a stubbed endpoint, 21,638 bytes, `note.webm`, `language=et`; a 120 ms tap gave the too-short note and no request; a 502 gave the failure note and left the field empty. The live endpoint accepted a real ffmpeg m4a tone (200, `{"text":"Pohja."}`), so the m4a route works end to end. A real iPhone was not available, so Safari's own MediaRecorder behaviour is untested.


- **2026-11-27 21:41** — Every saved check now posts to /api/ledger; a Pages Function signs a Google service account JWT, appends one row to the Live tab and stores evidence in a KV namespace with a public link. Excel download and CSV export removed, legacy 5 minute sync paused. Verified: verify 57/0, node --check on changed JS, live writer probe POST 200 plus dedupe, evidence GET 200 68 bytes, sheet formula read back, test rows cleared. Not tested: physical NFC and a real phone save.
- **2026-11-27 21:20** — Teostaja väli NFC vormis, hügieenileht ainult eesti keeles, kuupäev ja kellaaeg, tier eemaldatud, Google Sheet ainult Hügieen ja Kirjed
- **2026-11-27 23:29** — iPhone mic consent at the owner's report that the phone says the permission is denied after Allow. Cause: iPhone Safari can expose the Web Speech API, and its speech service answers `not-allowed` even after the microphone is granted, so the old code showed "Mikrofoni luba keelati." and never recorded. Now iPhone and iPad (iPadOS with touch included) skip the speech service and use MediaRecorder plus `/api/transcribe` directly; anywhere else a `not-allowed`, `service-not-allowed` or `audio-capture` speech error switches to that recording path with its own message. A `getUserMedia` rejection is named by its real error, so "Mikrofoni luba keelati." appears only for a real `NotAllowedError`, `SecurityError` or `PermissionDeniedError`. verify 60 passed. Headless tests: iPhone user agent with a working speech stub never started speech (`starts` null) and produced the text from a 2,318 byte clip; iPhone with no speech the same; desktop with a denying speech stub showed "Brauseri kõnetuvastus ei vasta, salvestan ise." and then the text; iPhone with `getUserMedia` rejecting `NotAllowedError` showed "Mikrofoni luba keelati." with no upload; desktop with a working speech stub still used speech once and settled with one copy of the text. A real iPhone was not available.
- **2026-11-27 23:35** — The owner said the project moved to Google Sheets and the Excel workbook must not be embedded. The `Tööraamat` block is gone from the landing: `renderHygieneSheet` and its ISO week, bucket, letter, cell and legend helpers are deleted, the `taptoprove_ledger.xlsx` download and its precache entry are gone, and the file was removed from `app/`. The nav, the hero button and a new `Tabel` card link `https://docs.google.com/spreadsheets/d/1xJlTBxqQoqIPhtNeUEm9Dq-ydR0xiJecWLwK_fbSnYs/edit?gid=221436371` in a new tab, and the NFC view hides the card. The ET/RU/EN speech picker that #128 restored is removed again per the owner's standing rule, with the picker copy and styles; speech stays `et-EE` with the English fallback. verify 56 passed. Headless Chrome at 1280 and 390: three sheet links with the exact URL and `target=_blank`, no workbook, no language buttons, a save still stores, no console errors, no overflow; the NFC view shows the form and none of the sheet card.


- **2026-11-27 22:10** — Live save test found two issues. Preview and production skipped evidence links because wrangler.toml had no pages_build_output_dir so Cloudflare ignored the KV binding, and a second origin with its own local store collided on seq 1 and was dropped as a duplicate. Added the build output key, removed the deploy dir override, changed dedupe to device plus seq, and will verify both live domains after deploy. verify 57 passed, worker and app syntax clean, TOML clean.
