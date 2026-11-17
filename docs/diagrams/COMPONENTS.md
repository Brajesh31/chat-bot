# Component Relationships

```mermaid
flowchart TD
 Main[main.jsx] --> App[App.jsx]
 App --> Icon[ChatbotIcon]
 App --> Form[ChatForm]
 App --> Message[ChatMessage]
 Form --> Rules[ChatbotResponse]
 Message --> Icon
```
