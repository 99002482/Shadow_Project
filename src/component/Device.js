import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import * as ioicon from "react-icons/io";
import "../asset/css/App.css";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
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
          <h2>Site Details : {localStorage.getItem("site_name")}</h2>
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
                  var u = [];
                  for (var i of result.channels) {
                    if (i.customProperties !== undefined) {
                      ch.push(i.name);
                      tg.push(i.tag);
                      u.push(i.unit); //
                    }
                  }
                  localStorage.setItem("tg_value", JSON.stringify(tg));
                  localStorage.setItem("ch_value", JSON.stringify(ch));
                  localStorage.setItem("u_value", JSON.stringify(u)); //

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
                <Card className="site-details-cardview">
                  
                    <div key={item.id}>
                    <CardBody>
                      <CardTitle style={{fontWeight:"bolder",fontSize:"20px",color:"red"}}>
                        <center> Device Name: {item.name}</center>
                      </CardTitle>
                      
                      <table className="site-details-table">
                        <br/>
                        <tr>
                          Priority Channel :
                          {JSON.parse(localStorage.getItem("ch_value"))
                            .slice(0, 1)
                            .map((it) => (
                              <p> {it}</p>
                            ))}
                        </tr>
                        
                        <tr>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reading:&nbsp;&nbsp;
                          {JSON.parse(localStorage.getItem("values"))
                            .slice(0, 1)
                            .map((it) => (
                              <p>{it}</p>
                            ))}
                          &nbsp;&nbsp;
                          {JSON.parse(localStorage.getItem("u_value"))
                            .slice(0, 1)
                            .map((it) => (
                              <p>{it}</p>
                            ))}
                        </tr>

                        <br />
                      </table>
                      </CardBody>
                    </div>
                  
                </Card>
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
                    <ioicon.IoIosArrowDroprightCircle size={30} style={{float:"right"}} />
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
