# 🛡️ Security Review

## Scope and metadata

- Change / component:
- Commit:
- Reviewer:
- Date:
- Review type: design / code / release / dependency
- Decision: approved / conditional / changes required

## Assets and trust boundaries

Identify user text, browser state, source code, build artifacts, external resource hosts, deployment configuration, and any secrets or administrative capabilities. Draw a data-flow diagram if a new boundary is introduced.

## Threat register

| Threat | Entry point | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|
| Script injection through user text | Chat input and message display | | | Keep text rendering, no HTML injection | |
| Secret exposed in client bundle | Vite environment variables | | | Never put provider secrets in VITE_* variables | |
| Dependency compromise | npm dependency tree | | | Lockfile, audit, review updates | |
| Malicious or deceptive content | User prompt / canned response | | | Limit claims and validate content | |
| Availability failure | Hosting / build | | | Smoke tests and rollback plan | |

Update threats for the actual change. This starter table is not a completed security assessment.

## Review checklist

- [ ] Inputs are validated at the correct boundary.
- [ ] User-controlled content is rendered as text, not executable HTML.
- [ ] No credentials, tokens, or private data are committed.
- [ ] Client-exposed environment variables contain no secrets.
- [ ] Dependencies and lockfile are reviewed.
- [ ] Error output does not expose sensitive information.
- [ ] External requests are documented.
- [ ] Security reporting and rollback owners are known.

## Findings

For each finding record severity, evidence, affected path, exploitability, mitigation, owner, and target date. Distinguish confirmed issues from hypothetical threats.

## Residual risk and approval

List accepted risks and the person authorized to accept them. An npm audit result is not a full application security audit.
