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
      // PWA options
      injectRegister: 'script',
    }),
    tsconfigPaths(),
  ],
});
