# Business Talent Finder 3D — preview

An independent Forever Business Owner's interactive showroom and learning hub. Eight rooms, 31 initial exhibits, English/Persian/Arabic, search, original summaries and labelled links to existing resources. Rendering uses perspective geometry on Canvas 2D; this release does not include WebGL models or a lifelike avatar.

## Run and verify

Use Node.js 22 or later. `npm ci`, then `npm run check`, `npm run build`, `npm test`. Start the built preview with `npm run dev` and visit http://127.0.0.1:4173.

For browser checks run `npx playwright install --with-deps chromium webkit` then `npm run test:e2e`. CI runs these checks on pushes and pull requests. Tests cover all rooms in three languages, mobile and desktop, reduced motion, missing Canvas, search, browser Back, local logo and unavailable/successful WordPress news. Chromium emulation and WebKit complement, but do not replace, a final real iPhone/Android check.

## Layout

- `index.html`: semantic shell and preview metadata
- `css/styles.css`: layout, responsive styles and reduced-motion rules
- `js/data.js`: rooms, original content, translations and outgoing URLs
- `js/app.js`: navigation, interactions, Canvas renderer and optional public news sync
- `assets/brand/alireza-logo-web.jpg`: unchanged logo copied from its existing public WordPress URL
- `scripts/`: dependency-free static build and local preview server
- `tests/`: data validation and browser tests

Only `dist/` is published. The site has no backend, database, account system or secrets. Purchases and inquiries open existing external destinations. Speech uses the visitor's browser and available voices. News comes from a public read-only WordPress API, with a 3.5-second timeout and existing articles as fallback; fetched article text keeps its source language. No WordPress content or settings are written.

## Release scope and gates

Version 0.1 focuses on all rooms working, complete initial translations, responsive navigation, correct links and stable static rendering. Official product photography, WebGL assets, lifelike avatars and a backend are future work. Do not replace approved logos with generated marks or invent health/income claims.

Before merging: require the CI job to pass; review mobile/desktop screenshots and test contact, source and shopping destinations; test blocked API and reduced-motion mode. Before declaring the preview live: verify the public URL, HTTP 200 for assets, no console errors, local logo, navigation, modal closing and mobile layout. Automated tests mock remote news and do not certify the availability of outgoing websites.

## Render preview

`render.yaml` defines an independent Static Site with build command `node scripts/build.cjs`, output `dist`, and automatic PR previews. Apply it only in the confirmed Render workspace after this configuration reaches main. Never change the existing WordPress site or its domain. The preview deliberately uses noindex headers and robots rules. PR preview generation depends on the Git repository being connected to Render.

The Blueprint is a deployment proposal until applied; repository presence is not evidence of a live site. Keep branch changes reviewable through a PR and preserve the previous commit for rollback. No paid services are requested by this configuration.
