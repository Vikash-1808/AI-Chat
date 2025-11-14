import React from "react";

const MessageItem = ({ msg }) => {
  return (
    <div
      className={`p-3 rounded-lg max-w-xl ${
        msg.from === "user"
          ? "bg-blue-500 text-white self-end"
          : "bg-white text-gray-700 shadow"
      }`}
    >
      {msg.text}
    </div>
  );
};

export default MessageItem;
