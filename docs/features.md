# ✨ Feature Catalogue

This catalogue separates implemented features from limitations and future proposals.

## Implemented

### Chat presentation
The page renders a header, initial greeting, submitted message bubbles, and a footer form. The visual shell is responsive and uses local CSS.

### Plain-text submission
The form trims whitespace. Empty or whitespace-only input is ignored. The browser input has a maximum length of 1,000 characters. Messages are not sent to a project server.

### Local scripted responses
The response helper applies ordered conditional checks. The first matching rule returns its configured response. Jokes, facts, and unmatched prompts can select from fixed arrays.

### Conversation controls
The clear action removes submitted history while retaining the initial greeting. Minimize hides the message body and footer; expand restores the visible conversation.

### Scroll behavior
The application attempts to bring the latest chat content into view when the history changes. The behavior respects the reduced-motion preference.

## Not implemented

| Feature | Status |
|---|---|
| Generative AI / LLM | Not integrated |
| Live web search | Not implemented |
| Weather service | Not implemented, response is a disclaimer |
| Database or transcript persistence | Not implemented |
| Authentication and user accounts | Not implemented |
| File upload or attachment handling | Not implemented |
| Streaming / typing indicator | Not implemented |
| Chat export or cross-device sync | Not implemented |
| Admin dashboard | Not implemented |

## Feature change process

A new feature proposal should identify the user problem, acceptance criteria, UI states, risks, privacy boundary, automated tests, manual checks, documentation updates, and rollback plan. Do not mark a roadmap item as delivered until code and verification evidence exist.
