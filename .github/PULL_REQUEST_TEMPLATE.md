# 🔍 Pull Request

## 🎯 Summary

Describe the user problem or maintenance need addressed by this pull request. Link the related issue, proposal, or decision record.

**Related issue(s):** Closes #

## 🧩 Change type

- [ ] Feature
- [ ] Bug fix
- [ ] Refactor with no intended behavior change
- [ ] Documentation
- [ ] Tests
- [ ] Security / dependency update
- [ ] CI / automation
- [ ] Maintenance

## 🛠️ Implementation details

Describe the files and modules changed, important decisions, user-visible behavior, and any compatibility impact.

For ChatBuddy response-rule changes, explain first-match precedence and the prompt cases affected. For UI changes, identify states, controls, and responsive behavior changed.

## 🧪 Automated verification

Record actual results and link the exact workflow run. Do not mark a check as passing unless it was run.

| Check | Result | Evidence / notes |
|---|---|---|
| `npm ci` | | |
| `npm run lint` | | |
| `npm test` | | |
| `npm run docs:check` | | |
| `node scripts/validate-markdown.mjs` | | |
| `npm run markdown:check` | | |
| `npm run build` | | |
| `npm audit --audit-level=high` | | |

**CI run(s):**

**Commit SHA tested:**

## 🖥️ Manual verification

For UI changes, record browser, version, operating system, viewport, test steps, and observed results. Include genuine screenshots only when captured from the actual application.

- [ ] Desktop browser smoke check
- [ ] Narrow viewport / mobile layout
- [ ] Keyboard-only operation
- [ ] Screen-reader check where interaction semantics changed
- [ ] Focus visibility and zoom
- [ ] Reduced-motion preference
- [ ] Console and network inspection

**Manual results or reason not applicable:**

## 🔐 Security and privacy impact

- [ ] No secrets, private transcripts, or personal data added.
- [ ] Visitor content remains rendered as text.
- [ ] No privileged credentials are exposed through Vite client variables.
- [ ] New dependencies, external services, and network requests are documented.
- [ ] Data-flow, retention, deletion, and user-notice implications are considered.
- [ ] Security findings and unresolved risks are disclosed.

**Security / privacy notes:**

## ♿ Accessibility and UX impact

Describe changes to labels, roles, keyboard behavior, focus, live announcements, contrast, reflow, and motion. State which checks were actually performed.

## 📚 Documentation and assets

- [ ] README updated where relevant.
- [ ] Documentation hub and directory indexes updated.
- [ ] Project structure tree updated.
- [ ] Mermaid diagrams updated where architecture or flow changed.
- [ ] Examples and regression fixtures updated.
- [ ] Reusable templates updated where relevant.
- [ ] SVG images include title and description.
- [ ] Illustrations are not misrepresented as application screenshots.

## ⚠️ Risks, limitations and rollback

List known issues, migration or deployment considerations, and how to revert the change safely.

## ✅ Final checklist

- [ ] Scope is focused and unrelated files are preserved.
- [ ] Acceptance criteria are testable.
- [ ] Tests and checks reflect the actual implementation.
- [ ] Dependency audit status is reported honestly.
- [ ] No fake features, metrics, passing badges, or deployment claims are introduced.
- [ ] The pull request is ready for review.

## 📝 Reviewer notes

Reviewers should assess correctness, maintainability, tests, documentation, privacy, security, accessibility, and residual risk. A successful build alone does not establish production readiness or formal accessibility conformance.
