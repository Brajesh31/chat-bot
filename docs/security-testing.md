# 🧪 Security Testing

## Automated checks in the repository

- CodeQL analyzes JavaScript.
- npm audit reports known dependency advisories.
- The normal test suite validates response rules and repository integrity.
- CI runs lint, tests, production build, and the high-severity audit.

## What is not covered

There is no penetration test, dynamic application security test, browser security-header audit, API security test, authentication test, database test, or formal threat-model validation because the corresponding services do not exist or have not been assessed.

## Manual checks

- Inspect browser network requests.
- Verify user text is rendered as text.
- Confirm no provider credentials appear in the client bundle.
- Review external resource origins.
- Inspect npm lockfile and dependency advisories.
- Review workflow permissions and action sources.

## Current unresolved risk

The picomatch 4.0.7 advisory affects the Vite build dependency chain. npm audit currently fails at high severity. Do not state that security testing is fully passed while this gate is failing.

## Evidence

Record exact commit, tool version, command, output, finding IDs, reviewer, and date. Automated scanner success is not proof of complete security.
