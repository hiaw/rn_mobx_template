import React from 'react'
import {
  View,
  Text
} from 'react-native'
import Button from 'react-native-button'
import CounterRow from './CounterRow.js'
import styles from './Styles/Counter.Style.js'

class Counter extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Reactive!
        </Text>
        <CounterRow {...this.props} />
      </View>
    )
  }
}

export default Counter
