import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


class App extends Component {

  state = {
    name: ["Andrew","Lauren"],
    content: ''
  }

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value
    })

  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.handleContentChange}/>
        <UserOutput name={this.state.name[0]} content={this.state.content}/>
        <UserOutput name={this.state.name[1]} content={this.state.content}/>
      </div>
    );
  }
}

export default App;
