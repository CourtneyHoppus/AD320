import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component { 
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Me', age: 41 },
      { name: 'Brad', age: 38 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Test React App</h1>
        <p>This is really going on.</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}
export default App;
