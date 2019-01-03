import React, { Component } from 'react';
import CommunicateComponent from '../Components/TestCom/CommunicateComponent'
import HOCProxyComponent from '../Components/TestCom/HOCProxyComponent'
// import HOCProxyInputComponent from '../Components/TestCom/HOCProxyInputComponent'
import HOCReserveComponent from '@/Components/TestCom/HOCReserveComponent'

class TestContainer extends Component {
  state = {
    list: [
      {text: 'text1', checked: false},
      {text: 'text1', checked: true},
      {text: 'text2', checked: false}
    ]
  }
  render() {
    const { list } = this.state;
    return (
      <div>
        This is test-container
        {
          <HOCReserveComponent testProps={'string'} />
          // <HOCProxyInputComponent />
          // <CommunicateComponent list={ list } />
          // <HOCProxyComponent />
        }
      </div>
    )
  }
}
export default TestContainer
