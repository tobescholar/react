import React, { Component } from 'react';

class ListItem extends Component {
  static defaultProps = {
    text: '',
    checked: false,
  }
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange} />
        <span style={{ color: 'white' }}>{ this.props.value }</span>
      </li>
    )
  }
}

class List extends Component {
  static defaultProps = {
    list: [],
    handleItemChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.map(entry => ({
        text: entry.text,
        checked: entry.checked,
      }))
    }
  }

  onItemChange(entry) {
    const { list } = this.state;
    this.setState({
      list: list.map(pre => ({
        text: pre.text,
        checked: pre.text === entry.text ? !pre.checked : pre.checked
      }))
    })

    this.props.handleItemChange(entry);
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((entry, index) => (
              <ListItem
                key={`list-${index}`}
                value={entry.text}
                checked={entry.checked}
                onChange={this.onItemChange.bind(this, entry)}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

class CommunicateComponent extends Component {
  constructor(props) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange(e) {
    console.log(e);
    console.log(this.props)
  }

  render() {
    return (
      <div>
        This is CommunicateComponent!
        <List
          list={this.props.list}
          handleItemChange={this.handleItemChange}
        />
      </div>
    )
  }
}
export default CommunicateComponent
