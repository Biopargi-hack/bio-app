# Notes — @linnudtonisted

Append-only. Newest at the bottom. One line per session is enough; include the
file or line number when it helps the next person.

Format:

```
- **2026-11-27 14:05** — what changed, what you learned, what is next
```

---


- **2026-11-27 12:35** — Feat #13: NFC fault media — photo/video upload, fault details textarea and MediaRecorder voice note; blobs in IndexedDB v2 media store with hashes in the chain. verify 16/16; browser at 390px and desktop, offline reload, fake mic and generated WebM all passed. NFC/camera/mic not device-tested.

- **2026-11-27 12:36** — Opened PR #14 from feat/nfc-fault-evidence for issue #13; awaiting review and device test.

- **2026-11-27 12:54** — PR #14 follow-up: single writable note field replaces two textareas; speech recognition ET/RU/EN appends each sentence as a new line in its own language; voice-note mode also transcribes; speech_lang saved with record. Rebased onto current main. verify 18/18; Playwright tested RU/EN/ET speech, manual typing, photo, video, offline and 390px/desktop. Not device-tested.

- **2026-11-27 13:41** — Fix #14 after rebase onto main #17/#18/#20: precache real ./showcase.html and bump cache to v4 so offline shell installs; kept grade marks alongside media/speech marks.
