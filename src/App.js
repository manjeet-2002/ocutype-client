import {useEffect, useState} from "react";
import io from "socket.io-client";
import './App.css';
const socket = io.connect("http://localhost:3001");

function App() {

  const [msg,setMsg] = useState("");

  useEffect(()=>{
    console.log("useffect");
    socket.on("recieve",(data)=>{
      setMsg(msg+data.char);
    });
  },[msg]);

  return (
    <div className="main">
      <h1>Message :</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
