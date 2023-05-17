const Greeting = require('./Greeting');

const greeting1 = new Greeting(6);
console.log(greeting1.getGreeting()); // Output: Good Morning

const greeting2 = new Greeting(14);
console.log(greeting2.getGreeting()); // Output: Good Afternoon

const greeting3 = new Greeting(21);
console.log(greeting3.getGreeting()); // Output: Good Evening

const greeting4 = new Greeting(10);
console.log(greeting4.getGreeting()); // Output: 10

const greeting5 = new Greeting('hello');
console.log(greeting5.getGreeting()); // Output: Error: Input must be a number.

