// import React from 'react';
// import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

// const testElement = <p>Some text here</p>
// ReactDOM.render(testElement, document.getElementById('root'));
class App extends Component {
  state = {
    persons: [
      { name: 'Adam', age: 28 }, 
      { name: 'Ben', age: 30 }, 
      { name: 'Chris', age: 27 }
    ]
  }
  
  render() {
    // this isn't html! this is js!!!
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <button>Switch name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }>
          My hobbies: Racing
        </Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Edited content'));
  }
}

export default App;
