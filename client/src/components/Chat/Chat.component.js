import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = props => {
  const { location } = props;
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const url = 'localhost:5000';
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(url);
    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {

    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }

  }, [url, location.search])

  return (
    <div>
      <h1>Hello world Chat</h1>
    </div>
  )
}

export default Chat;
