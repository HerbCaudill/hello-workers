import React, { Component, useState } from 'react'
import ReactCountdownClock from 'react-countdown-clock'
import appWorker from './worker'
import WebWorker from './workerSetup'
import './App.css'

const worker = new WebWorker(appWorker)

export default () => {
  const [count, setCount] = useState(0)

  const fetchUsers = () => {
    const users = []

    const userDetails = {
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com',
      id: 1,
    }

    for (let i = 0; i < 10000000; i++) {
      userDetails.id = i++
      userDetails.dateJoined = Date.now()

      users.push(userDetails)
    }

    setCount(users.length)
  }

  const fetchWebWorker = () => {
    worker.postMessage('Fetch Users')

    worker.addEventListener('message', event => {
      setCount(event.data.length)
    })
  }

  return (
    <div className="App-bottom">
      <section className="App-left">
        <ReactCountdownClock seconds={100} color="#000" alpha={0.9} size={300} />
        <p className="text-center">Total User Count: {count}</p>
        <button className="btn-direct" onClick={fetchUsers}>
          Fetch Users Directly
        </button>
      </section>

      <section className="App-right">
        <ReactCountdownClock seconds={100} color="#e56" alpha={0.9} size={300} />
        <p className="text-center">Total User Count: {count}</p>
        <button className="btn-worker" onClick={fetchWebWorker}>
          Fetch Users with Web Worker
        </button>
      </section>
    </div>
  )
}
