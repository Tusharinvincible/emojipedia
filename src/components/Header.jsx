import React from 'react';
import "./App.css"

const customStyle={
    opacity:"1"
}

function Header() {
  return <div className='header-background'>
      <h1 style={customStyle} >emojipedia</h1>
  </div>;
}


export default Header;