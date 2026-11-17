# 📦 Dependency Update Review

## Package and change metadata

- Package:
- Direct or transitive:
- Current version:
- Proposed version:
- Update type: patch / minor / major
- Reason:
- PR / issue:
- Lockfile commit:
- Reviewer:

## Compatibility and provenance

- Supported Node.js versions:
- React / Vite compatibility:
- Browser impact:
- License and provenance:
- Maintainer activity / release notes:
- Breaking changes:
- New transitive dependencies:

## Security assessment

- npm audit output:
- Advisory IDs and severity:
- Is the issue reachable in this app?
- Does the update introduce or remove a risk?
- Are overrides or exceptions proposed? Explain why and when they expire.

Do not treat a clean audit as proof that the package is safe. Record command and date.

## Verification

- [ ] npm ci
- [ ] npm run lint
- [ ] npm test
- [ ] npm audit --audit-level=high
- [ ] npm run build
- [ ] Browser smoke test for user-visible changes
- [ ] Package and lockfile are committed together
- [ ] No unrelated dependency churn

## Rollback and approval

Known-good version / commit, rollback method, residual risk, reviewer decision, and post-merge check:
