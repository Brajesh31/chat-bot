# 👨‍💻 Developer Guide

## Read the project before changing it

Start with README.md and docs/README.md. Read the product behavior contract, architecture, response rules, test strategy, and contribution workflow.

## Source map

- App.jsx owns the main UI state and controls.
- ChatForm.jsx handles input.
- ChatbotResponse.js selects local replies.
- ChatMessage.jsx renders messages.
- CSS files define the global shell and responsive refinements.
- tests/ contains the response and repository-integrity suites.

## Common changes

### Add a response
Update the helper, add positive/negative/precedence tests, update the regression fixtures and response catalog, and check random selection deterministically.

### Change the UI
Update the owning component and styles. Check keyboard access, accessible names, focus visibility, long messages, narrow viewports, and reduced motion.

### Add a dependency
Justify the need, check license and provenance, update the npm lockfile, and run all quality checks. Review the active picomatch advisory before changing build dependencies.

## Definition of done

A change is ready when its acceptance criteria are met, tests and docs are current, no secrets are included, and manual checks are either completed or explicitly marked outstanding.
