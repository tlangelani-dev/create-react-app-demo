import React, { Component } from 'react';
import logo from './../img/logo.svg';
import Button from './../components/Button';
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Spree</h2>
        </div>
        <p className="App-intro">
          Code <code>src/App.js</code>
        </p>
        <Button />
      </div>
    );
  }
}

export default App;
