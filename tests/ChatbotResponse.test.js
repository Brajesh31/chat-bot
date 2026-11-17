import test from "node:test";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import getChatbotResponse from "../src/components/ChatbotResponse.js";

const withRandomValue = (value, callback) => {
  const originalRandom = Math.random;
  Math.random = () => value;

  try {
    return callback();
  } finally {
    Math.random = originalRandom;
  }
};

test("matches greeting phrases without case sensitivity", () => {
  assert.equal(
    getChatbotResponse("HELLO"),
    "Hey there! 😊 How can I brighten your day?",
  );
});

test("does not treat hi inside high as a greeting", () => {
  const response = withRandomValue(0, () => getChatbotResponse("high school physics"));
  assert.equal(response, "Hmm... I'm not sure about that! 🤔");
});

test("recognizes hi as a standalone greeting", () => {
  assert.equal(
    getChatbotResponse("hi there"),
    "Hey there! 😊 How can I brighten your day?",
  );
});

test("returns the configured morning greeting", () => {
  assert.match(getChatbotResponse("good morning"), /Good morning/);
});

test("returns a stable first joke when randomness is controlled", () => {
  const response = withRandomValue(0, () => getChatbotResponse("tell me a joke"));
  assert.equal(
    response,
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾😂",
  );
});

test("returns a stable first fact when randomness is controlled", () => {
  const response = withRandomValue(0, () => getChatbotResponse("tell me a fact"));
  assert.equal(response, "Did you know? Honey never spoils! 🍯 It can last forever!");
});

test("does not mistake timeline for the time intent", () => {
  const response = withRandomValue(0, () => getChatbotResponse("timeline visualization"));
  assert.equal(response, "Hmm... I'm not sure about that! 🤔");
});

test("does not mistake helpful for a help request", () => {
  const response = withRandomValue(0, () => getChatbotResponse("helpful resources for beginners"));
  assert.equal(response, "Hmm... I'm not sure about that! 🤔");
});

test("returns the first fallback for an unknown prompt when randomness is controlled", () => {
  const response = withRandomValue(0, () => getChatbotResponse("quantum computing history"));
  assert.equal(response, "Hmm... I'm not sure about that! 🤔");
});

test("returns a static weather disclaimer instead of a forecast", () => {
  assert.match(getChatbotResponse("weather"), /can't predict the weather/i);
});

test("does not describe the local demo as a generative AI model", () => {
  assert.match(getChatbotResponse("what is ai"), /scripted rules, not an AI model/i);
  assert.match(getChatbotResponse("are you human"), /not a human or an AI model/i);
});

test("explains that ChatGPT is a separate AI tool", () => {
  assert.match(getChatbotResponse("do you know chatgpt"), /another AI tool/i);
});
test("returns a friendly goodbye", () => {
  assert.match(getChatbotResponse("bye"), /Goodbye/);
});

const regressionFixtures = JSON.parse(
  readFileSync(new URL("../docs/examples/prompt-regression-cases.json", import.meta.url), "utf8"),
).cases;

for (const fixture of regressionFixtures) {
  test(`regression fixture: ${fixture.prompt}`, () => {
    const run = () => getChatbotResponse(fixture.prompt);
    const response = fixture.randomIndex === undefined
      ? run()
      : withRandomValue(fixture.randomIndex, run);
    assert.ok(response.includes(fixture.expectedContains));
  });
}

// Coverage for every remaining deterministic response branch.
const deterministicCases = [
  ["good night", "Good night! 🌙"],
  ["how are you", "I'm just a bot, but I'm feeling fantastic!"],
  ["what is your name", "I'm ChatBuddy, your friendly scripted chat demo!"],
  ["who created you", "I was built as a small React chatbot demonstration!"],
  ["where do you live", "I run in your browser"],
  ["are you human", "not a human or an AI model"],
  ["help", "Sure! I'm here to assist you."],
  ["support", "If you need support, I'm all ears!"],
  ["sing a song", "La la la..."],
  ["dance", "I'm grooving!"],
  ["story", "scripted story reply"],
  ["motivate me", "Keep pushing forward"],
  ["are you real", "pre-written rules"],
  ["do you have emotions", "I'm mostly just programmed to be friendly"],
  ["what should i eat", "How about some pizza?"],
  ["do you like coffee", "I love coffee!"],
  ["what is ai", "scripted rules, not an AI model"],
  ["do you know chatgpt", "another AI tool"],
  ["will ai take over the world", "effects depend on how people develop and apply it"],
  ["bye", "Goodbye!"],
  ["see you later", "See you soon!"],
];

for (const [prompt, expectedText] of deterministicCases) {
  test(`matches the configured response for "${prompt}"`, () => {
    assert.ok(getChatbotResponse(prompt).includes(expectedText));
  });
}

test("returns a browser-formatted time for a standalone time request", () => {
  assert.match(getChatbotResponse("time"), /^⏰ The current time is /);
});

test("returns a browser-formatted date for a standalone date request", () => {
  assert.match(getChatbotResponse("date"), /^📅 Today's date is /);
});

test("does not match the story rule inside history", () => {
  const response = withRandomValue(0, () => getChatbotResponse("history of computing"));
  assert.equal(response, "Hmm... I'm not sure about that! 🤔");
});

test("does not match the time rule inside timeline", () => {
  const response = withRandomValue(0, () => getChatbotResponse("timeline visualization"));
  assert.equal(response, "Hmm... I'm not sure about that! 🤔");
});

test("does not match the help rule inside helpful", () => {
  const response = withRandomValue(0, () => getChatbotResponse("helpful resources"));
  assert.equal(response, "Hmm... I'm not sure about that! 🤔");
});

test("does not match the weather rule inside weatherproof", () => {
  const response = withRandomValue(0, () => getChatbotResponse("weatherproof fabric"));
  assert.equal(response, "Hmm... I'm not sure about that! 🤔");
});

test("preserves deliberate first-match ordering for a prompt containing multiple intents", () => {
  assert.match(getChatbotResponse("hello, can you tell me a joke"), /Hey there/);
});
