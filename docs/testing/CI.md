# ⚙️ Continuous Integration

## Workflow behavior

The CI workflow installs the exact dependency tree with npm ci, runs ESLint, executes the Node.js built-in test suite, validates Markdown/JSON/SVG documentation assets, builds the static application using Vite, and checks high-severity dependency advisories with npm audit. The configured Node.js matrix covers versions 22, 24, and 26.

Additional workflows run CodeQL JavaScript analysis, Gitleaks secret scanning, documentation-only validation, and dependency review for relevant pull requests.

## What a green run means

A successful run establishes that the configured commands completed successfully for the exact commit tested by that workflow. The Node-based tests cover response rules and repository integrity. The docs validator checks local links, examples, and SVG metadata.

## What a green run does not mean

- It is not a browser end-to-end test.
- It does not establish full support across browser versions.
- It does not certify screen-reader or WCAG conformance.
- It does not prove that a live deployment succeeded.
- A successful secret scan does not prove that no secret was ever exposed outside the scan's scope.
- A clean npm audit result does not prove the application is free of every security issue.

## Current dependency audit finding

The npm audit gate currently identifies picomatch 4.0.7 in the Vite development/build dependency tree. See DEPENDENCIES.md. Do not disable this gate or claim the dependency issue is fixed without verified remediation.

## Pull request expectations

Keep changes focused, add regression tests, update docs, and inspect generated output. Link exact workflow runs and the commit in the pull request. If a manual browser check remains outstanding, state that explicitly.
