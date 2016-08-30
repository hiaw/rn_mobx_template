import {reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator'

import Counter from './Counter.js'

@autobind
class CounterArray {
  @observable counterArray = [];

  addCounter(){
    this.counterArray.push(new Counter())
  }

  deleteCounter(i){
    this.counterArray.splice(i, 1)
  }
}

export default CounterArray;
