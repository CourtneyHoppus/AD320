import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <h1>Test React App</h1>
        <p>This is really going on.</p>
        <Person />
      </div>
    );
  }
}
export default App;
