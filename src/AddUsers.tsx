import * as React from 'react'

import { useWorker } from 'react-hooks-worker'

const addUsersWorker = () => new Worker('./addUsers.worker.ts')

const AddUsers: React.FC<{ count: number }> = ({ count }) => {
  const { result, error } = useWorker(addUsersWorker, count)

  return error ? (
    <div>Error: {JSON.stringify(error)}</div>
  ) : result ? (
    <div>Added {result} users</div>
  ) : (
        <span />
      )
}

export default AddUsers
