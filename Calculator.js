const Calculator = {
    add(num1, num2) {
      return num1 + num2;
    },
    subtract(num1, num2) {
      return num1 - num2;
    },
    multiply(num1, num2) {
      return num1 * num2;
    },
    divide(num1, num2) {
      if (num1 === 0 && num2 === 0 ) {
        return 'undefined'
      } else if (num2 == 0) {
        return 'undefined';
      }
      else {
        return num1 / num2;
      }
    }
  };
  
  module.exports = Calculator;