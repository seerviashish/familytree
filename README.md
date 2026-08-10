# familytree

Artifact host for **https://seerviashish.github.io/familytree/** — the landing, privacy
policy, terms, help and account-deletion pages for the Family Tree Android app.

**There is no source here.** It lives in the `familytree-android-app` repository at
`apps/familytree-web/`, and CI publishes the built output to the `gh-pages` branch of this
repo. That arrangement exists so the URL registered with Google Play as the privacy-policy
and data-deletion link stays unchanged while the source sits with the rest of the project.

Do not commit to this repository. Anything added to `gh-pages` is overwritten by the next
publish, and `main` is not served at all.
