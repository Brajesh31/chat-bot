# 🧱 Technical Debt Register

| ID | Area | Debt / limitation | Risk | Proposed treatment |
|---|---|---|---|---|
| TD-01 | Response rules | Long ordered conditional chain with mixed matching approaches | Behavior overlap and maintainability | Consider structured rules after behavior is fully characterized |
| TD-02 | Testing | No browser E2E or component test framework | UI regressions may escape Node tests | Add a stable browser suite when justified |
| TD-03 | Accessibility | Manual screen-reader and contrast review incomplete | Some barriers may remain undetected | Complete and record manual evaluation |
| TD-04 | Message history | In-memory history can grow during long sessions | Memory and rendering costs | Measure before adding limits or virtualization |
| TD-05 | Fonts | External Google Fonts request | External resource dependency | Review font license and self-host option |
| TD-06 | Dependency chain | picomatch 4.0.7 advisory | Build-tool supply-chain risk | Track official patched release and verify upgrade |

## Prioritization

Prioritize security and user-impacting defects over cosmetic refactors. Assign owners and dates to accepted work. A debt item should describe an observable limitation, not a vague desire to rewrite the project.
