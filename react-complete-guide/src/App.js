import React, { Component } from 'react';
import './App.css';
import './Person.css';
import Person from './Person';

class App extends Component {

  state = {
    persons: [
      {name:"Max", age: 29},
      {name:"Andrew", age: 27},
      {name: "John", age: 28}
    ]
  }


  switchNameHandler = (newName) => {
    console.log("Click Successful")
    this.setState({
      persons: [
      {name:newName, age: 29},
      {name:"Andrew", age: 27},
      {name: "John", age: 28}
    ]
  })
  }

  nameChangedHandler = (event) => {
  	console.log("On Change Successful")
    this.setState({
      persons: [
      {name:"Max", age: 29},
      {name: event.target.value, age: 27},
      {name: "John", age: 28}
    ]
  })

  }

  render() {

	const style = {
		backgroundColor: 'white',
		font: "inherit",
		border: "1px solid blue",
		padding: '8px',
		cursor: "pointer"
	}


    return (
      <div className="App">
        <h1 className="App-title">Hi my name is Andrew</h1>
        <button 
        	style={style}
        	onClick={this.switchNameHandler.bind(this, "Maximillian")}>Switch Name</button>
        <Person 
        	name={this.state.persons[0].name} 
        	age={this.state.persons[0].age}/>
        <Person 
        	name={this.state.persons[1].name} 
        	age={this.state.persons[1].age}
        	click={this.switchNameHandler.bind(this, "Max!")}
        	change={this.nameChangedHandler}
        	>My Hobbies: Racing</Person>
        <Person 
        	name={this.state.persons[2].name} 
        	age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
