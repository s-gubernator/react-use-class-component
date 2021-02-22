// import React from 'react';
// import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

// const testElement = <p>Some text here</p>
// ReactDOM.render(testElement, document.getElementById('root'));
class App extends Component {
  render() {
    // this isn't html! this is js!!!
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <Person  name='Adam' />
        <Person  name='Ben' />
        <Person  name='Chris' />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Edited content'));
  }
}

export default App;
