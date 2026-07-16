// Central, edit-in-one-place details used across the legal + landing pages.
export const meta = {
  appName: 'Family Tree',
  platform: 'Android',
  developer: 'Ashishkumar Chaudhary',
  contactEmail: 'seerviashish17@gmail.com',
  // Human-readable "last updated" shown on the legal pages. Update when the text changes.
  effectiveDate: 'July 17, 2026',
  governingLaw: 'India',
  baseUrl: 'https://seerviashish.github.io/familytree',
  androidPackage: 'io.seerviashish.android.familytree',
} as const

export const paths = {
  home: '/familytree/',
  privacy: '/familytree/privacy-policy/',
  terms: '/familytree/terms/',
} as const
