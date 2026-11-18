# 🧩 Diagram Index

The diagrams describe the current implementation unless explicitly labelled proposed. Mermaid source is editable in the repository.

| Diagram | Purpose | State |
|---|---|---|
| [System context](SYSTEM_CONTEXT.md) | Visitor, browser, React, matcher, external font boundary | Current |
| [Message lifecycle](MESSAGE_LIFECYCLE.md) | Form submission through local response and rendering | Current |
| [Component relationships](COMPONENTS.md) | File responsibilities and component structure | Current |
| [Chat UI states](CHAT_UI_STATES.md) | Initial, conversation, cleared, and minimized states | Current |
| [Static deployment](DEPLOYMENT.md) | CI artifact and static hosting path | Current |
| [Input and empty-input flow](ERROR_FLOW.md) | Trim, validation, response, and ignored input | Current |
| [Test pipeline](TEST_PIPELINE.md) | Lint, tests, docs validation, build, and audit | Current |
| [Incident response](INCIDENT_RESPONSE.md) | Report through triage and recovery | Current process |
| [DFD Level 0](DFD_LEVEL_0.md) | Browser application context and external font boundary | Current |
| [DFD Level 1](DFD_LEVEL_1.md) | Input, phrase matching, React state and rendering | Current |
| [DFD Level 2](DFD_LEVEL_2.md) | Detailed response-rule evaluation and fallback selection | Current |
| [Message sequence](UML_SEQUENCE.md) | Visitor, form, matcher, state and render interactions | Current |
| [Use cases](UML_USE_CASE.md) | Visitor interactions and application scope | Current |
| [Component / class view](UML_CLASS.md) | React component and module responsibilities | Current |
| [Activity flow](UML_ACTIVITY.md) | Prompt submission and response activity | Current |
| [Component architecture](UML_COMPONENT.md) | Source module composition | Current |
| [Deployment view](UML_DEPLOYMENT.md) | Static build and optional hosting boundary | Current / hosting not verified |
| [Module dependencies](MODULE_DEPENDENCIES.md) | Static import and component dependency graph | Current |
| [Integration boundary](INTEGRATION_BOUNDARY.md) | Google Fonts and absent app service integrations | Current |
| [Response decision flow](RESPONSE_DECISION.md) | Ordered response rule categories and fallback | Current |
| [Future AI boundary](FUTURE_AI_BOUNDARY.md) | Controls required for a proposed provider integration | Proposed only |

## Applicability

A DFD Level 2 expansion is not useful for this small single-page flow. A database ER diagram, authentication flow, authorization flow, API interaction diagram, and database backup diagram are not applicable because those systems do not exist. The browser data flow and in-memory state are documented instead.

## Conventions and maintenance

Solid arrows represent current flow. Dashed arrows represent external resources or non-interactive dependencies. Proposed components must be labelled. Update diagrams whenever source structure, state transitions, network traffic, or build/deployment behavior changes.
