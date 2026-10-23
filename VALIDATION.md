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

## Remaining release gates

- WebKit/iPhone project is configured in CI but has not been executed locally; real-device checks remain.
- GitHub Actions has not executed remotely: writes through the GitHub integration return HTTP 403 Resource not accessible by integration. CLI dry-run push also lacked write authentication.
- No remote branch/PR was created and main is unchanged.
- No live Render URL is claimed. No Render workspace was selected in the session; discovery returned My Workspace (ali0508155956@gmail.com), requiring explicit selection before deployment.
- Static preview uses noindex and does not change the existing WordPress site or domain.

## Continue

Restore GitHub write access or use an authorized browser session to push this branch and open a PR. Run the configured CI, including WebKit, resolve any failures and review the result before merging. Apply the Render configuration in the confirmed workspace, then verify the public URL and asset responses, navigation and outgoing links before declaring the preview live.
