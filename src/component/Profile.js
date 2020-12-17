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
                <table className="profile-values">
                  <br />
                  <tr>
                    <FcBusinesswoman size={140} />
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <p className="profile-label">First Name&nbsp;</p>
                    </td>
                    <td>
                      :&nbsp;<p className="profile-label-value">{item.name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="profile-label">Last Name&nbsp;</p>
                    </td>
                    <td>
                      :&nbsp;<p className="profile-label-value">{item.lname}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="profile-label">Email&nbsp;</p>
                    </td>
                    <td>
                      :&nbsp;<p className="profile-label-value">{item.email}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="profile-label">Phone&nbsp;</p>
                    </td>
                    <td>
                      :&nbsp;
                      <input type="text" defaultValue={item.phone} />
                    </td>
                  </tr>
                  <br />
                </table>
              </div>
              <br />
              <br />
              <Button className="button">update</Button>
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
