const { expect } = require('chai');
const processNumber = require('../greeting');

//Requirement 1:
describe('processNumber', () => {
  it('should return "1" when passed 1', () => {
    const result = processNumber(1);
    expect(result).to.equal('1');
  });

  //Requirement 2:
  it('should return "2" when passed 2', () => {
    const result = processNumber(2);
    expect(result).to.equal('2');
  });

  //Requirement 3:
  it('should return "Good Morning" when passed a 3', () => {
    const result = processNumber(3);
    expect(result).to.equal('Good Morning');
  });

  //Requirement 4:
  it('should return "Good Afternoon" when passed a 7', () => {
    const result = processNumber(7);
    expect(result).to.equal('Good Afternoon');
  });

  //Requirement 5:
  it('should return "Good Morning" when passed a multiple of 3', () => {
    const result = processNumber(6);
    expect(result).to.equal('Good Morning');
  });

  //Requirement 6:
  it('should return "Good Afternoon" when passed a multiple of 7', () => {
    const result = processNumber(14);
    expect(result).to.equal('Good Afternoon');
  });

  //Requirement 7:
  it('should return "Good Evening" when passed a multiple of 3 and 7', () => {
    const result = processNumber(21);
    expect(result).to.equal('Good Evening');
  });

  //Requirement 8:
  it('should return the number as a string when it is not a multiple of 3 or 7', () => {
    const result = processNumber(5);
    expect(result).to.equal('5');
  });

  //Requirement 9:
  it('should throw an error message when a non-number input is provided', () => {
    expect(() => processNumber('abc')).to.throw('Invalid input: Expected a number');
  });
});
