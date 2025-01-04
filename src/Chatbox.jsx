import React, { useState } from 'react';

const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setIsVisible(!isVisible);
  };

  // Function to close the chatbot
  const closeChatbot = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {/* Floating Chatbot Button */}
      <button
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '15px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 9999,
        }}
      >
        Chat
      </button>

      {/* Chatbot iframe */}
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            width: '300px',
            height: '400px',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
          }}
        >
          <button
            onClick={closeChatbot}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#ff0000',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            X
          </button>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/azaX1KfK8G_dKOzaIvSbI"
            width="100%"
            height="100%" // Corrected height style
            frameBorder="0"
            style={{ borderRadius: '8px' }} // Add border-radius to the iframe as well
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
