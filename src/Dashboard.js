import React, { Component } from 'react';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

import './App.css';

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Dashboard extends Component{
    render(){
       
           return (
            <div className='sidebar'>

            {/* <div class="row" className="mb-2 pageheading">

             <div class="col-sm-12 btn btn-primary" >

                   Overview Dashboard 
             </div>  */}
           <br></br>
             <input  type="text"  placeholder="Organisation name" name="US Stell" value="US Steel" readOnly/> 

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
        );

    }
}




export default Dashboard;