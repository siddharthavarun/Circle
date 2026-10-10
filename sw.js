// Circle Daily service worker: keeps the app usable offline.
// Bump VERSION whenever you change index.html so phones pick up the new version.
const VERSION = "circle-v50";
const SHELL = ["./", "./index.html", "./manifest.webmanifest"];
const OPTIONAL = ["./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./icons/favicon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c =>
    c.addAll(SHELL).then(() => Promise.all(OPTIONAL.map(u => c.add(u).catch(() => {}))))   // a missing icon never blocks the update
  ).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    if (req.mode === "navigate") {
      // Network first so updates arrive; cached copy when offline.
      e.respondWith(fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html")));
      return;
    }
    if (url.pathname.endsWith("/sw.js")) return;   // the app reads this to show its version number
    e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
    return;
  }

  // Fonts and the PDF reader library: cache after first use.
  if (/(^|\.)fonts\.(googleapis|gstatic)\.com$|^cdnjs\.cloudflare\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res;
    })));
  }
});
