import React, { Component } from 'react';
import Select from 'react-select';
import Header from "./Header";
import Footer from "./Footer";
import Cardview from "./Cardview";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


 
const options = [
  { value: 'Mysore', label: 'Mysore' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Mumbai', label: 'Mumbai' },
];
class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedOption: null,
      isLoaded:false,
    }
    
  }
  
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    };

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users/3')
      .then(res=>res.json())
      .then(json=>{
          this.setState({
              isLoaded:true,
              items:[json],
                              
          })
      });
  }
    render(){
      var { isLoaded,items}=this.state;  
      const { selectedOption } = this.state;
     
      if(!isLoaded){
        return <div><b>Loading....</b></div>
    }
    else{

           return (
             
            <div className="App">
               <Header/>
            <div className='sidebar'>
             
              <div className="pageheading">
             
             <h2 >Overview Dashboard</h2>
             </div> 
              

           <br></br>
           {items.map(item=>(
              <div key={items.id}>
             <input  class="organisation" type="text"  placeholder="Organisation name" name="US Stell" value={item.address.city} readOnly/> 
             <br></br> <br></br>
             <Select 
             defaultInputValue="Mysore"
             value={selectedOption}
             onChange={this.handleChange}
             options={options}
            />
            </div>
           ))}
      <div className="cardview"> 
        <Cardview/>
      </div>
      </div>  
      <Footer/> 
      </div> 
      
        );

    }
  }
}




export default Dashboard;