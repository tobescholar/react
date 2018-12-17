import React, { Component } from 'react';
// import CommunicateComponent from '../components/TestCom/CommunicateComponent'
// import HOCProxyComponent from '../components/TestCom/HOCProxyComponent'
// import HOCProxyInputComponent from '../components/TestCom/HOCProxyInputComponent'
import HOCReserveComponent from '../components/TestCom/HOCReserveComponent'

class TestContainer extends Component {
  render() {
    return (
      <div>
        This is test-container
        <HOCReserveComponent testProps={'string'} />
      </div>
    )
  }
}
export default TestContainer
