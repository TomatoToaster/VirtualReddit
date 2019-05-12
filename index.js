import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
} from 'react-360';

import { RedditApi } from './helpers';

export default class VirtualReddit extends React.Component {
  // Component will keep track of this state
  state = {
    count: 0,
    startIndex: 0,
    posts: [{title: 'loading...', id:'loading...'}],
  }

  // This method increments our count, triggering a re-render
  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
    Environment.clearBackground();
  }

  // Once the component mounts try to access the data from reddit
  componentDidMount() {
    RedditApi.getAccessToken()
    .then(resp => {
      let { access_token } = resp;
      return RedditApi.frontPageContent(access_token, 'gifs')
    })
    .then(resp => {
      const trimmed = RedditApi.trimListingsJSON(resp)
      this.setState({posts: trimmed.posts})
    });
  }


  // Check out what happened after the State updated in the Component
  componentDidUpdate(prevProps, prevState) {
    console.log('previous state:')
    console.log(prevState)
    console.log('current state')
    console.log(this.state)
  }

  postBox = ({id, title}) => (
    <VrButton 
      key={id}
      style={styles.postBox}
      onClick={this._incrementCount}
    >
      <Text style={styles.postTitle}>{title}</Text>
    </VrButton>
  )

  render() {
    return (
      <View style={styles.panelContainer}>
        <View style={styles.panel}>
          <VrButton
            onClick={this._incrementCount}
            style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {`Count: ${this.state.count}`}
              </Text>
          </VrButton>
        </View>
        <View style={styles.postPanel}>
          {this.state.posts.slice(this.state.startIndex, this.state.startIndex + 5).map(this.postBox)}
        </View>
        <View style={styles.panel}>
          <VrButton
            onClick={this._incrementCount}
            style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {`Count: ${this.state.count}`}
              </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panelContainer: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255,0.7)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  panel: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  greetingBox: {
    width: 200,
    height: 100,
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 20,
  },
  postPanel: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 3,
  },
  postBox: {
    width: '80%',
    height: 100,
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  postTitle: {
    fontSize: 20,
  }
});

AppRegistry.registerComponent('VirtualReddit', () => VirtualReddit);