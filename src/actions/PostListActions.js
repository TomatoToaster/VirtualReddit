import { RedditApi } from '../helpers'

export const POSTS_FETCH_DONE = 'POSTS_FETCH_DONE' 
export const POSTS_FETCH_ERROR = 'POSTS_FETCH_ERROR' 
export const SCROLL_UP = 'SCROLL_UP'
export const SCROLL_DOWN = 'SCROLL_DOWN'
export const SET_CURRENT_POST = 'SET_CURRENT_POST'

const postFetchDone = posts => ({
  type: POSTS_FETCH_DONE,
  posts
})

const postFetchError = error => ({
  type: POSTS_FETCH_ERROR,
  error
})

export const fetchPosts = (subreddit) => {
  return (dispatch, getState) => {
    let { accessToken } = getState()
    if (!accessToken) {
      postFetchError('No Access Token for user')
    }
    else {
      RedditApi.frontPageContent(accessToken, subreddit)
      .then(res => {
        const trimmedPosts = RedditApi.trimListingsJSON(res).posts
        dispatch(postFetchDone(trimmedPosts))
      })
    }
  }
}

export const setCurrentPostIndex = (index) => ({
  type: SET_CURRENT_POST,
  index
})