import React, { Component } from 'react';
import TestContainer from '@/Containers/TestContainer'
import { connect } from 'react-redux';
import { TestAction as actions } from '@/Modals/Test';


const mapStateToProps = (state, ownProps) => ({
  states: state,
  own: ownProps
})

function testable(target) {
  target.isTestable = true;
}

@connect(mapStateToProps)
class TestPage extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  buttonClick() {
    this.props.dispatch(actions.TestModuleAction({ params: 'test_params' }))
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <p>This is TestPage!</p>
        <TestContainer />
        <button onClick={() => this.buttonClick()}>click me!</button>
      </div>
    )
  }
}

export default TestPage
