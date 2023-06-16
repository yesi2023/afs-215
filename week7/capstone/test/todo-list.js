class ToDoList {
    constructor() {
      this.items = [];
    }
  
    callList() {
      return this.items;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    addMultipleItems(items) {
      this.items.push(...items);
    }
  
    removeFirstItem() {
      this.items.shift();
    }
  
    removeLastItem() {
      this.items.pop();
    }
  
    removeSpecificItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }
  
  module.exports = ToDoList;
  