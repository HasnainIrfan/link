import React from 'react';
import './Navbar.css';
import LOGO from '../../img/Navbar/logo.png';
import { UilSearchAlt } from '@iconscout/react-unicons';
import { UilBars } from '@iconscout/react-unicons';
const Navbar = () => {
  return (
    <>
    <div className="navbar-wrapper">
        <div className="navbar-l">
          <div className="navbar-logo">
            <img src={LOGO} alt=""/>
          </div>
        </div>
        <div className="navbar-b">
          <ul>
            <li>Company ^</li>
            <li>Anchoreth</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
        <div className="navbar-r">
          <div className="navbar-Country">
          </div>
          <h3>EN</h3>
          <span><UilSearchAlt /></span>
        <div className="navbar-toggle">
          <span><UilBars/></span>
        </div>
        </div>

    </div>
    </>
  )
}

export default Navbar