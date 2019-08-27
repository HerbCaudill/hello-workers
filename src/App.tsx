import * as React from 'react'
import { useState } from 'react'
import ReactCountdownClock from 'react-countdown-clock'
import { AddUsers } from './AddUsers'
import { AddUsers_MainThread } from './AddUsers_MainThread'
import { ThrowError } from './ThrowError'

const App = () => {
  const [throwCount, setThrowCount] = useState()

  return (
    <div style={{ margin: 40 }}>
      <div style={{ marginBottom: 40 }}>
        <ReactCountdownClock seconds={100} color="teal" size={150} />
      </div>
      <AddUsers />
      <AddUsers_MainThread />
      <ThrowError />
    </div>
  )
}

export default App
