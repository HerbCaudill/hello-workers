import * as React from 'react'

import { useWorker } from './lib/useWorker'

const addUsersWorker = () => new Worker('./workers/addUsers.ts')

interface AddUsersProps {
  count: number
}

export const AddUsers = () => {
  const rnd = () => Math.floor(Math.random() * 1000 + 2000)
  const [count, setCount] = React.useState()
  const addUsers = () => setCount(rnd())
  return (
    <div>
      <p>
        <button onClick={addUsers}>Add users in background</button>
      </p>
      <AddUsers_Worker count={count} />
    </div>
  )
}

export const AddUsers_Worker = ({ count }: AddUsersProps) => {
  const { result, error } = useWorker(addUsersWorker, count)

  if (error) throw new Error(error)
  return result ? <div>Added {result} users</div> : <span />
}
