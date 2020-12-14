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
    var {  data } = this.state;

    
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
                    for (var i of result.channels) {
                      if (i.customProperties !== undefined) {
                        ch.push(i.name);
                      }
                    }
                    console.log(ch);
                    localStorage.setItem("ch_value", JSON.stringify(ch));
                  }),
                (
                  <table>
                    <div key={item.id}>
                      <tr>
                        <th> {item.id}</th>
                        <td>{JSON.parse(localStorage.getItem("ch_value"))}</td>
                      </tr>
                    </div>
                    <br />
                  </table>
                )
              )
            )}
          </div>
          <div className="sidebar-device">
            <br></br>
           <center><p className="devices-list">LIST OF DEVICES</p></center>
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
