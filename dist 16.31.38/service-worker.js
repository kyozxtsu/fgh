self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static-v1').then(cache => {
            return cache.addAll([
                '/',
                'index2.html',
                'main.4510f883a59a4c5975b3.bundle.js',
                'vendor.1579ece159f57f8c6aa5.bundle.js',
                'main.1ab7be3f4992af9e982d.css',
                'icons/icon-192x192.png',
                'icons/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
