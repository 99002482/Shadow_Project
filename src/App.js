import logo from './logo.svg';
import React, { Component} from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class App extends Component {

constructor(){
  super();
  this.state={
    Username: '',
    Password: ''
  }
  this.Username=this.Username.bind(this);
  this.Password=this.Password.bind(this);
  this.Login=this.Login.bind(this);

}

Username(event){
  this.setState({Username:event.target.value})
}
Password(event){
  this.setState({Password:event.target.value})
}

Login(event){
  debugger;
  fetch('https://jsonplaceholder.typicode.com/todos/1',{
    method:'post',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      Username:this.state.Username,
      Password:this.state.Password
    })
  }).then((Response)=>Response.json()).then((result)=>{
    console.log(result);
    if(result.Status==null)
      alert('Invalid User');
    else
      alert('Login successful');
  })
}

  render(){
  return (
    <form className="login-form">
      <h1>
        <span className="font-weight-bold">LOGIN PAGE</span>
      </h1>
      <FormGroup>
        <Label><b>Username</b></Label>
        <br/>
        <input type="text" onChange={this.Username} placeholder="Username"/>
      </FormGroup>
      <FormGroup>
        <Label><b>Password</b></Label>
        <br/>
        <input type="password" onChange={this.Password} placeholder="Password"/>
      </FormGroup>
      <Button onClick={this.Login} className="btn-lg btn-dark btn-block">Login</Button>
      
    </form>
  );
}
}

export default App;
