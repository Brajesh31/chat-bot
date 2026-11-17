import { useRef } from "react";
import getChatbotResponse from "./ChatbotResponse";

const MAX_MESSAGE_LENGTH = 1000;

const ChatForm = ({ setChatHistory }) => {
  const inputRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
      { role: "model", text: getChatbotResponse(userMessage) },
    ]);
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        aria-label="Type your message"
        autoComplete="off"
        maxLength={MAX_MESSAGE_LENGTH}
        required
      />
      <button
        type="submit"
        className="material-symbols-outlined"
        aria-label="Send message"
        title="Send message"
      >
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;
