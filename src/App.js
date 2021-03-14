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
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
   // console.log('Was clicked');
   // console.log(this);
   // DON'T DO THIS: this.state.person[0].name = 'Max';
    this.setState( {
      persons: [
        { name: newName, age: 28 }, 
        { name: 'Ben', age: 30 }, 
        { name: 'Chris', age: 25 }
      ]
     } );
  }

  changeNameHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 }, 
        { name: event.target.value, age: 30 }, 
        { name: 'Chris', age: 25 }
      ]
     } );
  }
  
// For methods in React, the 'this' keyword should represent the component that owns the method.
// That is why you should use arrow functions.
// With arrow functions, 'this' will always represent the object that defined the arrow function.
 
  render() {
    // this isn't html! this is js!!!
    const style = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi there!</h1>
        {/* React event handlers are written inside curly braces and without parentheses:
          onClick={shoot}  instead of  onClick="shoot()" */}

        {/* Using such a {() => {this.function()}} construction can be inefficient */}
        <button
          style={style}
          onClick={() => {this.switchNameHandler('Max = button click =')}}
        >Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max = click on paragraph =')}
          changed={this.changeNameHandler}
        >
           My hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} 
        />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Edited content'));
  }
}

export default App;
