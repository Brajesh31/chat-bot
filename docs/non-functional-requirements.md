# 🧭 Non-Functional Requirements

## Quality attributes

| Attribute | Current expectation | Evidence / limit |
|---|---|---|
| Maintainability | Small components and clear source boundaries | Code review |
| Reproducibility | npm lockfile and documented install/build commands | CI |
| Security | No client-side provider secrets; text rendering; dependency review | Code review and automated checks |
| Privacy | Chat text remains in current page memory | Source review; external font requests remain |
| Accessibility | Keyboard-operable native controls, visible focus, polite log, reduced motion | Requires manual browser/AT review |
| Responsiveness | Layout adapts to narrow viewport | CSS plus manual browser check |
| Performance | Keep runtime and dependencies small; measure before optimizing | No formal benchmark |
| Compatibility | Modern browsers are intended | Exact minimum versions are not certified |
| Availability | Static hosting can serve the generated bundle | No deployment or uptime SLO verified |

## Constraints

The app is synchronous and browser-only. There is no service-level objective, production monitoring, database backup, authentication, or remote provider to operate.

## Acceptance

Non-functional changes require measurable or observable criteria. Do not claim WCAG conformance, security certification, performance targets, or browser certification without a documented assessment and evidence tied to a commit.
