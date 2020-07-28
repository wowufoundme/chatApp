import React from 'react';

import './Chatbox.styles.css'

import Header from '../Header/Header.component'
import MessagesBox from '../MessagesBox/MessagesBox.component';
import Input from '../Input/Input.component';

const Chatbox = props => {

  const {
    name,
    chatRoom,
    message,
    messages,
    setMessage,
    sendMessage
  } = props;

  return (
    <div className='mainContainer'>
      <div className='chatBoxContainer'>
        <Header room={chatRoom}/>
        <MessagesBox messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
    </div>
  )
}

export default Chatbox;
