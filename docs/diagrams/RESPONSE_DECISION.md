# 🧠 Response Decision Flow

This is a high-level representation of the response helper's ordered categories. It intentionally omits individual phrase patterns and exact response strings, which remain in the source and [response catalog](../RESPONSE_CATALOG.md).

```mermaid
flowchart TD
 Prompt[Submitted prompt] --> Normalize[Lowercase prompt]
 Normalize --> Greeting{Greeting matched?}
 Greeting -- Yes --> R1[Greeting reply]
 Greeting -- No --> Personal{Personal question matched?}
 Personal -- Yes --> R2[Personal reply]
 Personal -- No --> Fun{Joke or fact matched?}
 Fun -- Yes --> R3[Select fixed array response]
 Fun -- No --> Help{Help or support matched?}
 Help -- Yes --> R4[Help reply]
 Help -- No --> Context{Time, date or weather matched?}
 Context -- Yes --> R5[Local context reply]
 Context -- No --> Other{Other configured topic matched?}
 Other -- Yes --> R6[Configured scripted reply]
 Other -- No --> Fallback[Select fixed fallback reply]
```

## First-match behavior

The implementation uses a sequential conditional chain. The first true condition returns immediately, so the prompt is not evaluated against later rules. Some categories choose from fixed arrays using Math.random().
