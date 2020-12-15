import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { FcRules } from "react-icons/fc";
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
  }

  render() {
    var { data } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="pageheading-device">
          <h2>Device Details</h2>
        </div>
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
                    for (var i of result.channels) {
                      if (i.customProperties !== undefined) {
                        c.push(i.name);
                        t.push(i.tag);
                      }
                    }

                    localStorage.setItem("ch", JSON.stringify(c));
                    localStorage.setItem("tg", JSON.stringify(t));
                  }),
                (
                  <div key={item.id}>
                    <Card className="device-details-box">
                      <CardBody>
                        <CardTitle>
                          <b>{item.name}</b>
                        </CardTitle>
                        <br />

                        <div>
                          <CardText>
                            {" "}
                            <FcRules size={25} />
                            &nbsp;<b>Device id :</b> {item.id}
                          </CardText>
                          <br />
                          <br />
                          <CardText>
                            {" "}
                            <RiDeviceFill size={25} />
                            &nbsp;<b>Device Name :</b> {item.name}
                          </CardText>
                          <br />
                          <br />
                          <CardText>
                            {" "}
                            <FcElectricalSensor size={25} />
                            &nbsp;<b>family :</b> {item.family}
                          </CardText>
                          <br />
                          <br />
                          <CardText>
                            {" "}
                            <FiSettings size={25} />
                            &nbsp;<b>Model :</b> {item.model}
                          </CardText>
                          <br />
                          <br />
                        </div>

                        <br />
                        <b>Readings : </b>
                        <CardText>
                          {" "}
                          <tr>
                            {" "}
                            {JSON.parse(localStorage.getItem("ch")).map(
                              (it) => (
                                <td>
                                  <b>{it}</b>
                                </td>
                              )
                            )}
                          </tr>
                          <tr>
                            {JSON.parse(localStorage.getItem("tg")).map((t) => (
                              <td>{t}</td>
                            ))}
                          </tr>
                        </CardText>
                        <br />
                        <br />
                        <br />
                      </CardBody>
                    </Card>{" "}
                    <br />
                  </div>
                )
              )
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default DeviceDetails;
