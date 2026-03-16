const CACHE_NAME = "votaciones-app-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./rvotacion.html",
  "./style.css",
  "./style2.css",
  "./logo.png",
  "./icon-192.png",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
