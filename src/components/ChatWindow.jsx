import React, { useContext } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { ChatContext } from "../context/ChatContext";

const ChatWindow = () => {
  const { sessions, activeSessionId } = useContext(ChatContext);

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  return (
    <div className="flex flex-col h-full w-full">  
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <MessageList messages={activeSession?.messages || []} />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatWindow;
