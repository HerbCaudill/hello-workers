import * as React from 'react'
import * as A from 'automerge'
import { useState, useEffect } from 'react'

interface AddUsersProps {
  count: number
}

export const AddUsers_MainThread = () => {
  const [count, setCount] = useState(0)
  const [result, setResult] = useState(0)

  useEffect(() => {
    let doc = A.from({ users: [] })
    for (let i = 0; i < count; i++) {
      doc = A.change(doc, d => d.users.push({ id: i }))
      setResult(i)
    }
    setResult(count)
  }, [count])

  const rnd = () => Math.floor(Math.random() * 1000 + 2000)
  const addUsers = () => setCount(rnd())

  return (
    <div>
      <p>
        <button onClick={addUsers}>Add users in main thread</button>
      </p>
      {result ? <p>Added {result} users</p> : ''}
    </div>
  )
}
