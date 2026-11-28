# Tap to Prove

Challenge 3: Simplifying the documentation of hygiene checks. Documentation must not disrupt production, must include fixed default assessments when no photo is available, and must produce a high quality traceable dataset.

Quick demo runbook: `docs/demo_runbook.md`. Earlier working name: Tõend.

## Idee kirjeldus

Kujuta ette, et töötad A. Le Coq'i tehases. Sinu ülesanne on iga natukese aja tagant kontrollida, kas limonaadi või õllemasinad on puhtad.

Praegu peab töötaja iga kontrolli järel täitma paberil või arvutis igavaid tabeleid. See võtab kaua aega, tüütab ära ja vahel ununeb üldse ära. Lisaks ei saa igas kohas telefoniga pilti teha, aga kuidagi peab ikkagi tõestama, et kontroll on tehtud.

Lahendus on NFC kaardid. Igale tähtsale masinale kleebitakse veekindel NFC kaart. Töötaja paneb telefoni korraks vastu kaarti ja saab eeltäidetud vaate "Kõik on puhas ja korras". Kiirnupud 3, 2 ja 1 salvestavad hinnangu mõne sekundiga. Kui pilti ei saa, kasutatakse nuppu "Pilti ei saa? Kasuta fikseeritud hinnangut". Kirje saab fikseeritud põhjuse ja tase C, aga andmed jäävad täielikuks ja jälgitavaks. Kui midagi on must, valitakse viga listist ja tehakse võimalusel pilt.

Kui sama kontrollkoha neli järjestikust hinnangut on 2, salvestatakse neljas hindena 1. Esialgne valik ja automaatse muutmise põhjus jäävad kirjesse; arvestus põhineb sama seadme kirjetel ning järgmine hinnang alustab uut jada.

Kaardid kirjutatakse eraldi NFC tööriistaga. Kaart kannab URL-i `https://nfc.taptoprove.ee/?asset=...&tag=...&via=nfc`. Puudutamine avab selle URL-i otse. Rakendus ei kirjuta NFC silti. Kirjete andmebaas on Supabase, ühenduse lisab meeskond.

### Line inspection sessions

For the demonstration line, write these URLs to separate NFC tags with an external NFC tool (replace the tag IDs if needed):

- Start: `https://nfc.taptoprove.ee/?session=start&line=demo&tag=START-DEMO&via=nfc`
- End: `https://nfc.taptoprove.ee/?session=end&line=demo&tag=END-DEMO&via=nfc`

Enter the inspector's name at the start; it is carried into the session's checks on the same device and browser. The name is self-declared, not an authenticated identity. The example roster is Pesu, Täitepea, Klapp, Drenaaž and Uks; it is not a verified production-line inventory. Checkpoint cards use the existing `asset` and `tag` URL format. Save each check before tapping the next card. Tap the end tag to review the results and confirm completion. Unsaved checkpoints receive grade 3 as an explicitly marked **unverified automatic default**, not as a confirmed inspection. The completion marker is stored locally and included in JSONL backups, not sent to the shared sheet. Keep using the same origin and device throughout, and retain local data until it is backed up or synced. Physical NFC behavior requires a device test.

## Live site

Production: https://taptoprove.ee

Landing leht: https://taptoprove.ee. Kirjeldus, salvestusvorm ja link Google Sheetsi tabelile.
NFC kaardid: https://nfc.taptoprove.ee. Ainult kirjevaade, ilma landinguta.
Mõlemad aadressid serveerivad sama deploy, vaade valitakse domeeni järgi. Kirjed jäävad selle domeeni seadmesse, kus need salvestati.
Landing page: https://taptoprove.ee, description, capture form and a link to the Google Sheet ledger.
NFC cards: https://nfc.taptoprove.ee, record entry only, no landing copy.
Both hosts serve the same deploy and pick the view from the hostname. Records stay in the device store of the origin that saved them.

Every push to `main` deploys automatically. No build step, no manual publish. A push starts a GitHub Action that uploads the `app/` folder to Cloudflare Pages, usually in under a minute. Newer pushes cancel older deploys, so the newest commit always wins. The app shell is network first: a reload fetches the newest files, and an offline device falls back to the cached shell.

Pull requests get their own preview URL printed in the Action log. Branch name becomes `preview-pr-N`, so four people can work at once without waiting for each other.

## Näide ja NFC link

Näide on lehel https://taptoprove.ee/showcase. NFC demo link on `https://nfc.taptoprove.ee/?asset=Villimisliin%202%20Filler%20head&tag=TAP-DEMO-01&via=nfc`. Leht näitab ühe villimisliini 100 kontrollikohta, muutja ja vaataja rolli, hinded 3, 2 ja 1 ning pildi, hääle, video ja teksti. Andmed on ainult näite lehel.

## Four contributors

The repository is public and `main` is protected: every change lands through a pull request with one approval from `@Biopargi-hack/crew` and green `verify` + `pr-notes` checks. Squash merge only; force pushes are blocked. Admins can bypass in a demo emergency and must note it afterwards.

Suggested split, from the selected idea:

| Role | Owns |
|---|---|
| Builder | Tag payload writer, app, ledger, demo |
| Food science or quality student | Checkpoint schema, domain answers |
| Designer and pitcher | Three minute story, paper form, visual polish |
| Second builder | Audit console, CIP import, validation numbers |

To contribute:

```bash
git clone https://github.com/Biopargi-hack/bio-app.git
cd bio-app
git switch -c feat/your-change
# edit files in app/
node scripts/verify.mjs
git add -A && git commit -m "feat(app): what changed"
git push -u origin feat/your-change
gh pr create --fill
```

Then update your row in `docs/coordination/STATUS.md`, append a note with
`node scripts/note.mjs "..."`, and squash-merge once checks are green.

Watch the deploy in the Actions tab, then reload the live site once. A warm phone or laptop picks up the new files on that reload. Add `?asset=filler%20head` to the URL to open a QR linked asset.

## Files

| File | Job |
|---|---|
| `app/index.html` | Screens, copy and the Google Sheet link |
| `app/styles.css` | Visual system for the NFC record view, the subpages and the capture form |
| `app/landing.css` | Black, white and red landing view on taptoprove.ee; imports `styles.css` as a layer for the capture form and sheet card |
| `app/landing.js` | Landing demo: simulated card tap onto a phone mock with a grade, nothing saved |
| `app/sheet.html` | Live records table and JSONL with attachments; links to Google Sheets |
| `app/app.js` | Capture, photo and video preview, hash chain, Sheets sync and broadcast |
| `app/sw.js` | Offline shell |
| `app/sample_cip.csv` | Static semicolon CIP sample, not linked to records |
| `app/paper.html` | Printable paper form for the timed comparison |
| `scripts/verify.mjs` | Dependency-free gate: syntax, links, manifest, precache, secrets |
| `scripts/note.mjs` | Append a session note to your coordination file |
| `docs/coordination/` | Status board, per-person notes, decisions, agent brief |
| `AGENTS.md` | Operating rules for humans and AI agents |
| `.github/workflows/deploy.yml` | Deploy on every push and pull request |
| `.github/workflows/ci.yml` | `verify` and `pr-notes` checks on every pull request |

No npm dependencies, no build command. Plain files go straight to Pages.

## Sheets connection

Every save posts to `/api/ledger`. A Pages Function signs a Google service account token, appends one row to the `Kirjed` tab of the ledger sheet and stores each usable photo or video in a KV namespace with a public view link in the sheet. Rows are compact and Estonian: local date and `HH:MM` time replace `created_at`, there is no sequence column, photos sit in the Foto columns and video in the Video column. The typed note goes into Kommentaar. Duplicate sends are guarded by the app's local queue, so the writer needs no extra sheet read. Files over 8 MB are skipped; the record still lands in the sheet. IndexedDB keeps the full record and attachments for the hash chain, and JSONL remains a manual backup. There is no Excel download and no CSV export.

Cloudflare Pages secrets `GOOGLE_SERVICE_ACCOUNT` and `SHEET_ID` hold the service account JSON and the sheet id. The account `tapprove-sheets@arleserver.iam.gserviceaccount.com` has writer access. Its private key stays outside the repo at `~/.config/secrets/taptoprove_sheets_sa.json`. `wrangler.toml` binds the `EVIDENCE` KV namespace. The old five minute sync job is paused; the app writer is the only path to the cloud sheet, and the legacy generator writes the local workbook only.

## Checks

`node scripts/verify.mjs` runs locally and in CI. It checks that JavaScript
parses, the manifest is valid and its icons exist, every local link resolves,
the service worker only precaches real files, and no secret is committed.

`pr-notes` fails a pull request whose description is missing any of the four
template sections: what changed, verification, not tested, handoff.

## Working together

Four people, four agents. Start with `AGENTS.md`, the live board in
`docs/coordination/STATUS.md`, and the copy-paste prompt in
`docs/coordination/AGENT-BRIEF.md`. Notes are one file per handle, so agents
never edit the same lines. Decisions go in `docs/coordination/DECISIONS.md`, and
handoffs use the issue template. PR comments are the async conversation.

## Demo in five beats

1. Give a judge an NFC sticker written with your own NFC tool. Tap it and the URL opens with the asset and card ID prefilled and grade buttons 3, 2 and 1 ready. If NFC is unavailable, use a QR link. iPhone background reading is not device tested.
2. They press grade 3, 2 or 1, then press Append record. The record appears with its card ID, source, checkpoint and grade. With no photo or instrument reading, grade 3 stores the fixed default reason and tier C.
3. They tap another card, choose a grade, then show a fault from the list and a bad photo being refused as hard evidence.
4. Tap a sticker or use a QR link, then append one record. Show the queued count on the device.
5. Press a grade in the capture form, then press Append record. The check is stored on the device and sent to the `Kirjed` tab of the Google Sheet. Tap the card named after a checkpoint (`Täitepea`, `Kastipesu`) and the phone mock plays the tap. Open `/sheet` for the record table of this device and the JSONL export, then time five checks against the app.

## What is real and what is sample

Records, tags and photos the judge makes during the demo are live, stored in IndexedDB on the phone and sent to Google Sheets through `/api/ledger`. The CIP month is generated by us and is labelled as sample data, synthetic, not A. Le Coq. It never mixes into the judge's records.

The sample CSV is static demo data with a UTF-8 BOM, semicolon separators and comma decimals. It is not synced with the app. JSONL is the manual backup: it keeps the full records unchanged and adds an attachment line for each photo, video or voice note, with a `data_url` holding the original file. Export fails visibly if a referenced attachment is missing.

The `Tabel` section on `taptoprove.ee` links the Google Sheet ledger at `https://docs.google.com/spreadsheets/d/1xJlTBxqQoqIPhtNeUEm9Dq-ydR0xiJecWLwK_fbSnYs/edit?gid=221436371` in the nav, the hero button and the section button, and the link opens in a new tab. Only people the sheet is shared with can open it; there is no Excel download on the page. Every saved check goes to the `Kirjed` tab, and a record keeps its `checkpoint` name because that is the column the sheet groups by. `/sheet` shows the records stored on this device.

Dictation has two paths. Where the browser has a working Web Speech API (Chrome, Edge), words appear while you speak, and the same recording is sent to Whisper to correct the spelling. iPhone and iPad always use the microphone path: the `Räägi` button records a clip, sends it to `/api/transcribe` on the server, and writes the text into the note when you press the button again. The phone skips the speech service even where the browser exposes it, because the iPhone speech service refuses with a permission error after the microphone was already granted. The clip is plain `audio/webm` or `audio/mp4` depending on the browser, named `note.webm` or `note.m4a` to match, and a tap shorter than a word is ignored. This path needs a connection.

The `/sheet` page reads the same IndexedDB store as the capture app and follows new records on that device through a browser broadcast. The shared Google Sheet is the cross device view, so the demo no longer depends on a local export script.

The capture screen shows the chosen photo or video straight away, with its file name and size, and marks a photo the app cannot read as evidence. After saving, a small card keeps the thumbnail and says whether the record went in with the photo, with the video or without media. The writer stores usable attachments in Cloudflare KV and puts a `foto`, `video` or `hääl` hyperlink in the sheet row. Files over 8 MB are skipped, while the record itself still lands in the sheet.


## Deployment details

Cloudflare Pages project name: `toend`. Production branch: `main`. Custom domains: `taptoprove.ee` (landing and app) and `nfc.taptoprove.ee` (NFC card links). The old `nfc.arle.top` alias redirects to the landing domain.

Secrets are stored in the GitHub repo as `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, set from the machine's `~/.config/opencode/api-keys.env` without printing values. If a secret is ever rotated, update the repo secret too.

Automatic deploy happens on every push to `main` and on same-repo pull requests
through `.github/workflows/deploy.yml`. The command below is a manual fallback:

```bash
cd app
npx wrangler@4.151.0 pages deploy . --project-name=toend --branch=main
```

## Local check

```bash
cd app
python3 -m http.server 8765
```

Open `http://localhost:8765`. The app has no NFC writer or card kit, so card writing uses a separate tool. The Supabase connection is a team handoff.
