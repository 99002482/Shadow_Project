import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../asset/css/App.css";

class Cardview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      
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
    var { data } = this.state;
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

export default Cardview;
