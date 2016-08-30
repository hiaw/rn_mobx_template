import Counter from './Counter.js'
import CounterArray from './CounterArray.js'

let store = {
  counter: new Counter(),
  counterArray: new CounterArray()
}
store.counterArray.addCounter()

export default store
