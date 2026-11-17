# 🚦 Engineering Quality Gates

## Required automated checks

- [ ] Focused scope and observable acceptance criteria.
- [ ] npm ci succeeds from the committed lockfile.
- [ ] ESLint passes.
- [ ] All automated Node.js tests pass.
- [ ] npm audit --audit-level=high reviewed and no unresolved high-severity issue remains without an approved exception.
- [ ] Production build succeeds.
- [ ] Internal Markdown links and repository integrity checks pass.
- [ ] No secrets, private transcripts, or generated build output are committed.

## Required manual checks for UI changes

- [ ] Main interaction works in a real browser.
- [ ] Keyboard operation and visible focus are checked.
- [ ] Narrow viewport and 200% zoom are checked.
- [ ] Reduced-motion preference is checked.
- [ ] Screen-reader review is performed where the change affects announcements or semantics.
- [ ] Browser console is reviewed.

## Change-specific review

- Response rule changes require positive, negative, ambiguous, and precedence tests.
- Data-flow changes require privacy and security review.
- Dependency changes require lockfile, license, compatibility, and advisory review.
- Deployment changes require a deployment and rollback plan.

## Evidence and exceptions

CI provides automated evidence for lint, tests, audit, and build only. Manual accessibility and live deployment checks must be reported separately. Record any exception with the reason, approver, owner, and expiry/review date.
