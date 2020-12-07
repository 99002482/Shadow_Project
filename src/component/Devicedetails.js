import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";
import "../asset/css/App.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Devicedetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          data: json,
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
                    <CardText> email : {item.email}</CardText>
                    <br />
                    <br />
                    <CardText> Phone : {item.phone}</CardText>
                    <br />
                    <br />
                    <CardText> Company : {item.company.name}</CardText>
                    <br />

                    <br />
                    <br />
                  </CardBody>
                </Card>{" "}
                <br />
              </div>
            ))}
          </div>
          <div className="sidebar-device">
            <br></br>
            <br></br>
            {data.map((item) => (
              <div key={item.id}>
                <center>
                  <br />
                  <Link to="/Devicedetails">
                    {" "}
                    <Button className="device-button" variant="primary">
                      Device {item.id} View Details
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
}

export default Devicedetails;
