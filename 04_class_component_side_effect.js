import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  componentDidMount() {
    document.title = `Current count is ${this.state.count}`
  }

  componentDidUpdate() {
    document.title = `Current count is ${this.state.count}`
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return ( 
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+1</button>
      </div>
    )
  }
}

export default Counter
