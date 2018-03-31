import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'January 1, 2019',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})

  }

  render() { //render method allows us to return any JSX we would like
    return (
      //Turns this Div into it's own component. Must declare export at the bottom of file
    <div className="App">
      <div className="App-title">
        Countdown to {this.state.deadline}
      </div>
      <Clock
        deadline = {this.state.deadline}
      />
        <Form inline>
          <FormControl
          className="Deadline-input"
          placeholder='Enter new date'
          onChange={event => this.setState({newDeadline: event.target.value })}
          />
          <Button onClick={() => this.changeDeadline()}>
           Submit
          </Button>
        </Form>
    </div>
   )
  }
}

export default App;
