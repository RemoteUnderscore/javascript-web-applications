class CounterModel {
  constructor() {

    console.log('Hello Mike!')

    this.counter = 0;
  }
  
  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

module.exports = CounterModel;
