import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/spectral/400.css'
import '@fontsource/spectral/500.css'
import '@fontsource/spectral/600.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import './styles/global.css'

import { Home } from './pages/Home.tsx'
import { PrivacyPolicy } from './pages/PrivacyPolicy.tsx'
import { Terms } from './pages/Terms.tsx'

// Each HTML entry sets <body data-page="…">; render the matching page into #root. Every
// route stays a static file. The delete-account page is loaded dynamically so Firebase is
// only pulled in there — the legal pages stay lightweight.
const container = document.getElementById('root')

function mount(View: () => React.ReactElement) {
  if (container) {
    createRoot(container).render(
      <StrictMode>
        <View />
      </StrictMode>,
    )
  }
}

const page = document.body.dataset.page ?? 'home'

if (page === 'delete') {
  import('./pages/DeleteAccount.tsx').then((m) => mount(m.DeleteAccount))
} else {
  const pages: Record<string, () => React.ReactElement> = {
    home: Home,
    privacy: PrivacyPolicy,
    terms: Terms,
  }
  mount(pages[page] ?? Home)
}
