import { useRef, useState } from 'react'

// eslint-disable-next-line react/prop-types
const GlobalChatBox = ({ socket, username }) => {
    const messageBoxArea = useRef();
    const [messages, setMessages] = useState([]);
    const [currentMsg, setCurrentMsg] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        socket.emit('sendmessage', username, currentMsg)
        setCurrentMsg("");
    }

    return (
        <div style={{ "height": "100%" }}>
            <div><h3>Global Chat </h3></div>
            <div style={{ "height": "70vh", "display": "flex", "flexDirection": "column", "overflowY": "scroll", "justifyContent": "start", }} className={"message-box"}>
                {messages.map((item, i) => {
                    return (
                        <div key={i} style={{ "textAlign": "left" }} > <strong>{item.username} </strong> : {item.message} </div>
                    )
                })}
                <div ref={messageBoxArea}></div>
            </div>
            <div>
                <input type="text" placeholder="your message" value={currentMsg} onChange={(e) => setCurrentMsg(e.target.value)} />
                <button onClick={handleClick}>Send</button>
            </div>
        </div>
    )
}

export default GlobalChatBox