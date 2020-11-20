import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Dashboard from './Dashboard';
import {withRouter} from 'react-router-dom';


class Login extends Component {

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
        if(result.Status==null){
          //alert('Invalid User');
         this.props.history.push("/Dashboard")  
        }
        else
          alert('Login successful');
      })
    }
    
      render(){
      return (
          <div className='container'> 
        
        <form className="loginForm">
             <h1>
            <span className="font-weight-bold">LOGIN PAGE</span>
          </h1>
         <div className="border">       
            
          <FormGroup>
            <Label><b>Username</b></Label>
            <br/>
            <input className='input' type="text" onChange={this.Username} placeholder="Username"/>
          </FormGroup>
          <FormGroup>
            <Label><b>Password</b></Label>
            <br/>
            <input className='input' type="password" onChange={this.Password} placeholder="Password"/>
          </FormGroup>
          <Button  className='btn' onClick={this.Login} className="btn-lg btn-dark btn-block">Login</Button>
          </div>
        </form>
        </div>
        
      );
    }
    }
    
    export default Login;
    