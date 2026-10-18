# Chat Bot

A small browser chat interface built with React and Vite. It displays a welcome message, accepts a text prompt, and responds with a locally generated canned answer selected by case-insensitive keyword matching.

Despite the friendly interface, this project does not call an AI model or remote chatbot service. It has no application server, API, database, account system, or persistent chat history. Messages exist only in the current React page state.

## Features

- Chat-style user and bot message bubbles
- Local responses for greetings, common questions, jokes, facts, help, time/date, weather, and other simple topics
- Randomized response choices for jokes, facts, and unknown prompts
- Responsive styling and a bot icon
- Vite development server with hot-module reload

## Requirements

- Node.js and npm
- A modern browser with JavaScript enabled

No credentials, API key, or backend service is required.

## Quick start

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`. Type a message and submit it to see the matching local response. Refreshing the page clears the conversation.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production bundle under `dist/` |
| `npm run preview` | Serve the production bundle locally after building |
| `npm run lint` | Run ESLint over the repository |

There is no test script or automated test suite in the current root package.

## How replies work

`src/components/ChatForm.jsx` trims the submitted text and updates the conversation state with both a user message and the immediate response. `src/components/ChatbotResponse.js` lowercases the prompt, checks for configured phrases, and returns a fixed answer or a random item from a small response list. It does not send the prompt over the network.

## Project layout

```text
src/
  App.jsx                    Chat screen and in-memory history
  main.jsx                   React application entry point
  components/
    ChatForm.jsx             Input and local response dispatch
    ChatMessage.jsx          User/bot message rendering
    ChatbotIcon.jsx          Inline SVG icon
    ChatbotResponse.js       Keyword-based response rules
public/                      Vite public assets
index.html                   Browser document and font links
vite.config.js               Vite React plugin configuration
eslint.config.js             ESLint flat configuration
```

Read [docs/architecture.md](docs/architecture.md) for component flow, [docs/development.md](docs/development.md) for contributor workflow, and [docs/troubleshooting.md](docs/troubleshooting.md) for known limitations.

## Current limitations

- Responses are scripted and selected by substring checks; the interface is not connected to an AI model.
- Conversation history is not saved and is lost on reload.
- The header's down-arrow button has no click handler yet.
- The page uses externally hosted Google Fonts; a network request is made by the browser to load those fonts.
- There are no tests, API routes, server, or database.

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Use [SUPPORT.md](SUPPORT.md) for questions and [SECURITY.md](SECURITY.md) for private vulnerability reports. Possible future improvements are listed in [ROADMAP.md](ROADMAP.md).

## License

The MIT grant in [LICENSE](LICENSE) covers the repository handbook and guidance authored by Brajesh Kumar (`@brajesh31`) in this contribution. Existing application code and third-party assets have separate or unconfirmed provenance; this documentation notice does not claim rights to them.

Last updated: 2026-10-18 17:05 UTC
