import { POSTS_FETCH_DONE, POSTS_FETCH_ERROR, SCROLL_UP, SCROLL_DOWN } from "../actions";

const defaultPostsState = { listings: [], scrollIndex: 0 } 

export default (state = defaultPostsState, action) => {
  let newScroll;
  switch (action.type) {
    case POSTS_FETCH_DONE:
      return { ...defaultPostsState, listings: action.posts }
    case POSTS_FETCH_ERROR:
      return defaultPostsState
    case SCROLL_UP:
      newScroll = Math.max(0, state.scrollIndex - 5)
      return { ...state, scrollIndex: newScroll }
    case SCROLL_DOWN:
      const listLength = state.listings.length
      newScroll = Math.min(state.scrollIndex + 5, listLength - 5)
      newScroll = Math.max(0, newScroll) // can't have it being negative
      return { ...state, scrollIndex: newScroll }
    default:
      return state
  }
}