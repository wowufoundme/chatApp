import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message/Message.component';

import './MessagesBox.styles.css';

const MessagesBox = props => {

  const { messages, name } = props;

  return (
    <ScrollToBottom>
      {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </ScrollToBottom>
  )
}

export default MessagesBox;
