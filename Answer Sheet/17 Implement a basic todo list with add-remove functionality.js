function createTodoList1() {
  const todos = [];
  return {
    add: (todo) => todos.push(todo),
    remove: (index) => todos.splice(index, 1),
    list: () => [...todos],
  };
}
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
export { createTodoList1, createTodoList2, createTodoList3, createTodoList4, createTodoList5 };
