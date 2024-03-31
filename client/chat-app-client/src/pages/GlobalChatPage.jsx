import {useState, useEffect, useRef} from 'react';
import GlobalChatBox from '../components/GlobalChatBox';
import PrivateChatBox from '../components/PrivateChatBox';

import {socket} from "../socket.js";

// eslint-disable-next-line react/prop-types
const GlobalChatPage = ({ username }) => {
  const messageBoxArea = useRef();
  const [currentMsg, setCurrentMsg] = useState("");
  const [isGlobalChat, setIsGlobalChat] = useState(true);
  const [isChatListOpen, setIsChatListOpen] = useState(false);
  const [currentRoom, setCurrentRoom] = useState("");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // socket.connect();
    // socket.emit('userconnected', username)

    return () => {
      // socket.emit('userdisconnected', username)
      // socket.disconnect();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    
  // socket.on('rmessage', (username, message) => {
  //     setMessages([...messages, {username : username, message : message}]);
  //     if (messageBoxArea.current) {
  //         messageBoxArea.current.scrollIntoView();
  //     }
  // });



  return (
    <>
      <div style={{"height" : "100%"}}>
        <div style={{"background": "green"}}><h4>Username : {username}</h4></div>
        {isGlobalChat ? <GlobalChatBox socket={socket} username={username}/>: <PrivateChatBox />}
      </div>
    </>
  )
} 

export default GlobalChatPage;
