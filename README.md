# POKE64 Website

Static, zero-dependency website for POKE64. It is ready to publish directly with GitHub Pages; no Jekyll, npm or build step is required.

## Pages

- `index.html` — product homepage
- `features.html` — feature overview
- `support.html` — support / bug reporting
- `privacy.html` — privacy policy
- `credits.html` — VICE / open-source / trademark credits
- `404.html` — custom not-found page

## Configure links before publishing

Edit `assets/js/config.js`:

```js
window.POKE64_SITE = {
  github: "https://github.com/alexain/poke64-ios",
  releases: "https://github.com/alexain/poke64-ios/releases",
  issues: "https://github.com/alexain/poke64-ios/issues",
  appStore: "",
  testFlight: "",
  supportEmail: ""
};
```

Empty App Store / TestFlight links are intentionally rendered as disabled rather than pointing somewhere incorrect.

Before App Store submission, set a real support email or confirm that the chosen support route satisfies the information you plan to provide in App Store Connect.

## Screenshots

Replace the CSS-only iPad mockup when final marketing screenshots are ready. Suggested image names are listed in `assets/screenshots/README.md`.

## Privacy review before publication

`privacy.html` is a conservative first draft based on the current beta architecture. Before using it as the App Store privacy-policy URL, compare every statement with:

- the final App Privacy answers in App Store Connect;
- any analytics/crash-reporting SDK added later;
- the final StoreKit configuration;
- the behavior of Virtual Modem or other network-enabled features.

Do not publish claims that no longer match the shipping binary.

## Publish with GitHub Pages

Recommended repository: `poke64-website`.

1. Create the repository on GitHub.
2. Copy the contents of this folder to its root.
3. Commit and push to `main`.
4. GitHub → Settings → Pages → Deploy from a branch → `main` / root.
5. Add a custom domain later if desired.

The included `.nojekyll` file tells GitHub Pages to serve these files as-is.

## Local preview

From this directory:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.


## Website update (October 2026)

The homepage now shows authentic POKE64 screenshots in `assets/screenshots/`,
links to the official App Store listing, and includes an update summary for 1.0.2.
The text currently identifies 1.0.2 as pending Apple approval; update it after approval.
