import React, { createContext, useState, useEffect } from "react";
import { saveSessions, loadSessions } from "../APIs/localStorage";
import { getAIResponse } from "../APIs/api";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [sessions, setSessions] = useState(loadSessions());
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (sessions.length === 0) {
      createNewSession();
    }
  }, []);

  const createNewSession = () => {
    const newId = Date.now();
    const newSession = {
      id: newId,
      title: `New Chat`,
      timestamp: new Date().toISOString(),
      messages: [],
    };

    setSessions((prev) => {
      const updated = [...prev, newSession];
      saveSessions(updated);
      return updated;
    });
    setActiveSessionId(newId);
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const updatedSessions = sessions.map((s) =>
      s.id === activeSessionId
        ? {
            ...s,
            messages: [...s.messages, { from: "user", text }],
          }
        : s
    );

    setSessions(updatedSessions);
    saveSessions(updatedSessions);

    setLoading(true);

    const aiReply = await getAIResponse(text);

    const finalSessions = updatedSessions.map((s) =>
      s.id === activeSessionId
        ? {
            ...s,
            messages: [...s.messages, { from: "ai", text: aiReply }],
          }
        : s
    );

    setSessions(finalSessions);
    saveSessions(finalSessions);

    setLoading(false);
  };

  const deleteSession = (id) => {
    const filtered = sessions.filter((s) => s.id !== id);

    setSessions(filtered);
    saveSessions(filtered);

    if (filtered.length > 0) {
      setActiveSessionId(filtered[0].id);
    } else {
      createNewSession();
    }
  };

  const downloadChat = (session) => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(session, null, 2));

    const link = document.createElement("a");
    link.href = dataStr;
    link.download = `${session.title}_${session.id}.json`;
    link.click();
  };

  return (
    <ChatContext.Provider
      value={{
        sessions,
        activeSessionId,
        setActiveSessionId,
        createNewSession,
        sendMessage,
        loading,
        deleteSession,
        downloadChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
