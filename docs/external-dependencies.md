# 📦 External Dependencies and Network Resources

## npm packages

The dependency inventory is maintained in package.json and package-lock.json. React and React DOM are runtime dependencies. Vite, its React plugin, ESLint, and related packages are development/build dependencies.

## Browser resources

The page references Google Fonts. The browser may fetch font stylesheets and font files independently of the local chat behavior.

## Supply-chain review

Review package provenance, maintainers, release notes, license, install scripts, peer dependencies, transitive package changes, and advisories. npm audit is useful but does not prove a package or application is completely secure.

## Active advisory

The current dependency tree includes picomatch 4.0.7 through the Vite build dependency chain. GitHub advisory GHSA-fc5q-39xc-vjpf identifies a high-severity ReDoS issue. The issue is tracked in DEPENDENCIES.md. Keep the audit gate enabled and do not force an unverified override.

## Change policy

Keep the lockfile synchronized, verify Node.js 20 and 22 CI behavior, and record any accepted risk with owner and review date.
