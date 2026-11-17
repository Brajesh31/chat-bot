# 📊 Test Coverage and Verification Scope

## Current automated coverage

The latest recorded successful test baseline had 58 Node.js tests after the documentation validation assertions were added. This number must be rechecked on the current commit before being used as a live badge or release claim.

Automated tests cover:
- Local phrase matching.
- Positive and negative near-matches.
- Rule precedence.
- Controlled random response selection.
- Browser date/time output shape.
- Documentation links and asset metadata.
- Manifest/lockfile alignment.

## Not covered

- React component mounting.
- Browser interactions as automated E2E.
- Screen-reader behavior.
- Visual screenshot diffs.
- Formal WCAG conformance.
- Backend, API, or database behavior.

## Coverage percentage

No coverage instrumentation tool is configured. Do not publish a line/branch coverage percentage without a repeatable coverage run. A test count is not a coverage percentage.

## Current branch verification

The dependency audit is known to fail on the high-severity picomatch advisory. Keep that result separate from test counts and build outcomes.
