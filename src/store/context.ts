import { createContext, useContext } from 'react'
import { Action, State } from './types'

export const StoreContext = createContext<{
  store: State
  dispatch?: React.Dispatch<Action>
}>({
  store: { count: 0 },
})

export function useStoreContext() {
  return useContext(StoreContext)
}
