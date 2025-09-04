import React from 'react';
import Header from './Header';

// Simple SVG icons
const PlusIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const UsersIcon = () => (
  <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="icon-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChatList = ({ chats, onChatSelect, onNewChat }) => {
  return (
    <div className="chat-list">
      <Header title="Team Chats" />
      
      <div className="chat-list-content">
        <button 
          onClick={onNewChat}
          className="new-chat-btn"
        >
          <PlusIcon />
          New Chat
        </button>
        
        <div>
          {chats.map(chat => (
            <div 
              key={chat.id}
              onClick={() => onChatSelect(chat)}
              className="chat-item"
            >
              <div className="chat-item-header">
                <h3 className="chat-item-title">
                  <UsersIcon />
                  {chat.name}
                </h3>
                <div className="chat-item-meta">
                  <span className="chat-item-time">
                    <ClockIcon />
                    {chat.time}
                  </span>
                  {chat.unread > 0 && (
                    <span className="unread-badge">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
              <p className="chat-item-message">{chat.lastMessage}</p>
              <div className="chat-item-participants">
                {chat.participants.length} participants
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;