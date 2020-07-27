import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Chatbox from '../Chatbox/Chatbox.component';

let socket;

const Chat = props => {
  const { location } = props;
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const url = 'localhost:5000';
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(url);
    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {
    });
    document.title = `Room: ${room}`;
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
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(message, messages);

  return (
    <div className='container'>
      <Chatbox chatRoom={room}/>
      <input value={message} onChange={(event) => setMessage(event.target.value)} onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null }/>
    </div>
  )
}

export default Chat;
