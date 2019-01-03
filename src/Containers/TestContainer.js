import React, { Component } from 'react';
import CommunicateComponent from '../Components/TestCom/CommunicateComponent'
// import HOCProxyComponent from '../Components/TestCom/HOCProxyComponent'
// import HOCProxyInputComponent from '../Components/TestCom/HOCProxyInputComponent'
import HOCReserveComponent from '@/Components/TestCom/HOCReserveComponent'

class TestContainer extends Component {
  render() {
    return (
      <div>
        This is test-container
        {
          // <HOCReserveComponent testProps={'string'} />
          // <HOCProxyInputComponent />
          <CommunicateComponent list={[{text: 'text1', checked: true}, {text: 'text1', checked: true}, {text: 'text2', checked: false}]} />
          // <HOCProxyComponent />
        }
      </div>
    )
  }
}
export default TestContainer