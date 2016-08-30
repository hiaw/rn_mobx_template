import React from 'react'
import {
  Text,
  View
} from 'react-native'
import styles from './Components/Styles/Root.Style.js'

class Root extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}

module.exports = Root
