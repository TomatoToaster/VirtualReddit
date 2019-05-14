import { SET_ACCESS_TOKEN } from '../actions'

export default (state = null, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return action.token
    default:
      return state
  }
}