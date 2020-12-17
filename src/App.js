import React from "react";
import "./asset/css/App.css";
import Login from "./component/Login";
import Dashboard from "../src/component/Dashboard";
import Profile from "../src/component/Profile";
import Device from "../src/component/Device";
import Header from "./component/Header";
import DeviceDetails from "./component/DeviceDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function SecuredRoute(props) {
  return (
    <Route
      path={props.path}
      render={(data) =>
        localStorage.getItem("Auth") === "true" ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login" component={Login} />
          <SecuredRoute path="/Profile" component={Profile} />
          <SecuredRoute path="/Dashboard" component={Dashboard} />
          <SecuredRoute path="/Header" component={Header} />
          <SecuredRoute path="/Device" component={Device} />
          <SecuredRoute path="/Devicedetails" component={DeviceDetails} />
          <Route path="/" exact component={Login} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
