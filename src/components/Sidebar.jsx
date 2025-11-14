import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Trash2, Download, MessageSquarePlus } from "lucide-react";

const Sidebar = ({ closeSidebar }) => {
  const {
    sessions,
    activeSessionId,
    setActiveSessionId,
    createNewSession,
    deleteSession,
    downloadChat,
  } = useContext(ChatContext);

  return (
    <div className="w-64 h-full bg-[#f7f7f7] text-black p-4 flex flex-col border-r border-gray-200">

      
      <button
        className="md:hidden bg-red-500 text-white px-3 py-1 rounded mb-3"
        onClick={closeSidebar}
      >
        ✖ Close
      </button>


      <button className="
          flex items-center gap-2 p-3 
          bg-[#e1e1e1] hover:bg-[#d9d9d9]
          text-black transition rounded-xl mb-4 shadow-sm
          border border-gray-300
        "
        onClick={() => {
          createNewSession();
          closeSidebar?.();
        }}
      >
        <MessageSquarePlus size={18} /> New Chat
      </button>

    
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {sessions.map((s) => (
          <div
            key={s.id}
            className={`
              group px-3 py-3 rounded-xl cursor-pointer border
              flex items-center justify-between
              transition-all shadow-sm
              ${
                activeSessionId === s.id
                  ? "bg-[#e3e3e3] border-gray-400"
                  : "bg-[#f0f0f0] hover:bg-[#e6e6e6] border-gray-300"
              }
            `}
            onClick={() => {
              setActiveSessionId(s.id);
              closeSidebar?.();
            }}
          >
         
            <div className="font-normal text-[15px] truncate w-[75%]">
              {s.title}
            </div>

         
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
              <Download
                size={18}
                className="cursor-pointer hover:scale-110 text-gray-700"
                onClick={(e) => {
                  e.stopPropagation();
                  downloadChat(s);
                }}
              />

              <Trash2
                size={18}
                className="cursor-pointer hover:scale-110 text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSession(s.id);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
