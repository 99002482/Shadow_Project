import { FormGroup, Label, Button } from "reactstrap";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../asset/css/App.css";
import { TokenDetailsApi } from "../services/TokenDetailsApi";
import { LocationApi } from "../services/LocationApi";
import { TokenApi } from "../services/TokenApi";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
    };
  }

  Username = (event) => {
    this.setState({ Username: event.target.value });
  };
  Password = (event) => {
    this.setState({ Password: event.target.value });
  };

  Login = (event) => {
    if (this.state.Username.length == 0) {
      alert("Username or Password field cannot be empty");
    } else if (this.state.Password.length == 0) {
      alert("Username or Password field cannot be empty");
    } else {
      TokenApi(this.state.Username, this.state.Password)
        .then((result) => {
          localStorage.setItem("tok", result.Token);

          TokenDetailsApi().then((res) => {
            localStorage.setItem("id", res.id);
            localStorage.setItem("username", res.display_name);
          });

          LocationApi().then((res) => {
            localStorage.setItem("adopter id", res.adopter_id);
            localStorage.setItem("org id", res.rules[0].site_id);
          });

          this.props.history.push("/Dashboard");
        })
        .catch((err) => {
          alert("Login failed...please check entered credentials");
          window.location.reload();
        });
    }
  };

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("Username", JSON.stringify(nextState.Username));
  }

  render() {
    return (
      <div className="container1">
        <form className="loginForm">
          <h1>
            <span className="title">Login</span>
          </h1>
          <div className="border">
            <FormGroup>
              <Label>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;Email Id
              </Label>
              <br />
              <input
                className="input"
                type="email"
                onChange={this.Username}
                placeholder="Email ID"
              />
            </FormGroup>
            <FormGroup>
              <br></br>
              <Label>
                <FontAwesomeIcon icon={faLock} />
                &nbsp;Password
              </Label>
              <br />
              <input
                className="input"
                type="password"
                onChange={this.Password}
                placeholder="Password"
              />
            </FormGroup>

            <Button className="button" onClick={this.Login}>
              Login
            </Button>
            <center>
              <p className="login-copyright">
                {" "}
                &copy;{new Date().getFullYear()} COMPANY NAME , ALL RIGHTS
                RESERVED{" "}
              </p>
            </center>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
