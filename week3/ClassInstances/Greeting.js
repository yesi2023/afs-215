class Greeting {
    constructor(number) {
      this.number = number;
    }
  
    getGreeting() {
      if (typeof this.number !== 'number') {
        return 'Error: Input must be a number.';
      }
  
      if (this.number % 3 === 0 && this.number % 7 === 0) {
        return 'Good Evening';
      } else if (this.number % 3 === 0) {
        return 'Good Morning';
      } else if (this.number % 7 === 0) {
        return 'Good Afternoon';
      } else {
        return this.number.toString();
      }
    }
  }
  
  module.exports = Greeting;
  
  
  