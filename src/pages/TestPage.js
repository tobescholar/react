import React, { Component } from 'react';
import TestContainer from '../containers/TestContainer.js'

class TestPage extends Component {
  render() {
    return (
      <div>
        <p>This is TestPage!</p>
        <TestContainer />
      </div>
    )
  }
}

export default TestPage
