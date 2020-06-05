import { createGlobalState } from 'react-hooks-global-state'

type GlobalState = {
  isLoggedIn: boolean
  userId: undefined | string
  token: string
}

const initialState = {
  isLoggedIn: false,
  userId: undefined,
  token: '',
}

const { useGlobalState } = createGlobalState<GlobalState>(initialState)

export { useGlobalState }
