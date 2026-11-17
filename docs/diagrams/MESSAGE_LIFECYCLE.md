# 🔄 Message Lifecycle

## Current synchronous flow

```mermaid
sequenceDiagram
 actor Visitor
 participant Form as ChatForm
 participant Helper as ChatbotResponse
 participant App as App state
 participant View as ChatMessage
 Visitor->>Form: Enter prompt and submit
 Form->>Form: Prevent navigation and trim input
 alt Blank after trim
  Form-->>Visitor: Ignore submission
 else Valid text
  Form->>Helper: Pass plain text
  Helper->>Helper: Normalize and test ordered branches
  Helper-->>Form: Return local response string
  Form->>App: Append user and model-role messages
  App->>View: Render updated history
  App->>App: Scroll latest message into view
 end
```

## State and ordering notes

- The initial greeting is rendered outside the submitted history array.
- Each valid submission adds a user message followed by a model-role message.
- The response helper executes in the browser and returns immediately.
- Earlier conditional branches have precedence over later branches.
- Jokes, facts, and fallback responses may vary because they are chosen from local arrays.
- Clear resets the submitted message history.
- Minimize/expand toggles visibility and does not discard conversation state.

## Persistence boundary

The transcript is held in component state. It is not written to localStorage, IndexedDB, a database, or an application server. Refreshing the page discards the submitted history.

## Testing implications

Test blank input, trimmed input, rule precedence, random branches, clear behavior, and latest-message scrolling. The current automated tests focus on the response helper and repository integrity; browser rendering and complete UI interaction remain manual checks.
