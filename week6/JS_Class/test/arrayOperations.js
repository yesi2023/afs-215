class ArrayOperations {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      throw new Error("Item not found in the array.");
    }
  }

  searchItem(item) {
    return this.items.includes(item);
  }
}

module.exports = ArrayOperations;



