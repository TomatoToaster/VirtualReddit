import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, VrButton, Text } from 'react-360'
import { setCurrentPostIndex } from '../actions/PostListActions';

// A box that will hold the preview of one post
const postBox = onClickEvent => ({id, title, index}) => (
    <VrButton 
      key={id}
      style={styles.postBox}
      onClick={ () => { onClickEvent(index) } }
    >
      <Text style={styles.postTitle}>{title}</Text>
    </VrButton>
)

class Posts extends React.Component {
  render() {
    const { posts, setCurrentPost } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.postPanel}>
          {posts.slice(0,5).map(postBox(setCurrentPost))}
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  postBox: {
    width: 260,
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 1,
  },
  postTitle: {
    fontSize: 16,
  }
})

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  setCurrentPost: index => {
    dispatch(setCurrentPostIndex(index))
  }
})

const PostsLinked = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsLinked