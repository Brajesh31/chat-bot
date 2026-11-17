# 🎯 Product Requirements

## Product summary
An educational chat UI demonstrating React state, form submission, basic local response logic, and message rendering.

## Current scope
- Display an initial greeting.
- Accept non-empty prompt input.
- Append user and bot messages to local component state.
- Generate a canned response using ordered phrase matching.
- Render message bubbles.

## Not in current scope
Generative models, server processing, accounts, authorization, database, history sync/export, moderation service, billing, analytics.

## Functional requirements
| ID | Requirement | Current behavior |
|---|---|---|
| FR-01 | Ignore blank input | Form trims and returns |
| FR-02 | Show submitted prompt | Added to local state |
| FR-03 | Show response | Local helper returns a string |
| FR-04 | Render text safely | React text node rendering |
| FR-05 | Persist after reload | Not implemented |

## Quality requirements
Keep dependencies small, preserve keyboard form submission, avoid raw HTML insertion, maintain component boundaries, and run lint/tests/build.

A change is complete when behavior is reproducible, tested, documented, and accurately described.
