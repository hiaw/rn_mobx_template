import {reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator'

@autobind
class CounterStore {
  @observable counter = 0;
  total = 0;

  constructor(){
    reaction(()=>this.counter, ()=>this.total++);
  }

  increase(){
    this.counter++;
  }

  decrease(){
    this.counter--;
  }
}

export default new CounterStore();
