# 🧩 Use Cases

| ID | Actor | Goal | Preconditions | Main result |
|---|---|---|---|---|
| UC-01 | Visitor | Open chat interface | Browser supports JavaScript | Initial greeting is displayed |
| UC-02 | Visitor | Submit a prompt | Page is loaded | User text and local response appear |
| UC-03 | Visitor | Submit blank input | Input is empty or whitespace | No new message pair is added |
| UC-04 | Visitor | Clear submitted history | At least one prompt was sent | Submitted messages disappear |
| UC-05 | Visitor | Minimize the panel | Page is open | Body and footer are hidden |
| UC-06 | Visitor | Expand the panel | Panel is minimized | Existing in-memory conversation is shown |
| UC-07 | Contributor | Add a response rule | Repository installed | New behavior is covered by regression tests |
| UC-08 | Contributor | Reproduce a build | Node.js and npm installed | Static bundle is produced |
| UC-09 | Maintainer | Review dependency risk | Lockfile available | Advisory and compatibility status is recorded |

## Detailed UC-02: Submit a prompt

**Trigger:** Visitor presses Enter or activates the send button.

**Main flow:** The form prevents native navigation, trims the input, ignores it if empty, calls the synchronous local helper, appends user and bot-role messages, and clears the input field.

**Alternatives:** Empty or whitespace input is ignored. Unmatched text receives a fixed fallback selected from a local array.

**Postcondition:** The history state contains the submitted prompt and the returned response.

## Out of scope

Account management, transcript import/export, model selection, payments, admin functions, API clients, and persistent conversation management are not current use cases.
