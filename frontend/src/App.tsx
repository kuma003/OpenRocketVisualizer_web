import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('No messages yet...');
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000');
    ws.onopen = () => {
      console.log('WebSocket connected');
    };
    ws.onmessage = (event) => {
      setMessage(event.data);
    };
    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };
    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && input.trim()) {
      socket.send(input);
      setInput('');
    }
  };

  return (
    <div>
      <h1>WebSocket + DB Demo</h1>
      <p>Server says: {message}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default App;
