import React, { Component } from 'react';
// 高阶组件之反向继承

const MyContainer = (WrappedComponent) => class extends WrappedComponent {
  state = {
    child: 'child'
  }
  childFn() {
    return 'This is childFn String!';
  }
  mixinFn() {
    return 'This is child mixin string';
  }
  render() {
    const child = this.childFn();
    const parent = this.parentFn();
    const minxinStr = this.mixinFn();     // This is child mixin string
    const stateVar = this.state;          // { child: 'child' }
    return super.render();
  }
}

class HOCReserveComponent extends Component {
  state = {
    parent: 'parent'
  }
  parentFn() {
    return 'This is parentFn String!';
  }
  mixinFn() {
    return 'This is parent mixin string';
  }
  render() {
    const interim = this.props;
    return (
      <div>
        This is HOCProxyComponent!
      </div>
    )
  }
}
export default MyContainer(HOCReserveComponent)
