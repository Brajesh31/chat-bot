import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ChatForm from "../src/components/ChatForm";

describe("ChatForm", () => {
  it("does not append blank messages", () => {
    const setChatHistory = vi.fn();
    render(<ChatForm setChatHistory={setChatHistory} />);
    fireEvent.change(screen.getByPlaceholderText("Message..."), { target: { value: "   " } });
    fireEvent.submit(screen.getByRole("button").closest("form"));
    expect(setChatHistory).not.toHaveBeenCalled();
  });

  it("appends prompt and response", () => {
    const setChatHistory = vi.fn();
    render(<ChatForm setChatHistory={setChatHistory} />);
    fireEvent.change(screen.getByPlaceholderText("Message..."), { target: { value: "hello" } });
    fireEvent.submit(screen.getByRole("button").closest("form"));
    expect(setChatHistory).toHaveBeenCalledTimes(1);
    const history = setChatHistory.mock.calls[0][0]([]);
    expect(history).toHaveLength(2);
    expect(history[0]).toEqual({ role: "user", text: "hello" });
    expect(history[1].role).toBe("model");
    expect(history[1].text).toContain("Hey there");
  });
});
