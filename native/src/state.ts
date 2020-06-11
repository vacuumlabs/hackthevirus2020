import { createGlobalState } from 'react-hooks-global-state'

type GlobalState = {
  userId: undefined | string
  token: string
}

const initialState = {
  userId: undefined,
  token: '',
}

const { useGlobalState } = createGlobalState<GlobalState>(initialState)

export { useGlobalState }
