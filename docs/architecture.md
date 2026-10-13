# Architecture

## Overview

This repository is a client-only React application built and served by Vite. It has no backend, application API, database, model-provider integration, or remote chat transport. The bot's response is produced synchronously in the browser by a local phrase-matching function.

```text
Browser
  -> index.html
  -> src/main.jsx (React root)
  -> src/App.jsx (chat history state and layout)
  -> ChatForm.jsx (submit prompt)
  -> ChatbotResponse.js (local phrase matching)
  -> ChatMessage.jsx (render user and bot text)
```

## Components

- `src/main.jsx`: mounts the application in React Strict Mode and loads base CSS.
- `src/App.jsx`: stores `chatHistory` in component state and renders the initial bot greeting, history, and form.
- `src/components/ChatForm.jsx`: trims and submits input, clears the field, invokes the local response function, and appends both messages to history.
- `src/components/ChatbotResponse.js`: lowercases the text and chooses a fixed response using ordered substring checks. Some prompts select a random response from a small list.
- `src/components/ChatMessage.jsx`: maps the `model` role to a bot bubble and other roles to user bubbles; displays text through React rendering.
- `src/components/ChatbotIcon.jsx`: renders the bot SVG inline.
- `src/App.css` and `src/index.css`: style the chat layout, message bubbles, and page.
- `vite.config.js`: enables the Vite React plugin. `eslint.config.js` configures ESLint.

## State and data flow

The current prompt is not sent over the network. On form submit, the client appends a user entry and a model-role entry with the immediate local response to an in-memory array. There is no persistence, authentication, server authority, or message history export.

## External resources

`index.html` and `src/index.css` reference Google Fonts stylesheets. Browsers need a network connection to fetch those styles; system fallback fonts are used if they cannot be loaded. The Vite starter favicon remains in `public/`.

## Extension notes

If the app later connects to a language model, call a server-side endpoint so provider credentials are not exposed in the browser. Document prompts and message retention, provider selection, error and loading behavior, rate limits, and consent before sending user text externally. Keep user text rendered as text rather than injected markup.
