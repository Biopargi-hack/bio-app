# Local fonts

These woff2 files are the Latin and Latin Ext subsets of Barlow Condensed and IBM Plex Mono from Google Fonts. They are served from this folder so the app keeps its type offline and does not wait on a render-blocking external stylesheet.

Both families are licensed under the SIL Open Font License 1.1. Source: fonts.google.com. Update the files together with `styles.css` and `sw.js`, so a new font is also added to the service worker pre-cache list.
