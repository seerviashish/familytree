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

// Each HTML entry sets <body data-page="…">; render the matching page into #root. This
// keeps one JS bundle across the multi-page build while every route stays a static file.
type Page = 'home' | 'privacy' | 'terms'

const pages: Record<Page, () => React.ReactElement> = {
  home: Home,
  privacy: PrivacyPolicy,
  terms: Terms,
}

const page = (document.body.dataset.page ?? 'home') as Page
const View = pages[page] ?? Home

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <StrictMode>
      <View />
    </StrictMode>,
  )
}
