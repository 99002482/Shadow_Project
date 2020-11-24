import { Button, FormGroup, Label, Input} from 'reactstrap';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import './App.css';


 

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
      if((this.state.Username).length==0)
      {
        alert("Username cannot be empty")
      }
      else if((this.state.Password).length==0)
      {
        alert("Password cannot be empty")
      }
      else{
      
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
  }
    
      render(){
      return (
        
          <div className='container1'> 
        
        <form className="loginForm">
             <h1>
            <span className="title">LOGIN </span>
          </h1>
         <div className="border">       
            
          <FormGroup>
            <br></br>
            <Label><FontAwesomeIcon icon={faUser} /><b>&nbsp;Username</b></Label>
            <br/>
             <input className='input' type="text" onChange={this.Username} placeholder="Username"/>
          </FormGroup>
          <FormGroup>
          <br></br>
            <Label><FontAwesomeIcon icon={faLock} /><b>&nbsp;Password</b></Label>
            <br/>
            <input className='input' type="password" onChange={this.Password} placeholder="Password"/>
          </FormGroup>
          <br/>
          <Button  className='button' onClick={this.Login} >Login</Button>
          </div>
          
        </form>
        </div>
        
      );
    }
    }
    
    export default Login;