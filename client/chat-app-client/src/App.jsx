import { useEffect, useState } from 'react'
import './App.css'
import AuthPage from './pages/AuthPage';
import GlobalChatPage from './pages/GlobalChatPage';
import { ENVIRONMENT, PUBLIC_SERVER_URL, LOCAL_SERVER_URL } from './config';

function App() {
  const [username, setUsername] = useState("");
  const [backendUrl, setBackendUrl] = useState("");

  useEffect(() => {
    if (ENVIRONMENT == "prod") {
      setBackendUrl(PUBLIC_SERVER_URL)
    } else {
      setBackendUrl(LOCAL_SERVER_URL)
    }
  },[])

  return (
    <>
      {username.length > 1 ? <GlobalChatPage username={username}/> : <AuthPage backendUrl={backendUrl} setUsername={setUsername}/>}
    </>
  )
}

export default App
