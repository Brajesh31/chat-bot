# 🗃️ Response Catalog

This catalog describes the hand-written rules in `src/components/ChatbotResponse.js`. It is a local response map, not a model prompt library.

| Category | Example trigger | Result type | Notes |
|---|---|---|---|
| Greeting | `hello`, standalone `hi` | Fixed greeting | Case-insensitive |
| Morning/night | `good morning`, `good night` | Fixed greeting | Multiword substring match |
| Personal | `how are you`, `what is your name` | Fixed scripted response | Does not establish a real identity or person |
| Creator/runtime | `who created you`, `where do you live` | Fixed transparency response | Describes this demo as a browser app |
| Human/AI | `are you human`, `what is ai` | Fixed transparency response | Explicitly says it is not a model-backed AI |
| Joke | `tell me a joke` | Random from four local strings | No external content |
| Fact | `tell me a fact` | Random from four local strings | Prewritten fact text, not verified at runtime |
| Help/support | standalone `help`, `support` | Fixed text | Word-boundary match |
| Time/date | standalone `time`, `date` | Browser-local formatted value | Uses the browser clock and locale |
| Weather | standalone `weather` | Static disclaimer | Not a weather forecast |
| Entertainment | song, dance, story, motivation | Fixed text | Story branch is a scripted reply, not a generator |
| Emotions/real | `are you real`, `do you have emotions` | Fixed text | Scripted conversational tone |
| Food | eat, coffee | Fixed text | Casual, non-personalized prompt response |
| Technology | AI, ChatGPT, AI takeover question | Fixed text | Not live research or model inference |
| Goodbye | `bye`, `see you later` | Fixed text | Goodbye message |
| Unknown | no branch matches | Random from four local strings | No understanding beyond configured rules |

## Precedence
The function is an ordered `if / else if` chain. The first match wins. Prompts containing multiple configured intents can therefore be answered by the earlier rule rather than the most relevant one.

## Matching behavior
Greeting, help/support, time/date, weather, dance, and story use word-boundary patterns. Several multiword rules still use `String.includes`, so tests should cover overlapping and misleading substrings.

## Test strategy
Each response rule should have a positive example, a negative or near-match example, and a precedence test when it can overlap with earlier rules. Control randomness when testing array-based responses.

See `tests/ChatbotResponse.test.js` for executable expectations.
