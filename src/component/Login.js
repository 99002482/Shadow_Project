import { FormGroup, Label, Input, Button } from "reactstrap";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "../asset/css/App.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
    };
  }

  Username=(event)=> {
    this.setState({ Username: event.target.value });
  }
  Password=(event)=> {
    this.setState({ Password: event.target.value });
  }

  Login=(event) =>{
    if (this.state.Username.length == 0) {
      alert("Username or Password field cannot be empty");
    } else if (this.state.Password.length == 0) {
      alert("Username or Password field cannot be empty");
    } else
     {
      fetch("https://localhost:44308/api/log/token", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: this.state.Username,
          password: this.state.Password,
          applicationId:"53b0eeff-3aa4-4bff-93bb-94e819965e8c"
        }),
      })
        .then((Response) => Response.json())
        .then((result) => {
          console.log(result);

           if (JSON.stringify(result)==="fail" && result.Token===null) {
             //if(!result.ok){

             alert('Login failed...please check entered credentials');
            
           } 
           else

           {
             
             localStorage.setItem("tok",result.Token)

             fetch("https://localhost:44308/api/login/tokdetails",{
               method:"post",
               headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
          

               },
               body: JSON.stringify({
                Token:localStorage.getItem('tok')
              })
             }).then((res)=>res.json()).then((res)=>{
               console.log(res);

               localStorage.setItem("id",res.id);
               localStorage.setItem("username",res.display_name);

             })



             fetch("https://localhost:44308/api/Org/loc",{
              method:"post",
              headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
         

              },
              body: JSON.stringify({
               Token:localStorage.getItem('tok')
             })
            }).then((res)=>res.json()).then((res)=>{


              console.log(res);
              console.log(res.rules[0].site_id);
              localStorage.setItem('adopter id',res.adopter_id);
               localStorage.setItem('org id',res.rules[0].site_id);
              

              

            })




             
             this.props.history.push("/Dashboard");
           }
        }).catch(err=>{
          alert("Login failed...please check entered credentials");
        })
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
