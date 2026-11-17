# 📝 Decision Log

## ADR-001: Describe baseline as local scripted chat
**Status:** Accepted. Current code has no backend or model integration. Remote providers require a separately designed server boundary.

## ADR-002: Use npm and lockfile
**Status:** Accepted. Use `npm ci` and update the lockfile with package changes.

## ADR-003: Test local response contract
**Status:** Accepted. Cover deterministic branches, control randomness as needed, and avoid external provider calls in unit tests.
