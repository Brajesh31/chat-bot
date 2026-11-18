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


### Security and maintenance follow-up
- The latest npm audit identified GHSA-fc5q-39xc-vjpf in transitive picomatch 4.0.7 used by Vite's development/build dependency tree. The proposed Vite 8 Dependabot update was reviewed and still resolves picomatch 4.0.7. The high-severity audit gate remains enabled.
- Added a dated Dependabot review record and repository presentation guide, including settings that require manual owner action.
- Added DFD Level 2 and UML sequence diagrams, acknowledgements, primary technical references, internationalization status, and future-scope guidance.
- Added an original 1280×640 social-preview SVG source illustration. It is not a real application screenshot and has not been uploaded to GitHub's repository settings.
- Added pinned Markdown linting and structural code-fence/Mermaid validation, with directory-index coverage checks in the documentation validator.
