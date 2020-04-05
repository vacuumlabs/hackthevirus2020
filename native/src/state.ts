import { createGlobalState } from 'react-hooks-global-state'

type GlobalState = {
  userId: undefined | string
}

const initialState = {
  userId: undefined,
}

const { useGlobalState } = createGlobalState<GlobalState>(initialState)

export { useGlobalState }

