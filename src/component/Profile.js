import React, { Component } from "react";
import { Button } from "reactstrap";
import { FcBusinesswoman } from "react-icons/fc";
import "../asset/css/App.css";
import Header from "./Header";
import Footer from "./Footer";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://localhost:44308/Api/Profile/userdetails", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem("tok"),
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        var pf = [];
        console.log(result);
        pf.push({
          name: result.first_name,
          email: result.email,
          phone: result.phone_number,
          lname: result.last_name,
        });

        this.setState({
          isLoaded: true,
          items: pf,
        });
      });
  }

  render() {
    var { items } = this.state;

    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="profile">
          <h2>Profile Details</h2>
        </div>
        <div>
          <br />
          <br />
          <br />

          {items.map((item) => (
            <center>
              {" "}
              <div key={items.name} className="profile-data">
                <span>
                  <FcBusinesswoman size={100} />
                </span>
                <br />
                <br />
                First Name: &nbsp;&nbsp;<p>{item.name}</p> <br />
                <br />
                <br />
                Last Name: &nbsp;&nbsp;<p>{item.lname}</p> <br />
                <br />
                <br />
                Email: &nbsp;&nbsp;&nbsp;
                <p>{item.email}</p>
                <br />
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Phone:&nbsp;&nbsp;{" "}
                <input type="text" defaultValue={item.phone} /> <br />
                <br />
                <br />
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Address: <input type="text" defaultValue={item.address.city} /> */}
              </div>
            </center>
          ))}

          <br />
          <br />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Profile;
