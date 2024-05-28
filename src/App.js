import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css"; // Import CSS file for styling

const ENDPOINT = "http://localhost:3001";
const socket = io.connect(ENDPOINT);

const App = () => {
  const [sentence, setSentence] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    socket.on("recieve", (data) => {
      setSentence(data.sentence);
      setSuggestions(data.suggestions);
    });
  }, [sentence]);

  return (
    <div className="container">
      <h1 className="title">OCUTYPE</h1>
      <div className="content">
        <p className="alphabet">{sentence}</p>
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
