import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Image, Text } from 'react-360'


class Preview extends React.Component {
  render() {
    console.log(this.props)
    const url = this.props.postssss ? this.props.post.url : 'https://lh3.googleusercontent.com/ew1iSfR19iwLpeElibICEONozzgosHSwz7TZHI3xDnNxoi0RhBqdtRTQz4Iut3k'
    const title = this.props.post ? this.props.post.title : 'Click one of the posts on the left to see a preview';
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Image style={styles.imagePreview} source={{uri: url}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 600,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: 225,
    height: 225,
    borderWidth: 2,
  }
})

const mapStateToProps = state => ({
  post: state.posts[state.currentPost],
  currentPost: state.currentPost
})

const PreviewLinked = connect(mapStateToProps)(Preview)

export default PreviewLinked