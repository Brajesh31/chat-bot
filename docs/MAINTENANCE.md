# 🧰 Maintenance Handbook

## Routine maintenance

### Every change
- Keep changes focused and preserve unrelated application files.
- Add tests for new behavior and regressions.
- Run npm run docs:check for local links and visual assets.
- Update docs when behavior, dependencies, privacy, configuration, or deployment changes.
- Keep Mermaid diagrams aligned with the implementation.
- Do not add fake screenshots, fabricated metrics, or placeholder claims.

### Dependency maintenance
- Review Dependabot pull requests and upstream release notes.
- Check compatibility with Node.js 22, 24, and 26.
- Keep package.json and package-lock.json synchronized.
- Run npm ci, lint, tests, docs validation, Markdown structural validation, markdownlint, npm audit, and the production build.
- Review Gitleaks and dependency-review workflow results.
- Record why an override or advisory exception is necessary and when it will be reviewed.

### Release maintenance
- Verify CI on the exact release commit.
- Inspect generated dist output locally.
- Record the artifact and deployment target.
- Run the post-deployment smoke checklist when a live host exists.
- Keep the changelog and known limitations current.

## Repository hygiene

Do not commit local environment files, private transcripts, secrets, node_modules, dist, test output, or temporary archives. Check ignored files before staging. Remove stale references only after confirming no active docs or workflows depend on them.

## Ownership and escalation

Assign an owner to critical maintenance items. Security reports should follow SECURITY.md. Production incidents should use the incident response procedure and incident template.

## Maintenance cadence

Review dependencies monthly or when advisories are published, verify docs and links before a release, and revisit architecture/privacy documentation whenever data flow changes. The dates and frequency are suggested maintenance practices, not evidence of completed reviews.
