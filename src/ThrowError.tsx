import * as React from 'react'

import { useWorker } from './lib/useWorker'

const throwErrorWorker = () => new Worker('./workers/throwError.ts')

interface AddUsersProps {
  count: number
}

export const ThrowError = () => {
  const rnd = () => Math.floor(Math.random() * 1000 + 1000)
  const [count, setCount] = React.useState()
  const throwError = () => setCount(rnd())
  return (
    <div>
      <p>
        <button onClick={throwError}>Throw</button>
      </p>
      <ThrowError_Worker count={count} />
    </div>
  )
}

export const ThrowError_Worker = ({ count = 0 }: AddUsersProps) => {
  const { result, error } = useWorker(throwErrorWorker, count)

  return error ? (
    <div style={{ color: 'red' }}>Error: {JSON.parse(error).message}</div>
  ) : result ? (
    <div>Result: {JSON.stringify(result)}</div>
  ) : (
    <span />
  )
}
