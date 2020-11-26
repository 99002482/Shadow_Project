import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from "./Header";
import Footer from "./Footer";
import Cardview from "./Cardview";
import './App.css';


 

class Dashboard extends Component{
   
     render(){
       
         return (
             
                    <div className="App">
                          <Header/>
                      <div className='sidebar'>
                         <Sidebar/>
             
                         <div className="cardview"> 
                            <Cardview/>
                         </div>
                      </div>  
                          <Footer/> 
                     </div> 
      
                 );

              }
  
  }




export default Dashboard;