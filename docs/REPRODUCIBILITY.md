# 🔁 Reproducibility Guide

## Goal

A contributor should be able to recreate the dependency installation, automated checks, and production build from a clean checkout without external credentials.

## Environment to record

- Operating system and architecture:
- Node.js version:
- npm version:
- Git commit SHA:
- Browser and version for manual checks:
- Date and timezone:
- Network restrictions or proxy:

## Clean setup

1. Clone the repository.
2. Check out the exact commit under review.
3. Install dependencies with npm ci.
4. Run npm run lint.
5. Run npm test.
6. Run npm audit --audit-level=high.
7. Run npm run build.

## Deterministic response testing

Jokes, facts, and fallback responses may select from fixed arrays. Tests must control Math.random or otherwise assert a response category rather than rely on an unpredictable result. Restore any stubbed global in a finally block or test cleanup hook.

Date and time responses use the browser clock and locale. Tests should inject or control the clock where practical and should assert a stable output contract rather than assume a particular visitor timezone.

## Manual browser evidence

Record browser, viewport, keyboard path, reduced-motion setting, and the exact deployed or local commit. Manual checks are not automatically covered by a successful Node test run.

## Reproduction record

Attach command output or CI run URLs. Remove private information and local machine secrets. If results differ, compare dependency tree, runtime versions, environment, locale, timezone, and browser state before assuming the source changed.
