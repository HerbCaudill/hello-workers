import * as React from 'react'

import { useWorker } from './lib/useWorker'

const addUsersWorker = () => new Worker('./workers/addUsers.ts')

interface AddUsersProps {
  count: number
}

export const AddUsers = ({ count }: AddUsersProps) => {
  const { result, error } = useWorker(addUsersWorker, count)

  if (error) throw new Error(error)
  return result ? <div>Added {result} users</div> : <span />
}
