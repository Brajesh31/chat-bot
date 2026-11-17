# 📦 Dependencies

## Runtime packages
- `react` and `react-dom`: browser UI and React DOM rendering.

## Development packages
- `vite` and `@vitejs/plugin-react`: local development server and production bundling.
- ESLint and React plugins: static analysis and React-specific rules.
- Node.js built-in `node:test`: automated tests without an additional test framework dependency.

The test runner is built into supported Node.js releases. Vitest, jsdom, and Testing Library are not used by the current project.

## Dependency policy
1. Use npm and preserve `package-lock.json`.
2. Prefer maintained dependencies with a clear purpose.
3. Review compatibility, ownership, release history, and license before adoption.
4. Run `npm ci`, lint, tests, and build after upgrades.
5. Review Dependabot pull requests rather than merging blindly.
6. Run `npm audit --audit-level=high` before releases and resolve actionable advisories.
7. Do not use `npm audit fix --force` without reviewing breaking changes and rerunning the full quality suite.

## Security audit status
On 2026-11-17, a non-breaking `npm audit fix` refreshed the committed lockfile. The resulting audit reported **0 known vulnerabilities**. The updated dependency tree was validated with ESLint, the full Node.js test suite, the high-severity audit gate, and the Vite production build. This is a point-in-time audit result, not a guarantee that future advisories cannot appear.

## Upgrade workflow
```bash
npm outdated
npm audit
npm update
npm ci
npm run lint
npm test
npm audit --audit-level=high
npm run build
```

Keep package metadata and lockfile changes in the same review. Inspect the resolved package versions in `package-lock.json`.
