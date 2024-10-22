// components/ChatRoom.js

'use client'

import "../chatroom.css";
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io();

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (input) {
      socket.emit('message', input);
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  );
};

export default ChatRoom;
