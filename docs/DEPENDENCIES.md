# 📦 Dependencies

## Runtime packages
- react and react-dom: browser UI and React DOM rendering.

## Development packages
- vite and @vitejs/plugin-react: local development server and production bundling.
- ESLint and React plugins: static analysis and React-specific rules.
- Node.js built-in node:test: automated tests without an additional test framework dependency.

The test runner is built into supported Node.js releases. Vitest, jsdom, and Testing Library are not used by the current project.

## Runtime policy
- Use maintained Node.js LTS versions. The CI matrix checks 22, 24, and 26; .nvmrc selects 26.
- Use npm and preserve package-lock.json.
- Prefer maintained dependencies with a clear purpose.
- Review compatibility, ownership, release history, and license before adoption.
- Run npm ci, lint, tests, docs validation, and build after upgrades.
- Review Dependabot pull requests rather than merging blindly.
- Run npm audit --audit-level=high before releases and resolve actionable advisories.
- Do not use npm audit fix --force without reviewing breaking changes and rerunning the full quality suite.
- Do not invent a patched version or use an unreviewed Git branch to silence an advisory.

## Current security audit status

### Known upstream advisory, 2026-11-18

The current lockfile resolves picomatch 4.0.7 as a development-only transitive dependency through Vite's file-discovery dependency chain (fdir and tinyglobby). GitHub advisory [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf), also tracked as CVE-2026-112366, identifies versions through 4.0.7 as vulnerable to regular-expression denial of service through certain repeated extglob patterns.

At the time this note was written:
- The advisory did not list a patched package version.
- The upstream maintainer repository had an open, not-yet-merged fix proposal at [picomatch PR #238](https://github.com/micromatch/picomatch/pull/238).
- The dependency is in the build/development toolchain, not the app's production React runtime dependency set.
- The app does not pass visitor-entered chat text into picomatch or construct glob patterns from user prompts.
- Nevertheless, the issue remains a build-tool supply-chain risk and is not considered fixed or formally accepted.

The current full-tree npm audit --audit-level=high therefore fails. Do not report the dependency tree as vulnerability-free. Keep the audit gate enabled and re-evaluate after an official patched release is available. Do not use a speculative override or unreviewed fork to force a green result.

A previous audit on 2026-11-17 reported zero known vulnerabilities before the advisory was reflected in the repository's audit result. That earlier result was point-in-time only and is superseded by the current finding.

## Upgrade workflow
```bash
npm outdated
npm audit
npm update
npm ci
npm run lint
npm test
npm run docs:check
npm run build
npm audit --audit-level=high
```

Keep package metadata and lockfile changes in the same review. Inspect resolved package versions in package-lock.json. Test compatibility against every maintained Node.js version in the CI matrix.
