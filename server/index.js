const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const { addUser, getUser, removeUser, getUsersInRoom } = require('./user');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);
app.use(cors());

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }) => {
    const { error, user } = addUser({ id: socket.id, name, room })
    console.log(`${name} has joined the room ${room}`);

    if (error) {
      console.log(error);
    }

    socket.emit('message', { user: 'admin', text:`Hello ${user.name}. Welcome to Room: ${user.room}`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined the room`});
    socket.join(user.room);
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)
    io.to(user.room).emit('message', { user: user.name, text: message })
    callback();
  })

  socket.on('roomData', (users, callback) => {
    const user = getUser(socket.id)
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    callback();
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left the chat` });
    }
  })

})


server.listen(PORT, () => console.log(`server has started on port ${PORT}`))

// To terminate node.exe on Windows:
/*
  taskkill /F /IM node.exe
*/
