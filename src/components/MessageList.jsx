import React, { useContext, useEffect, useRef } from "react";
import MessageItem from "./MessageItem";
import { ChatContext } from "../context/ChatContext";

const MessageList = ({ messages }) => {
  const { loading } = useContext(ChatContext);
  const bottomRef = useRef(null);

 
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex flex-col gap-4 w-full h-full px-4 pb-6 overflow-y-auto">

      
      {messages.length === 0 ? (
        <div className="flex flex-col items-center text-center mt-20 text-gray-400">
         
          <div className="text-md text-gray-400">
            Ask anything, I’m here to help.
          </div>
        </div>
      ) : (
        <>
        
      {messages.map((msg, idx) => (
            <MessageItem key={idx} msg={msg} />
          ))}
          {loading && (
            <div className="flex items-center gap-3 ml-3 text-gray-500 animate-fadeIn">
              <span className="text-sm">Thinking</span>
              <div className="flex gap-1">
                <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
              </div>
            </div>
          )}
        </>
      )}
      <div ref={bottomRef}></div>

    </div>
  );
};

export default MessageList;
