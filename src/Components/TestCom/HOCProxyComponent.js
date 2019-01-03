import React, { Component } from 'react';
// 高阶组件之属性代理

const MyContainer = (WrappedComponent) => class extends Component {
  proc(wrappedComponentInstance) {
    // wrappedComponentInstance.method();
    console.log(wrappedComponentInstance)
  }
  render() {
    const newProps = {
      text: 'newText',
    }
    const props = Object.assign({}, this.props, {
      ref: this.proc.bind(this)
    });
    return (
      <WrappedComponent {...newProps} {...props} />
    )
  }
}

class HOCProxyComponent extends Component {
  render() {
    const interim = this.props;
    console.log(interim)
    return (
      <div>
        This is HOCProxyComponent!
      </div>
    )
  }
}
export default MyContainer(HOCProxyComponent)














// @MyContainer
// class HOCProxyComponent extends Component {
//   render() {
//     return (
//       <div>
//         This is HOCProxyComponent!
//       </div>
//     )
//   }
// }
// export default HOCProxyComponent
