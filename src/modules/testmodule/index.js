import React, { Component } from 'react';
import TestComponent from '../../components/testcomponents/index.js';

class TestModule extends Component {
  constructor(props) {
    super(props);
    // this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    // this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }
  render() {
    return (
      <div className="test-module">
        <p>this is test-module page</p>
        <TestComponent {...this.state} />
      </div>
    );
  }
}

export default TestModule;
