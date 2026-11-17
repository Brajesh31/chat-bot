# 🏗️ Architecture Description Template

## Metadata

- System / feature:
- Author:
- Reviewer:
- Date:
- Commit:
- Related ADR:

## Purpose and scope

Describe the problem, user need, system boundary, and explicit exclusions.

## Current architecture

List entry points, modules, state ownership, data flow, third-party resources, build path, and deployment assumptions.

## Diagram

Add a Mermaid diagram that reflects the actual implementation. Label proposed components clearly and keep non-existent services out of current-state diagrams.

## Interfaces and contracts

Describe internal function interfaces, data shapes, event boundaries, and error behavior. State when no HTTP API or database exists.

## Security and privacy

Identify untrusted input, secrets, external requests, retention, and trust boundaries.

## Quality attributes

Discuss maintainability, accessibility, responsiveness, performance, and compatibility.

## Operations

Deployment, monitoring, support ownership, release, rollback, and recovery.

## Decisions and trade-offs

Options, selected design, consequences, and remaining limitations.

## Verification

Tests, manual checks, exact commit, and evidence links.
