import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

function App() {
  return (
    <form className="login-form">
      <h1>
        <span className="font-weight-bold">LOGIN PAGE</span>
      </h1>
      <FormGroup>
        <Label><b>Username</b></Label>
        <br/>
        <input type="text" placeholder="Username"/>
      </FormGroup>
      <FormGroup>
        <Label><b>Password</b></Label>
        <br/>
        <input type="password" placeholder="Password"/>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Login</Button>
      
    </form>
  );
}

export default App;
