import React, { useState } from 'react';
import Header from './Header';
import MessageBubble from './MessageBubble';
import { aiContent } from '../data/dummyData';

// SVG Icons
const BotIcon = () => (
  <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const SendIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ChatWindow = ({ chat, messages, onBack, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const getSummary = () => {
    return aiContent.summaries[chat.id] || aiContent.summaries.default;
  };

  const getSuggestion = () => {
    return aiContent.suggestions[chat.id] || aiContent.suggestions.default;
  };

  const useSuggestion = () => {
    setNewMessage(getSuggestion());
    setShowSuggestion(false);
  };

  return (
    <div className="chat-window">
      <Header 
        title={chat.name} 
        onBack={onBack} 
        showBack={true}
      />
      
      {/* AI Action Buttons */}
      <div className="ai-actions">
        <div className="ai-actions-buttons">
          <button 
            onClick={() => setShowSummary(!showSummary)}
            className="ai-btn summary"
          >
            <BotIcon />
            AI Summary
          </button>
          <button 
            onClick={() => setShowSuggestion(!showSuggestion)}
            className="ai-btn reply"
          >
            <SparklesIcon />
            Smart Reply
          </button>
        </div>
        
        {showSummary && (
          <div className="ai-result summary">
            <div className="ai-result-header summary">
              <BotIcon />
              <span>AI Summary</span>
            </div>
            <div className="ai-result-content">{getSummary()}</div>
          </div>
        )}
        
        {showSuggestion && (
          <div className="ai-result reply">
            <div className="ai-result-header reply">
              <SparklesIcon />
              <span>Suggested Reply</span>
            </div>
            <div className="ai-result-content italic">"{getSuggestion()}"</div>
            <button 
              onClick={useSuggestion}
              className="use-suggestion-btn"
            >
              Use this suggestion
            </button>
          </div>
        )}
      </div>
      
      {/* Messages */}
      <div className="messages-area">
        {messages.map(msg => (
          <MessageBubble 
            key={msg.id}
            message={msg.message}
            sender={msg.sender}
            time={msg.time}
            isMe={msg.isMe}
          />
        ))}
      </div>
      
      {/* Message Input */}
      <div className="message-input">
        <div className="message-input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="message-input-field"
          />
          <button
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className="send-btn"
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;