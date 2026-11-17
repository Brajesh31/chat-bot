# 🧭 Navigation and Screen Structure

## Current application navigation

The application has a single page at the root URL. It does not use a router, route table, multi-page navigation menu, or account navigation.

## Page regions

1. **Chat header:** product name, local-demo status, clear action, minimize/expand action.
2. **Chat body:** initial greeting and submitted message list.
3. **Chat footer:** message input, send action, local-processing disclosure.

## UI state navigation

The two header actions affect the current page state:
- Clear resets submitted message history.
- Minimize/expand hides or shows the body and footer.

There are no navigation links inside the chat interface today.

## Future route changes

If additional pages are introduced, define route ownership, direct-load behavior, history fallback, keyboard navigation, current-page announcements, responsive menu behavior, and browser back/forward expectations. Update the deployment guide because static hosting may then require an SPA fallback.
