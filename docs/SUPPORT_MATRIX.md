# 🧭 Support and Compatibility Matrix

This table records the project's configured and tested scope, not a promise that every browser or device is certified.

| Area | Current statement | Evidence / qualification |
|---|---|---|
| Runtime architecture | Browser-only React application | No server-side runtime for chat responses |
| Node.js | CI matrix uses Node 22, 24, and 26 | Node 26 selected by .nvmrc |
| Node.js minimum | 22 | Older Node 20 reached EOL on 2026-04-30 |
| Package manager | npm | package-lock.json is committed |
| UI framework | React 18 | package manifest |
| Build tool | Vite 6 | package manifest |
| Automated tests | Node.js built-in test runner | Not browser E2E |
| Backend | None | No app API |
| Database | None | No application persistence |
| AI provider | None | Local phrase matcher only |
| Transcript storage | React memory while page is active | No server persistence |
| External resource | Google Fonts stylesheet | Browser may contact font host |
| Browsers | Modern browsers are intended | Individual browser/AT combinations are not certified |

## Support policy

Use a Node.js LTS line from the CI matrix. Report a defect with browser/version, operating system, viewport, exact steps, expected result, and sanitized console output. Do not attach secrets or private transcripts.

## Updating this matrix

Change a row only after inspecting the source, dependencies, CI matrix, and any deployment configuration. Record the test environment and exact commit. Do not claim browser or accessibility certification without a formal verification record.
