# ⚙️ Continuous Integration

The CI workflow uses `npm ci`, runs ESLint, executes the Node.js built-in test suite, checks high-severity dependency advisories with `npm audit --audit-level=high`, and builds the static bundle on Node.js 20 and 22.

Pull requests should pass the configured checks. A green run proves only the workflow checks for that exact commit, not production deployment, full browser compatibility, or a complete accessibility audit.
