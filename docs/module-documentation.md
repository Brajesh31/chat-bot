# 📦 Module Documentation

## Application entry points

### index.html
Provides the HTML document, metadata, root element, and page-level resource references.

### src/main.jsx
Creates the React root and renders App. This is the browser application's JavaScript entry point.

### src/App.jsx
Owns chat history, minimized state, header controls, initial greeting, message log, and scroll-to-latest behavior.

### src/components/ChatForm.jsx
Handles form submission, trims input, ignores blank input, calls the local response helper, and appends the submitted prompt and response.

### src/components/ChatMessage.jsx
Displays one message according to its role. Keep untrusted content rendered as text.

### src/components/ChatbotIcon.jsx
Provides a reusable bot illustration component.

### src/components/ChatbotResponse.js
Contains the ordered local phrase checks. Earlier branches take precedence over later branches. Random arrays are used for selected response categories.

## Styling modules

- src/index.css provides reset, body layout, chat panel, header, message, form, and animation styles.
- src/App.css provides high-level application container sizing.
- src/chatbot-enhancements.css refines header actions, focus, message wrapping, mobile layout, and reduced-motion behavior.

## Tooling and tests

- vite.config.js configures Vite and the React plugin.
- eslint.config.js configures ESLint.
- tests/ChatbotResponse.test.js validates response selection and regressions.
- tests/repository-integrity.test.js validates manifest alignment, internal Markdown links, SVG metadata, and selected documentation contracts.

## Extension rule

When a module's responsibility changes, update this page, PROJECT_STRUCTURE.md, and any relevant architecture diagrams.
