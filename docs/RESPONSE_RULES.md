# 🧩 Local Response Rules

The helper at `src/components/ChatbotResponse.js` lowercases the message, checks ordered substring conditions, and returns a canned string. Some categories use random selection.

Existing categories include greetings, personal questions, jokes, facts, help, time/date, weather, entertainment, food, technology, and goodbyes.

## Limitations
- First matching branch wins.
- Substring checks can match inside unrelated words.
- Random branches are nondeterministic.
- Time/date use the browser clock.
- Weather is static text, not a forecast.
- No language model or external knowledge source is queried.

When changing rules, add positive, negative, and ambiguous phrase tests. Keep replies as plain text. A structured rule catalogue is only a future proposal.
