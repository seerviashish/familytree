// Central, edit-in-one-place details used across the legal + landing pages.
export const meta = {
  appName: 'Family Tree',
  platform: 'Android',
  developer: 'Ashishkumar Chaudhary',
  contactEmail: 'seerviashish17@gmail.com',
  // Human-readable "last updated" shown on each legal page. Bump the one whose text changed —
  // they are separate so amending one document cannot claim the other was revised too.
  privacyUpdated: 'August 6, 2026',
  termsUpdated: 'July 17, 2026',
  // Year in the footer; tracks whichever document was touched most recently.
  copyrightYear: '2026',
  governingLaw: 'India',
  baseUrl: 'https://seerviashish.github.io/familytree',
  androidPackage: 'io.seerviashish.android.familytree',
} as const

export const paths = {
  home: '/familytree/',
  privacy: '/familytree/privacy-policy/',
  terms: '/familytree/terms/',
  deleteAccount: '/familytree/account-deletion/',
} as const
