# 🚨 Incident Response Sequence

## Current maintainer flow

```mermaid
sequenceDiagram
 actor Reporter
 participant Maintainer
 participant GitHub as GitHub repository
 participant CI as GitHub Actions
 participant Host as Static host if configured
 Reporter->>Maintainer: Report issue using safe channel
 Maintainer->>GitHub: Record sanitized issue and affected commit
 Maintainer->>Maintainer: Triage impact and risk
 alt Source or dependency fix
  Maintainer->>GitHub: Commit focused remediation
  GitHub->>CI: Trigger checks
  CI-->>Maintainer: Provide workflow results
 else Rollback required
  Maintainer->>Host: Restore known-good static artifact
  Host-->>Maintainer: Confirm availability
 end
 Maintainer->>Reporter: Share verified status and follow-up
```

## Security reporting

Suspected vulnerabilities must use the private reporting route in SECURITY.md. Do not publish exploit details or secrets in a public issue.

## Applicability

There is no app server, database, or production host configured by this repository workflow. The host participant applies only when the maintainer has a separately configured static deployment.
