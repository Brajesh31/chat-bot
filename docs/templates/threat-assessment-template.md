# 🛡️ Threat Assessment Template

## Assessment metadata

- Feature / component:
- Assessor:
- Date:
- Commit:
- Reviewers:
- Status:

## System and data flow

Describe entry points, assets, data stores, external resources, trust boundaries, and actors. Include a current-state Mermaid diagram.

## Threat enumeration

| Threat | Asset | Entry point | Likelihood | Impact | Existing control | Gap |
|---|---|---|---|---|---|---|

Consider spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege where applicable.

## Privacy and abuse

Identify sensitive inputs, data minimization, logging, retention, abuse, prompt manipulation, and user deception concerns.

## Mitigations

Prioritized controls, owner, due date, acceptance evidence, and residual risk.

## Applicability notes

For the current browser-only app, server authorization, database access, and model prompt injection into a remote provider are not implemented attack surfaces. Reassess if architecture changes.

## Approval

Decision-maker, accepted risks, review date, and follow-up issue references.
