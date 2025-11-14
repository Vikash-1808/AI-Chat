export const loadSessions = () => {
  const data = localStorage.getItem("chat_sessions");
  return data ? JSON.parse(data) : [];
};

export const saveSessions = (sessions) => {
  localStorage.setItem("chat_sessions", JSON.stringify(sessions));
};
