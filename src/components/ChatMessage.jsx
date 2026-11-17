import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({ chat }) => {
  const isBotMessage = chat.role === "model";

  return (
    <div
      className={`message ${isBotMessage ? "bot" : "user"}-message`}
      role="article"
      aria-label={isBotMessage ? "Chatbot message" : "Your message"}
    >
      {isBotMessage && <ChatbotIcon />}
      <p className="message-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;
