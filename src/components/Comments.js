import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, VrButton, Text } from 'react-360'

class Comments extends React.Component {
  render() {
    const title = this.props.post ? this.props.post.title : 'Click one of the posts on the left to see a preview'
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.title}>Comments Coming Soon</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    height: 100,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
  }
})

const mapStateToProps = state => ({
  post: state.posts[state.currentPost],
  currentPost: state.currentPost
})

const CommentsLinked = connect(mapStateToProps)(Comments)


export default CommentsLinked