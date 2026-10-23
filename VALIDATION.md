# Validation — 23 October 2026 (Dubai)

Base: main at 39e72a8492b5304e3d1fa250d3edb6d97ee664ca. Work is isolated on improve/tested-preview.

## Completed

- Split the original single file into HTML, CSS, content data and application logic.
- Fixed static redraw while reduced motion or pause is active; handled hash navigation and browser Back.
- Kept navigation/content usable when Canvas is unavailable; stopped animation callbacks while offscreen.
- Stored the original 640×640 logo locally without modifying its pixels; deferred footer decoding.
- Improved small-screen card readability and separated overlapping lobby markers.
- Added reproducible Node tooling, lockfile, browser/data tests, GitHub Actions and an independent Render Static Site Blueprint with PR previews.

## Checks performed

- Both JavaScript files pass Node syntax checks.
- Three Node tests pass: content/translations, marker references and built asset paths/output isolation.
- Sixteen Playwright checks pass across desktop Chromium and Pixel 7 Chromium emulation. This covers all eight rooms in all three languages, local logo, dialog behavior, overflow, reduced motion, missing Canvas, browser Back/search, API success/failure, and idle animation while offscreen.
- All 32 distinct external URLs in the initial data returned HTTP 200, following redirects. This does not verify completion of external checkout or login flows.
- Current Render JSON Schema validation passes. Render CLI platform validation was unavailable; the CLI is not installed.
- Desktop and Persian mobile screenshots were visually inspected. Small-screen improvements were applied after this inspection and the browser suite was rerun successfully.

## Remote validation and release status

- Changes are recorded in PR #1: https://github.com/ali0508155956-dev/business-talent-finder-3d/pull/1
- GitHub Actions executes syntax checks, build, three data tests and 24 browser checks across desktop Chromium, mobile Chromium and iPhone WebKit. The latest checks on the PR are the authority for the current commit; merge only after they pass.
- WebKit testing exposed stale offscreen room rendering and mobile scrolling/tap timing. Explicit scene changes now draw synchronously and room navigation scrolls immediately; continuous animation still stops offscreen.
- My Workspace (ali0508155956@gmail.com) is the confirmed Render destination. Deployment remains blocked by the browser approval gate for Google sign-in; no live Render URL is claimed.
- Static preview uses noindex and does not change the existing WordPress site or domain.
- Real-device checks remain useful alongside browser emulation.

## Continue

After the current PR checks pass, merge the reviewed changes. Complete the authorized Render login, apply render.yaml in the confirmed workspace, then verify the public URL, asset responses, room navigation and outgoing links before declaring the preview live.
