# 🔏 Privacy Review

Complete this review whenever a change affects user input, storage, telemetry, third-party requests, analytics, authentication, or disclosure of product behavior.

## Review metadata

- Feature / change:
- Commit:
- Reviewer:
- Date:
- Decision: approved / revise / not applicable

## Data inventory

| Data element | Collected? | Source | Destination | Purpose | Retention |
|---|---|---|---|---|---|
| User message text | Page memory only | Chat input | React state / UI | Display response | Until state is cleared or discarded |
| Browser-local date/time | Only for matching prompts | Browser clock / locale | Response text | Local date/time reply | Not stored by app |
| Font request metadata | Browser request | Browser | Google Fonts host | Load external fonts | Governed by browser/provider behavior |

Update this table only after inspecting the implementation. Do not assume the current or future data path.

## User expectations and notices

- What does the interface tell the visitor?
- Is data sent to a server or third party?
- Is collection necessary for the feature?
- Is consent or a clear opt-out required?
- Does the UI explain what clear-conversation actually deletes?

## Minimization and safeguards

- [ ] Only necessary fields are processed.
- [ ] No credentials or sensitive data are requested.
- [ ] No real transcripts are included in tests or fixtures.
- [ ] Logging avoids message bodies unless justified and disclosed.
- [ ] Storage and retention have documented owners and expiry.
- [ ] Deletion behavior is testable.
- [ ] Access controls apply if a server is introduced.

## Third parties and transfers

List verified hosting, font, analytics, model, and monitoring providers. Mark unknown details as unknown; do not invent locations, retention periods, or contractual assurances.

## Risk assessment and decision

Record risk, likelihood, impact, mitigation, residual risk, owner, due date, and approval. Re-review when architecture or data flow changes.
