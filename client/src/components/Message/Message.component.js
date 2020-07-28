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

  // Auxialliary function to capitalize first letter of string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (

    <div className='messagesContainer'>
      {
        isSentByCurrentUser ? (
          <div className='messageBox mbRight'>
            <div className='messageSender messageSenderRight'>
              You
            </div>
            <div className='messageSent'>
              {text}
            </div>
          </div>
        ) : (
          <div className='messageBox'>
            <div className='messageSender'>
              {capitalizeFirstLetter(user)}
            </div>
            <div className='messageSent'>
              {text}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Message;
