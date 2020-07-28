import React from 'react';

import './Input.styles.css';

const Input = props => {

  const { message, setMessage, sendMessage } = props;

  return (
    <div className='sendMessageContainer'>
      <div className='inputHolder'>
        <input
          value={message}
          type='textarea'
          placeholder='Type message...'
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null }
          className='sendMessageInput'
        />
        <button
          type='submit'
          onClick={(event) => sendMessage(event)}
          className='sendButton'
        >
          Send →
        </button>
      </div>
    </div>
  )
}

export default Input;
