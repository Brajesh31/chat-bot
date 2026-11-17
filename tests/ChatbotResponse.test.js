import { describe, expect, it, vi } from "vitest";
import getChatbotResponse from "../src/components/ChatbotResponse";

describe("getChatbotResponse", () => {
  it("matches greetings without case sensitivity", () => {
    expect(getChatbotResponse("HELLO")).toContain("Hey there");
  });

  it("returns the morning greeting", () => {
    expect(getChatbotResponse("good morning")).toContain("Good morning");
  });

  it("returns a configured joke", () => {
    expect([
      "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾😂",
      "Why don’t skeletons fight each other? They don’t have the guts! 💀🤣",
      "What do you call fake spaghetti? An impasta! 🍝😆",
      "Why do cows have hooves instead of feet? Because they lactose! 🐄😂",
    ]).toContain(getChatbotResponse("tell me a joke"));
  });

  it("returns one configured fallback", () => {
    expect([
      "Hmm... I'm not sure about that! 🤔",
      "Can you rephrase that? I want to understand you better! 😊",
      "That's an interesting thought! Tell me more! 🤩",
      "I'm still learning! Could you explain that differently? 😃",
    ]).toContain(getChatbotResponse("quantum computing history"));
  });

  it("uses browser-local time", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-05-04T10:20:30"));
    expect(getChatbotResponse("what time is it")).toContain("10:20");
    vi.useRealTimers();
  });
});
