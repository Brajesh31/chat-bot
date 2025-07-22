import { useRef } from "react";
import getChatbotResponse from "./ChatbotResponse"; // Import chatbot logic

const ChatForm = ({ setChatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Update chat history with user message and chatbot response
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
      { role: "model", text: getChatbotResponse(userMessage) }, // Chatbot response
    ]);
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input ref={inputRef} type="text" placeholder="Message..." className="message-input" />
      <button className="material-symbols-outlined">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
