const { expect } = require('chai');
const ToDoList = require('./todo-list');

describe('ToDoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new ToDoList();
  });

  it('should Call the list', () => {
    expect(todoList.callList()).to.deep.equal([]); // Initially, the list should be empty
  });

  it('should Add an item to the list', () => {
    const groceriesTask = { name: 'Buy groceries', category: 'Shopping' }; // Object / Dictionary
    const booleanTask = 'incomplete'; // Boolean (String representation)

    todoList.addItem(groceriesTask);
    todoList.addItem(booleanTask); // Add boolean task to the list
    expect(todoList.callList()).to.deep.equal([groceriesTask, booleanTask]);
  });

  it('should Add multiple items to the list', () => {
    const groceriesTask = { name: 'Buy groceries', category: 'Shopping' }; // Object / Dictionary
    const numberTask = 1; //Number
    const taskItem = { name: 'Produce', category: 'Apples', priority: 'Medium' }; // Object / Dictionary
    const booleanTask = 'pending'; // Boolean (String representation)

    todoList.addMultipleItems([groceriesTask, numberTask, taskItem, booleanTask]);
    expect(todoList.callList()).to.deep.equal([groceriesTask, numberTask, taskItem, booleanTask]);
  });

  it('should Remove the first item from the list', () => {
    const groceriesTask = { name: 'Buy groceries', category: 'Shopping' }; // Object / Dictionary
    const numberTask = 2; //Number
    const taskItem = { name: 'Dairy', category: 'Milk', priority: 'low' }; // Object / Dictionary
    const booleanTask = 'not started'; // Use "not started" for boolean task

    todoList.addMultipleItems([groceriesTask, numberTask, taskItem, booleanTask]);
    todoList.removeFirstItem();
    expect(todoList.callList()).to.deep.equal([numberTask, taskItem, booleanTask]);
  });

  it('should Remove the last item from the list', () => {
    const groceriesTask = { name: 'Buy groceries', category: 'Shopping' }; // Object / Dictionary
    const numberTask = 3; //Number
    const taskItem = { name: 'Meat and Seafood', category: 'Salmon', priority: 'High' }; // Object / Dictionary
    const booleanTask = 'incomplete'; // Use "incomplete" for boolean task

    todoList.addMultipleItems([groceriesTask, numberTask, taskItem, booleanTask]);
    todoList.removeLastItem();
    expect(todoList.callList()).to.deep.equal([groceriesTask, numberTask, taskItem]);
  });

  it('should remove a specific item from the list', () => {
    const groceriesTask = { name: 'Buy groceries', category: 'Shopping' }; // Object / Dictionary
    const numberTask = 4; //Number
    const taskItem = { name: 'Pantry Staples', category: 'Rice', priority: 'Medium' }; // Object / Dictionary
    const booleanTask = 'pending'; // Use "pending" for boolean task

    todoList.addMultipleItems([groceriesTask, numberTask, taskItem, booleanTask]);
    todoList.removeSpecificItem(numberTask);
    expect(todoList.callList()).to.deep.equal([groceriesTask, taskItem, booleanTask]);
  });
});


