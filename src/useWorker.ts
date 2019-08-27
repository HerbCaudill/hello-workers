import { useEffect, useMemo, useRef, useReducer } from 'react'

interface State {
  result: any
  error: string | Error
}

interface Action {
  type: string
  payload?: any
}

type WorkerFactory = () => Worker

const initialState: State = { result: null, error: null }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'init':
      return initialState
    case 'result':
      return { result: action.payload, error: null }
    case 'error':
      return { result: null, error: 'error' }
    default:
      throw new Error('unknown action')
  }
}

export const useWorker = (workerFactory: WorkerFactory, input: unknown) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const worker = useMemo(workerFactory, [workerFactory])
  const lastWorker = useRef<Worker>(null)

  useEffect(() => {
    lastWorker.current = worker

    let dispatchSafe = dispatch

    worker.onmessage = e => dispatchSafe({ type: 'result', payload: e.data })
    worker.onerror = e => dispatchSafe({ type: 'error', payload: e.error })

    const cleanup = () => {
      dispatchSafe = () => null // don't dispatch after cleanup.
      worker.terminate()
      dispatch({ type: 'init' })
    }

    return cleanup
  }, [worker])

  useEffect(() => lastWorker.current.postMessage(input), [input])

  return state
}
