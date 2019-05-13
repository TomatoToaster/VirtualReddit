import apiKeys from '../../config/apiKeys';

// helper functions to access the reddit api
export default {

  // Returns a promise that will give the access token from reddit
  async getAccessToken() {
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(apiKeys.client_id + ':' + apiKeys.client_secret))
    headers.set('Content-Type', 'application/x-www-form-urlencoded')
    let data = new URLSearchParams();
    data.set('grant_type', 'client_credentials')
    data.set('device_id', 'DO_NOT_TRACK_THIS_DEVICE');
    return fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: headers,
      body: data.toString(),
    }).then(res => res.json())
    .catch(error => error)
  }, 

  // Access front page for user (if there is no subreddit, try to get front page)
  async frontPageContent(accessToken, subreddit) {
    const urlBase = 'https://oauth.reddit.com'
    const urlPost = '/hot'
    let searchParams = new URLSearchParams();
    searchParams.set('limit', 5)
    let urlSubreddit = ''
    if (subreddit) {
      urlSubreddit = '/r/' + subreddit
    }
    const url = urlBase + urlSubreddit + urlPost + '?' + searchParams.toString();
    let headers = new Headers()
    headers.set('Authorization', 'Bearer ' + accessToken)
    return fetch(url, {
      method: 'GET',
      headers,
    }).then(res => res.json())
    .catch(error => error)
  },

  // Trims json from listings to get relevant information
  trimListingsJSON(listings) {
    let trimmed = {}
    trimmed.posts = listings.data.children.map(({data}, idx) => ({ ...data, index: idx})).map(
      ({ id, title, url, is_self, is_video, thumbnail, preview, num_comments, index }) => 
      ({ id, title, url, is_self, is_video, thumbnail, preview, num_comments, index })
    )
    return trimmed;
  }
};