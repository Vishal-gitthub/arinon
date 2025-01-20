import React, { useState } from 'react';
import chatbotLogo from './Image_Files/Icons_File/ai-assistant_logo.gif';
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
                    bottom: '0px',
                    left: '0px',
                    border: 'none',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    zIndex: 9999,
                }}
                className='bg-transparent'
            >
                <div className='w-36'>
                    <img src={chatbotLogo} alt='' className='rounded-full' />
                </div>
            </button>

            {/* Chatbot iframe */}
            {isVisible && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '0px',
                        left: '0px',
                        zIndex: 9999,
                        width: '400px',
                        height: '600px',
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
                            top: '0px',
                            left: '0px',
                            backgroundColor: '#fff',
                            color: 'black',
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
                        src='https://www.chatbase.co/chatbot-iframe/bSmGcB_LErOQOJ5LSw0ST'
                        width='100%'
                        height='100%' // Corrected height style
                        frameBorder='0'
                        style={{ borderRadius: '8px' }} // Add border-radius to the iframe as well
                    />
                </div>
            )}
        </div>
    );
};

export default Chatbot;
