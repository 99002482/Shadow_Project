import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Cardview from "./Cardview";
import "../asset/css/App.css";

class Dashboard extends Component {
  componentDidMount() {
    fetch("https://localhost:44308/api/Loc/site", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem("tok"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        var ar = [];
        console.log(res);
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
        console.log(ar);
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
