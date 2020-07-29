import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Chatbox from '../Chatbox/Chatbox.component';

import './Chat.styles.css';

let socket;

const Chat = props => {
  const { location } = props;
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [usersInRoom, setUsersInRoom] = useState(['Admin']);
  const url = 'https://chatapp-1201.herokuapp.com/';
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(url);
    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {
    });
    document.title = `Room: ${room} | User: ${name}`;
    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [url, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => {
        setMessage('');
      });
    }
  }

  useEffect(() => {
    socket.on('roomData', (newUsers) => {
      setUsersInRoom([
        ...usersInRoom,
        newUsers
      ]);
      newUsers.users.map((elem) =>
        setUsersInRoom([
          ...usersInRoom,
          elem.name
        ])
      );
    })
  }, [usersInRoom]);

  const getUsers = event => {
    socket.emit('roomData', (usersInRoom), () => {
      console.log('getting users list...');
    })
  }

  return (
    <div className='container'>
      <Chatbox
        name={name}
        chatRoom={room}
        message={message}
        messages={messages}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  )
}

export default Chat;
