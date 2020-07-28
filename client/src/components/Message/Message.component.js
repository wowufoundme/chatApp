import React from 'react';

import './Message.styles.css';

const Message = props => {

  const { name } = props;
  const { user, text } = props.message;

  let isSentByCurrentUser = false;
  const trimmedUser = user.trim().toLowerCase();
  const trimmedName = name.trim().toLowerCase();

  if ( trimmedName === trimmedUser ) {
    isSentByCurrentUser = true;
  }
  
  return (
    <div className='messageBox'>
      <div className='messageSender'>
        {user}
      </div>
      <div className='messageSent'>
        {text}
      </div>
    </div>
  )
}

export default Message;
