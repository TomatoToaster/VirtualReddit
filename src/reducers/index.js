import { combineReducers } from "redux";

import authReducer from './AuthReducer'
import postListReducer from './PostListReducer'
import currentPostReducer from './CurrentPostReducer'
import errorReducer from './ErrorReducer'

export default combineReducers({
  accessToken: authReducer,
  posts: postListReducer,
  currentPost: currentPostReducer,
  error: errorReducer,
});