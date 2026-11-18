# 🧩 UML-Style Component/Class View

The React implementation uses function components and a JavaScript response module rather than object-oriented application classes. This Mermaid class diagram is a responsibility view, not a claim that the code defines these as ES classes.

```mermaid
classDiagram
 class App {
  <<React function component>>
  chatHistory
  isMinimized
  latestMessageRef
  owns conversation state
 }
 class ChatForm {
  <<React function component>>
  setChatHistory prop
  inputRef
  handleFormSubmit()
 }
 class ChatMessage {
  <<React function component>>
  chat prop
  renders role and text
 }
 class ChatbotIcon {
  <<React function component>>
  renders decorative SVG
 }
 class ChatbotResponse {
  <<JavaScript module>>
  getChatbotResponse(userMessage)
  returns scripted string
 }
 App --> ChatForm : renders and passes state setter
 App --> ChatMessage : maps history
 App --> ChatbotIcon : renders icon
 ChatForm --> ChatbotResponse : invokes
 ChatMessage --> ChatbotIcon : renders bot icon
```

## Notes

The diagram summarizes module responsibilities observed in the source. It does not introduce a service layer, controller class, API client, database repository, or authentication class.
