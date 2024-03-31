import {useState} from 'react'

// eslint-disable-next-line react/prop-types
const AuthPage = ({ setUsername, backendUrl }) => {
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
    <div className='login__page'>
      <h1 className='login__heading'>Authentication</h1>
      <div className='login__box' style={{ height: "50vh", display: "flex", flexDirection: "column" }}>
        <form onSubmit={handleSubmit}>
          <div style={{"display" : 'flex', "flexDirection" : "column"}}>
            <label className='login__label'>username:</label>
            <input className='login__input' type="text" placeholder="enter username" value={user.username} onChange={(e) => setUser( { ...user, username: e.target.value})}/>
          </div>
          <div style={{"display" : 'flex', "flexDirection" : "column"}}>
            <label className='login__label'>password:</label>
            <input className='login__input' type="password" placeholder="enter password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
          </div>
          <button className='login__button' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage
