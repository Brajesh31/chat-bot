# System Context

```mermaid
flowchart LR
 Visitor --> Browser
 Browser --> React
 React --> Matcher[Local phrase matcher]
 Matcher --> State[In-memory state]
 State --> Bubbles[Rendered chat bubbles]
 Browser -. font request .-> Fonts[External font host]
```
