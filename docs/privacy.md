# 🔏 Privacy Overview

## Current message handling

Chat text is trimmed and processed locally by the browser application. Submitted messages are held in React state for display. The app does not send chat text to an application backend, model provider, or database.

## Third-party resources

The page references Google Fonts. The visitor's browser may make separate stylesheet or font-file requests. Review the actual deployed page's network panel for the requests it makes.

## State and deletion

The clear button resets submitted chat history in the current React state. It does not delete server records because none are created by the app. Refreshing or remounting the page discards the in-memory conversation.

## Limits

There is no account system, transcript export, persistent storage, analytics SDK, consent manager, or data subject request endpoint. Visitors should not enter sensitive information into this demo.

## Future changes

Any analytics, cookies, storage, API, or provider integration requires a revised privacy inventory, user disclosure, retention/deletion design, and security review.
