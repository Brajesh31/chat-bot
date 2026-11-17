# 🔒 Data Protection

## Current data handling

Visitor message text is held in React state while the page is active and rendered in the browser. It is not written to an application database or sent to an application API. Refreshing or remounting the page discards the submitted history.

The page references Google Fonts, which can create separate resource requests. This is not the same as sending chat prompts to a provider.

## Data minimization

Do not add persistence, analytics, transcript logging, or remote inference unless a defined feature requires it and the impact is reviewed.

## Sensitive data

The interface is a demo. Visitors should not enter passwords, access tokens, financial data, health information, or other sensitive material. Test fixtures and issue examples must use synthetic prompts.

## Future data services

A data-handling expansion requires a field inventory, purpose, recipient, retention, access control, deletion, backup, transfer, incident, and user-notice design. Encryption requirements depend on the future architecture; none should be claimed as implemented by this browser-only app.
