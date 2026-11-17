# 🗂️ Project Structure

```text
chat-bot/
├── .github/
│   ├── DISCUSSION_TEMPLATE/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── assets/
│   ├── diagrams/
│   ├── examples/
│   ├── operations/
│   ├── security/
│   ├── templates/
│   └── testing/
├── public/
│   └── chatbot.svg
├── scripts/                  # Repository validation utilities (future scripts)
├── src/
│   ├── components/
│   │   ├── ChatForm.jsx
│   │   ├── ChatMessage.jsx
│   │   ├── ChatbotIcon.jsx
│   │   └── ChatbotResponse.js
│   ├── App.jsx
│   ├── App.css
│   ├── chatbot-enhancements.css
│   ├── index.css
│   └── main.jsx
├── tests/
│   ├── ChatbotResponse.test.js
│   └── repository-integrity.test.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

The application is browser-only. It has no backend, database, HTTP API, or persistent chat storage. The automated tests run through Node.js's built-in test runner.
