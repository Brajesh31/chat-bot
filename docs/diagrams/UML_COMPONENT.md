# 🧩 UML-Style Component Diagram

```mermaid
flowchart TD
 subgraph Browser[Browser application]
  Main[main.jsx]
  App[App.jsx]
  Form[ChatForm.jsx]
  Message[ChatMessage.jsx]
  Icon[ChatbotIcon.jsx]
  Rules[ChatbotResponse.js]
  State[(React state)]
  Styles[CSS modules]
 end
 Main --> App
 App --> Form
 App --> Message
 App --> Icon
 App --> State
 App --> Styles
 Form --> Rules
 Form --> State
 State --> Message
 Message --> Icon
```

## Component ownership

App owns the submitted message history and minimized state. ChatForm owns the input ref and calls the response helper. ChatMessage renders an entry. ChatbotIcon provides a decorative SVG. CSS files style the page and responsive states.
