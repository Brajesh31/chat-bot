# 🔁 UML Sequence Diagram, Message Submission

```mermaid
sequenceDiagram
 actor Visitor
 participant Form as ChatForm
 participant Rules as ChatbotResponse
 participant State as App chatHistory
 participant View as ChatMessage
 Visitor->>Form: Type and submit prompt
 Form->>Form: preventDefault and trim text
 alt Text is empty
  Form-->>Visitor: No history update
 else Text is valid
  Form->>Rules: getChatbotResponse(userMessage)
  Rules->>Rules: Check ordered local rules
  Rules-->>Form: Return scripted response string
  Form->>State: Append user and bot-role messages
  State->>View: React renders updated entries
  View-->>Visitor: Display message bubbles
 end
```

## Sequence boundary

There is no HTTP request, server response, provider call, database transaction, or authentication exchange. The helper call and state update occur locally in the browser.
