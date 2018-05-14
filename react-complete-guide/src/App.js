import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {

  state = {
    persons: [
      {name:"Max", age: 29},
      {name:"Andrew", age: 27},
      {name: "John", age: 28}
    ]
  }

  switchNameHandler = () => {
    console.log("Click Successful")
    this.setState({
      persons: [
      {name:"Maximillian", age: 29},
      {name:"Andrew", age: 27},
      {name: "John", age: 28}
    ]
  })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hi my name is Andrew</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
