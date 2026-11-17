# 🧩 Accessible Components

## Chat region

The page identifies the chat section and labels the message log. Keep region labels concise and meaningful.

## Message rows

Bot and visitor messages are styled differently. The visual distinction should not be the only way to understand speaker context. Review accessible reading order and message announcement behavior with assistive technology.

## Input and buttons

Use native form controls and buttons. Each icon-only button needs a useful accessible name. The minimize/expand button should keep aria-expanded synchronized with the actual hidden state.

## Decorative icon

The bot icon is a visual aid. Prevent redundant or meaningless announcements where its decorative role is appropriate.

## Focus and motion

Preserve visible focus and support reduced motion. Do not add custom interactive divs when a native button is appropriate.

## Review

Any component change affecting semantics, state, keyboard behavior, or announcements requires manual browser verification and an update to the accessibility review record.
