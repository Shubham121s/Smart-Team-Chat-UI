import React from 'react';

// Simple SVG icons as React components
const MessageSquareIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const Header = ({ title, onBack, showBack = false }) => {
  return (
    <div className="header">
      {showBack && (
        <button 
          onClick={onBack} 
          className="header-back-btn"
          aria-label="Go back"
        >
          <ArrowLeftIcon />
        </button>
      )}
      <div className="header-title">
        <MessageSquareIcon />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Header;