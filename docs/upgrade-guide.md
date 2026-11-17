# ⬆️ Upgrade Guide

## Updating dependencies

1. Review npm outdated and npm audit.
2. Inspect dependency release notes and peer requirements.
3. Update packages using npm.
4. Keep package.json and package-lock.json synchronized.
5. Run npm ci.
6. Run lint, tests, build, and dependency audit.
7. Review the full diff and verify Node.js 20 and 22 compatibility.

## Major framework upgrades

For React or Vite major upgrades, review plugin compatibility, build configuration, browser support, CSS behavior, and the test runner. Update documentation and the support matrix.

## Current blocker

The build dependency chain includes picomatch 4.0.7 and the high-severity ReDoS advisory. Do not force an unverified package override. Reassess when an official patched version is available.

## Application data

No database or persistent transcript data exists, so there is no data migration required for the current architecture.
