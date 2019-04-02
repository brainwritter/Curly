import AppNavigation from '../Navigation/AppNavigation'

const reducer = (state: any, action: any) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}

export default reducer
