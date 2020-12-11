import React, { Component } from "react";
import profile from "../asset/images/profile.png";
import logout from "../asset/images/logout.png";
import "../asset/css/App.css";
import * as faicons from "react-icons/fc";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
    this.Profile = this.Profile.bind(this);
    this.Logout = this.Logout.bind(this);
    this.back = this.back.bind(this);
    this.forward = this.forward.bind(this);
  }

  Logout(event) {
    var c = window.confirm("Do you want to Logout?");
    if (c == true) window.location.href = "/Login";
    else alert("You pressed cancel button");
  }

  Profile(event) {
    window.location.href = "/profile";
  }
  back(event) {
    window.history.go(-1);
  }
  forward(event) {
    window.history.go(1);
  }

  render() {
    return (
      <section className="navbar">
        <div className="header">
          <ul className="header-list">
            <li className="company-name">
              <faicons.FcPrevious size={40} onClick={this.back} />
            </li>
            <li className="company-name">
              <faicons.FcNext size={40} onClick={this.forward} />
            </li>
            <li className="company-name">
              EATON SHADOW PROJECT POC{" "}
              <center>
                Welcome user : {JSON.parse(localStorage.getItem("Username"))}{" "}
              </center>
            </li>

            <li>
              <img
                className="navbar-item"
                height="50px"
                onClick={this.Logout}
                src={logout}
              ></img>
            </li>
            <li>
              <img
                className="navbar-item"
                height="50px"
                onClick={this.Profile}
                src={profile}
              ></img>
            </li>
          </ul>{" "}
        </div>
      </section>
    );
  }
}

export default Header;
