import { useState } from 'react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  deleteUser,
  reauthenticateWithPopup,
  type User,
} from 'firebase/auth'
import { collection, getDocs, writeBatch } from 'firebase/firestore'
import { ref, listAll, deleteObject } from 'firebase/storage'
import { auth, db, storage } from '../firebase.ts'
import { Layout } from '../components/Layout.tsx'
import { meta } from '../content/meta.ts'

type Phase = 'intro' | 'authed' | 'deleting' | 'done' | 'error'

// Firestore caps a WriteBatch at 500 operations; stay below it so a large tree still wipes.
const BATCH_LIMIT = 450

/** Deletes every document in users/{uid}/{name}, in batches. */
async function deleteCollection(uid: string, name: string): Promise<void> {
  const snap = await getDocs(collection(db, 'users', uid, name))
  for (let i = 0; i < snap.docs.length; i += BATCH_LIMIT) {
    const batch = writeBatch(db)
    for (const document of snap.docs.slice(i, i + BATCH_LIMIT)) batch.delete(document.ref)
    await batch.commit()
  }
}

/**
 * Permanently removes everything for the signed-in user: their people and relationships
 * (Firestore, named "familytree" DB), their photos (Storage), then the account itself.
 * Mirrors the in-app Settings → Delete account flow.
 */
async function wipeEverything(user: User): Promise<void> {
  const uid = user.uid

  // Wipe the data BEFORE the auth user: once the account is gone the security rules deny
  // access, so anything left behind would be unreachable. Each step is idempotent, so
  // failing part-way through is safely retryable.
  await deleteCollection(uid, 'persons')
  await deleteCollection(uid, 'relationships')

  try {
    const listing = await listAll(ref(storage, `users/${uid}/persons`))
    await Promise.all(listing.items.map((item) => deleteObject(item).catch(() => undefined)))
  } catch {
    // No photos folder for this user — nothing to remove.
  }

  // Firebase refuses to delete an account whose sign-in has gone stale, which is easy to
  // hit because the confirm step sits on screen while the user reads it. Re-prove identity
  // and retry once rather than failing with a dead end.
  try {
    await deleteUser(user)
  } catch (err) {
    if ((err as { code?: string })?.code !== 'auth/requires-recent-login') throw err
    const cred = await reauthenticateWithPopup(user, new GoogleAuthProvider())
    await deleteUser(cred.user)
  }
}

function authErrorMessage(err: unknown): string {
  const code = (err as { code?: string })?.code ?? ''
  if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
    return 'Sign-in was cancelled.'
  }
  if (code === 'auth/unauthorized-domain') {
    return 'This site is not yet authorized for sign-in. Please try again shortly.'
  }
  if (code === 'auth/popup-blocked') {
    return 'Your browser blocked the sign-in popup. Allow popups for this site and try again.'
  }
  return 'Could not sign you in. Please try again.'
}

export function DeleteAccount() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function signIn() {
    setError(null)
    try {
      const cred = await signInWithPopup(auth, new GoogleAuthProvider())
      setUser(cred.user)
      setPhase('authed')
    } catch (err) {
      setError(authErrorMessage(err))
    }
  }

  async function confirmDelete() {
    if (!user) return
    setError(null)
    setPhase('deleting')
    try {
      await wipeEverything(user)
      setPhase('done')
    } catch {
      setError(`Something went wrong while deleting. Please try again, or email ${meta.contactEmail}.`)
      setPhase('error')
    }
  }

  async function cancel() {
    await signOut(auth).catch(() => undefined)
    setUser(null)
    setError(null)
    setPhase('intro')
  }

  return (
    <Layout>
      <article className="container doc section" style={{ maxWidth: '640px' }}>
        <span className="overline">Account &amp; data deletion</span>
        <h1>Delete your account &amp; data</h1>
        <p className="lede">
          Sign in with the Google account you use in {meta.appName} to permanently erase all of
          your data. This is the same as <em>Settings → Delete account</em> inside the app.
        </p>

        <div className="callout">
          <p>
            <strong>This can&rsquo;t be undone.</strong> Deleting removes every person you added and
            their relationship links, all photos you uploaded, and your {meta.appName} account and
            Google sign-in. There is no way to recover it.
          </p>
        </div>

        {phase === 'intro' && (
          <>
            {error && <p style={{ color: 'var(--secondary)' }}>{error}</p>}
            <div className="cta-row" style={{ justifyContent: 'flex-start' }}>
              <button className="btn btn-primary" onClick={signIn}>
                Continue with Google
              </button>
            </div>
            <p className="updated" style={{ marginTop: '16px' }}>
              You&rsquo;ll be asked to sign in so we can verify it&rsquo;s really you before deleting anything.
            </p>
          </>
        )}

        {phase === 'authed' && user && (
          <>
            <p>
              Signed in as <strong>{user.email}</strong>. Deleting will permanently erase everything
              in this account.
            </p>
            <div className="cta-row" style={{ justifyContent: 'flex-start' }}>
              <button className="btn btn-danger" onClick={confirmDelete}>
                Permanently delete everything
              </button>
              <button className="btn btn-ghost" onClick={cancel}>
                Cancel
              </button>
            </div>
          </>
        )}

        {phase === 'deleting' && <p className="lede">Deleting your account and data…</p>}

        {phase === 'done' && (
          <div className="callout" style={{ borderColor: 'var(--primary)' }}>
            <p>
              <strong>Done.</strong> Your {meta.appName} account and all associated data have been
              permanently deleted. You can close this page.
            </p>
          </div>
        )}

        {phase === 'error' && (
          <>
            <p style={{ color: 'var(--secondary)' }}>{error}</p>
            <div className="cta-row" style={{ justifyContent: 'flex-start' }}>
              <button className="btn btn-primary" onClick={confirmDelete}>
                Try again
              </button>
              <button className="btn btn-ghost" onClick={cancel}>
                Start over
              </button>
            </div>
          </>
        )}

        <h2 style={{ marginTop: '2.5rem' }} id="prefer-in-app">
          Prefer to do it in the app?
        </h2>
        <p>
          Open {meta.appName} on your device and go to <strong>Settings → Delete account</strong>.
          You can also delete individual people (and their photos) from a person&rsquo;s screen
          without deleting your whole account. Questions? Email{' '}
          <a href={`mailto:${meta.contactEmail}`}>{meta.contactEmail}</a>.
        </p>
      </article>
    </Layout>
  )
}
