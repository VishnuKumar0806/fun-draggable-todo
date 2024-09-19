import React, { useState, useEffect } from 'react';

const App = () => {
  const [timeoutId, setTimeoutId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Cleanup the timeout on component unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const start = () => {
    setMessage('started');
    const id = setTimeout(() => {
      setMessage('function done');
    }, 5000);
    setTimeoutId(id);
  };

  const stop = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setMessage('stopped');
      setTimeoutId(null);
    }
  };

  return (
    <div>
      <h6>{message}</h6>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Cancel</button>
    </div>
  );
};

export default App;
