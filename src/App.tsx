import * as React from 'react'
import { useState } from 'react'
import ReactCountdownClock from 'react-countdown-clock'
import { AddUsers } from './AddUsers'
import { ThrowError } from './ThrowError'

const App = () => {
  const [count, setCount] = useState()
  const [throwCount, setThrowCount] = useState()

  const rnd = () => Math.floor(Math.random() * 1000 + 1000)
  const addUsers = () => setCount(rnd())
  const throwError = () => setThrowCount(rnd())

  return (
    <div style={{ margin: 40 }}>
      <div style={{ marginBottom: 40 }}>
        <ReactCountdownClock seconds={100} color="teal" size={150} />
      </div>
      <p>
        <button onClick={addUsers}>Add users</button>
      </p>
      <p>
        <button onClick={throwError}>Throw</button>
      </p>
      <AddUsers count={count} />
      <ThrowError count={throwCount} />
    </div>
  )
}

export default App
