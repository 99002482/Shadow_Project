import React, { Profiler } from 'react';
import { Link } from 'react-router-dom';
import profile from "./profile.png";
import logout from "./logout.png";
import './App.css';

function Header () {

  return (
    
    <section className="navbar">
    <div className="header" >  
    <ul className="header-list"> 
    <li className="company-name">COMPANY NAME</li>
    <li><Link to="/Login" className="navbar-item"><img height="50px" src={logout}></img></Link></li> 
    <li><Link to="/Profile" className="navbar-item"><img height="50px" src={profile}></img></Link></li>
    </ul> </div>
  </section>
 
  )

}

export default Header;