# ⚠️ Risk Register

The entries below are qualitative starting points based on the current implementation. Reassess likelihood and impact after material code, dependency, or architecture changes.

| ID | Risk | Likelihood | Impact | Current mitigation / action |
|---|---|---|---|---|
| R-01 | Visitors mistake canned replies for AI | Medium | Medium | Visible local-demo disclosure and transparent response copy |
| R-02 | Substring matching causes false positives | Medium | Low | Word boundaries for selected intents and negative regression tests |
| R-03 | Future provider secret exposed in Vite bundle | Medium if integration is added | High | Server-side credentials only; client VITE_ variables are public |
| R-04 | In-memory message list grows in a long session | Low | Low | Measure before bounding or virtualizing |
| R-05 | External font request discloses browser request metadata | Medium | Low | Document font host and consider self-hosting after license review |
| R-06 | CI workflow drifts from package scripts | Medium | Medium | Keep docs and commands aligned; verify the pipeline |
| R-07 | UI accessibility issue is missed by Node-only tests | Medium | Medium | Manual browser and assistive-technology verification |
| R-08 | Static build succeeds but deployed site is misconfigured | Medium | Medium | Post-deployment verification and rollback record |\n| R-09 | ReDoS advisory in transitive picomatch build dependency | High advisory; app reachability limited by current use | Medium for maintainer build process | Keep full npm audit blocking, avoid user-controlled glob patterns, and wait for official patched release |

## Risk ownership

Assign an owner, review date, and treatment to any risk accepted for release. A risk rating without evidence is a working assumption, not a measured probability.

## Escalation

Credential exposure, malicious source changes, or confirmed sensitive-data disclosure should follow SECURITY.md and incident response. Do not disclose exploit details in a public issue before coordination.

## Active dependency advisory

The current package lock resolves picomatch 4.0.7 in Vite's development/build dependency tree. GitHub advisory [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) identifies the version as vulnerable. No patched version was listed in the advisory when checked on 2026-11-18. The application does not pass chat prompts to this glob-matching dependency, but that does not remove the build-tool risk. Track remediation in [dependency guidance](DEPENDENCIES.md) and keep the high-severity audit gate enabled.
