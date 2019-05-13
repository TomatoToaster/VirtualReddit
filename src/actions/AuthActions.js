import { RedditApi } from '../helpers'

import { fetchPosts } from './PostListActions'

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'

const setAccessToken = (token) => ({
  type: SET_ACCESS_TOKEN,
  token
})

export const getAccessToken = () => {
  return (dispatch) => {
    RedditApi.getAccessToken()
    .then(resp => {
      let { access_token } = resp
      dispatch(setAccessToken(access_token))
      dispatch(fetchPosts())
    })
  }
}