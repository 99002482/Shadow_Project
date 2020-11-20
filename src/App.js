import React from 'react';  
import './App.css';  
import Login from './Login';  
import Dashboard from './Dashboard';  
import Profile from './Profile';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';   
function App() {  
  return (  

            
    <Router>    

       <div className="App">
         
       <Redirect to="/Login" />  
      {/* <Login/> */}
         
      <switch>
      
     <Route path='/Login' component={Login} />    
   
     </switch>
      <Switch>  
      <Route path='/Profile' component={Profile} />    

      <Route path='/Dashboard' component={Dashboard} />    

    </Switch>  
    
    

    </div>   
      
    </Router> 
   
   

  );  

}  


export default App;