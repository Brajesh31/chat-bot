# 📝 Decision Log

## ADR-001: Document baseline as local scripted chat
**Status:** Accepted. Current code has no backend or model integration. Remote providers require a separately designed server boundary.

## ADR-002: Use npm and lockfile
**Status:** Accepted. Use `npm ci` and update lockfile with package changes.

## ADR-003: Test local response contract
**Status:** Accepted. Cover deterministic branches, control randomness when needed, and avoid external provider calls in unit tests.
