import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ChatMessage from "../src/components/ChatMessage";

describe("ChatMessage", () => {
  it("renders user content as text", () => {
    render(<ChatMessage chat={{ role: "user", text: "<script>hello</script>" }} />);
    expect(screen.getByText("<script>hello</script>")).toBeTruthy();
  });

  it("renders bot content", () => {
    render(<ChatMessage chat={{ role: "model", text: "Hello from the local bot" }} />);
    expect(screen.getByText("Hello from the local bot")).toBeTruthy();
  });
});
