import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
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
    var { isLoaded, data } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <b>Loading....</b>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <div className="pageheading-device">
            <h2>Device Details</h2>
          </div>
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
                    var t = []; //
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
                    <Card>
                      <CardBody className="card-box">
                        <CardTitle>
                          <b>{item.name}</b>
                        </CardTitle>
                        <CardText> Device id : {item.id}</CardText>
                        <br />
                        <br />
                        <CardText> Device Name : {item.name}</CardText>
                        <br />
                        <br />
                        <CardText> family : {item.family}</CardText>
                        <br />
                        <br />
                        <CardText> Model : {item.model}</CardText>
                        <br />
                        <br />
                        <CardText>
                          {" "}
                          {JSON.parse(localStorage.getItem("ch")).map((it) => (
                           
                              <span>{it}</span>
                           
                          ))}
                          
                          {JSON.parse(localStorage.getItem("tg")).map((t) => (
                           <span>
                             &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                             {t}
                             </span>
                            
                          ))}
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

          <Footer />
        </div>
      );
    }
  }
}

export default DeviceDetails;
