import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Image, Text } from 'react-360'


class Preview extends React.Component {

  componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }
  render() {
    if (!this.state.imageLoadError) {
    }
    if (this.props.post) {
      const { url, title } = this.props.post
        // Crummy way to check if the Image load will fail because of cors (but it's
        // all I can do for now)
        let imageContent = this.state.imageLoadError ? (
          <View style={styles.warningContainer}>
              <Text style={styles.warningText}>
                  You're seeing this message because I can't show you this
                  image yet. Unfortunately, since reddit hoted images do not
                  have Access-Control-Allow-Origin headers, I will have to
                  run them through a proxy server. I don't want to do that
                  quite yet, because I'll have to pay for the network traffic
                  of sending the images through my server. However, If you
                  install the Chrome extension "Allow-Control-Allow-Origin,"
                  you can get around this issue, but make sure you turn off
                  the extension after using it here! Until I set up a proxy,
                  you will only be able to view externally hosted images like
                  those from imgur. Sorry about that!
              </Text>
            <Image style={styles.imagePreview} source={{uri: url}} />
            </View>
          ) : (
            <Image style={styles.imagePreview} source={{uri: url}} />
          )
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {title}
            </Text>
          </View>
          {imageContent}
          <View style={styles.footerContainer}>
            <Text style={styles.bottomText}>
              {url}
            </Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Click on one of the posts on the left to see a preview
            </Text>
          </View>
          <View style={styles.warningContainer} />
          <View style={styles.footerContainer}>
            <Text style={styles.bottomText}>
              link will show up here
            </Text>
          </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width:600,
    height: 700,
    backgroundColor: 'rgba(50, 50, 50, 0.9)',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    fontSize: 25
  },
  imagePreview: {
    width: 600,
    height: 600,
    padding: 20,
    borderWidth: 2
  },
  warningContainer: {
    width: '100%',
    height: 600,
    padding: 20,
    borderWidth: 2
  },
  warningText :{
    fontSize: 22
  },
  footerContainer: {
    width: '100%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    borderWidth: 1,
    fontSize: 18
  }
})


const mapStateToProps = state => ({
  post: state.posts.listings[state.currentPost],
  currentPost: state.currentPost,
  accessToken: state.posts.accessToken
})

const PreviewLinked = connect(mapStateToProps)(Preview)

export default PreviewLinked