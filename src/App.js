import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css'; // Import CSS file for styling

const ENDPOINT = 'https://ocutype.onrender.com';
const socket = io.connect(ENDPOINT);

const App = () => {
  const [alphabet, setAlphabet] = useState('Ma');
  const [suggestions, setSuggestions] = useState(["Man", "Make", "Mad"]);

  useEffect(() => {
    socket.on('recieve', (data) => {
      setAlphabet(data.alphabet);
      setSuggestions(data.suggestions);
    });
    return () => socket.disconnect();
  }, []);

  return (
    <div className="container">
      <h1 className="title">OCUTYPE</h1>
      <div className="content">
        <p className="alphabet">{alphabet}</p>
        <div className="suggestions">
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="suggestion">
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
