# 🛠️ Technology Stack

| Technology | Role | Where used |
|---|---|---|
| React 18 | Component rendering and UI state | src/ |
| React DOM | Mount React into browser DOM | src/main.jsx |
| Vite 6 | Development server and build tool | vite.config.js |
| JavaScript ES modules | Application logic | src/ and tooling |
| CSS | Layout, colors, responsive and motion rules | src/*.css |
| Node.js built-in test runner | Automated unit/integrity tests | tests/ |
| ESLint | Static analysis | eslint.config.js |
| npm | Package management and scripts | package.json / lockfile |
| GitHub Actions | CI and CodeQL | .github/workflows/ |
| Google Fonts | External font stylesheets | index.html / CSS |

## Runtime versus development dependencies

React and React DOM are runtime UI dependencies. Vite, its React plugin, ESLint, and related packages are development/build dependencies. Node's test runner is supplied by Node.js and does not require another test framework.

## Not in the stack

No backend framework, database engine, model provider SDK, authentication provider, analytics system, or cloud SDK is integrated.

## Version policy

Use the committed lockfile and inspect dependency updates. Verify major/minor upgrades against the supported Node.js CI matrix. The current transitive picomatch advisory is tracked in DEPENDENCIES.md and must be treated as an unresolved build-tool issue.
