import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Firebase Web config, injected at build time from VITE_FIREBASE_* — GitHub Actions secrets
// in CI, .env.local locally (see .env.example). These are not credentials: every Firebase
// web client ships them in its bundle. Access is gated by the owner-scoped security rules
// and Auth's authorized-domain list, not by keeping these values hidden.
//
// Each var is read with a *static* member access because Vite only substitutes those at
// build time — import.meta.env[dynamicKey] silently yields undefined in a production build.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// vite.config.ts already fails the production build when any of these are missing; this is
// the last-resort guard for a dev server started without .env.local.
const missing = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key)
if (missing.length > 0) {
  throw new Error(
    `Firebase config is incomplete (${missing.join(', ')}). Copy .env.example to .env.local.`,
  )
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
// The app stores data in a NAMED Firestore database ("familytree"), not "(default)". Keep
// this in sync with FIRESTORE_DATABASE in the Android AppContainer.
export const db = getFirestore(app, 'familytree')
export const storage = getStorage(app)
