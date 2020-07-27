import React from 'react';

import './Header.styles.css';

const Header = props => {
  return (
    <div className='headerContainer'>
      <h3>Welcome to Room: {props.room}</h3>
      <div className='closeRoom'>
        <a href='/'>Close Room</a>
      </div>
    </div>
  )
}

export default Header;
