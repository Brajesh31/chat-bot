# ⚡ Performance Review

Use this record for an investigation or optimization. Do not state that the app is faster unless comparable measurements support the claim.

## Review metadata

- Change / issue:
- Reviewer:
- Date:
- Commit before / after:
- Target browsers and devices:
- Build environment:
- Measurement tool and version:

## Hypothesis

State the suspected bottleneck, user impact, and metric expected to change. Explain why the proposed optimization should affect that metric.

## Baseline and measurement method

| Metric | Baseline | After change | Method | Sample size |
|---|---:|---:|---|---:|
| Initial load / LCP | | | | |
| Interaction response | | | | |
| JS bundle size | | | | |
| Memory / long session | | | | |
| Layout shift | | | | |

Record network conditions, cache state, viewport, CPU throttling, and whether results were measured locally or in a deployed environment. Do not mix incomparable runs.

## Investigation

- Reproduction:
- Profiling evidence:
- Relevant source paths:
- Root cause confidence:
- Competing explanations:

## Changes and trade-offs

Describe implementation and complexity added. Consider readability, accessibility, bundle size, maintainability, and reduced-motion behavior.

## Results

Separate observed data from interpretation. Include regressions and measurements that did not improve. Note measurement noise and limitations.

## Acceptance decision

- [ ] Evidence supports the stated improvement.
- [ ] No functional regression detected.
- [ ] Accessibility behavior preserved.
- [ ] Build and tests pass.
- [ ] Documentation reflects any operational change.

Owner, follow-up measurement, and rollback trigger:
