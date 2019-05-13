import { POSTS_FETCH_ERROR } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case POSTS_FETCH_ERROR:
      return action.error
    default:
      return state
  }
}