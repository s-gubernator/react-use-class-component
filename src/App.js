import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // this isn't html! this is js!!!
    return (
      <div className="App">
        <h1>Hi there!</h1>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Edited content'));
  }
}

export default App;
