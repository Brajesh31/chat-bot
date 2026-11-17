# 🧑‍🤝‍🧑 User Stories

## US-01: Send a prompt
As a visitor, I want to enter a message and submit it to see a local response.
**Acceptance:** blank text does nothing; valid text and a response appear in order.

## US-02: Read conversation
As a visitor, I want user and bot messages visually differentiated.
**Acceptance:** roles have distinct styling and readable text.

## US-03: Keyboard access
As a visitor, I want to submit without a pointer.
**Acceptance:** Enter submits and focus remains visible.

## US-04: Product transparency
As a visitor, I want accurate disclosure about AI and data transmission.
**Acceptance:** product copy says responses are local scripted rules.

```mermaid
flowchart TD
 U[Visitor opens chat] --> G[Greeting]
 G --> I[Enter prompt]
 I --> V{Empty after trim?}
 V -- Yes --> I
 V -- No --> R[Local matcher]
 R --> M[Append prompt and reply]
 M --> D[Render message bubbles]
 D --> I
```
