import {useEffect, useState} from "react";
import io from "socket.io-client";
import './App.css';
const socket = io.connect("https://ocutype.onrender.com");

function App() {

  const [msg,setMsg] = useState("");
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log("useffect");
    socket.on("recieve",(data)=>{
      setMsg(msg+data.char);
    });
    socket.on("nodemcu",(data)=>{
      setCount(count+1);
    })
  },[msg, count]);

  return (
    <>
      <div className="main">
        <h1>Message :</h1>
        <h2>{msg}</h2>
      </div>
      <h2 className="nodemcu">
        Number of blinks detected : {count}
      </h2>
    </>
  );
}

export default App;
