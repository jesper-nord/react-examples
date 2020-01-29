import React from 'react'

const Checkbox = props => {
  return (
    <input type='checkbox' checked={props.checked} className='checkbox' />
  )
}

export default Checkbox
