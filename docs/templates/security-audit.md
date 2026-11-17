# 🔐 Security Audit Record

## Audit metadata

- Scope:
- Exact commit:
- Reviewer / auditor:
- Date:
- Environment:
- Audit type: self-review / external assessment / automated scan
- Status: planned / in progress / completed

## Assets and trust boundaries

List source, dependencies, build artifacts, user input, third-party requests, secrets, GitHub workflows, and any future services. State which assets are in scope and excluded.

## Methods

- [ ] Source review
- [ ] Threat model review
- [ ] CodeQL
- [ ] Dependency audit
- [ ] Secret scanning
- [ ] Workflow permission review
- [ ] Browser network inspection
- [ ] Manual security tests
- [ ] External penetration test, if actually performed

Do not check a method that was not run.

## Findings

| ID | Severity | Component | Evidence | Exploitability | Recommendation | Owner |
|---|---|---|---|---|---|---|

## Limitations

The current app has no backend, database, authentication, or model API. Do not invent server-side controls or imply that they were tested. Record dependency findings even when they are development-only.

## Remediation and retest

For each finding, record fix commit, test evidence, residual risk, and closure approval. Rotating a leaked credential is required even if the secret is subsequently removed from source history.

## Conclusion

State the actual scope, findings, exclusions, and whether this was a formal audit or a maintainer self-review.
