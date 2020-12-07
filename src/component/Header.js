import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import profile from "../asset/images/profile.png";
import logout from "../asset/images/logout.png";
import "../asset/css/App.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
    this.Header = this.Header.bind(this);
    // this.Logout=this.Logout.bind(this);
  }

  Header(event) {
    var c = window.confirm("Do you want to Logout?");
    if (c == true) window.location.href = "/Login";
    else alert("You pressed cancel button");
  }

  render() {
    return (
      <section className="navbar">
        <div className="header">
          <ul className="header-list">
            <li className="company-name">COMPANY NAME</li>
            <li>
              <Link className="navbar-item">
                <img height="50px" onClick={this.Header} src={logout}></img>
              </Link>
            </li>
            <li>
              <Link to="/Profile" className="navbar-item">
                <img height="50px" src={profile}></img>
              </Link>
            </li>
          </ul>{" "}
        </div>
      </section>
    );
  }
}

export default Header;
