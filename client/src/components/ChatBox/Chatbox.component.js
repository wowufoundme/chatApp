import React from 'react';

import './Chatbox.styles.css'

import Header from '../Header/Header.component'
import MessagesBox from '../MessagesBox/MessagesBox.component';
import Input from '../Input/Input.component';

const Chatbox = props => {

  const {
    chatRoom,
    message,
    setMessage,
    sendMessage
  } = props;

  return (
    <div className='mainContainer'>
      <div className='chatBoxContainer'>
        <Header room={chatRoom}/>
        <MessagesBox />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
    </div>
  )
}

export default Chatbox;
