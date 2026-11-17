# 🚀 Getting Started

## Requirements

- Node.js 20 or 22, matching the current CI matrix.
- npm.
- Git.
- A modern browser with JavaScript enabled.

## Setup

```bash
git clone https://github.com/Brajesh31/chat-bot.git
cd chat-bot
npm ci
npm run dev
```

Open the local address printed by Vite, usually http://localhost:5173.

## Try the application

1. Enter hello and submit.
2. Enter tell me a joke and note that a local canned response is selected.
3. Enter high school physics to test that hi is not interpreted as a standalone greeting.
4. Enter an unfamiliar prompt to see the fallback response.
5. Try clear and minimize/expand.

## Understand the source

Start with src/main.jsx, then follow src/App.jsx, src/components/ChatForm.jsx, src/components/ChatbotResponse.js, and src/components/ChatMessage.jsx.

## Verify a change

```bash
npm run lint
npm test
npm run build
```

The full workflow also runs npm audit --audit-level=high. Its currently known picomatch advisory is documented in DEPENDENCIES.md.

## Important limitation

The application does not use an LLM, backend, database, or persistent chat storage. All responses are selected locally from source-defined rules.
