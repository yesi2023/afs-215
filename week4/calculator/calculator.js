function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return 'Error: Division by zero';
    }
    return a / b;
  }
  
  function callCalculator(a, operator, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Error: Invalid input';
    }
  
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return 'Error: Invalid operator';
    }
  }
  
  module.exports = {
    callCalculator
  };
  
  
  
  