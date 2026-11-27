# Tap to Prove domains

Updated 2026-11-27. Two host names, one deploy, both can record.

| Host | Used for | Example |
| --- | --- | --- |
| `https://taptoprove.ee` | Landing page with description, steps, a Google Sheet link to the ledger and a capture form. "Proovi kontrolli" scrolls to that form. | `https://taptoprove.ee/` |
| `https://nfc.taptoprove.ee` | Direct record entry only from an NFC card. No landing copy and no table link. | `https://nfc.taptoprove.ee/?asset=Pesu&tag=TAP-NFC-001&via=nfc` |

Both names are custom domains on Cloudflare Pages project `toend` and serve the same files from the `main` deploy. A hostname check before the stylesheet sets `data-mode`. CSS hides only the sections that do not belong: the landing host hides the live-records link, the NFC host hides landing copy.

Each host loads one stylesheet. The NFC host loads `styles.css` only. The landing host loads `landing.css`, which imports `styles.css` as a cascade layer: the black, white and red landing design applies everywhere except the capture form and the sheet card, which keep the `styles.css` look with the landing red. `landing.js` runs the in-page card tap demo and saves nothing.

## View split and storage

Both hosts show the capture form, so speech-to-text and manual checks work on `taptoprove.ee` as well as on the NFC host. The NFC host skips the landing copy and opens the grade view directly when a card URL is used. Speech has two paths: the Web Speech API where the browser has it, and on iPhone and iPad the same button always records a clip and `/api/transcribe` turns it into text, because the iPhone speech service refuses with a permission error after the microphone was granted. Anywhere else a refused speech service also switches to that recording path. The landing links the Google Sheet ledger in the nav, the hero button and the `Tabel` card; the NFC host shows no table link. A record still keeps its `checkpoint` name, which is the column the sheet groups by.

Records are scoped to the origin where they are saved. Cards write into the nfc origin store; a check started on the landing host stores in the landing origin. There is no shared ledger between origins and no split device ID within one origin.

Offline warm-up: open `https://nfc.taptoprove.ee/` on the demo phone and reload once so its service worker caches the record shell. Reloading `https://taptoprove.ee/` also caches the landing shell with its capture form.

## Card URL format

```
https://nfc.taptoprove.ee/?asset=<place>&tag=<unique card id>&via=nfc
```

`asset` prefills the place, `tag` is written into every record as the card ID, and `via=nfc` opens the grade view with buttons 3, 2 and 1. Use a unique tag per physical card. The app does not write cards; a separate NFC tool does.

Generated examples are in `app/showcase.html` (`NFC_URL` and `MACHINE_LINKS`). The demo tags `TAP-DEMO-01` to `TAP-DEMO-09` have no physical stickers.

## Migration

Cards already written with `nfc.arle.top` still redirect to the app and work. Cards written with `https://taptoprove.ee/?asset=...` open the landing host; the form is now visible there, so those stickers can still be used to record manually. For direct grade entry, rewrite them with `https://nfc.taptoprove.ee/?asset=...&tag=...&via=nfc`. Old values in session notes and git history stay as historical records.

## Verify

```bash
node scripts/verify.mjs
```

The gate rejects an NFC link on the landing host, a missing canonical landing URL, a missing hostname mode script, missing CSS view rules, a landing CTA that does not go to capture, and docs that still describe a shared app view.

Live check after a deploy:

```bash
curl -4 -sS -o /dev/null -w '%{http_code}\n' https://taptoprove.ee/
curl -4 -sS -o /dev/null -w '%{http_code}\n' 'https://nfc.taptoprove.ee/?asset=Pesu&tag=TAP-NFC-001&via=nfc'
```

Physical NFC reading and phone camera access are not device tested in this repo. A 200 from curl proves the address serves the app, not that a phone tap works.
