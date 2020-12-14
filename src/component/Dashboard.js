import React, { Component } from "react";
//import disableBrowserBackButton from 'disable-browser-back-navigation';

import Sidebar from "./Sidebar";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Cardview from "./Cardview";
import "../asset/css/App.css";
import { SitesApi } from "../services/SitesApi";
//disableBrowserBackButton();

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="sidebar">
          <Sidebar />
          <div className="dashboard_app">
          <div className="cardview">
            <Cardview />
          </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
