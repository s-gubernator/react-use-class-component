import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    // this isn't html! this is js!!!
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <Person />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Edited content'));
  }
}

export default App;
