const {expect} = require("chai");
const ArrayOperations = require("./arrayOperations");

describe("ArrayOperations", () => {
  let array;

  beforeEach(() => {
    array = new ArrayOperations();
  });

  it("should add an item of any data type to the array", () => {
    array.addItem("orange");
    array.addItem(42);
    expect(array.getItems()).to.deep.equal(["orange", 42]);
  });

  it("should Call the array", () => {
    const items = array.getItems();
    expect(items).to.deep.equal([]);
  });

  it("should remove specific items from the array", () => {
    array.addItem("orange");
    array.addItem("mango");
    array.removeItem("orange");
    expect(array.getItems()).to.deep.equal(["mango"]);
  });

  it("should search the array for a specific item", () => {
    array.addItem("orange");
    array.addItem("mango");
    expect(array.searchItem("mango")).to.be.true;
    expect(array.searchItem("banana")).to.be.false;
  });

  // Refactor the code to implement using beforeEach to make your code DRY.
  // Also, implement at least once case of before, after, and afterEach functions to show functionality.
  // Commented out original code to show the development process
  // Uncomment the code block to see the refactored code

  // beforeEach(() => {
  //   array = new ArrayOperations();
  // });

  // beforeEach(() => {
  //   array.addItem("apple");
  //   array.addItem("banana");
  // });

  // before(() => {
  //   console.log("Before: This will run once before all test cases");
  // });

  // after(() => {
  //   console.log("After: This will run once after all test cases");
  // });

  // afterEach(() => {
  //   console.log("After each: This will run after each test case");
  // });
});


