import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Image, Text } from 'react-360'


class Preview extends React.Component {
  render() {
    const url = this.props.posts ? this.props.post.url : 'https://lh3.googleusercontent.com/ew1iSfR19iwLpeElibICEONozzgosHSwz7TZHI3xDnNxoi0RhBqdtRTQz4Iut3k'
    const title = this.props.post ? this.props.post.title : 'Click one of the posts on the left to see a preview';
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
        <Image style={styles.imagePreview} source={{uri: url}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:600,
    height: 700,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
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
    fontSize: 20
  },
  imagePreview: {
    width: 600,
    height: 600
  }
})


const mapStateToProps = state => ({
  post: state.posts[state.currentPost],
  currentPost: state.currentPost
})

const PreviewLinked = connect(mapStateToProps)(Preview)

export default PreviewLinked