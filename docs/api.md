# API Reference

## Current status

The application exposes no HTTP API and does not call an external model service. It runs in the browser and generates canned responses locally through `src/components/ChatbotResponse.js`.

## Local response behavior

The function receives a string, converts it to lowercase, and checks for phrases in source order. Matching categories include greetings, personal questions, jokes, facts, help/support, time/date, weather, entertainment, food, technology, and goodbyes. Jokes, facts, and unrecognized prompts can return a random response from a local list. This is simple phrase matching, not natural-language understanding.

## Future API documentation

If a network service is added, document its base URL, methods or socket events, request/response schema, authentication, rate limits, validation, errors, timeout behavior, and data retention. Keep model-provider credentials on the server and explain what user messages are sent to the provider.
