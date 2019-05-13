import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, VrButton, Text } from 'react-360'

// A box that will hold the preview of one post
const postBox = ({id, title}) => (
    <VrButton 
      key={id}
      style={styles.postBox}
      onClick={ () => { console.log({id, title}) } }
    >
      <Text style={styles.postTitle}>{title}</Text>
    </VrButton>
)

class Posts extends React.Component {
  render() {
    const { posts } = this.props
    console.log(posts);
    return (
      <View style={styles.container}>
        <View style={styles.postPanel}>
          {posts.slice(0,5).map(postBox)}
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postBox: {
    width: 260,
    height: 100,
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 1,
  },
  postTitle: {
    fontSize: 20,
  }
})

const mapStateToProps = state => ({
  posts: state.posts
})

const PostsLinked = connect(mapStateToProps)(Posts)

export default PostsLinked