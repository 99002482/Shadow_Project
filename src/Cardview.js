import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card,Button} from 'react-bootstrap';
import './App.css';

class Cardview extends Component{
  constructor(props){
    super(props);
    this.state={
        data:[],
        isLoaded:false,
    }
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(json=>{
        this.setState({
            isLoaded:true,
            data:json,

        })
    });
}
  render(){
    console.log('component rendered');
    var {isLoaded,data}=this.state;
    console.log(data);
     
    if(!isLoaded){
      return <div><b>Loading....</b></div>
  }
  else{
  
      return (
      <div >
       
        {data.map(item=>(
          
          
       <Card  key={data} className="card">
             <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.website}</Card.Text>
           <Button variant="primary">View Details</Button>
           </Card.Body> 
      </Card>  
    
         
                 
        ))}
             
      </div> 
      )
    }
    
      }
    }
  export default Cardview;













