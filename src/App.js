import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Pages/TestPage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Test />
      </div>
    );
  }
}

export default App;
