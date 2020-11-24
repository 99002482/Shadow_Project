import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';
import Cardview from './Cardview';


class Profile extends Component{
    render(){
       
        return (
            <div>
           <div>
             <Header/>
           </div>
           <div>
               <Cardview/>
           </div>
           <div>
               <Footer/>
           </div>
           </div>
        );
    }
}

export default Profile;
