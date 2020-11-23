import React from "react";
import './App.css';  

function Footer() {
  return (
    <div className="main-footer"> 
          <p className="col-sm">
            &copy;{new Date().getFullYear()} COMPANY NAME | All rights reserved |
            Terms Of Service | Privacy
          </p>
    </div>
  );
}

export default Footer;