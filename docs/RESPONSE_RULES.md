# 🧩 Local Response Rules

`src/components/ChatbotResponse.js` lowercases the prompt, checks ordered substring conditions, and returns a canned string. Selected branches choose random strings.

Current categories include greetings, personal questions, jokes, facts, help/support, time/date, weather, entertainment, food, technology, and goodbyes.

## Limitations
- First matching branch wins.
- Substring checks can match within unrelated words.
- Random branches are nondeterministic.
- Time/date use the visitor's browser clock.
- Weather is a static sentence, not a forecast.
- No language model or external knowledge source is queried.

When extending rules, add positive, negative, and ambiguous phrase tests. Keep replies as text. A structured rule catalogue is a future proposal, not current functionality.
