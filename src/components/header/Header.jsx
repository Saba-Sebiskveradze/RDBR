import React from 'react'
import logo from '../../img/logo.png';
import "../header/header.css";
const Header = () => {
  return (
    <div className='header'>
      <img src= {logo} alt="logo"  className='logo'/>
    </div>
  )
}

export default Header