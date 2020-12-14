import React, { Component } from "react";
import * as fiicons from "react-icons/fc";
import * as ioicon from "react-icons/io";
import { Card, CardText, CardBody, CardHeader } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../asset/css/App.css";

class Cardview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("loc_sites")), //Fetching sites from local storage
    };
  }

  componentDidMount() {
    this.setState({
      data: JSON.parse(localStorage.getItem("loc_sites")),
    });
  }

  render() {
    var { data } = this.state;

    return (
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-sm-4">
              <Card className="card-width">
                <CardHeader
                  tag="h6"
                  style={{
                    backgroundColor: "#00BFFF",
                    borderColor: "#333",
                    color: "black",
                    fontWeight: "bold",
                    textShadow: "1px 1px white",
                  }}
                >
                  Site :&nbsp;{item}
                </CardHeader>
                <CardBody className="card-box">
                  <CardText>
                    <fiicons.FcElectroDevices size={30} />
                    {/* <fiicons.FcChargeBattery size={30}/>
                    <wiicon.WiHumidity size={30}/>
                    <fiicons.FcAreaChart size={30}/>
                    <wiicon.WiCloud size={30}/><br/> */}
                    &nbsp;&nbsp;<b>Devices : {6}</b>
                    {item.id}
                  </CardText>
                  <br />
                  <br />
                  <Link to="/Device">
                    {" "}
                    <center>
                      {" "}
                      <Button color="danger">
                        View Details{" "}
                        <ioicon.IoIosArrowDroprightCircle size={30} />
                      </Button>
                    </center>
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
