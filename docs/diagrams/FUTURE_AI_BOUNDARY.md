# Proposed Future AI Boundary

> Proposal only. These components do not exist in this repository.

```mermaid
flowchart LR
 Browser --> Server[Application server]
 Server --> Guard[Authentication, validation, limits]
 Guard --> Provider[Model provider]
 Provider --> Server
 Server --> Browser
 Server --> Audit[Minimized security events]
```

Consent, server-held secrets, rate limits, abuse controls, retention, timeout, and provider failure behavior must be designed before implementation.
