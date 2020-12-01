import React, { Component } from 'react';
import { Button} from 'reactstrap';
import '../asset/css/App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: [json],
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <div>
          <b>Loading....</b>
        </div>
      );
    } else {
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
                <div key={items.id} className="profile-data">
                  Name: &nbsp;&nbsp;<p>{item.name}</p> <br />
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp; Email: &nbsp;&nbsp;&nbsp;
                  <p>{item.email}</p>
                  <br />
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Phone:&nbsp;&nbsp;{" "}
                  <input type="text" defaultValue={item.phone} /> <br />
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Address:{" "}
                  <input type="text" defaultValue={item.address.city} />
                </div>
              </center>
            ))}

            <br />
            <br />
            <center>
              <Button className="button">update</Button>
            </center>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default Profile;
