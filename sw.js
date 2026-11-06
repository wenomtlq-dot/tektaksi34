// tektaksi34 - once internetten alir (fiyatlar hep guncel), internet yoksa son kaydedileni gosterir
var ONBELLEK = "tektaksi34-v2";
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) {
  var istek = e.request;
  if (istek.method !== "GET" || new URL(istek.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(istek).then(function (cevap) {
      var kopya = cevap.clone();
      caches.open(ONBELLEK).then(function (c) { c.put(istek, kopya); });
      return cevap;
    }).catch(function () { return caches.match(istek); })
  );
});
