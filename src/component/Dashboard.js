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
  componentDidMount() {
    SitesApi().then((res) => {
      var ar = [];

      localStorage.setItem("org_name", res.name);
      localStorage.setItem("sites", JSON.stringify(res));

      for (var i of res.sites) {
        if (
          i.custom_attributes != undefined &&
          i.custom_attributes.WA_Entity_Type !== "site"
        ) {
          ar.push({ value: i.name, label: i.name });
        }
      }
      localStorage.setItem("loc", JSON.stringify(ar));
    });
  }
 
  render() {
    return (
      <div className="App">
        <Header />
        <div className="sidebar">
          <Sidebar />

          <div className="cardview">
            <Cardview />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
