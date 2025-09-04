import React, { useState } from 'react';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import { dummyChats, dummyMessages } from './data/dummyData';

function App() {
  const [currentScreen, setCurrentScreen] = useState('chatList');
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState(dummyChats);
  const [messages, setMessages] = useState(dummyMessages);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setCurrentScreen('chatWindow');
  };

  const handleNewChat = () => {
    setCurrentScreen('newChat');
  };

  const handleBack = () => {
    setCurrentScreen('chatList');
    setSelectedChat(null);
  };

  const handleSendMessage = (message) => {
    if (selectedChat) {
      const newMessage = {
        id: Date.now(),
        sender: 'Me',
        message: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true
      };

      // Update messages for the current chat
      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedChat.id]: [...(prevMessages[selectedChat.id] || []), newMessage]
      }));

      // Update the chat list with the new last message
      setChats(prevChats => 
        prevChats.map(chat => 
          chat.id === selectedChat.id 
            ? { ...chat, lastMessage: message, time: 'Now' }
            : chat
        )
      );
    }
  };

  const handleCreateChat = (participantName) => {
    const newChatId = Math.max(...chats.map(c => c.id)) + 1;
    const newChat = {
      id: newChatId,
      name: participantName,
      lastMessage: "Chat created",
      time: "Now",
      unread: 0,
      participants: [participantName]
    };

    // Add the new chat to the beginning of the list
    setChats(prevChats => [newChat, ...prevChats]);
    
    // Initialize empty messages for the new chat
    setMessages(prevMessages => ({
      ...prevMessages,
      [newChatId]: []
    }));

    // Navigate back to chat list
    setCurrentScreen('chatList');
  };

  const getCurrentMessages = () => {
    return selectedChat ? messages[selectedChat.id] || [] : [];
  };

  return (
    <div className="app-container">
      {currentScreen === 'chatList' && (
        <ChatList 
          chats={chats}
          onChatSelect={handleChatSelect}
          onNewChat={handleNewChat}
        />
      )}
      
      {currentScreen === 'chatWindow' && selectedChat && (
        <ChatWindow 
          chat={selectedChat}
          messages={getCurrentMessages()}
          onBack={handleBack}
          onSendMessage={handleSendMessage}
        />
      )}
      
      {currentScreen === 'newChat' && (
        <NewChat 
          onBack={handleBack}
          onCreateChat={handleCreateChat}
        />
      )}
    </div>
  );
}

export default App;