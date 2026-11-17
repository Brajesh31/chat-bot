# 🧪 Test Plan

## Plan metadata

- Feature / release:
- Author:
- Reviewer:
- Target commit:
- Date:
- Risk level:
- Test owner:

## Objective and scope

Describe what this plan should establish and which components, browsers, commands, and user journeys are in scope. List exclusions explicitly.

## Test approach

| Test layer | Tool / method | What it verifies | Status |
|---|---|---|---|
| Rule unit tests | Node.js built-in test runner | Response matching and precedence | |
| Repository integrity | Node.js tests | Links, manifest alignment, asset metadata | |
| Static analysis | ESLint | Configured code-quality rules | |
| Dependency audit | npm audit | Known dependency advisories | |
| Production build | Vite | Static production bundle | |
| Browser smoke | Manual browser checks | UI and user interaction | |
| Accessibility | Manual keyboard / AT review | Usability and announcements | |

The existing automated suite is not a browser end-to-end suite. Mark manual rows as not run until an actual reviewer completes them.

## Test matrix

| ID | Scenario | Setup / data | Expected result | Method | Result |
|---|---|---|---|---|---|
| | | | | | |

## Risk-based cases

Cover main chat submission, empty input, maximum length, rule precedence, misleading substrings, random branches, date/time locale, clear/minimize, scrolling, responsive behavior, reduced motion, and external font failure.

## Entry and exit criteria

**Entry:** dependencies installed, target commit identified, synthetic fixtures prepared.

**Exit:** required automated checks pass; manual blockers are recorded; unresolved high-risk defects have an owner and explicit decision.

## Evidence and reporting

Record CI links, command output, browser matrix, defects, environment, and test date. Do not mark a test passed from an assumed outcome.
