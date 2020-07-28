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
    setMessage,
    sendMessage
  } = props;

  return (
    <div className='mainContainer'>
      <div className='chatBoxContainer'>
        <Header room={chatRoom}/>
        <MessagesBox />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        <input
          value={message}
          type='text'
          placeholder='Type message...'
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null }
          className='sendMessageInput'
        />
      </div>
    </div>
  )
}

export default Chatbox;
