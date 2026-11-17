# Changelog

## [Unreleased]

### Added
- Product behavior contract, UX specification, change impact matrix, and manual browser verification plan.
- Expanded system context, component, message lifecycle, input validation, deployment, and CI diagrams.
- Two original SVG illustrations for chat interaction states and responsive layout concepts.
- Accessibility and documentation GitHub issue forms.
- Expanded reusable templates for planning, bug triage, testing, review, security, privacy, accessibility, incidents, releases, deployment, and support.

### Changed
- Expanded previously abbreviated product, engineering, security, privacy, operations, governance, compatibility, and release documentation.
- Updated the documentation and asset indexes to include new guides and illustrations.
- Reworked the root README to reflect the expanded handbook and accurately scope the documentation-license badge.
- Moved base application container sizing into the previously empty App.css and removed duplicate declarations from chatbot-enhancements.css.

### Existing verification baseline
- The prior commit passed CI on Node.js 20 and 22, with 56 Node-based tests and a production Vite build.
- The prior dependency audit reported zero known vulnerabilities at the time it ran.
- The current documentation and stylesheet changes require a fresh CI run before being described as passing.
