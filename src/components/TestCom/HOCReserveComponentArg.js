import React, { Component } from 'react';
// 高阶组件之反向继承

function HOCFactoryFactory(...params) {
  return function HOCFactory(WrappedComponent) {
    return class HOC extends Component {
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}

class HOCReserveComponentArg extends Component {
  render() {
    const interim = this.props;
    return (
      <div>
        This is HOCProxyComponent!
      </div>
    )
  }
}
export default HOCFactoryFactory(params)(HOCReserveComponentArg)

// @HOCFactoryFactory(params)
// class HOCReserveComponentArg extends Component {}
