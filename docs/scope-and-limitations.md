# 🧱 Scope and Limitations

## Included in the current scope

- React-based chat UI.
- Plain-text input and browser-side length restriction.
- Local phrase matching and prewritten replies.
- In-memory message state.
- Clear and minimize/expand controls.
- Responsive CSS and reduced-motion styling.
- Node.js-based response and repository-integrity tests.
- Vite static build and GitHub Actions quality checks.

## Outside current scope

| Area | Current status |
|---|---|
| LLM / generative AI | Not present |
| Backend or API | Not present |
| Database / durable storage | Not present |
| Authentication / authorization | Not present |
| User profiles / roles | Not present |
| Webhooks / integrations API | Not present |
| Live search, weather, news | Not present |
| File attachments | Not present |
| Analytics / audit events | Not present |
| Production monitoring / uptime SLO | Not verified |
| Production deployment | Not verified in this pass |

## Known technical limitations

Some phrase rules use substring matching and may overlap. The first matching branch wins. Some branches are random. Date/time replies depend on the browser clock and locale. The app has no browser E2E test suite or formal WCAG assessment.

## Scope change gate

A proposal that expands data collection, network traffic, persistence, credentials, or user identity must include architecture, privacy, security, accessibility, operations, test, and support changes. Do not add an infrastructure directory simply to match a generic project template.
