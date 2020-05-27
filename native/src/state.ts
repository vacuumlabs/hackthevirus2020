import { createGlobalState } from 'react-hooks-global-state'

type GlobalState = {
  userId: undefined | string
  token: undefined | string
}

const initialState = {
  userId: undefined,
  token: undefined,
}

const { useGlobalState } = createGlobalState<GlobalState>(initialState)

export { useGlobalState }
