import {useState, useEffect, useRef} from 'react';

import {socket} from "../socket.js";

const GlobalChatPage = ({username, backendUrl}) => {
  const messageBoxArea = useRef();
  const [currentMsg, setCurrentMsg] = useState("");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.connect();

    

    return () => {
      socket.disconnect();
    }
  }, [])
    
  socket.on('rmessage', (username, message) => {
      setMessages([...messages, {username : username, message : message}]);
      if (messageBoxArea.current) {
          messageBoxArea.current.scrollIntoView();
      }
  });

  const handleClick = (e) => {
    e.preventDefault();
    socket.emit('sendmessage', username, currentMsg)
    setCurrentMsg("");
  }

  return (
    <>
      <div style={{"height" : "100%"}}>
        <div style={{"background": "green"}}><h4>Username : {username}</h4></div>
        <div><h3>Global Chat </h3></div>
        <div style={{"height" : "70vh", "display" : "flex", "flexDirection" : "column", "overflowY" : "scroll", "justifyContent": "start",}} className={"message-box"}>
        {messages.map((item, i)=> {
          return (
            <div key={i} style={{"textAlign" : "left"}} > <strong>{item.username} </strong> : {item.message} </div>
        )
        })}
          <div ref={messageBoxArea}></div>
        </div>
        <div>
          <input type="text" placeholder="your message" value={currentMsg} onChange={(e) => setCurrentMsg(e.target.value)}/>
          <button onClick={handleClick}>Send</button>
        </div>
      </div>
    </>
  )
} 

export default GlobalChatPage;
