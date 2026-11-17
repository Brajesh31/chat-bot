# 🧾 Audit Logging Status

## Current implementation

The browser application does not create a durable audit trail, event log, user activity history, or server-side request log. It stores submitted messages only in React state for display during the current page session.

GitHub Actions and Git commit history provide repository change and workflow records. They are not an application audit log.

## Privacy implications

Do not add chat prompt logging or session replay by default. User-entered text can contain sensitive information. Any new logging must have a purpose, field allowlist, retention period, access policy, redaction, user notice, and privacy review.

## Future service requirements

If an authenticated server or administrative action is introduced, define events, actor identity, timestamp format, correlation IDs, immutable storage requirements, access, retention, export, alerting, and incident response. Avoid logging secrets or full transcript bodies without a documented necessity.

## Current status

Application audit logging: **not implemented**.
