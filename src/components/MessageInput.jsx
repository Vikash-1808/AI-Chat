import React, { useState, useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Send } from "lucide-react";

const MessageInput = () => {
  const { sendMessage, loading } = useContext(ChatContext);
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-3 border-t bg-white">
      <div className="flex items-center w-full bg-gray-100 rounded-2xl px-4 py-2 border border-gray-200">

       
        <input
          type="text"
          className="w-full bg-transparent outline-none text-gray-700"
          placeholder="Ask anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        
        <button
          onClick={handleSend}
          disabled={loading || !text.trim()}
          className={`p-2 transition ${
            text.trim()
              ? "text-blue-600 hover:text-blue-800"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
