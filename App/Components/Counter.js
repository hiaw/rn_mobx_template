import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Button from 'react-native-button'
import styles from './Styles/Counter.Style.js'

const Counter = ({store}) =>
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to React Native Reactive!
    </Text>
    <Text>Counter: {store.counter}</Text>
    <Text>Total clicks: {store.total}</Text>
    <Button onPress={store.increase}>+</Button>
    <Button onPress={store.decrease}>-</Button>
  </View>

export default Counter
