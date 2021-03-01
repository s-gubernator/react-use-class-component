// import React from 'react';
// import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

// const testElement = <p>Some text here</p>
// ReactDOM.render(testElement, document.getElementById('root'));

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Adam', age: 28 }, 
      { name: 'Ben', age: 30 }, 
      { name: 'Chris', age: 27 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
   // console.log('Was clicked');
   // console.log(this);
   // DON'T DO THIS: this.state.person[0].name = 'Max';
   setPersonsState( {
      persons: [
        { name: 'Max', age: 28 }, 
        { name: 'Ben', age: 30 }, 
        { name: 'Chris', age: 25 }
      ]
     } );
  };

  return (
    <div className="App">
      <h1>Hi there!</h1>
      {/* React event handlers are written inside curly braces and without parentheses:
        onClick={shoot}  instead of  onClick="shoot()" */}
      <button onClick={ switchNameHandler }>Switch name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age } />
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }>
        My hobbies: Racing
      </Person>
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age } />
    </div>
  );
}

export default App;
