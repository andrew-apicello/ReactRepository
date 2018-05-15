import React, { Component } from 'react';
import './App.css';
import './Person.css';
import Person from './Person';

class App extends Component {

  state = {
    persons: [
      {id: '15343', name:"Max", age: 29},
      {id: '25345', name:"Andrew", age: 27},
      {id: '64243', name: "John", age: 28}
    ],
    showPeople: false
  }


 

  nameChangedHandler = (event, key) => {
  	console.log("On Change Successful")
  	const personIndex = this.state.persons.findIndex(p => {
  		return p.id === key;
  	})
    
    const person = {
    	...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  }


	deleteNameHandler = (personsIndex) => {
		console.log("Name Successfully Deleted");
		const persons = [...this.state.persons];
		persons.splice(personsIndex,1);
		this.setState({persons:persons})
	}

    togglePersonHandler = () => {
    	const doesShow = this.state.showPeople;
    	this.setState({showPeople: !doesShow});
    }

  

  render() {

	const style = {
		backgroundColor: 'white',
		font: "inherit",
		border: "1px solid blue",
		padding: '8px',
		cursor: "pointer"
	}


	let persons = null;

	if(this.state.showPeople === true){
		persons = (
			<div>
			{this.state.persons.map((person, index) => {
				return <Person
					name={person.name}
					age={person.age}
					click={this.deleteNameHandler.bind(this, index)}
					key={person.id}
					change={(event)=> this.nameChangedHandler(event, person.id)}
					/>
			})}
        	</div>
		);
	}



    return (
      <div className="App">
        <h1 className="App-title">Hi, my name is Andrew</h1>
        	<button 
        	onClick={this.togglePersonHandler}>Toggle People
        	</button>
     	{persons}
      </div>
    );
  }
}

export default App;
