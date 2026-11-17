# 🏛️ Architecture Decisions Index

The detailed decision log is maintained in [DECISION_LOG.md](DECISION_LOG.md). This page defines when an architecture decision record is required.

## Decisions requiring an ADR

- New network boundary or API.
- New data storage or persistence behavior.
- Authentication or authorization.
- New state management layer or routing system.
- Major response-rule refactor.
- New external service or model provider.
- Major dependency or hosting change.

## Minimum ADR content

Context, constraints, options, selected decision, consequences, data-flow changes, security/privacy/accessibility impact, tests, migration, rollback, owner, and date.

## Current decisions

- Browser-only local scripted architecture.
- npm and committed lockfile.
- Node built-in tests.
- No model provider or database until a separately reviewed proposal is accepted.

Do not use an ADR as a substitute for tests or implementation evidence.
