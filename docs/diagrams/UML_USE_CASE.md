# 👥 UML-Style Use Case View

This is a lightweight use-case view represented with Mermaid flowchart syntax. It describes the single visitor role and the actions available in the current browser UI.

```mermaid
flowchart LR
 Visitor([Visitor])
 subgraph ChatBuddy[ChatBuddy browser UI]
  UC1((Send a text prompt))
  UC2((Read scripted reply))
  UC3((Clear submitted history))
  UC4((Minimize the chat))
  UC5((Expand the chat))
 end
 Visitor --> UC1
 Visitor --> UC2
 Visitor --> UC3
 Visitor --> UC4
 Visitor --> UC5
 UC1 --> UC2
```

## Actors and scope

There is one interactive actor, the visitor. There is no administrator, authenticated user, support agent, payment actor, or model provider actor in the current product.

## Use-case boundaries

The visitor can submit text, read the local response, clear submitted message history, and minimize/expand the chat. Persistent conversation management and account features are outside the system boundary.
