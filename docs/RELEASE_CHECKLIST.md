# 🚀 Release Checklist

This short entry point links to the detailed reusable release process and checklist.

## Minimum release gates

- [ ] Scope, acceptance criteria, and changelog reviewed.
- [ ] Clean install completed with npm ci.
- [ ] ESLint passes.
- [ ] Automated Node.js test suite passes.
- [ ] High-severity dependency audit reviewed.
- [ ] Vite production build succeeds.
- [ ] CI is green for the exact commit.
- [ ] Browser accessibility and responsive checks completed for UI changes, or explicitly recorded as not run.
- [ ] Security and privacy impact reviewed.
- [ ] README, relevant docs, examples, and diagrams updated.
- [ ] Generated artifact inspected.
- [ ] Known-good rollback target and owner recorded.
- [ ] Live URL verified only when a deployment is actually in scope.

## Detailed templates and process

- [Detailed release-readiness template](templates/release-checklist.md)
- [Release notes template](templates/release-notes.md)
- [Deployment checklist](templates/deployment-checklist.md)
- [Post-deployment verification](templates/post-deployment-verification.md)
- [Rollback plan](templates/rollback-plan.md)
- [Release process](operations/RELEASE_PROCESS.md)

A passing CI workflow is not proof that a production deployment or a full accessibility audit has occurred.
