# 🔏 Privacy Notes

## What the current app does

ChatBuddy is a browser-only scripted demo. A message is read by the React form, trimmed, passed to a local response function, and stored in component state for display. The application does not send message text to an AI provider, app server, or database.

Conversation state is temporary. Clearing the conversation resets the in-memory message list. Refreshing or remounting the page discards that state.

## External resources

The page references Google Fonts. The browser may make separate requests to the font host to retrieve styles or font files. This is distinct from the chatbot's local message handling. Browser and network tooling can be used to inspect requests for a specific deployed build.

## What is not provided

There is no account system, transcript export, server-side deletion endpoint, database retention policy, or model provider integration. Do not promise user data controls that the application does not implement.

## Safe use

Avoid entering passwords, access tokens, financial information, health information, or other sensitive data into a demonstration chatbot. Do not use real private transcripts as fixtures, screenshots, issue attachments, or test data.

## Changes requiring review

Any analytics, cookies, local storage, remote API, authentication, or model integration requires a new data inventory and privacy review. Document purpose, recipient, retention, user notice, deletion, access controls, and processor details before enabling it.
