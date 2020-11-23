import React, { Component } from 'react';
import Select from 'react-select';
import Header from "./Header";
import Footer from "./Footer";
import { SidebarData } from './SidebarData';
import './App.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const options = [
  { value: 'Mysore', label: 'Mysore' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Mumbai', label: 'Mumbai' },
];
class Dashboard extends Component{
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
    render(){
      const { selectedOption } = this.state;
       
           return (
            <div className="App">
               <Header/>
            <div className='sidebar'>
             
              <div className="pageheading">
             
             <h2 >Overview Dashboard</h2>
             </div>        

           <br></br>
             <input  class="organisation" type="text"  placeholder="Organisation name" name="US Stell" value="US Steel" readOnly/> 
             <br></br> <br></br>
             <Select 
             defaultInputValue="Mysore"
             value={selectedOption}
             onChange={this.handleChange}
             options={options}
            />
           
      </div>
      <Footer/> 
      </div> 
      
        );

    }
}




export default Dashboard;