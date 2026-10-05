// LWS Service Worker
// Keep VERSION in sync with APP_VERSION in index.html (shown in the footer).
const VERSION = '2.0';
const CACHE_NAME = 'lws-v' + VERSION;
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
const NAV_TIMEOUT_MS = 4000;

// Install: pre-cache the app shell (bypass the HTTP cache so we get fresh files).
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

// Activate: remove old LWS caches, take control of open pages.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('lws-') && k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function cacheable(res) {
  return res && (res.ok || res.type === 'opaque');
}

// Network-first for HTML so a new deploy shows up immediately; falls back to cache offline.
function networkFirst(request) {
  const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), NAV_TIMEOUT_MS));
  return Promise.race([fetch(request), timeout])
    .then(res => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(request, copy));
      }
      return res;
    })
    .catch(() =>
      caches.match(request, { ignoreSearch: true })
        .then(hit => hit || caches.match('./index.html'))
        .then(hit => hit || new Response('Offline', { status: 503, statusText: 'Offline' }))
    );
}

// Cache-first for static assets (icons, manifest, font files).
function cacheFirst(request) {
  return caches.match(request).then(hit => {
    if (hit) return hit;
    return fetch(request).then(res => {
      if (cacheable(res)) {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(request, copy));
      }
      return res;
    });
  });
}

// Stale-while-revalidate for the Google Fonts stylesheet.
function staleWhileRevalidate(request) {
  return caches.open(CACHE_NAME).then(cache =>
    cache.match(request).then(hit => {
      const update = fetch(request)
        .then(res => { if (cacheable(res)) cache.put(request, res.clone()); return res; })
        .catch(() => hit);
      return hit || update;
    })
  );
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;                 // never touch POSTs (Groq chat calls)
  const url = new URL(req.url);

  if (url.hostname === 'api.groq.com') return;      // AI traffic always goes straight to the network

  if (req.mode === 'navigate' || (url.origin === self.location.origin && url.pathname.endsWith('.html'))) {
    event.respondWith(networkFirst(req));
    return;
  }
  if (url.hostname === 'fonts.googleapis.com') {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }
  if (url.origin === self.location.origin || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(req));
  }
});
