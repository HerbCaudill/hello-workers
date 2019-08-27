import * as React from 'react'
import { useState } from 'react'
import ReactCountdownClock from 'react-countdown-clock'
import AddUsers from './AddUsers'

const App = () => {
  const [count, setCount] = useState()
  const click = () => setCount(Math.floor(Math.random() * 1000 + 1000))

  return (
    <div style={{ margin: 60 }}>
      <ReactCountdownClock seconds={100} color="#00f" alpha={0.9} size={150} />
      <div style={{ marginTop: 40 }}>
        <button onClick={click}>Add users</button>
      </div>
      <div style={{ marginTop: 10 }}>
        <AddUsers count={count} />
      </div>
    </div>
  )
}

export default App
