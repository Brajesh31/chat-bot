# 🔬 Data Flow Diagram, Level 2

This view expands process 3.0 from the Level 1 DFD. It describes how the local response helper evaluates an input against an ordered set of phrase categories.

```mermaid
flowchart TD
 Prompt[Validated prompt] --> Normalize[3.1 Lowercase prompt]
 Normalize --> Category1{3.2 Greeting rule matches?}
 Category1 -- Yes --> Fixed1[Return greeting string]
 Category1 -- No --> Category2{Personal rule matches?}
 Category2 -- Yes --> Fixed2[Return personal reply]
 Category2 -- No --> Category3{Joke or fact rule matches?}
 Category3 -- Yes --> Array[3.3 Select fixed array entry using Math.random]
 Category3 -- No --> Category4{Help, context or other topic matches?}
 Category4 -- Yes --> Fixed3[Return configured scripted reply]
 Category4 -- No --> Fallback[3.4 Select fixed fallback array entry]
 Fixed1 --> Return[Return one response string]
 Fixed2 --> Return
 Array --> Return
 Fixed3 --> Return
 Fallback --> Return
```

## Data and control rules

- Rules are checked in source order.
- The first matching rule returns immediately.
- Fixed response branches return one string.
- Joke, fact, and fallback branches choose one entry from a predefined array.
- The helper is synchronous and does not call a remote API.

## Scope

This is an implementation-level explanation of the current helper. It is not an AI inference pipeline, training pipeline, retrieval chain, or external service sequence.
