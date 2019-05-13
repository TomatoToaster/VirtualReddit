import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'


// Kinda wild to be exporting something that is dynamic in this way but this is
// the best pattern I've seen so far. This will ensure the same store instance
// is shared between all of the root level React Components that are wrapped
// with a Provider. This works even if this store is being imported from
// different files. Credit for this idea goes to
// https://github.com/infoxicator/react360-redux/blob/master/src/store/store.js

export default createStore(reducers, {}, applyMiddleware(ReduxThunk))
