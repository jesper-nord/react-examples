import React, { useState, useEffect } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Current count is ${count}`
  }, [count])

  return ( 
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter
