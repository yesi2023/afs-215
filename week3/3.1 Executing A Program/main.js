const User = require("./user");

const user1 = new User(2, 5);
console.log("Addition:", user1.add()); // Output: 7
console.log("Subtraction:", user1.subtract()); // Output: -3
console.log("Multiplication:", user1.multiply()); // Output: 10
console.log("Division:", user1.divide()); // Output: 0.4
console.log(user1.greet()); // Output: Hello, Mia Aguilar! You are 12 years old.
console.log("Numbers as string:", user1.getNumbersAsString()); // Output: "25"

const user2 = new User(10, 3, "Alice", 25);
console.log("Addition:", user2.add()); // Output: 13
console.log("Subtraction:", user2.subtract()); // Output: 7
console.log("Multiplication:", user2.multiply()); // Output: 30
console.log("Division:", user2.divide()); // Output: 3.3333333333333335
console.log(user2.greet()); // Output: Hello, Alice! You are 25 years old.
console.log("Numbers as string:", user2.getNumbersAsString()); // Output: "103"
