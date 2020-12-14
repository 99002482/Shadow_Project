import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";
import "../asset/css/App.css";
import { DeviceDetailsApi } from "../services/DeviceDetailsApi";

class DeviceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    
      DeviceDetailsApi().then((result) => {
        var ds = [];
        console.log([result]);
        // for(var i of result){
        ds.push({
          name: result.name,
          id: result.id,
          family: result.family,
          model: result.model,
        });
        //}

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
            {data.slice(0, 1).map((item) => (
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
                    <br />

                    <br />
                    <br />
                  </CardBody>
                </Card>{" "}
                <br />
              </div>
            ))}
          </div>

          <Footer />
        </div>
      );
    }
  }
}

export default DeviceDetails;
