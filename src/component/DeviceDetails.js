import React, { Component } from "react";
import { Card, CardText, CardBody } from "reactstrap";
import { RiDeviceFill } from "react-icons/ri";
import { FcElectricalSensor } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import "../asset/css/App.css";

class DeviceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://localhost:44308/Api/DeviceDetail/desc", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem("tok"),
        id: localStorage.getItem("device_id"),
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        var ds = [];
        console.log([result]);

        ds.push({
          name: result.name,
          id: result.id,
          family: result.family,
          model: result.model,
        });

        console.log(ds);
        localStorage.setItem("device_details", JSON.stringify(ds));

        this.setState({
          isLoaded: true,
          data: ds,
        });
      });

    fetch("https://localhost:44308/Api/Channel/ch", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem("tok"),
        id: localStorage.getItem("device_id"),
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        var c = [];
        var t = []; //
        var unit = [];
        for (var i of result.channels) {
          if (i.customProperties != undefined) {
            c.push(i.name);
            t.push(i.tag); //
            unit.push(i.unit);
          }
        }
        //console.log(c);
        //console.log(t)
        localStorage.setItem("ch", JSON.stringify(c));
        localStorage.setItem("tg", JSON.stringify(t)); //
        localStorage.setItem("unit", JSON.stringify(unit));
      });

    var value = [];
    //JSON.parse(localStorage.getItem("ch")).map((j)=>(
    for (var k of JSON.parse(localStorage.getItem("tg"))) {
      fetch("https://localhost:44308/Api/tag/value", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Token: localStorage.getItem("tok"),
          tag: k,
          id: localStorage.getItem("device_id"),
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          for (var j of result.results) {
            value.push(j.value);
          }

          //console.log(result.v)

          localStorage.setItem("vl", JSON.stringify(value));
        });

      console.log(value);
    }
  }

  render() {
    var { data } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="pageheading-device">
          <h2>Device Details</h2>
        </div>
        <center>
          <div>
            <div className="device-details">
              <br />
              <br />
              <br />

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
                      var c = [];
                      var t = [];
                      var unit = []; //
                      for (var i of result.channels) {
                        if (i.customProperties !== undefined) {
                          c.push(i.name);
                          t.push(i.tag);
                          unit.push(i.unit);
                        }
                      }

                      localStorage.setItem("ch", JSON.stringify(c));
                      localStorage.setItem("tg", JSON.stringify(t));
                      localStorage.setItem("unit", JSON.stringify(unit));
                    }),
                  (
                    <div key={item.id}>
                      <Card className="device-details-box">
                        <CardBody>
                          <div>
                            <table className="device-details-table" >
                              <tr>
                                <td>
                                  <RiDeviceFill size={35} />
                                  &nbsp;
                                  <p
                                    style={{
                                      fontSize: "22px",
                                      fontWeight: "bolder",
                                      fontFamily: "sans-serif",
                                    }}
                                  >
                                    Device Name{" "}
                                  </p>
                                </td>
                                <td>
                                  <p
                                    style={{
                                      fontSize: "22px",
                                      fontStyle: "italic",
                                    }}
                                  >
                                    :&nbsp;{item.name}
                                  </p>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <FcElectricalSensor size={40} />

                                  <p
                                    style={{
                                      fontSize: "22px",
                                      fontWeight: "bolder",
                                      fontFamily: "sans-serif",
                                    }}
                                  >
                                    Family{" "}
                                  </p>
                                </td>

                                <td>
                                  <p
                                    style={{
                                      fontSize: "22px",
                                      fontStyle: "italic",
                                    }}
                                  >
                                    :&nbsp;{item.family}
                                  </p>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <FiSettings size={35} />
                                  &nbsp;
                                  <p
                                    style={{
                                      fontSize: "22px",
                                      fontWeight: "bolder",
                                      fontFamily: "sans-serif",
                                    }}
                                  >
                                    Model{" "}
                                  </p>
                                </td>

                                <td>
                                  <p
                                    style={{
                                      fontSize: "22px",
                                      fontStyle: "italic",
                                    }}
                                  >
                                    : {item.model}
                                  </p>
                                </td>
                              </tr>
                            </table>

                            <br />
                            <br />
                          </div>

                          <br />
                          <p style={{ fontSize: "25px", fontWeight: "bolder" }}>
                            Readings :{" "}
                          </p><br/><br/>
                          <CardText>
                            {" "}
                            <tr>
                              {" "}
                              {JSON.parse(localStorage.getItem("ch")).map(
                                (it) => (
                                  <td
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "bolder",
                                    }}
                                  >
                                    <p>{it}</p>
                                  </td>
                                )
                              )}
                            </tr>
                            <tr>
                              {JSON.parse(localStorage.getItem("vl")).map(
                                (t) => (
                                  <td>{t}</td>
                                )
                              )}
                            </tr>
                            <tr>
                              {JSON.parse(localStorage.getItem("unit")).map(
                                (t) => (
                                  <td>{t}</td>
                                )
                              )}
                            </tr>
                          </CardText>
                          <br />
                          <br />
                          <br />
                        </CardBody>
                      </Card>
                      <br />
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </center>
        <Footer />
      </div>
    );
  }
}

export default DeviceDetails;
