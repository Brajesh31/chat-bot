# 🧩 Diagram Index

The diagrams describe the current implementation unless the title explicitly says proposed. They are Markdown documents containing editable Mermaid source.

| Diagram | Purpose | State |
|---|---|---|
| [System context](SYSTEM_CONTEXT.md) | Visitor, browser, React, local matcher, and external font boundary | Current |
| [Message lifecycle](MESSAGE_LIFECYCLE.md) | Prompt submission through local response and rendering | Current |
| [Component relationships](COMPONENTS.md) | File-level responsibilities and component structure | Current |
| [Static deployment](DEPLOYMENT.md) | CI artifact and static hosting path | Current |
| [Input and empty-input flow](ERROR_FLOW.md) | Trim, validation, response, and ignored input | Current |
| [Test pipeline](TEST_PIPELINE.md) | Lint, tests, audit, and build stages | Current |
| [Future AI boundary](FUTURE_AI_BOUNDARY.md) | Controls required for a proposed provider integration | Proposed only |

## Diagram conventions

Solid arrows represent current implemented flow. Dashed arrows represent an external request or non-interactive dependency. A document labelled proposed is not evidence that a feature exists.

## Maintenance

When source files, state transitions, dependencies, network requests, or build steps change, update the affected diagram and its explanatory text. Confirm file names and internal links, then inspect the rendered Mermaid diagram in GitHub. Do not add an artificial diagram for a trivial text-only change.
