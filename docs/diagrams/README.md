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
| [Future AI boundary](FUTURE_AI_BOUNDARY.md) | Controls required for a proposed provider integration | Proposed only |

## Applicability

A database ER diagram, authentication flow, authorization flow, API sequence diagram, and backup-database diagram are not created because those systems do not exist in the current application. The browser data flow and in-memory state are documented instead.

## Conventions and maintenance

Solid arrows represent current flow. Dashed arrows represent external resources or non-interactive dependencies. Proposed components must be labelled. Update diagrams whenever source structure, state transitions, network traffic, or build/deployment behavior changes.
