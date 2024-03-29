import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthPage from './pages/AuthPage';
import GlobalChatPage from './pages/GlobalChatPage';


function App() {
  const [username, setUsername] = useState("");
  const [backendUrl, setBackendUrl] = useState("https://871e-117-207-9-141.ngrok-free.app");
  return (
    <>
      {username.length > 1 ? <GlobalChatPage backendUrl={backendUrl} username={username}/>: <AuthPage backendUrl={backendUrl} setUsername={setUsername}/>}
      {/* <h1>hello</h1> */}
    </>
  )
}

export default App
