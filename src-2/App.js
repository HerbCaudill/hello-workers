import React from 'react'
import logo from './logo.svg'
import Demo from './Demo'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React!</h1>
      </header>
      <div className="App-intro">
        <Demo />
      </div>
    </div>
  )
}

export default App
