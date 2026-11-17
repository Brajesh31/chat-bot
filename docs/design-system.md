# 🧩 Design System Overview

## Current status

The application uses a small collection of CSS rules rather than a formal design-system package. There is no shared token compiler, component library package, or Storybook instance.

## Current visual language

- **Primary interface color:** purple used for the header and visitor message bubbles.
- **Surface:** white chat panel against a pale lavender page background.
- **Assistant bubbles:** light lavender.
- **Typography:** Inter with browser fallback fonts, plus an external Google Fonts reference.
- **Shape:** rounded panel, controls, and message bubbles.
- **Motion:** short entrance and hover transitions, with a reduced-motion override.

## Reusable UI patterns

| Pattern | Current component / style owner |
|---|---|
| Chat panel | App shell and CSS |
| Header | App.jsx and index.css |
| Bot icon | ChatbotIcon.jsx |
| Message bubble | ChatMessage.jsx and index.css |
| Message form | ChatForm.jsx and index.css |
| Clear/minimize actions | App.jsx |
| Mobile layout | chatbot-enhancements.css |

## Design-system limits

There are no audited color tokens, formal component variants, design QA snapshots, or cross-product library. Values documented in DESIGN_TOKENS.md are current implementation references, not a complete brand standard.

## Contribution rule

When repeated patterns grow, consolidate their values and states in shared CSS. Avoid introducing a component library dependency for this small interface without a demonstrated need.
