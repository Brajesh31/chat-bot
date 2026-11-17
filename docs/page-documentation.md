# 🖥️ Page Documentation

## Page: ChatBuddy root screen

**Path:** /

**Purpose:** Demonstrate a simple browser-only chat interface with local scripted responses.

### Header

Contains the bot icon, ChatBuddy heading, local demo status, clear conversation action, and minimize/expand action.

### Message body

Contains an initial greeting and subsequent conversation entries. New messages are rendered from React state. The app attempts to scroll the latest message into view when history changes.

### Footer

Contains a single-line text field, send button, and a small disclosure that responses are local scripted replies and are not sent to an AI service.

## Page states

- Initial state.
- Conversation with one or more prompt/response pairs.
- Cleared conversation with initial greeting retained.
- Minimized header-only state.
- Expanded conversation state.

## No other pages

There is no login page, profile, settings page, dashboard, admin page, or conversation archive. Do not add screenshots or page descriptions for non-existent routes.
