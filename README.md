# familytree-web

Landing, **Privacy Policy** and **Terms & Conditions** pages for the
[Family Tree](https://github.com/seerviashish/FamilyTree) Android app, hosted on
GitHub Pages at **https://seerviashish.github.io/familytree/**.

Built with **Vite + React + TypeScript** as a multi-page site, so every legal page is a
real static file that deep-links cleanly and needs no client-side router.

## Routes

| URL | Page |
| --- | --- |
| `/familytree/` | Landing page |
| `/familytree/privacy-policy/` | Privacy Policy |
| `/familytree/terms/` | Terms & Conditions |
| `/familytree/privacy/` | Redirects to `/privacy-policy/` (the path the Android app links to) |

## Develop

```bash
yarn install
yarn dev        # local dev server
yarn build      # type-check + production build to dist/
yarn preview    # serve the production build locally
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes
it with the official GitHub Pages actions.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment → Source**
and choose **GitHub Actions**. The next push to `main` will publish the site.

## Editing the content

- Text lives in `src/pages/PrivacyPolicy.tsx` and `src/pages/Terms.tsx`.
- Shared details (app name, developer, contact email, effective date, governing law) live in
  one place: `src/content/meta.ts` — update them there. Bump `effectiveDate` whenever the
  legal text changes.
- Theme tokens and typography are in `src/styles/global.css` (the app's "Bark & Moss" palette,
  Spectral + Manrope fonts).

> The legal text reflects how the app actually works (Google Sign-In, Firebase
> Firestore/Storage, Crashlytics/Analytics, in-app deletion). Review the developer name,
> contact email, effective date and governing law in `meta.ts` before publishing.
