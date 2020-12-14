import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../asset/css/App.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      isLoaded: false,
      data:[]
    };
  }

  click(id){
    localStorage.setItem("device_id",id)

  }

  // channel(id){
  //   console.log(id)
  //    fetch("https://localhost:44308/Api/Channel/ch",{ 
  //     method: "post",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     Token: localStorage.getItem('tok'),
  //     id:localStorage.getItem('device_id')
  //   }),}).then((res)=>res.json())
  //        .then((result)=>{
  //          console.log(result);
  //           var ch=[];
  //           for (var i of result.channels){
  //             if(i.customProperties!=undefined ){
  //               ch.push(i.name);

  //             }
  //           }
  //           console.log(ch);
  //           //localStorage.setItem('ch_value',)

  //        })

  // }
  componentDidMount() {

  //  fetch("https://localhost:44308/Api/Channel/ch",{ 
  //     method: "post",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     Token: localStorage.getItem('tok'),
  //     id:localStorage.getItem('dev_id')
  //   }),}).then((res)=>res.json())
  //        .then((result)=>{
  //          console.log(result);
  //           var ch=[];
  //           for (var i of result.channels){
  //             if(i.customProperties!=undefined ){
  //               ch.push(i.name);

  //             }
  //           }
  //           console.log(ch);
  //           //localStorage.setItem('ch_value',)

  //        })


  
    fetch("https://localhost:44308/Api/Device/details",{
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem('tok'),
        id:localStorage.getItem('site_id')
      }),
    }).then((res)=>res.json())
      .then((result)=>{
        var dv=[];
        for(var i of result.devices){
          dv.push({name:i.name,id:i.id})
        }

        console.log(dv);
        localStorage.setItem("devices",JSON.stringify(dv))

        this.setState({
                isLoaded: true,
                 data: dv,
              });

      })

     // console.log(this.data);
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
            <h2>Devices</h2>
          </div>
          <br></br>
          <br></br>
          <div className="device-table">
            {data.map((item) => (
               //this.channel(item.id),
               fetch("https://localhost:44308/Api/Channel/ch",{ 
      method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Token: localStorage.getItem('tok'),
      id:item.id
    }),}).then((res)=>res.json())
         .then((result)=>{
           console.log(result);
            var ch=[];
            for (var i of result.channels){
              if(i.customProperties!==undefined ){
                ch.push(i.name);

              }
            }
            console.log(ch);
            localStorage.setItem('ch_value',JSON.stringify(ch))

         }),
              <table border="1">
                <div key={item.id}>
                  <tr>
                    <td> {item.id}</td>
                    <td>{JSON.parse(localStorage.getItem("ch_value"))}</td>
                  </tr>
                </div>
              </table>
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
                    <Button onClick={()=>this.click(item.id)} className="device-button">
                      {item.name} 
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
//   render(){
//     return(<h1>good</h1>)
//   }
}

export default Device;
