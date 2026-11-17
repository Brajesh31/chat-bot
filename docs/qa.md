# ✅ Quality Assurance Plan

## Quality goals

The chat interface should install reproducibly, render its main screen, accept valid plain-text messages, handle empty input predictably, return the documented local response categories, and preserve clear/minimize behavior.

## QA activities

| Area | Method | Current state |
|---|---|---|
| Phrase rules | Node tests | Automated |
| Repository links and assets | Node integrity tests | Automated |
| Static analysis | ESLint | Automated |
| Production bundle | Vite build | Automated |
| Dependency risk | npm audit | Automated but currently flags the tracked picomatch advisory |
| Browser interaction | Manual smoke test | Manual |
| Keyboard and AT | Manual review | Not yet fully assessed |
| Responsive layout | Manual viewport checks | Not yet fully assessed |
| Visual regression | Screenshot comparison | No automated baseline |

## Defect severity

Critical: security compromise or full app failure. High: core chat flow unavailable. Medium: important interaction degraded. Low: cosmetic or narrow edge case.

## Evidence policy

Every release should link the exact CI run and commit. For manual checks, include browser/device and actual results. Never infer that a UI passes merely because the JavaScript build succeeds.
