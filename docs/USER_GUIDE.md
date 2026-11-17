# 💬 User Guide

ChatBuddy is a browser-only interface with locally scripted replies. It is not generative AI.

## Start
Follow [Installation](installation.md), run `npm run dev`, and open the Vite URL.

## Send a prompt
1. Type a message in the input field.
2. Submit with Enter or the send button.
3. Read your prompt and the locally selected response.
4. The newest messages are brought into view automatically.

The input is trimmed and limited to 1,000 characters. The application accepts plain text only. It does not send prompts to a server or model provider.

## Manage the conversation
- **Clear conversation:** removes the current in-memory messages. The initial greeting remains.
- **Minimize:** hides the message panel and input while retaining the current conversation.
- **Expand:** restores the conversation and input.

Refreshing or remounting the page clears conversation history. There is no database or browser-storage persistence.

## Example prompts
`hello`, `good morning`, `tell me a joke`, `tell me a fact`, `what is AI`, and `what time is it`.

Some responses are random. Weather wording is a disclaimer, not a live forecast. The response helper is a small phrase matcher, not an open-ended knowledge system.

## Privacy
Messages remain in React memory in the current browser page. The page references Google Fonts, which may cause separate font requests. See [Privacy](security/PRIVACY.md).
