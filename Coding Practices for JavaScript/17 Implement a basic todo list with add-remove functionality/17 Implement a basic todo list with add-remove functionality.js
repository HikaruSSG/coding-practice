// Implement a basic todo list with add/remove functionality

// Solution 1: Using an array and functions
function createTodoList1() {
  const todos = [];
  return {
    add: (todo) => todos.push(todo),
    remove: (index) => todos.splice(index, 1),
    list: () => [...todos],
  };
}
// Pros: Simple and easy to understand.
// Cons: Less structured than other approaches.

// Solution 2: Using an object and methods
function createTodoList2() {
    const todos = [];
    return {
        add(todo) {
            todos.push(todo);
        },
        remove(index) {
            todos.splice(index, 1);
        },
        list() {
            return [...todos];
        }
    };
}
// Pros: Similar to the first solution, but uses methods.
// Cons: Less structured than the class approach.

// Solution 3: Using a class
class TodoList3 {
    constructor() {
        this.todos = [];
    }
    add(todo) {
        this.todos.push(todo);
    }
    remove(index) {
        this.todos.splice(index, 1);
    }
    list() {
        return [...this.todos];
    }
}

function createTodoList3() {
    return new TodoList3();
}
// Pros: More structured and maintainable, uses a class for encapsulation.
// Cons: Slightly more verbose than the object literal approach.
// Recommended: This is generally the recommended approach due to its structure and maintainability.

// Solution 4: Using a Map
function createTodoList4() {
    const todos = new Map();
    let id = 0;
    return {
        add(todo) {
            todos.set(id++, todo);
        },
        remove(index) {
            todos.delete(index);
        },
        list() {
            return Array.from(todos.values());
        }
    };
}
// Pros: Uses a Map for storing todos, allows for non-numeric keys.
// Cons: More complex than the array approach, less common for this use case.

// Solution 5: Using closures
function createTodoList5() {
    let todos = [];
    return {
        add: function(todo) {
            todos.push(todo);
        },
        remove: function(index) {
            todos = todos.filter((_, i) => i !== index);
        },
        list: function() {
            return [...todos];
        }
    };
}
// Pros: Uses closures to encapsulate the todos array.
// Cons: Less efficient for removing elements, more complex to understand.
