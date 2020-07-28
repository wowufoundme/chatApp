import React from 'react';

import './Input.styles.css';

const Input = props => {

  const { message, setMessage, sendMessage } = props;

  return (
    <div className='sendMessageContainer'>
      <input
        value={message}
        type='text'
        placeholder='Type message...'
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null }
        className='sendMessageInput'
      />
      <button
        type='submit'
        onClick={(event) => sendMessage(event)}
      >
        Send
      </button>
    </div>
  )
}

export default Input;
