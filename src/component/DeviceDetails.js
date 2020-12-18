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
      values: [],
    };
  }

 async componentDidMount() {

   await Promise.all([fetch("https://localhost:44308/Api/DeviceDetail/desc", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem('tok'),
        id: localStorage.getItem('device_id')
      }),
    }),

    fetch("https://localhost:44308/Api/Channel/ch", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem('tok'),
        id: localStorage.getItem("device_id")
      }),
    })])


      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()])
      })
      .then(([res1, res2]) => {


        var ds = [];
        console.log(res1);
        // for(var i of result){
        ds.push({ name: res1.name, id: res1.id, family: res1.family, model: res1.model })
        //}

        console.log(ds);
        localStorage.setItem("device_details", JSON.stringify(ds))

        this.setState({
          isLoaded: true,
          data: ds,
        });

        console.log(res2);
        var c = [];
        var t = []//
        var unit = []
        for (var i of res2.channels) {
          if (i.customProperties !==undefined) {
            c.push(i.name);
            t.push(i.tag);//
            unit.push(i.unit)

          }
        }

        localStorage.setItem('ch', JSON.stringify(c))
        localStorage.setItem('tg', JSON.stringify(t))//
        localStorage.setItem('unit', JSON.stringify(unit))
        console.log(JSON.parse(localStorage.getItem("tg")));

        this.setState({
          isDetail: true,

        });


      })


    var v = [];


    var req = await JSON.parse(localStorage.getItem("tg")).map(i => {

      return new Promise((resolve, reject) => {

        fetch("https://localhost:44308/Api/tag/value", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Token: localStorage.getItem('tok'),
            tag: i,
            id: localStorage.getItem("device_id")
          }),
        }).then((res) => res.json())
          .then((result) => {

            //console.log(result.results[0].value);
            
            var r=result.results[0];
            //window.location.reload();
            resolve(r.value);

          })

      })

    })

    Promise.all(req).then((body) => {

      body.forEach(res => {
        if (res)
          v.push(res)
      })
      console.log(v);
      this.setState({
        values: v
      })
      localStorage.setItem("value", JSON.stringify(v))



    }).catch(err => console.log(err))
  }

  render() {
    var { data } = this.state;
    var { values } = this.state;

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

              {data.map((item) => (
                <div key={item.id}>
                  <Card className="device-details-box">
                    <CardBody>
                      <div>
                        <table className="device-details-table">
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
                      </p>
                      <br />
                      <br />
                      <CardText>
                        {" "}
                        <tr>
                          {" "}
                          {JSON.parse(localStorage.getItem("ch")).map((it) => (
                            <td
                              style={{
                                fontSize: "20px",
                                fontWeight: "bolder",
                              }}
                            >
                              <p>{it}</p>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          {values.map((t) => (
                            <td
                              style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "navy",
                              }}
                            >
                              {t}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          {JSON.parse(localStorage.getItem("unit")).map((t) => (
                            <td
                              style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "navy",
                              }}
                            >
                              {t}
                            </td>
                          ))}
                        </tr>
                      </CardText>
                      <br />
                      <br />
                      <br />
                    </CardBody>
                  </Card>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </center>
        <Footer />
      </div>
    );
  }
}

export default DeviceDetails;
