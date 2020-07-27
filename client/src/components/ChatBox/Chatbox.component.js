import React from 'react';

import './Chatbox.styles.css'

import Header from '../Header/Header.component'

const Chatbox = props => {
  return (
    <div className='mainContainer'>
      <div className='chatBoxContainer'>
        <Header room={props.chatRoom}/>
      </div>
    </div>
  )
}

export default Chatbox;
