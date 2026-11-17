# 🏛️ Architecture Decision Record

Record a consequential technical decision and its reasoning. Use a new numbered file for each decision. Do not rewrite history when a decision changes; create a superseding record.

## Metadata

- ADR ID:
- Title:
- Status: proposed / accepted / rejected / superseded / deprecated
- Date:
- Decision owner:
- Reviewers:
- Related issue / PR:
- Supersedes / superseded by:

## Context

Describe the problem, current implementation, user or operational need, constraints, and why a decision is required now. Include code paths and observed evidence.

## Decision drivers

Rank simplicity, accessibility, privacy, security, reliability, maintainability, performance, bundle size, and learning value.

## Options considered

| Option | Benefits | Costs / risks | Decision |
|---|---|---|---|
| Option A | | | |
| Option B | | | |
| Keep current behavior | | | |

## Decision

State the selected option precisely. Separate what will be implemented now from future possibilities.

## Architecture impact

Include a Mermaid diagram when a component or data-flow boundary changes. Explain component responsibilities, data entering and leaving each component, trust boundaries, state ownership, failure handling, and build/deploy impact.

For this repository, describe the browser-only architecture accurately. A provider integration proposal must not be recorded as an implemented backend.

## Security, privacy and accessibility

- Does user text leave the browser?
- Are credentials introduced?
- Does the change introduce storage, analytics, cookies, or tracking?
- Are new keyboard, focus, motion, or screen-reader behaviors required?
- What abuse or failure cases need coverage?

## Consequences and verification

**Positive consequences:**

**Negative consequences / accepted trade-offs:**

**Migration or rollback:**

**Tests and manual checks required:**

**Documentation to update:**

## Approval and review

Record reviewer roles, decision date, unresolved objections, and the event that should trigger reassessment.
