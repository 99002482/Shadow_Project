import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from "./Header";
import Footer from "./Footer";
import './App.css';


 

class Device extends Component{
   
     render(){
       
         return (
             
                    <div className="App">
                          <Header/>
                          <div className="pageheading-device">
               
                                <h2 >Devices</h2>
                          </div> 
                          <div className='sidebar-device'>
                                                  
                          </div>  
                          <Footer/> 
                     </div> 
      
                 );

              }
  
  }

  export default Device;
