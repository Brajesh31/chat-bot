# 📋 Functional Requirements

These requirements describe the current product contract. They are not a promise that future items already exist.

| ID | Requirement | Current status | Verification |
|---|---|---|---|
| FR-01 | The page shall display the ChatBuddy header and initial greeting. | Implemented | Manual browser check |
| FR-02 | The visitor shall be able to enter plain text. | Implemented | Manual browser check |
| FR-03 | The form shall trim input before handling it. | Implemented | Source review and manual check |
| FR-04 | Empty or whitespace-only input shall not append messages. | Implemented | Manual browser check |
| FR-05 | The input shall limit the value to 1,000 characters. | Implemented via input maxLength | Source and browser check |
| FR-06 | A valid prompt shall be passed to a local response helper. | Implemented | Response helper tests |
| FR-07 | The first matching rule shall determine the response. | Implemented | Precedence tests |
| FR-08 | User and bot-role messages shall appear in the history. | Implemented | Manual browser check |
| FR-09 | Clear shall remove submitted message history. | Implemented | Manual browser check |
| FR-10 | Minimize/expand shall toggle the message body and footer. | Implemented | Manual browser check |
| FR-11 | The UI shall attempt to scroll to the latest message. | Implemented | Manual browser check |
| FR-12 | The app shall retain conversations across reloads. | Not implemented | Explicit limitation |
| FR-13 | The app shall generate arbitrary model responses. | Not implemented | Explicit limitation |
| FR-14 | The app shall query live weather or external sources. | Not implemented | Explicit limitation |

## Requirement changes

Update this table and the user guide when behavior changes. Each requirement should have at least one verifiable acceptance test. Keep implementation status distinct from proposals.
