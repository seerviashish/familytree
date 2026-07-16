import type { ReactNode } from 'react'
import { meta, paths } from '../content/meta.ts'

function TreeMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 22V13"
        stroke="var(--tree-branch)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 14C12 14 8 12.5 7 9M12 14C12 14 16 12.5 17 9"
        stroke="var(--tree-branch)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12" cy="6" r="3.4" fill="var(--primary)" />
      <circle cx="6.4" cy="8.6" r="2.2" fill="var(--secondary)" />
      <circle cx="17.6" cy="8.6" r="2.2" fill="var(--secondary)" />
    </svg>
  )
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container">
          <a className="brand" href={paths.home}>
            <TreeMark />
            {meta.appName}
          </a>
          <nav className="nav" aria-label="Primary">
            <a href={paths.privacy}>Privacy</a>
            <a href={paths.terms}>Terms</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container">
          <span>
            © {meta.effectiveDate.split(', ')[1] ?? '2026'} {meta.appName}. Built by {meta.developer}.
          </span>
          <nav className="nav" aria-label="Footer">
            <a href={paths.privacy}>Privacy Policy</a>
            <a href={paths.terms}>Terms</a>
            <a href={`mailto:${meta.contactEmail}`}>Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
