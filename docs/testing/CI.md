# ⚙️ Continuous Integration

## Workflow behavior

The CI workflow installs the exact dependency tree with npm ci, runs ESLint, executes the Node.js built-in test suite, checks high-severity dependency advisories with npm audit, and builds the static application using Vite. The configured Node.js matrix covers versions 20 and 22.

## What a green run means

A successful run establishes that the configured commands completed successfully for the commit tested by that workflow. The Node-based tests include response-rule behavior and repository-integrity checks.

## What a green run does not mean

- It is not a browser end-to-end test.
- It does not establish full support across browser versions.
- It does not certify screen-reader or WCAG conformance.
- It does not prove that a live deployment succeeded.
- A clean npm audit result does not prove the application is free of every security issue.

## Pull request expectations

Keep changes focused, add regression tests, update docs, and inspect generated output. Link the exact workflow run and commit in the pull request. If a manual browser check remains outstanding, state that explicitly.

## Failure response

Open the failed job, identify the first failing command, reproduce locally, and fix the cause rather than masking the check. Rerun the required commands on the updated commit.
