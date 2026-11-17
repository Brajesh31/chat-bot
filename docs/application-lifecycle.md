# 🔄 Application Lifecycle

## Startup

1. The browser requests index.html from a local Vite server or static host.
2. The page loads JavaScript and CSS resources.
3. src/main.jsx mounts the React app.
4. App initializes its local state.
5. The initial greeting is rendered independently from submitted history.

## Message lifecycle

1. Visitor enters text.
2. ChatForm prevents navigation and trims the value.
3. Blank input returns without a state update.
4. Valid text is passed to ChatbotResponse.
5. The helper normalizes and checks ordered branches.
6. The form appends the prompt and returned string to history.
7. React renders the updated log.
8. App attempts to scroll the latest message into view.

## Clear and minimize lifecycle

- Clear resets submitted history, leaving the initial greeting visible.
- Minimize changes panel visibility but retains the current state.
- Expand restores the body and footer.
- Page reload or remount discards the submitted history.

## Failure and shutdown

There is no application network request to retry or server session to close. A page refresh ends the current in-memory conversation. Browser runtime failures are surfaced through developer tools; there is no global application error boundary documented as present.
