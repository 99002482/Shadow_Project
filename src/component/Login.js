import { FormGroup, Label, Button } from "reactstrap";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../asset/css/App.css";
import { TokenDetailsApi } from "../services/TokenDetailsApi";
import { LocationApi } from "../services/LocationApi";
import { TokenApi } from "../services/TokenApi";
import { SitesApi } from "../services/SitesApi";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
      //setting username and password state empty
    };
  }

  Username = (event) => {
    this.setState({ Username: event.target.value });
    //Setting username field to the user entered name
  };
  Password = (event) => {
    this.setState({ Password: event.target.value });
    //Setting Password field to the user entered password
  };

  Login = (event) => {
    if (this.state.Username.length === 0 || this.state.Password.length === 0) {
      alert("Username or Password field cannot be empty");
      // checking username and password fields are empty and alerting message
    } else {
      TokenApi(this.state.Username, this.state.Password) //Fetching token from api
        .then((result) => {
          localStorage.setItem("tok", result.Token); //Storing Token value in local storage

          TokenDetailsApi().then((res) => {
            localStorage.setItem("id", res.id); //Storing logged in userid in local storage
            localStorage.setItem("username", res.display_name); //Storing username in local storage
          });

          LocationApi().then((res) => {
            //Fetching location from api
            localStorage.setItem("adopter id", res.adopter_id); //Storing adopter id fetched from api in local storage
            localStorage.setItem("org id", res.rules[0].site_id); //Storing organisation id fetched from api in local storage
          });

          SitesApi().then((res) => {
            //Fetching organisation and sites from api
            var ar = [];
            var all = [];
            localStorage.setItem("org_name", res.name); //Storing organisation name fetched from api in local storage
            console.log(res);
            localStorage.setItem("sites", JSON.stringify(res)); //Storing site names fetched from api in local storage

            for (var i of res.sites) {
              if (
                i.custom_attributes !== undefined &&
                i.custom_attributes.WA_Entity_Type !== "site"
              ) {
                //Checking site name in defined or undefined
                ar.push({ value: i.name, label: i.name });
                //Storing the site names in array
              }
            }
            localStorage.setItem("loc", JSON.stringify(ar)); //Storing location name in local storage

          //   for (var j of res.sites) {
          //     //Fetching all sites details
          //     for (var i of JSON.parse(localStorage.getItem("loc"))) {
          //       if (i.value == j.name) {
          //         for (var k of j.sites) {
          //           if (
          //             k.custom_attributes != undefined &&
          //             k.custom_attributes.WAS_Entity_Type === "site"
          //           ) {
          //             all.push(k.name);
          //           }
          //         }
          //       }
          //     }
          //   }
          //   localStorage.setItem("loc_sites", JSON.stringify(all));
          });

          this.props.history.push("/Dashboard"); // Redirecting to dashboard page after succesful login
        })
        .catch((err) => {
          alert("Login failed...please check entered credentials"); //Alerting user if credentials are not met
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
        <div className="device-title">
          <p>DEVICE HEALTH MONITORING SYSTEM</p>
        </div>

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
                &copy;{new Date().getFullYear()} LTTS POC , ALL RIGHTS RESERVED{" "}
              </p>
            </center>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
