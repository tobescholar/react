import React, { Component } from 'react';

const MyContainer = ( WrappedComponent ) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value || '',
    })
  }

  render() {
    const newProps = {
      name: {
        value: this.state.name,
        onChange: this.onNameChange,
      }
    }
    return (
      <WrappedComponent {...this.props} {...newProps} />
    )
  }
}

class HOCProxyInputComponent extends Component {
  render() {
    return (
      <input name='name' {...this.props.name} />
    )
  }
}
export default MyContainer(HOCProxyInputComponent)
