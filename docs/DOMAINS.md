# Tap to Prove domains

Updated 2026-11-27. Two host names, one deploy, two views.

| Host | Used for | Example |
| --- | --- | --- |
| `https://taptoprove.ee` | Landing page only. Description, steps, a hygiene table and a button to the NFC host. No record form. | `https://taptoprove.ee/` |
| `https://nfc.taptoprove.ee` | This host is record entry only, plus the same hygiene table. No landing copy or ledger view. | `https://nfc.taptoprove.ee/?asset=Pesu&tag=TAP-NFC-001&via=nfc` |

Both names are custom domains on Cloudflare Pages project `toend` and serve the same files from the `main` deploy. A hostname check before the stylesheet sets `data-mode`. CSS then hides the sections that do not belong to that host.

## View split and storage

The landing host describes the product and has no capture form. The NFC host is record entry. Both hosts show the hygiene table; its cells fill from records saved on that same device. This matters for storage: IndexedDB, `toend-device`, `toend-records-event` and the hash chain are scoped to one origin. Every record lands in the nfc origin store. There is no second ledger on the landing host and no split device ID.

Offline warm-up happens on the NFC host. Open `https://nfc.taptoprove.ee/` on the demo phone and reload once so its service worker caches the shell. Reloading the landing host does not cache the record view.

## Card URL format

```
https://nfc.taptoprove.ee/?asset=<place>&tag=<unique card id>&via=nfc
```

`asset` prefills the place, `tag` is written into every record as the card ID, and `via=nfc` opens the grade view with buttons 3, 2 and 1. Use a unique tag per physical card. The app does not write cards; a separate NFC tool does.

Generated examples are in `app/showcase.html` (`NFC_URL` and `MACHINE_LINKS`). The demo tags `TAP-DEMO-01` to `TAP-DEMO-09` have no physical stickers.

## Migration

Cards already written with `nfc.arle.top` still redirect to the app and work. Cards written with `https://taptoprove.ee/?asset=...` now open the landing only view and no longer record. Those stickers must be rewritten with `https://nfc.taptoprove.ee/?asset=...&tag=...&via=nfc`. Old values in session notes and git history stay as historical records.


## Verify

```bash
node scripts/verify.mjs
```

The gate rejects an NFC link on the landing host, a missing canonical landing URL, a missing hostname mode script, missing CSS view rules, a landing CTA that does not go to the NFC host, and docs that still describe a shared app view.

Live check after a deploy:

```bash
curl -4 -sS -o /dev/null -w '%{http_code}\n' https://taptoprove.ee/
curl -4 -sS -o /dev/null -w '%{http_code}\n' 'https://nfc.taptoprove.ee/?asset=Pesu&tag=TAP-NFC-001&via=nfc'
```

Physical NFC reading and phone camera access are not device tested in this repo. A 200 from curl proves the address serves the app, not that a phone tap works.
