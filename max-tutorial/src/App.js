import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component { 
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Me', age: 41 },
      { name: 'Brad', age: 38 }
    ],
    otherState: 'another something else'
  }

  switchNameHandler = (newName) => {
    //console.log('clicked');
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Courtney', age: 41 },
        { name: 'Bradley', age: 38 }
      ]
    } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 41 },
        { name: 'Bradley', age: 38 }
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'pink',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Test React App</h1>
        <p>This is really going on.</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler} >Something else</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}
export default App;
