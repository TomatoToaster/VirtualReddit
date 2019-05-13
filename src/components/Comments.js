import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, VrButton, Text } from 'react-360'

class Comments extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.postTitle}>Comments Coming Soon</Text>
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
  postTitle: {
    fontSize: 16,
  }
})

const mapStateToProps = state => ({
})

const CommentsLinked = connect(mapStateToProps)(Comments)


export default CommentsLinked