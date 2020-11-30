import { FormGroup, Label, Input, Button } from "reactstrap";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
    };
    this.Username = this.Username.bind(this);
    this.Password = this.Password.bind(this);
    this.Login = this.Login.bind(this);
  }

  Username(event) {
    this.setState({ Username: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }

  Login(event) {
    if (this.state.Username.length == 0) {
      alert("Username cannot be empty");
    } else if (this.state.Password.length == 0) {
      alert("Password cannot be empty");
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
          console.log(result);
          if (result.Status == null) {
            //alert('Invalid User');
            this.props.history.push("/Dashboard");
          } else alert("Login successful");
        });
    }
  }

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
                <FontAwesomeIcon icon={faUser} />
                &nbsp;Username
              </Label>
              <br />
              <input
                className="input"
                type="text"
                onChange={this.Username}
                placeholder="Username"
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
