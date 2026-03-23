/// <reference types="vite/client" />
/// <reference lib="webworker" />

import { navigateFallback, ssr } from 'virtual:vite-pwa/remix/sw'
import { clientsClaim } from 'workbox-core'
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { setupRoutes } from './shared-sw'

declare let self: ServiceWorkerGlobalScope

const url = navigateFallback ?? '/'

/// self.__WB_MANIFEST is the default injection point
const manifest = self.__WB_MANIFEST
if (import.meta.env.DEV) {
  const entry = manifest.findIndex(entry => typeof entry !== 'string' && entry.url === url)
  if (entry !== -1)
    manifest.splice(entry, 1)

  // add the navigateFallback to the manifest
  manifest.push({ url, revision: Math.random().toString() })
}

precacheAndRoute(manifest)

// Use StaleWhileRevalidate for navigation requests - show cached content immediately, update in background
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'pages',
  })
)

setupRoutes()

// Force immediate activation of new service worker
self.addEventListener('install', (event) => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Clean up outdated precaches
      await cleanupOutdatedCaches()
      // Clear all caches except the current workbox caches
      const cacheNames = await caches.keys()
      const workboxCachePrefix = 'workbox-'
      await Promise.all(
        cacheNames
          .filter((cacheName) => !cacheName.startsWith(workboxCachePrefix))
          .map((cacheName) => caches.delete(cacheName))
      )
      // Take control of all clients immediately
      await clientsClaim()
    })()
  )
})