import React from 'react';  
import './App.css';  
import Login from './Login';  
import Dashboard from './Dashboard';  
import Profile from './Profile';
import Device from './Device'
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';   
function App() {  
  return (  

            
    <Router>    

       <div className="App">
         
       <Redirect to="/Login" />  
     
         
      <switch>
      
     <Route path='/Login' component={Login} />    
   
     </switch>
      <Switch>  
      <Route path='/Login' component={Login} />    
      <Route path='/Profile' component={Profile} />    
      <Route path='/Dashboard' component={Dashboard} />  
      <Route path='/Header' component={Header} />     
      <Route path='/Device' component={Device} />   

    </Switch>  
    
    

    </div>   
      
    </Router> 
   
   

  );  

}  


export default App;