import React from 'react';

import './Header.styles.css';

const Header = props => {
  return (
    <div className='headerContainer'>
      <span className='titleHeader'>Welcome to Room: {props.room}</span>
      <div className='closeRoom'>
        <a href='/'>Close Room</a>
      </div>
    </div>
  )
}

export default Header;
