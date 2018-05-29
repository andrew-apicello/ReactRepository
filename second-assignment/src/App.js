import React, { Component } from 'react';
import TextLength from './textLength';
import CharComponent from './CharComponent';
import './App.css';

class App extends Component {

  state = {
    content: '',
    length: 0
  }

  handleContentChange = (event) =>{

    const newContent = event.target.value;
    console.log(newContent);

    this.setState({content:newContent,length:newContent.length});
  }

  deleteLetterHandler = (index) => {
      // characterArray = characterArray.splice(index,1)
  }


  render() {

    let characterArray = [];
    for (var x = 0; x < this.state.length; x++){
        let currentCharacter = this.state.content.charAt(x);
      if(!characterArray.includes(currentCharacter)){
        characterArray.push(currentCharacter);
      }
    }
    console.log(characterArray);

    let characters = (
      <div>
        {characterArray.map((l, index) =>{
          return <CharComponent
                letter={l}
                onClick={characterArray = characterArray.splice(index,1)}/>
          })
        }
      </div>
      )



    

   

    return (
      <div className="App">
        <h1>This is the Second Assignment</h1>
        <input
          onChange={(event)=> this.handleContentChange(event)}></input>

        <p>{this.state.content}
        </p>
        <TextLength
          length={this.state.length}/>
          {characters}
      </div>
    );
  }
}

export default App;
