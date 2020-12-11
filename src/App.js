import React from "react";
import "./asset/css/App.css";
import Login from "./component/Login";
import Dashboard from "../src/component/Dashboard";
import Profile from "../src/component/Profile";
import Device from "../src/component/Device";
import Header from "./component/Header";
import DeviceDetails from "./component/DeviceDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Header" component={Header} />
          <Route path="/Device" component={Device} />
          <Route path="/Devicedetails" component={DeviceDetails} />
          <Route path="" exact component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
