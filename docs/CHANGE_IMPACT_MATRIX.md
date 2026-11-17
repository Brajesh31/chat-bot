# 🧾 Change Impact Matrix

Use this matrix during implementation and review so that a source change does not leave supporting material stale.

| Change area | Required review or update |
|---|---|
| Response phrase or branch | Response rules, catalog, positive/negative/precedence tests, regression fixture |
| Random response array | Deterministic tests, catalog, sample prompts |
| Input validation or length | Input formats, user guide, behavior contract, test cases |
| Chat history state | Architecture, lifecycle diagram, privacy, user guide |
| Clear or minimize behavior | User guide, UX specification, browser verification, accessibility checks |
| CSS layout or breakpoint | UX specification, browser verification, compatibility guidance, visual assets if affected |
| Accessibility labels or live region | Accessibility guide, manual test plan, accessibility issue form |
| External network request | System context, privacy inventory, threat model, configuration, security review |
| Storage or database | Architecture, privacy, retention plan, backup/recovery, security, operations |
| API or AI provider | Future boundary, provider proposal, API contract, credential model, safety/privacy review |
| Dependency update | Package manifest and lockfile, dependency guide, security review, CI evidence |
| Build or deployment config | Deployment guide, deployment diagram, config reference, smoke tests |
| New public capability | README, user guide, requirements, support matrix, tests, roadmap |

## Completion rule

Do not update every document for every change. Update what is materially affected and state why any apparently relevant document did not change. Keep the documentation index and project tree accurate.
