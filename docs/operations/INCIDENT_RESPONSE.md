# 🚨 Incident Response Procedure

## Severity guidance

| Level | Example | Initial response |
|---|---|---|
| Critical | Credential exposure, malicious release, confirmed serious data disclosure | Contain immediately and notify repository owner |
| High | Exploitable defect or major service unavailability | Prioritize mitigation and verify scope |
| Medium | Significant defect with a working alternative | Track and schedule a fix |
| Low | Cosmetic or limited defect | Record and handle through normal maintenance |

Severity depends on impact and exploitability. These examples are guidance, not an automated classification.

## Response procedure

1. Record incident time, affected commit, release/deployment, symptoms, and reporter.
2. Assign an incident owner and establish a trusted communication channel.
3. Contain the issue. Revoke exposed credentials if any exist, and pause a dangerous release.
4. Preserve sanitized evidence and identify affected assets and data flows.
5. Determine confirmed impact separately from hypotheses.
6. Prepare and verify a fix or rollback.
7. Confirm recovery with smoke tests and record remaining risk.
8. Publish an appropriate factual update.
9. Complete a blameless postmortem with tracked owners and due dates.

## Privacy and security

Do not copy private conversation content into public reports. Remove secrets from logs and attachments. Report vulnerabilities privately through the process in SECURITY.md.

## Closure criteria

The incident owner confirms mitigation, recovery evidence, communications, follow-up issues, and a postmortem decision. A page loading again does not automatically close a security incident.
