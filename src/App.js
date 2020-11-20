import React from 'react';  
import './App.css';  
import Login from './Login';  
import Dashboard from './Dashboard';  
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';   
function App() {  
  return (  

            
    <Router>    

       
      
      <Redirect to="/Login" />
      <Switch>  

        <Route path='/Dashboard' component={Dashboard} />    

    </Switch>  
    
     <switch>
     {/* <div className='container'> */}
     <Route path='/Login' component={Login} />    
     {/* </div> */}
     </switch>

        
      
    </Router> 
   
   

  );  

}  


export default App;