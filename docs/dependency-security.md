# 📦 Dependency Security

## Dependency boundary

React and React DOM are used at runtime. Vite, its React plugin, ESLint, and related tooling are development/build dependencies. The Node.js test runner is built into Node.

## Review procedure

1. Inspect package.json and the lockfile diff.
2. Identify direct and transitive changes.
3. Check upstream advisories and release notes.
4. Review license, provenance, install scripts, peer ranges, and maintainer activity.
5. Run npm ci, lint, tests, build, and npm audit.
6. Record compatibility and residual risk.

## Active picomatch advisory

picomatch 4.0.7 is resolved through Vite's build tooling and is currently flagged by GHSA-fc5q-39xc-vjpf. This dependency is not part of the app's prompt-processing code path, but it remains part of the build supply chain. The issue is not considered fixed. Do not invent a patched version or apply an unverified override.

## CI behavior

The quality workflow runs lint, tests, build, then the high-severity audit. This order ensures build verification is reported even when the audit step fails.

## Release gate

Do not describe the dependency tree as vulnerability-free until the advisory is addressed by a verified upstream release or a documented, independently reviewed mitigation.
