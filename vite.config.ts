import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const root = import.meta.dirname

// The site is published to https://seerviashish.github.io/familytree/, so every asset
// must be requested under the /familytree/ base path.
const BASE = '/familytree/'

// Firebase Web config consumed by src/firebase.ts. Not secrets (they ship in the bundle
// either way) — they live in env so project ids aren't hardcoded, and so CI can inject
// them from GitHub Actions secrets. See .env.example.
const REQUIRED_FIREBASE_ENV = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
]

// Multi-page build: each route is a real static HTML file so GitHub Pages can serve it
// directly (no client-side-router fallback needed) and deep links like
// /familytree/privacy-policy work for app-store reviewers, crawlers and the Android app.
export default defineConfig(({ command, mode }) => {
  // loadEnv reads .env files *and* prefixed process.env vars, so this sees both a local
  // .env.local and the env the CI Build step injects from secrets.
  const env = loadEnv(mode, root, 'VITE_')

  // Google Play requires the account-deletion page to actually work, and it can't without
  // this config. Fail the production build loudly rather than publish a page that silently
  // can't delete anything.
  if (command === 'build') {
    const missing = REQUIRED_FIREBASE_ENV.filter((key) => !env[key])
    if (missing.length > 0) {
      throw new Error(
        `Missing Firebase env: ${missing.join(', ')}.\n` +
          'CI: add them as GitHub Actions secrets (Settings → Secrets and variables → Actions).\n' +
          'Local: copy .env.example to .env.local and fill it in.',
      )
    }
  }

  return {
    base: BASE,
    plugins: [react()],
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          home: resolve(root, 'index.html'),
          privacyPolicy: resolve(root, 'privacy-policy/index.html'),
          terms: resolve(root, 'terms/index.html'),
          accountDeletion: resolve(root, 'account-deletion/index.html'),
          // Legacy alias the Android app links to (/familytree/privacy); a static redirect.
          privacyRedirect: resolve(root, 'privacy/index.html'),
          notFound: resolve(root, '404.html'),
        },
      },
    },
  }
})
