import React, { Component } from 'react';
import Select from 'react-select';
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
            <div className="pageheading">
             
            <h2 >Overview Dashboard</h2>
            </div>
           
                    
            <div className='sidebar'>               
          
           
           <br></br>
             <input  class="organisation" type="text"  placeholder="Organisation name" name="US Stell" value="US Steel" readOnly/> 
             <br></br> <br></br>
             <Select 
             defaultInputValue="Mysore"
             value={selectedOption}
             onChange={this.handleChange}
             options={options}
            />
            <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              // id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                //window.location.pathname = val.link;
                if(val.title=='User Profile')
                 this.props.history.push("/Profile") 
                else
                 this.props.history.push("/Login") 
              }}
            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      
        </div>  
       
        </div>
        //  </nav>
         
        );

    }
}




export default Dashboard;