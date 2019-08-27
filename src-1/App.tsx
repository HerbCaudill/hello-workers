import * as React from 'react'
import { useState } from 'react'
import ReactCountdownClock from 'react-countdown-clock'
import AddUsersWorker from './AddUsers_Worker'

const App = () => {
  const [count, setCount] = useState()

  return (
    <div style={{ marginTop: 60 }}>
      <ReactCountdownClock seconds={100} color="#000" alpha={0.9} size={300} />

      <div>
        <h3>Web Worker Mode</h3>
        <button onClick={() => setCount(Math.floor(Math.random() * 1000 + 1000))}>Add users</button>
        <AddUsersWorker count={count} />
      </div>
    </div>
  )
}

export default App
