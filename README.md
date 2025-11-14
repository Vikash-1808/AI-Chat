AI Chat App — README

A simple and responsive AI chat interface built with React, powered by the Gemini API, featuring multi-session chat, message persistence, and chat export.

 Features
1. Chat Sessions

Create new chat sessions

Switch between multiple sessions

Delete specific sessions

Session titles automatically update based on first message

2. AI Messaging

Send user messages and receive AI responses using the Gemini 2.5 Flash API

Typing indicator / loading spinner

Automatic scroll-to-bottom for every new message

3. Persistent Storage

All sessions and messages automatically saved in localStorage

Reloading the browser keeps the entire chat history intact

4. Download Features

Download entire chat history as a .txt file

Download a specific chat from the sidebar

Clean formatting for user/AI messages

5. UI Components

Sidebar for sessions

Message list and message bubble UI

Chat input with Enter/Shift+Enter handling

Mobile-responsive sidebar toggle

6. Code Structure

Modular React component architecture

Centralized global state using ChatContext

Shared utilities for localStorage + API handling

🛠️ Tech Stack

React + Vite

Context API

Gemini API (Google Generative Language API)

TailwindCSS

Axios