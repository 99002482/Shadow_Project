import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Select from 'react-select';

const options = [
    { value: 'Mysore', label: 'Mysore' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Mumbai', label: 'Mumbai' },
  ];
  class Sidebar extends Component{
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
        fetch('https://jsonplaceholder.typicode.com/users/1')
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
               
             
              <div >
               
                <div className="pageheading">
               
               <h2 >Overview Dashboard</h2>
               </div> 
                    
               <br></br>
             {items.map(item=>(
                <div key={items.id}>
                        <input  className="organisation" type="text"  placeholder="Organisation name" name="US Stell" value={item.address.city} readOnly/> 
                        <br></br> <br></br>
                        <Select 
                        defaultInputValue="Mysore"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        />
               </div>
             ))}
             </div>
             
          );
  
      }
    }
  }
  
  
  
  
  export default Sidebar;