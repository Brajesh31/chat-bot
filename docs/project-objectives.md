# 🎯 Project Objectives

## Primary objectives

1. Demonstrate a working chat-style interface using React components.
2. Show how a text form can trim and submit visitor input.
3. Demonstrate state-driven message rendering with an in-memory history.
4. Illustrate ordered phrase matching and first-match precedence.
5. Provide a small, reproducible codebase with a clear Vite development and build workflow.
6. Give contributors practical examples of regression tests, documentation, and GitHub workflows.

## Secondary objectives

- Keep visual behavior usable on narrow screens.
- Support keyboard operation and visible focus for core controls.
- Respect reduced-motion preferences.
- Maintain transparent product copy so scripted responses are not mistaken for generative AI.
- Keep dependencies and operational requirements modest.

## Explicit non-objectives

The current project does not aim to provide live factual answers, a production helpdesk, persistent conversations, accounts, multi-user chat, model training, retrieval-augmented generation, file uploads, or API integration.

## How objectives are evaluated

| Objective | Evidence |
|---|---|
| UI composition | React components and manual browser review |
| Local response behavior | ChatbotResponse tests and prompt fixtures |
| Reproducibility | npm ci and documented scripts |
| Quality | ESLint, Node tests, Vite build, dependency audit |
| Accessibility | Implementation signals plus manual browser/AT review |
| Transparency | README, UI disclosure, response catalog, product behavior guide |

The quality process must distinguish automated results from manual work that has not been performed.
