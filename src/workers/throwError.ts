import { exposeWorker } from '../lib/exposeWorker'

function throwError(n: number) {
  if (n !== 0) throw new Error('oh no')
  else return 0
}

exposeWorker(throwError)
