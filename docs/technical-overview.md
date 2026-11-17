# 🔧 Technical Overview

## Stack

- React 18 for UI composition and state-driven rendering.
- Vite 6 for local development and static production bundling.
- JavaScript ES modules for application logic.
- CSS for layout, responsive behavior, focus styling, and motion.
- Node.js built-in test runner for automated tests.
- ESLint for configured static checks.
- npm and package-lock.json for dependency management.

## Execution path

The browser loads index.html, which loads src/main.jsx. The React root mounts App. App renders the chat shell and owns submitted message state. ChatForm reads the input and calls ChatbotResponse. The response string and user prompt are appended to state and rendered through ChatMessage.

## Build and test path

```bash
npm ci
npm run lint
npm test
npm run build
npm run preview
```

The full CI audit may currently report the upstream picomatch ReDoS advisory documented in DEPENDENCIES.md. A successful build and a passing CodeQL workflow do not cancel that finding.

## Runtime limitations

No HTTP API, server process, database, background worker, AI SDK, authentication library, analytics client, or persistent storage is part of the current stack. See the dependency and scope guides before assuming otherwise.
