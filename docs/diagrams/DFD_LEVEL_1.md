# 🔀 Data Flow Diagram, Level 1

This diagram decomposes the current browser-side conversation flow into its main processing steps.

```mermaid
flowchart TD
 Visitor([Visitor]) -->|Prompt text| P1[1.0 Capture input]
 P1 --> P2[2.0 Trim and validate]
 P2 -->|Blank input| Ignore[Ignore submission]
 P2 -->|Valid text| P3[3.0 Evaluate ordered phrase rules]
 P3 -->|Selected response string| P4[4.0 Build message pair]
 P2 -->|Original trimmed text| P4
 P4 --> D1[(In-memory React chatHistory)]
 D1 --> P5[5.0 Render message list]
 P5 -->|User and bot-role message bubbles| Visitor
```

## Data notes

- The input is plain text and is trimmed before matching.
- Empty input does not create a message pair.
- The response helper returns one string synchronously.
- The message history is a component state store, not a database.
- Browser date/time is read only when the corresponding local response rule matches.
