import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = import.meta.dirname

// The site is published to https://seerviashish.github.io/familytree/, so every asset
// must be requested under the /familytree/ base path.
const BASE = '/familytree/'

// Multi-page build: each route is a real static HTML file so GitHub Pages can serve it
// directly (no client-side-router fallback needed) and deep links like
// /familytree/privacy-policy work for app-store reviewers, crawlers and the Android app.
export default defineConfig({
  base: BASE,
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home: resolve(root,'index.html'),
        privacyPolicy: resolve(root,'privacy-policy/index.html'),
        terms: resolve(root,'terms/index.html'),
        // Legacy alias the Android app links to (/familytree/privacy); a static redirect.
        privacyRedirect: resolve(root,'privacy/index.html'),
        notFound: resolve(root,'404.html'),
      },
    },
  },
})
