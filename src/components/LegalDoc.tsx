import type { ReactNode } from 'react'
import { Layout } from './Layout.tsx'

export interface TocItem {
  id: string
  label: string
}

export function LegalDoc({
  kind,
  title,
  intro,
  updated,
  toc,
  children,
}: {
  kind: string
  title: string
  intro: string
  /** This document's own "last updated" date — see meta.privacyUpdated / meta.termsUpdated. */
  updated: string
  toc: TocItem[]
  children: ReactNode
}) {
  return (
    <Layout>
      <article className="container doc section">
        <span className="overline">{kind}</span>
        <h1>{title}</h1>
        <p className="updated">Last updated: {updated}</p>
        <p className="lede">{intro}</p>

        <nav className="toc" aria-label="On this page">
          <div className="toc-title">On this page</div>
          <ol>
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {children}
      </article>
    </Layout>
  )
}

/** A titled section with an anchor id matching its table-of-contents entry. */
export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section>
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  )
}
