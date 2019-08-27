import { exposeWorker } from '../lib/exposeWorker'
import * as A from 'automerge'

async function* addUsers(n: number) {
  let doc = A.from({ users: [] })
  for (let i = 0; i < n; i++) {
    doc = A.change(doc, d => d.users.push({ id: i }))
    yield i
  }
  yield n
}

exposeWorker(addUsers)
