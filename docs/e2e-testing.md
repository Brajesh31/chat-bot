# 🧭 End-to-End Testing Status

## Current status

The repository does not currently include a browser automation framework or an end-to-end test suite. The Node.js test runner exercises the response helper and repository integrity, not the rendered browser application.

## Manual end-to-end journey

1. Start the app with npm run dev.
2. Open the Vite URL in a browser.
3. Submit a known prompt.
4. Submit a negative near-match and an unknown prompt.
5. Clear the conversation.
6. Minimize and expand the panel.
7. Resize to a narrow viewport.
8. Inspect the browser console.

## Future automation criteria

A browser automation tool should be added only with a stable need and maintainable CI environment. Cover the primary journey, blank input, Enter/send parity, clear/minimize, narrow layout, and browser console errors.

## Reporting

Record browser, version, viewport, commit, and result. Do not classify the manual journey as automated E2E.
