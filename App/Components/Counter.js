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
    let counterArray = this.props.store.counterArray
    let counterO = this.props.store.counter
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Single object example
        </Text>
        <CounterRow key={counterO.id} counter={counterO} />

        <Text style={styles.welcome}>
          Array example
        </Text>
        {counterArray.counterArray.map((counter) => {
          return (
             <CounterRow key={counter.id} counter={counter} />
           )
        }) }
        <Button onPress={counterArray.addCounter}>Add Row</Button>
      </View>
    )
  }
}

export default Counter
