import { RedditApi } from '../helpers'

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'

export const setAccessToken = (token) => ({
  type: SET_ACCESS_TOKEN,
  token
})

// Dispatched function returns Promise that gets resolved after access token is set
export const getAccessToken = () => {
  return (dispatch) => {
    return RedditApi.getAccessToken()
      .then(response => {
        let { access_token } = response
        dispatch(setAccessToken(access_token))
      })
  }
}