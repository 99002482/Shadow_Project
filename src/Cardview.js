import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card,Button} from 'react-bootstrap';
import './App.css';
// const cardInfo = [
//   {
//     title: "Lebron James",
//     text: "THE GOAT",
//   },
//   {
//     title: "Alex Caruso",
//     text: "THE TRUE GOAT",
//   },
//   {
//     title: "Steph Curry",
//     text: "he good",
//   },
//   {
//     title: "Michael Jordan",
//     text: "he is very close to goat",
//   },
  
//   {
//     title: "Steph Curry",
//     text: "he good",
//   },
//   {
//     title: "Michael Jordan",
//     text: "he is very close to goat",
//   }];
class Cardview extends Component{
  constructor(){
    super()
       this.state={
          data:[]
        }
      }

async componentDidMount(){
  console.log('component mounted');
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then((Response)=>Response.json())
  // .then((data)=>console.log(data))
  try{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=response.json();
    console.log(data);
    // this.setState({data:data.splice(0,10)});
  }
  catch(err){
    console.log(err);
  }
}


  render(){
    console.log('component rendered');
    const {data}=this.state;
    console.log(data);
     // const renderCard = (card, index) => {
    //   return (
    //      <Card  key={index} className="box">
    //        <Card.Body>
    //         <Card.Title>{card.title}</Card.Title>
    //         <Card.Text>{card.body}</Card.Text>
    //         <Button variant="primary">View Details</Button>
    //       </Card.Body>
    //     </Card>
        
    //   );
    // };
  
      return (
      <div >
        <ul>
        {data.map((item)=>{
           return  <li key={item.id}>{item.body}</li>   
                         
                 
        })}
        </ul> 
        App component
        
      </div> 
      )
    
      }
    }
  export default Cardview;













