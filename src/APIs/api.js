import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export const getAIResponse = async (message) => {
  try {
    const res = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: message }] }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-client": "genai-js/1.0.0",
        },
      }
    );

    return (
      res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response."
    );
  } catch (e) {
    console.error("Gemini API Error:", e.response?.data || e.message);
    return "API Error .";
  }
};

