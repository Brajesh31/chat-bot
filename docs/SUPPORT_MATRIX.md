# 🧭 Support and Compatibility Matrix

This table records the project's tested scope, not a promise that every browser or device is certified.

| Area | Current statement | Evidence / qualification |
|---|---|---|
| Runtime architecture | Browser-only React application | No server-side runtime for chat responses |
| Node.js | CI matrix uses Node 20 and 22 | Recheck workflow before changing support claim |
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

Report a defect with browser/version, operating system, viewport, exact steps, expected result, and sanitized console output. Do not attach secrets or private transcripts.

## Updating this matrix

Change a row only after inspecting the source, dependencies, CI matrix, and any deployment configuration. For compatibility changes, record the test environment and exact commit. Do not claim a browser or accessibility certification without a formal verification record.
