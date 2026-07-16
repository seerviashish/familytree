import { Layout } from '../components/Layout.tsx'
import { meta, paths } from '../content/meta.ts'

const features = [
  {
    title: 'People & faces',
    body: 'Add everyone in your family with names, dates, and a photo — so the tree is faces, not just boxes.',
  },
  {
    title: 'Real relationships',
    body: 'Link parents, partners, children and siblings. The app works out how each person relates to you.',
  },
  {
    title: 'Yours alone',
    body: 'Your tree is private to your account, synced with Firebase, and available offline. Delete it any time.',
  },
]

export function Home() {
  return (
    <Layout>
      <section className="container hero">
        <span className="overline">{meta.platform} · Material 3</span>
        <h1>{meta.appName}</h1>
        <p className="lede">
          Keep your family&rsquo;s story — the faces, the names, and how everyone is connected.
        </p>

        <div className="chips">
          <span className="chip">Bark base</span>
          <span className="chip">
            <span className="dot" style={{ background: 'var(--primary)' }} />
            Moss accent
          </span>
          <span className="chip">
            <span className="dot" style={{ background: 'var(--secondary)' }} />
            Warm wood
          </span>
        </div>

        <div className="cta-row">
          <a className="btn btn-primary" href={paths.privacy}>
            Privacy Policy
          </a>
          <a className="btn btn-ghost" href={paths.terms}>
            Terms &amp; Conditions
          </a>
        </div>
      </section>

      <section className="container section">
        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section" style={{ paddingTop: 0 }}>
        <div className="callout">
          <p>
            <strong>Your data, briefly:</strong> {meta.appName} signs you in with Google and stores the
            family details and photos you add in your own private space. We don&rsquo;t sell your data
            or show ads. Read the full{' '}
            <a href={paths.privacy}>Privacy Policy</a> for details, or email{' '}
            <a href={`mailto:${meta.contactEmail}`}>{meta.contactEmail}</a>.
          </p>
        </div>
      </section>
    </Layout>
  )
}
