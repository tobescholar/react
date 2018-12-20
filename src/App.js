import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Pages/TestPage.js'

import { Provider } from 'react-redux';
import configureStore from './Modals/Store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Test />
        </div>
      </Provider>
    );
  }
}

export default App;
