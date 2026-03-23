import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { installGlobals } from '@remix-run/node'
import tsconfigPaths from "vite-tsconfig-paths";
import { RemixVitePWA } from '@vite-pwa/remix'

installGlobals();

const { RemixVitePWAPlugin, RemixPWAPreset } = RemixVitePWA()

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      presets: [RemixPWAPreset()],
      future: {
        unstable_optimizeDeps: true,
      },
      ignoredRouteFiles: ["**/*.css"],
    }),
    RemixVitePWAPlugin({
      injectRegister: 'script',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "pages",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.endsWith('.data'),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "remix-data",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          }
        ],
      },
    }),
    tsconfigPaths(),
  ],
});
