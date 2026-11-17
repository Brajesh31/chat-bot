# 🎯 Product Requirements

## Summary
An educational chat UI illustrating React state, form submission, response logic, and message rendering.

## Current scope
- Initial greeting.
- Non-empty prompt submission.
- User and bot messages in local state.
- Canned reply from ordered phrase matching.
- Chat bubble rendering.

## Out of scope
Generative model, server processing, accounts, authorization, database, history sync/export, moderation service, billing, and analytics.

## Functional requirements
| ID | Requirement | Current behavior |
|---|---|---|
| FR-01 | Ignore blank input | Form trims and returns |
| FR-02 | Show submitted prompt | Added to local state |
| FR-03 | Show response | Local helper returns string |
| FR-04 | Render text safely | React text rendering |
| FR-05 | Persist after reload | Not implemented |

## Non-functional requirements
Keep dependencies small, preserve keyboard submission, avoid raw HTML insertion, maintain component boundaries, run lint/tests/build.

A change is complete when behavior is reproducible, tested, documented, and accurately described.
