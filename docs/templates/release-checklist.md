# 🚀 Release Readiness Checklist

## Release record

- Version / release name:
- Target date:
- Source branch:
- Exact commit SHA:
- CI run:
- Build artifact:
- Release owner:
- Deployment owner:

## Scope and communication

- [ ] Release scope matches accepted issues and pull requests.
- [ ] Changelog describes user-visible changes.
- [ ] Known limitations and unresolved defects are listed.
- [ ] README and user-facing documentation are current.
- [ ] Response catalog, examples, and diagrams reflect implementation.
- [ ] Release notes have been reviewed.

## Engineering verification

- [ ] Clean dependency install completed with npm ci.
- [ ] ESLint passes.
- [ ] Node test suite passes.
- [ ] Dependency audit has been reviewed.
- [ ] Vite production build succeeds.
- [ ] CI is green for the exact commit.
- [ ] No unrelated or generated build output is committed.
- [ ] Package manifest and lockfile are aligned.

## Product verification

- [ ] Main chat flow is checked in a browser.
- [ ] Blank and whitespace input behavior is checked.
- [ ] Clear and minimize/expand are checked.
- [ ] Mobile and desktop layout are checked.
- [ ] Keyboard and focus are checked.
- [ ] Reduced-motion behavior is checked.
- [ ] Screen-reader review is either completed or explicitly recorded as not run.

## Risk and operations

- [ ] Security and privacy impact is reviewed.
- [ ] New third parties or data flows are documented.
- [ ] Rollback target and owner are recorded.
- [ ] Deployment plan matches the static Vite build.
- [ ] Post-deployment verification owner is assigned.

## Decision

Ready / not ready / conditionally ready. Record blocking issues, accepted risks, decision-maker, and date. A checked box must have evidence.
