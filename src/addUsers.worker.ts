import { exposeWorker } from 'react-hooks-worker'
import * as A from 'automerge'

async function* addUsers(n: number) {
  let doc = A.from({ users: [] })
  for (let i = 0; i < n; i++) {
    yield i
    doc = A.change(doc, d => d.users.push({ id: i }))
  }
  yield n
}

exposeWorker(addUsers)
