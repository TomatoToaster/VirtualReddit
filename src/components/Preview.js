import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, VrButton } from 'react-360'


class Preview extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 600,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
})

const mapStateToProps = state => ({
  posts: state.posts
})

const PreviewLinked = connect(mapStateToProps)(Preview)

export default PreviewLinked