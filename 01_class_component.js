import React, { Component } from 'react'

class Checkbox extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    <input type='checkbox' checked={this.props.checked} className='checkbox' />
  }
}

export default Checkbox
