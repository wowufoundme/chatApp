import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.styles.css'

const Join = props => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join a room</h1>
        <div className='formInput'>
          <input placeholder='John Doe' className='formInputMain nameInput' type='text' onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='formInput'>
          <input placeholder='10012' className='formInputMain roomInput mt-20' type='text' onChange={(event) => setRoom(event.target.value)} />
        </div>
        <div className='buttonContainer'>
          <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className='button mt-20' type='submit'>{'Join Room'.toUpperCase()}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Join;
