import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';
import Cardview from './Cardview';


class Profile extends Component{
    render(){
       

       if(!isLoaded){
           return <div><b>Loading....</b></div>
       }
        else{
           
            return (
                
                <div>
               <div>
                   <Header/>
               </div>
               <div className="profile">
             
             <h2 >Profile Details</h2>
             </div>
               <div><br/><br/><br/>
                   
                   {items.map(item=>(
                            
                          <center>  <div key={items.id} className="profile-data">
                              Name: &nbsp;&nbsp;&nbsp;<input type="text" value={item.name} readOnly>                             
                               </input> <br/><br/><br/>
                               Email: &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={item.email} readOnly>                             
                               </input><br/><br/><br/>
                               Address: <input type="text" value={item.address.city} >                             
                               </input> <br/><br/><br/>
                               Phone:&nbsp;&nbsp; <input type="text" value={item.phone} >                             
                               </input> 
                            </div>
                            </center>
                        ))}

                        <br/><br/>
                       <center><button  className='button' >update</button></center> 
               </div>
               <div>
                   <Footer/>
               </div>
               </div>
            );
        }

    }
}

export default Profile;
