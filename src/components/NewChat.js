import React, { useState } from 'react';
import Header from './Header';
import { aiContent } from '../data/dummyData';

// SVG Icons
const SparklesIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const NewChat = ({ onBack, onCreateChat }) => {
  const [participantName, setParticipantName] = useState('');
  const [showIcebreaker, setShowIcebreaker] = useState(false);
  const [currentIcebreaker, setCurrentIcebreaker] = useState('');

  const handleCreate = () => {
    if (participantName.trim()) {
      onCreateChat(participantName.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreate();
    }
  };

  const generateIcebreaker = () => {
    const randomIndex = Math.floor(Math.random() * aiContent.icebreakers.length);
    setCurrentIcebreaker(aiContent.icebreakers[randomIndex]);
    setShowIcebreaker(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentIcebreaker).then(() => {
      // In a real app, you might show a toast notification here
      console.log('Icebreaker copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="new-chat">
      <Header 
        title="New Chat" 
        onBack={onBack} 
        showBack={true}
      />
      
      <div className="new-chat-content">
        <div className="new-chat-form">
          <div className="new-chat-card">
            <h2 className="new-chat-title">Start a Conversation</h2>
            
            <div className="form-group">
              <label className="form-label">
                Participant Name
              </label>
              <input
                type="text"
                value={participantName}
                onChange={(e) => setParticipantName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter name or team..."
                className="form-input"
              />
            </div>
            
            <button
              onClick={handleCreate}
              disabled={!participantName.trim()}
              className="create-chat-btn"
            >
              Create Chat
            </button>
            
            <div className="ai-section">
              <button 
                onClick={generateIcebreaker}
                className="icebreaker-btn"
              >
                <SparklesIcon />
                Generate AI Icebreaker
              </button>
              
              {showIcebreaker && (
                <div className="icebreaker-result">
                  <div className="icebreaker-header">
                    <SparklesIcon />
                    <span>AI-Generated Icebreaker</span>
                  </div>
                  <div className="icebreaker-content">"{currentIcebreaker}"</div>
                  <button 
                    onClick={copyToClipboard}
                    className="copy-btn"
                  >
                    Copy to clipboard
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChat;