import React, { Component } from 'react';
import CommunicateComponent from '../components/TestCom/CommunicateComponent'


class TestContainer extends Component {
  render() {
    return (
      <div>
        This is test-container
        <CommunicateComponent />
      </div>
    )
  }
}
export default TestContainer
