import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Image, Text } from 'react-360'

const INITIAL_TITLE_AND_LINK = {
  url: 'https://reddit360.com',
  title: 'Click on one of the posts on the left to see a preview'
}


class Preview extends React.Component {

  render() {
    let url, title, isPostSelected
    if (this.props.post) {
      isPostSelected = true; // really annoying but we need a semicolon here
      ({ url, title } = this.props.post)
    } else {
      isPostSelected = false; // really annoying but we need a semicolon here
      ({ url, title } = INITIAL_TITLE_AND_LINK)
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.addressBar}>
          <View style={styles.addressBarBox}>
            <Text style={styles.addressBarText}>
              {url}
            </Text>
          </View>
        </View>
        { isPostSelected ? (
          <Image style={styles.imagePreview} source={{uri: url}} />
        ) : (
          <View style={styles.imagePaddedPreview} />
        ) }
        <View style={styles.footerContainer}>
          <Text style={styles.bottomText}>
            * If no image is showing up, see README on github.com/TomatoToaster/VirtualReddit * 
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:600,
    height: 720,
    backgroundColor: 'rgba(50, 50, 50, 0.9)',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 2,
  },
  titleContainer: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    fontSize: 25
  },
  imagePaddedPreview: {
    width: 600,
    height: 620,
  },
  imagePreview: {
    width: 600,
    height: 600,
    borderWidth: 2,
    borderTopWidth: 0,
  },
  addressBar: {
    width: '100%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  addressBarBox: {
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    width: '90%',
    height: 16,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addressBarText: {
    fontSize: 13,
    color: '#000'
  },
  bottomText: {
    fontSize: 13
  },
  footerContainer: {
    width: '100%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})


const mapStateToProps = state => ({
  post: state.posts.listings[state.currentPost],
  currentPost: state.currentPost,
  accessToken: state.posts.accessToken
})

const PreviewLinked = connect(mapStateToProps)(Preview)

export default PreviewLinked