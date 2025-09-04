import React from 'react';

const MessageBubble = ({ message, sender, time, isMe }) => {
  return (
    <div className={`message-bubble ${isMe ? 'me' : 'other'}`}>
      <div className={`message-content ${isMe ? 'me' : 'other'}`}>
        {!isMe && (
          <div className="message-sender">
            {sender}
          </div>
        )}
        <div className="message-text">
          {message}
        </div>
        <div className={`message-time ${isMe ? 'me' : 'other'}`}>
          {time}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;