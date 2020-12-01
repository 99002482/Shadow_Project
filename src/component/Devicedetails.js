import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
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
