import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, VrButton, Text, Image, asset } from 'react-360'
import { setCurrentPostIndex, scrollUp, scrollDown } from '../actions/PostListActions';

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
    const { posts, scrollIndex, setCurrentPost, scrollUp, scrollDown } = this.props
    return (
      <View style={styles.container}>
        <VrButton onClick={scrollUp}>
          <Image style={styles.moreButtons} source={asset('ChevronUp.png')} />
        </VrButton>
        <View style={styles.postPanel}>
          {posts.slice(scrollIndex, scrollIndex + 5).map(postBox(setCurrentPost))}
        </View>
        <VrButton onClick={scrollDown}>
          <Image style={styles.moreButtons} source={asset('ChevronDown.png')} />
        </VrButton>
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
    alignItems: 'center'
  },
  postPanel: {
    width: '100%',
    height: 536,
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postBox: {
    width: 260,
    padding: 15,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 1,
  },
  moreButtons: {
    width: 32,
    height: 32,
  },
  postTitle: {
    fontSize: 16,
    maxHeight: 60,
  }
})

const mapStateToProps = state => ({
  posts: state.posts.listings,
  scrollIndex: state.posts.scrollIndex
})

const mapDispatchToProps = dispatch => ({
  setCurrentPost: index => {
    dispatch(setCurrentPostIndex(index))
  },
  scrollUp: () => {
    dispatch(scrollUp())
  },
  scrollDown: () => {
    dispatch(scrollDown())
  }
})

const PostsLinked = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsLinked