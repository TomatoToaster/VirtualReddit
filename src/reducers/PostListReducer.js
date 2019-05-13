import { POSTS_FETCH_DONE, POSTS_FETCH_ERROR } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case POSTS_FETCH_DONE:
      return action.posts
    case POSTS_FETCH_ERROR:
      return []
    default:
      return state
  }
}