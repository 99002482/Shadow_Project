import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../asset/css/App.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { DeviceApi } from "../services/DeviceApi";

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      isLoaded: false,
      data: [],
    };
  }

  click(id) {
    localStorage.setItem("device_id", id);
  }

  componentDidMount() {
    DeviceApi().then((result) => {
      var dv = [];
      for (var i of result.devices) {
        dv.push({ name: i.name, id: i.id });
      }

      console.log(dv);
      localStorage.setItem("devices", JSON.stringify(dv));

      this.setState({
        isLoaded: true,
        data: dv,
      });
    });
  }

  render() {
    var { data } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="pageheading-device">
          <h2>Devices</h2>
        </div>
        <br></br>
        <br></br>
        <div className="device-table">
          {data.map(
            (item) => (
              fetch("https://localhost:44308/Api/Channel/ch", {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  Token: localStorage.getItem("tok"),
                  id: item.id,
                  
                }),
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
                  var ch = [];
                  var tg = [];
                  for (var i of result.channels) {
                    if (i.customProperties !== undefined) {
                      ch.push(i.name);
                      tg.push(i.tag);
                    }
                  }
                  localStorage.setItem("tg_value", JSON.stringify(tg));
                  localStorage.setItem("ch_value", JSON.stringify(ch));
                  JSON.parse(localStorage.getItem("tg_value")).map((i) =>
                    fetch("https://localhost:44308/Api/tag/value", {
                      method: "post",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        Token: localStorage.getItem("tok"),
                        id: item.id,
                        tag: i,
                      }),
                    })
                      .then((res) => res.json())
                      .then((result) => {
                        var vl = [];
                        for (var i of result.results) console.log(i.value);
                        vl.push(i.value);
                        console.log(vl);
                        localStorage.setItem("values", JSON.stringify(vl));
                      })
                  );
                }),
              (
                <table>
                  
                    <div key={item.id}>
                    <tr>
                      <th>Device Id: {item.id}</th>                      
                    
                    <td> Priority:{JSON.parse(localStorage.getItem("ch_value"))}</td>
                     
                    
                     <td> Reading:{JSON.parse(localStorage.getItem("values"))}</td></tr>
                  </div>
                 
                  <br />
                </table>
              )
            )
          )}
        </div>
        <div className="sidebar-device">
          <br></br>
          <center>
            <p className="devices-list">LIST OF DEVICES</p>
          </center>
          <br></br>
          {data.map((item) => (
            <div key={item.id}>
              <center>
                <br />
                <Link to="/DeviceDetails">
                  {" "}
                  <Button
                    color="danger"
                    onClick={() => this.click(item.id)}
                    className="device-button"
                  >
                    {item.name}
                  </Button>
                </Link>
              </center>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Device;
