import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

class Cardview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
    console.log("component rendered");
    var { isLoaded, data } = this.state;
    console.log(data);

    if (!isLoaded) {
      return (
        <div>
          <b>Loading....</b>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-sm-3">
                <Card>
                  <CardBody className="card-box">
                    <CardTitle>
                      <b>{item.name}</b>
                    </CardTitle>
                    <CardText> Number of Devices {item.id}</CardText>
                    <br />
                    <br />
                    <Link to="/Device">
                      {" "}
                      <Button variant="primary">View Details</Button>
                    </Link>
                  </CardBody>
                </Card>{" "}
                <br />
              </div>
            ))}
          </div>{" "}
        </div>
      );
    }
  }
}
export default Cardview;
