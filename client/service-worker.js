// public/service-worker.js
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open('image-cache-v1').then(cache => {
      // Pre-cache important files (like background images)
      return cache.addAll([
        '/images/img.png', // Use relative path for public folder
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  // If the request is for an image, try to fetch it from the cache
  if (event.request.url.includes('/images/')) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;  // Return the cached image
        }
        // If not in cache, fetch from network and cache it
        return fetch(event.request).then(networkResponse => {
          caches.open('image-cache-v1').then(cache => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        });
      })
    );
  }
});

