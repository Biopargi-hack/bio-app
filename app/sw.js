const CACHE = 'tap-to-prove-24051ef2fb3f';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './landing.css',
  './landing.js',
  './data.js',
  './manifest.webmanifest',
  './icon.svg',
  './illustration.svg',
  './check-flow.svg',
  './icon_192.png',
  './icon_512.png',
  './paper.html',
  './showcase.html',
  './sheet.html',
  './paper',
  './showcase',
  './sheet',
  './sample_cip.csv',
  './fonts/barlow_condensed_600_latin.woff2',
  './fonts/barlow_condensed_600_latin_ext.woff2',
  './fonts/barlow_condensed_700_latin.woff2',
  './fonts/barlow_condensed_700_latin_ext.woff2',
  './fonts/barlow_condensed_800_latin.woff2',
  './fonts/barlow_condensed_800_latin_ext.woff2',
  './fonts/ibm_plex_mono_400_latin.woff2',
  './fonts/ibm_plex_mono_400_latin_ext.woff2',
  './fonts/ibm_plex_mono_500_latin.woff2',
  './fonts/ibm_plex_mono_500_latin_ext.woff2',
  './fonts/ibm_plex_mono_600_latin.woff2',
  './fonts/ibm_plex_mono_600_latin_ext.woff2',
  './fonts/barlow_400_latin.woff2',
  './fonts/barlow_400_latin_ext.woff2',
  './fonts/barlow_500_latin.woff2',
  './fonts/barlow_500_latin_ext.woff2',
  './fonts/barlow_600_latin.woff2',
  './fonts/barlow_600_latin_ext.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(new Request(event.request, { cache: 'reload' }))
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE)
            .then((cache) => cache.put(event.request, copy))
            .catch(() => {});
        }
        return response;
      })
      .catch(async () => {
        let cached = await caches.match(event.request, { ignoreSearch: true });
        if (!cached && (event.request.mode === 'navigate' || event.request.destination === 'document')) {
          cached = await caches.match(`${url.pathname.replace(/\/+$/, '')}.html`, { ignoreSearch: true });
        }
        if (cached) return cached;
        if (event.request.mode === 'navigate' || event.request.destination === 'document') {
          const shell = await caches.match('./index.html') || await caches.match('./');
          if (shell) return shell;
        }
        return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      })
  );
});

