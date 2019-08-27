import * as React from 'react'

import { useWorker } from './lib/useWorker'

const throwErrorWorker = () => new Worker('./workers/throwError.ts')

interface AddUsersProps {
  count: number
}

export const ThrowError = ({ count = 0 }: AddUsersProps) => {
  const { result, error } = useWorker(throwErrorWorker, count)

  return error ? (
    <div>Error: {JSON.stringify(error)}</div>
  ) : result ? (
    <div>Result: {JSON.stringify(result)}</div>
  ) : (
    <span />
  )
}
