import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://127.0.0.1:4001';

function App() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('FromAPI', (data) => setResponse(data));

    return () => socket.disconnect();
  }, []);

  return (
    <p style={{ padding: '10px', backgroundColor: '#cecece', color: 'black' }}>
      {response}
    </p>
  );
}

export default App;
