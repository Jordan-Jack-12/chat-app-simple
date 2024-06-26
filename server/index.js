const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require('cors');
const app = express();
const httpSever = createServer(app);

const findUser = (db, username, password) => {
  for (let i = 0; i < db.length; i++) {
    if (db[i].username == username && db[i].password == password) {
      return true;
    }
  }
  return false;
}

require('dotenv').config();
app.use(cors({origin: [process.env.LOCAL_CLIENT_URL, process.env.PUBLIC_CLIENT_URL]}))
app.use(express.json())

const db = [{username: "suresh", password: "1234"}, {username: "ankit", password: "ankit"}, {username: "omm", password: "ommprakash"}, {username: "kartik", password: "kartik"}];

const onlineUser = [];

const io = new Server(httpSever, {
  cors : {
    origin: [process.env.LOCAL_CLIENT_URL, process.env.PUBLIC_CLIENT_URL] // configure to the ngrok tunnel domain for the client side
  }
});

io.on('connection', (socket) => {
  socket.on('userconnected', (username) => {
    console.log("a user connected to server " + username);
    io.emit('rmessage', username, username + " joined the chat")
  })

  socket.on('sendmessage', (username, message) => {
    io.emit('rmessage', username, message);
    console.log(onlineUser);
  })

  socket.on('userdisconnected', (username) => {
    io.emit('rmessage', "SERVER", `${username} left the global chat`)
  })

})

app.get("/", (req, res) => {
  res.send("hello from the chat server");
})

app.post("/login", (req, res) => {
  const {username, password} = req.body;
  const user = findUser(db, username, password);
  if (user === false) {
    return res.status(404).json({message: "username or password is wrong"});
  }
  onlineUser.push(username);
  console.log(onlineUser);
  return res.status(200).json({message: "authentication success"});
})

httpSever.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
  });
