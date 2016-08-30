import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Button from 'react-native-button'
import styles from './Styles/Counter.Style.js'

class Counter extends React.Component {
  render () {
    let counter = this.props.store.counter
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Reactive!
        </Text>
        <Text>Counter: {counter.count}</Text>
        <Text>Total clicks: {counter.total}</Text>
        <Button onPress={counter.increase}>+</Button>
        <Button onPress={counter.decrease}>-</Button>
      </View>
    )
  }
}

export default Counter
