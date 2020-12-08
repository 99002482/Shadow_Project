import { FormGroup, Label, Button } from "reactstrap";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../asset/css/App.css";
//import {LoginService} from '../services/LoginApi'
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
    if (this.state.Username.length == 0 || this.state.Password.length == 0) {
      alert("Username or Password field cannot be empty");
    } else {
      fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: this.state.Username,
          Password: this.state.Password,
        }),
      })
        .then((Response) => Response.json())
        .then((result) => {
          if (result.Status == null) {
            //alert('Invalid User');
            this.props.history.push("/Dashboard");
          } else alert("Login successful");
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
                type="text"
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
                &copy;{new Date().getFullYear()} EATON PROJECT , ALL RIGHTS
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
