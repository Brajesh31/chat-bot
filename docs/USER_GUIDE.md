# 💬 User Guide

The current application is a browser chat interface with locally scripted replies. It is not generative AI.

Run [Installation](installation.md), start `npm run dev`, and open the Vite URL. Type a message and submit with Enter or the send control. The user prompt and selected local answer appear in the conversation. Refreshing the page clears this in-memory state.

Examples include `hello`, `good morning`, `tell me a joke`, `tell me a fact`, and `what is AI`. Some reply categories use random selection.

No transcript is saved to a project database. The page references Google Fonts, so the browser may make requests to that host. See [Privacy](security/PRIVACY.md).
