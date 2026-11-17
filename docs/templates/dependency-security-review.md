# 📦 Dependency Security Review

## Package change

- Package:
- From version:
- To version:
- Direct / transitive:
- Reason:
- Pull request:
- Reviewer:
- Date:

## Supply-chain review

- [ ] Registry and package identity checked.
- [ ] Maintainer and release activity reviewed.
- [ ] Package source and release notes inspected.
- [ ] License and notices checked.
- [ ] Install scripts and native binaries considered.
- [ ] Transitive dependency impact reviewed.
- [ ] Lockfile diff inspected.
- [ ] Package permissions and network behavior considered.

## Security signals

| Advisory | Severity | Affected range | Reachability / exposure | Mitigation |
|---|---|---|---|---|

Record npm audit command, timestamp, and output. Explain unresolved advisories and any exception. A clean audit is not proof that the package has no vulnerabilities.

## Compatibility

Node/npm support, React/Vite peer ranges, browser impact, build behavior, bundle size, and breaking changes.

## Verification

- [ ] npm ci
- [ ] npm run lint
- [ ] npm test
- [ ] npm audit --audit-level=high
- [ ] npm run build
- [ ] Manual smoke test if runtime behavior changes

## Decision

Approve / hold / reject, decision owner, residual risk, evidence links, and next review date:
