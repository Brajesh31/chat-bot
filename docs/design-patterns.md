# 🧠 Design Patterns in the Current Code

This document describes patterns actually visible in the application, not a target architecture imposed on the repository.

## Component composition

App composes smaller React components for the icon, form, and message presentation. This keeps the main shell readable and allows local changes to be made near the relevant responsibility.

## State-driven rendering

The submitted message history and minimized state are represented by React state. A state update causes the interface to render the corresponding view.

## Callback-based state update

The form appends messages through the setter supplied by App. Functional state updates use the prior history value, avoiding reliance on a potentially stale closure when appending.

## Pure-ish local response selection

ChatbotResponse accepts prompt text and returns a response string. The helper does not require a remote service or database. Random response arrays and browser-local time/date are observable environment-dependent exceptions, so tests control randomness and avoid exact timezone assumptions.

## Not currently used

The project does not implement MVC service repositories, dependency injection containers, CQRS, event sourcing, a backend repository pattern, API gateway, authentication middleware, or database transaction patterns. Do not add these layers without a concrete need.
