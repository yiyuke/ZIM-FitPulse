
// ZIM Zapps PWA Service Worker to cache app files
// Please check to see all files have been listed with local links
// (Do not worry about icon files) 

var cacheName = 'zim_pwa_FitPulse';
var filesToCache = [
  './',
  'index.html',
  'libraries/createjs.js',
  'libraries/zim_min.js',
  'assets/icon.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});