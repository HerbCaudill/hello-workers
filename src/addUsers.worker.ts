import { exposeWorker } from 'react-hooks-worker'
import * as A from 'automerge'

const addUsers = (n: number) => {
  let doc = A.from({ users: [] })
  for (let i = 0; i < n; i++) {
    doc = A.change(doc, d => d.users.push({ id: i }))
  }
  return n
}

exposeWorker(addUsers)
