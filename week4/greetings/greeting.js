function processNumber(num) {
    if (typeof num !== 'number') {
      throw new Error('Invalid input: Expected a number');
    }
  
    if (num % 3 === 0 && num % 7 === 0) {
      return 'Good Evening';
    } else if (num % 3 === 0) {
      return 'Good Morning';
    } else if (num % 7 === 0) {
      return 'Good Afternoon';
    } else {
      return num.toString();
    }
  }
  
  module.exports = processNumber;
  