import React from "react";
import "./asset/css/App.css"
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Profile from "./component/Profile";
import Device from "./component/Device";
import Header from "./component/Header";
import Devicedetails from "./component/Devicedetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
          <Route path="/Devicedetails" component={Devicedetails} />
          <Route path="" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
