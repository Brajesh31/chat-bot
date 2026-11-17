# 🗂️ Project Structure

```text
chat-bot/
├── .github/
│   ├── DISCUSSION_TEMPLATE/
│   ├── ISSUE_TEMPLATE/
│   │   ├── accessibility.yml
│   │   ├── documentation.yml
│   │   ├── bug_report.yml
│   │   ├── feature_request.yml
│   │   ├── question.yml
│   │   └── config.yml
│   ├── workflows/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── dependabot.yml
├── docs/
│   ├── assets/                  # Original SVG diagrams and interface wireframes
│   ├── diagrams/                # Mermaid source and architecture explanations
│   ├── examples/                # Synthetic prompt fixtures and contract examples
│   ├── operations/              # Release, monitoring, recovery and incident guidance
│   ├── security/                # Threat model, privacy and review checklists
│   ├── templates/               # Reusable project and engineering records
│   ├── testing/                 # Test strategy, CI, cases and quality gates
│   └── *.md                     # Product, UX, development and governance handbook
├── public/
│   └── chatbot.svg
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
├── eslint.config.js
└── vite.config.js
```

## Source boundaries

- src/main.jsx mounts the React application.
- src/App.jsx owns the submitted chat history, visibility controls, and scroll behavior.
- src/components/ChatForm.jsx validates and submits plain text.
- src/components/ChatbotResponse.js returns local scripted responses.
- src/components/ChatMessage.jsx renders one message.
- src/App.css owns high-level container sizing.
- src/index.css contains the base visual styles.
- src/chatbot-enhancements.css contains responsive and interaction refinements.

## Documentation boundaries

The docs directory is organized by purpose: assets, diagrams, examples, operations, security, reusable templates, and testing. The top-level Markdown files cover product, UX, architecture, development, compatibility, privacy, and governance.

## Runtime boundary

The application is browser-only. It has no backend, database, HTTP API, or persistent chat storage. Automated tests run through Node.js's built-in test runner. Browser rendering and full accessibility verification remain manual.
