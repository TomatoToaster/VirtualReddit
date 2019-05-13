import React from 'react'
import { Provider } from 'react-redux'

import { Posts, Preview } from './components'
import store from './store'

// This way of storing the same store in all of these panels would work even if
// each panel was in a different file (i.e. they would be importing the same
// instance of the store even while using 3 import statements). Credit for this
// method goes and an example of this in play is attributed to this
// https://github.com/infoxicator/react360-redux/tree/master/src/scenes

export class LeftPanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Posts />
      </Provider>
    )
  }
}

export class CenterPanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Preview />
      </Provider>
    )
  }
}

export class RightPanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Posts />
      </Provider>
    )
  }
}