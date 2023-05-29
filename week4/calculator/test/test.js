const assert = require('chai').assert;
const calculator = require('../calculator');

describe('Calculator', function() {
  it('should be able to call the calculator', function() {
    const result = calculator.callCalculator(5, '+', 3);
    assert.equal(result, 8);
  });

  it('should pass the calculator two numbers resulting in addition', function() {
    const result = calculator.callCalculator(5, '+', 3);
    assert.equal(result, 8);
  });

  it('should pass the calculator two numbers resulting in subtraction', function() {
    const result = calculator.callCalculator(10, '-', 4);
    assert.equal(result, 6);
  });

  it('should pass the calculator two numbers resulting in multiplication', function() {
    const result = calculator.callCalculator(5, '*', 3);
    assert.equal(result, 15);
  });

  it('should pass the calculator two numbers resulting in division', function() {
    const result = calculator.callCalculator(10, '/', 2);
    assert.equal(result, 5);
  });

  it('should return an error if passed anything other than a number', function() {
    const result = calculator.callCalculator('5', '+', 3);
    assert.equal(result, 'Error: Invalid input');
  });
});







