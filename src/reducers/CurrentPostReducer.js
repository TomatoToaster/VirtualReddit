import { SET_CURRENT_POST } from "../actions";

export default (state = -1, action) => {
  switch (action.type) {
    case SET_CURRENT_POST:
      return action.index
    default:
      return state
  }
}