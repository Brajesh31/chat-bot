import test from "node:test";
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

test("returns the first fallback for an unknown prompt when randomness is controlled", () => {
  const response = withRandomValue(0, () => getChatbotResponse("quantum computing history"));
  assert.equal(response, "Hmm... I'm not sure about that! 🤔");
});

test("returns a static weather disclaimer instead of a forecast", () => {
  assert.match(getChatbotResponse("weather"), /can't predict the weather/i);
});

test("returns a friendly goodbye", () => {
  assert.match(getChatbotResponse("bye"), /Goodbye/);
});
