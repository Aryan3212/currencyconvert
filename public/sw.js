// service-worker.js
const CACHE_NAME = 'react-app-cache';

// Install - just activate immediately
self.addEventListener('install', (event) => {
  console.log('Service Worker installing');
  event.waitUntil(self.skipWaiting());
});

// Activate - take control immediately
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating');
  event.waitUntil(self.clients.claim());
});

// Fetch - simple network-first with auto-cache
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Only handle GET requests from your domain
  if (request.method !== 'GET' || !request.url.startsWith(location.origin)) {
    return;
  }
  
  event.respondWith(handleRequest(request));
});

async function handleRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    // Always try network first when online
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      // Auto-update cache with fresh content
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    throw new Error('Network response not ok');
    
  } catch (error) {
    // Network failed - serve from cache
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }
    
    // For page navigation, serve cached index.html (SPA support)
    if (request.mode === 'navigate') {
      const indexResponse = await cache.match('/');

      if (indexResponse) {
        return indexResponse;
      }
    }
    
    return new Response('Not available offline', { status: 503 });
  }
}