import { useState } from "react";
import "./App.css";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="container">
      <section className={`chatbot-popup${isMinimized ? " minimized" : ""}`} aria-label="Chat with ChatBuddy">
        <header className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <div>
              <h1 className="logo-text">ChatBuddy</h1>
              <p className="chat-status">Local demo assistant</p>
            </div>
          </div>

          <div className="header-actions">
            <button
              type="button"
              className="material-symbols-outlined"
              aria-label="Clear conversation"
              title="Clear conversation"
              onClick={() => setChatHistory([])}
            >
              delete_sweep
            </button>
            <button
              type="button"
              className="material-symbols-outlined"
              aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              aria-controls="chat-body"
              aria-expanded={!isMinimized}
              title={isMinimized ? "Expand chat" : "Minimize chat"}
              onClick={() => setIsMinimized((current) => !current)}
            >
              {isMinimized ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </button>
          </div>
        </header>

        <div
          className="chat-body"
          id="chat-body"
          role="log"
          aria-label="Chat messages"
          aria-live="polite"
          aria-relevant="additions"
          hidden={isMinimized}
        >
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👋
              <br />
              How can I help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={`${chat.role}-${index}`} chat={chat} />
          ))}
        </div>

        <footer className="chat-footer" hidden={isMinimized}>
          <ChatForm setChatHistory={setChatHistory} />
          <p className="chat-disclaimer">
            ChatBuddy uses local scripted replies. It does not send messages to an AI service.
          </p>
        </footer>
      </section>
    </div>
  );
};

export default App;
