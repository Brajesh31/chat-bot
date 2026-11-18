# 🗂️ Complete Project Structure

The tree below is generated from the staged Git tree for this repository update. It lists tracked files in the current snapshot, not a proposed target layout.

```text
chat-bot/
├── .github/
│   ├── DISCUSSION_TEMPLATE/
│   │   └── ideas.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── accessibility.yml
│   │   ├── bug_report.yml
│   │   ├── config.yml
│   │   ├── documentation.yml
│   │   ├── feature_request.yml
│   │   ├── performance_issue.yml
│   │   ├── question.yml
│   │   └── security_report.yml
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── codeql.yml
│   │   ├── dependency-review.yml
│   │   ├── docs-validation.yml
│   │   ├── gitleaks.yml
│   │   ├── markdown-lint.yml
│   │   └── update-readme.yml
│   ├── dependabot.yml
│   ├── dependency-review-config.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── assets/
│   │   ├── chat-interaction-states.svg
│   │   ├── chat-ui-preview.svg
│   │   ├── chatbot-overview.svg
│   │   ├── logo.svg
│   │   ├── project-banner.svg
│   │   ├── README.md
│   │   ├── response-rules-flow.svg
│   │   ├── responsive-layout.svg
│   │   └── social-preview.svg
│   ├── diagrams/
│   │   ├── CHAT_UI_STATES.md
│   │   ├── COMPONENTS.md
│   │   ├── DEPLOYMENT.md
│   │   ├── DFD_LEVEL_0.md
│   │   ├── DFD_LEVEL_1.md
│   │   ├── DFD_LEVEL_2.md
│   │   ├── ERROR_FLOW.md
│   │   ├── FUTURE_AI_BOUNDARY.md
│   │   ├── INCIDENT_RESPONSE.md
│   │   ├── INTEGRATION_BOUNDARY.md
│   │   ├── MESSAGE_LIFECYCLE.md
│   │   ├── MODULE_DEPENDENCIES.md
│   │   ├── README.md
│   │   ├── RESPONSE_DECISION.md
│   │   ├── SYSTEM_CONTEXT.md
│   │   ├── TEST_PIPELINE.md
│   │   ├── UML_ACTIVITY.md
│   │   ├── UML_CLASS.md
│   │   ├── UML_COMPONENT.md
│   │   ├── UML_DEPLOYMENT.md
│   │   ├── UML_SEQUENCE.md
│   │   └── UML_USE_CASE.md
│   ├── examples/
│   │   ├── prompt-regression-cases.json
│   │   ├── README.md
│   │   ├── response-contract.json
│   │   └── sample-prompts.md
│   ├── operations/
│   │   ├── BACKUP_RECOVERY.md
│   │   ├── INCIDENT_RESPONSE.md
│   │   ├── MONITORING.md
│   │   ├── OPERATIONS.md
│   │   ├── README.md
│   │   └── RELEASE_PROCESS.md
│   ├── security/
│   │   ├── PRIVACY.md
│   │   ├── README.md
│   │   ├── SECURITY_CHECKLIST.md
│   │   └── THREAT_MODEL.md
│   ├── templates/
│   │   ├── accessibility-audit-template.md
│   │   ├── accessibility-audit.md
│   │   ├── accessibility-review.md
│   │   ├── ai-provider-integration-proposal.md
│   │   ├── api-contract.md
│   │   ├── api-documentation-template.md
│   │   ├── architecture-decision-record.md
│   │   ├── architecture-template.md
│   │   ├── browser-compatibility-report.md
│   │   ├── bug-report.md
│   │   ├── bug-triage.md
│   │   ├── change-proposal.md
│   │   ├── chatbot-safety-review.md
│   │   ├── code-review.md
│   │   ├── conversation-privacy-review.md
│   │   ├── data-retention-plan.md
│   │   ├── database-schema-template.md
│   │   ├── demo-script.md
│   │   ├── dependency-security-review.md
│   │   ├── dependency-update.md
│   │   ├── deployment-checklist.md
│   │   ├── documentation-change.md
│   │   ├── feature-acceptance-review.md
│   │   ├── feature-proposal.md
│   │   ├── incident-report.md
│   │   ├── lesson-plan.md
│   │   ├── maintenance-checklist.md
│   │   ├── meeting-notes.md
│   │   ├── migration-plan.md
│   │   ├── performance-measurement.md
│   │   ├── performance-review.md
│   │   ├── post-deployment-verification.md
│   │   ├── postmortem.md
│   │   ├── privacy-review.md
│   │   ├── project-status-report.md
│   │   ├── prompt-evaluation.md
│   │   ├── README.md
│   │   ├── release-checklist.md
│   │   ├── release-notes.md
│   │   ├── response-rule-change.md
│   │   ├── risk-assessment.md
│   │   ├── rollback-plan.md
│   │   ├── security-audit.md
│   │   ├── security-review.md
│   │   ├── support-incident-triage.md
│   │   ├── support-response.md
│   │   ├── test-case.md
│   │   ├── test-plan.md
│   │   ├── test-report.md
│   │   ├── threat-assessment-template.md
│   │   ├── tutorial-review.md
│   │   ├── user-feedback-analysis.md
│   │   └── user-story.md
│   ├── testing/
│   │   ├── CI.md
│   │   ├── QUALITY_GATES.md
│   │   ├── README.md
│   │   ├── TEST_CASES.md
│   │   └── TESTING_STRATEGY.md
│   ├── accessibility-guidelines.md
│   ├── accessibility-testing.md
│   ├── ACCESSIBILITY.md
│   ├── accessible-components.md
│   ├── accessible-forms.md
│   ├── acknowledgements.md
│   ├── animation-guidelines.md
│   ├── api-reference.md
│   ├── api.md
│   ├── application-lifecycle.md
│   ├── architecture-decisions.md
│   ├── architecture.md
│   ├── audit-logging.md
│   ├── branching-strategy.md
│   ├── branding-guidelines.md
│   ├── BROWSER_VERIFICATION.md
│   ├── bug-reporting.md
│   ├── building.md
│   ├── CHANGE_IMPACT_MATRIX.md
│   ├── ci-cd.md
│   ├── code-standards.md
│   ├── coding-guidelines.md
│   ├── color-contrast.md
│   ├── color-system.md
│   ├── commands-reference.md
│   ├── COMPATIBILITY.md
│   ├── compliance.md
│   ├── component-architecture.md
│   ├── CONFIGURATION.md
│   ├── consent-management.md
│   ├── CONTENT_LICENSE.md
│   ├── contributor-guide.md
│   ├── conversation-flow.md
│   ├── cookie-policy.md
│   ├── data-deletion.md
│   ├── data-flow.md
│   ├── data-privacy.md
│   ├── data-protection.md
│   ├── data-retention.md
│   ├── data-validation.md
│   ├── database.md
│   ├── debugging.md
│   ├── DECISION_LOG.md
│   ├── DEPENDABOT_REVIEW_2026-11-18.md
│   ├── DEPENDENCIES.md
│   ├── dependency-security.md
│   ├── deployment.md
│   ├── deprecation-policy.md
│   ├── design-patterns.md
│   ├── design-system.md
│   ├── design-tokens.md
│   ├── developer-guide.md
│   ├── development-workflow.md
│   ├── development.md
│   ├── disaster-recovery.md
│   ├── e2e-testing.md
│   ├── EDUCATOR_GUIDE.md
│   ├── environment-setup.md
│   ├── environment-variables.md
│   ├── ERROR_HANDLING.md
│   ├── external-dependencies.md
│   ├── faq.md
│   ├── features.md
│   ├── functional-requirements.md
│   ├── future-scope.md
│   ├── getting-started.md
│   ├── github-actions.md
│   ├── GLOSSARY.md
│   ├── GOVERNANCE.md
│   ├── health-checks.md
│   ├── infrastructure.md
│   ├── INPUT_FORMATS.md
│   ├── installation.md
│   ├── integration-testing.md
│   ├── integrations.md
│   ├── internationalization.md
│   ├── keyboard-navigation.md
│   ├── known-issues.md
│   ├── LEARNING_PATH.md
│   ├── legal-considerations.md
│   ├── local-development.md
│   ├── logging.md
│   ├── maintainer-guide.md
│   ├── MAINTENANCE.md
│   ├── markdown-style.md
│   ├── migration-guide.md
│   ├── module-documentation.md
│   ├── navigation-structure.md
│   ├── non-functional-requirements.md
│   ├── observability.md
│   ├── page-documentation.md
│   ├── performance-testing.md
│   ├── PERFORMANCE.md
│   ├── privacy.md
│   ├── problem-statement.md
│   ├── PRODUCT_BEHAVIOR.md
│   ├── PRODUCT_REQUIREMENTS.md
│   ├── product-overview.md
│   ├── PROJECT_STRUCTURE.md
│   ├── project-background.md
│   ├── project-objectives.md
│   ├── project-status.md
│   ├── qa.md
│   ├── README.md
│   ├── references.md
│   ├── RELEASE_CHECKLIST.md
│   ├── release-management.md
│   ├── REPOSITORY_COMPLETION.md
│   ├── repository-presentation.md
│   ├── REPRODUCIBILITY.md
│   ├── RESPONSE_CATALOG.md
│   ├── RESPONSE_RULES.md
│   ├── responsive-design.md
│   ├── RISK_REGISTER.md
│   ├── rollback.md
│   ├── running-locally.md
│   ├── scalability.md
│   ├── scope-and-limitations.md
│   ├── screen-reader-support.md
│   ├── secret-management.md
│   ├── security-architecture.md
│   ├── security-best-practices.md
│   ├── security-risk-register.md
│   ├── security-testing.md
│   ├── security.md
│   ├── solution-overview.md
│   ├── SUPPORT_MATRIX.md
│   ├── system-design.md
│   ├── technical-debt.md
│   ├── technical-overview.md
│   ├── technology-stack.md
│   ├── test-coverage.md
│   ├── test-strategy.md
│   ├── testing.md
│   ├── third-party-services.md
│   ├── troubleshooting.md
│   ├── typography.md
│   ├── ui-ux-guidelines.md
│   ├── unit-testing.md
│   ├── upgrade-guide.md
│   ├── use-cases.md
│   ├── USER_GUIDE.md
│   ├── USER_STORIES.md
│   ├── user-journeys.md
│   ├── user-personas.md
│   ├── UX_SPECIFICATION.md
│   ├── VERSIONING.md
│   ├── visual-regression-testing.md
│   ├── vulnerability-management.md
│   └── wcag-compliance.md
├── public/
│   └── chatbot.svg
├── scripts/
│   ├── README.md
│   ├── validate-docs.mjs
│   └── validate-markdown.mjs
├── src/
│   ├── components/
│   │   ├── ChatbotIcon.jsx
│   │   ├── ChatbotResponse.js
│   │   ├── ChatForm.jsx
│   │   └── ChatMessage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── chatbot-enhancements.css
│   ├── index.css
│   └── main.jsx
├── tests/
│   ├── ChatbotResponse.test.js
│   └── repository-integrity.test.js
├── .editorconfig
├── .env.example
├── .gitattributes
├── .gitignore
├── .gitleaks.toml
├── .markdownlint-cli2.jsonc
├── .nvmrc
├── AUTHORS.md
├── CHANGELOG.md
├── CITATION.cff
├── CODE_OF_CONDUCT.md
├── CODEOWNERS
├── CONTRIBUTING.md
├── eslint.config.js
├── GOVERNANCE.md
├── index.html
├── LICENSE
├── MAINTAINERS.md
├── package-lock.json
├── package.json
├── README.md
├── ROADMAP.md
├── SECURITY.md
├── SUPPORT.md
└── vite.config.js
```

## 📌 Important source responsibilities

| File | Responsibility |
|---|---|
| `index.html` | HTML shell, metadata, root mount and external font references |
| `src/main.jsx` | React entry point |
| `src/App.jsx` | Main UI, chat history state, visibility controls and scroll behavior |
| `src/components/ChatForm.jsx` | Input trimming, blank guard, local reply call and state update |
| `src/components/ChatbotResponse.js` | Ordered local phrase-matching rules and prewritten responses |
| `src/components/ChatMessage.jsx` | One user or bot-role message view |
| `src/components/ChatbotIcon.jsx` | Reusable decorative SVG icon |
| `src/index.css` | Base page, panel, message and form styles |
| `src/App.css` | Application container and popup sizing |
| `src/chatbot-enhancements.css` | Header actions, focus, mobile layout and reduced-motion refinements |
| `vite.config.js` | Vite and React plugin configuration |
| `eslint.config.js` | ESLint configuration |
| `package.json` | npm scripts and package declarations |
| `package-lock.json` | Exact resolved npm dependency tree |
| `.nvmrc` | Preferred local Node.js version |
| `scripts/validate-docs.mjs` | Local links, directory-index coverage, JSON examples and SVG validation |
| `scripts/validate-markdown.mjs` | Markdown fence and Mermaid declaration checks |
| `tests/ChatbotResponse.test.js` | Response-rule regression suite |
| `tests/repository-integrity.test.js` | Manifest, documentation and repository-contract tests |

## 📁 Directory responsibilities

- **.github/** contains issue forms, pull-request guidance, Dependabot configuration, dependency review and workflow automation.
- **docs/** contains product, requirements, architecture, UX, development, testing, security, privacy, operations, governance, diagrams, examples, and reusable templates.
- **docs/assets/** contains the project logo, banner, social-preview source, and original SVG wireframes/illustrations. These assets are not browser screenshots.
- **docs/diagrams/** contains editable Mermaid context, DFD, UML, lifecycle, state, response, dependency, deployment, and integration diagrams.
- **docs/examples/** contains synthetic prompt fixtures and non-runtime examples.
- **docs/operations/** contains release, monitoring, recovery and incident guidance.
- **docs/security/** contains threat model, privacy, and security review materials.
- **docs/templates/** contains reusable engineering, QA, security, privacy, accessibility, release and maintenance templates.
- **docs/testing/** contains test strategy, quality gates, test cases and CI documentation.
- **public/** contains static browser-facing assets such as the favicon.
- **scripts/** contains repository validation utilities.
- **src/** contains the React UI and stylesheet modules.
- **tests/** contains Node.js unit and repository-integrity tests.

## 🔄 Architecture and runtime boundaries

The runtime is a browser-only React application. There is no backend, database, HTTP API, authentication layer, persistent transcript store, or AI provider. API, database, integration, and authentication documentation describe those absences and the controls that would be required if the architecture changed.

## 🧪 Validation commands

```bash
npm run docs:check
node scripts/validate-markdown.mjs
npm run markdown:check
npm test
```

Regenerate the tree whenever tracked files or directories are added, moved, or removed. The repository integrity suite and directory index validator help detect stale documentation references.
