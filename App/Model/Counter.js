import {reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator'

@autobind
class CounterStore {
  @observable count = 0;
  total = 0;

  constructor(){
    reaction(()=>this.count, ()=>this.total++);
  }

  increase(){
    this.count++;
  }

  decrease(){
    this.count--;
  }
}

export default new CounterStore();
