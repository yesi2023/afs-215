class User {
  constructor(num1, num2, name = "Mia Aguilar", age = 12) {
    this.num1 = num1;
    this.num2 = num2;
    this.name = name;
    this.age = age;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }

  greet() {
    return `Hello, ${this.name}! You are ${this.age} years old.`;
  }

  getNumbersAsString() {
    return this.num1.toString() + this.num2.toString();
  }
}

module.exports = User;
