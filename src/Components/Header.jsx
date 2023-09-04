import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1><span>Launch Your App</span> With Confidence And Creativity</h1>
        <p className='details' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, praesentium esse facere sed ducimus corporis, quisquam saepe dolor excepturi similique voluptatum harum adipisci
         ipsam nisi eaque maxime soluta vel exercitationem!</p>
         <a href='#' className='cv-btn'>Download</a>
      </div>
    </div>
  )
}

export default Header;
