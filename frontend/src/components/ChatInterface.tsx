import React, { useState } from 'react';

const ChatInterface = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="p-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded"
        placeholder="Type your message..."
      />
      <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
};

export default ChatInterface;