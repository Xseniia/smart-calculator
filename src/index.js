class SmartCalculator {
  constructor(initialValue) {
    this.operations =''+ initialValue;
  }

  add(number) {
    this.operations += '+' + number;
    return this;
  }
  
  subtract(number) {
    this.operations += '-' + number;
    return this;
  }

  multiply(number) {
    this.operations += '*' + number;
    return this;
  }

  devide(number) {
    this.operations += '/' + number;
    return this;
  }

  pow(number) {
    this.operations += '**' + number;
    return this;
  }

  getResult() {
  	return eval(this.operations);
  }

  toString() {
    return this.getResult();
}

}


module.exports = SmartCalculator;
