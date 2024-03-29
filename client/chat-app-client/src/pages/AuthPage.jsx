import {useState} from 'react'

const AuthPage = ({setUsername, backendUrl}) => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(user)
      const res = await fetch(backendUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(user),
      })
      if (res.status == 200) {
        setUsername(user.username);
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <h1>Authentication</h1>
      <div style={{ height: "50vh", display: "flex", flexDirection: "column" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>username:</label>
            <input type="text" placeholder="enter username" value={user.username} onChange={(e) => setUser( { ...user, username: e.target.value})}/>
          </div>
          <div>
            <label>password:</label>
            <input type="password" placeholder="enter password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage
