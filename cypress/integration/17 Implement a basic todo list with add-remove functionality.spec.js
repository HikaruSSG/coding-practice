describe('Todo List', () => {
    const testCases = [
        {
            description: 'should add and list todos',
            actions: [
                { type: 'add', todo: 'Buy groceries' },
                { type: 'add', todo: 'Walk the dog' },
                { type: 'list', expected: ['Buy groceries', 'Walk the dog'] },
            ],
        },
        {
            description: 'should add, remove, and list todos',
            actions: [
                { type: 'add', todo: 'Buy groceries' },
                { type: 'add', todo: 'Walk the dog' },
                { type: 'remove', index: 0 },
                { type: 'list', expected: ['Walk the dog'] },
            ],
        },
        {
            description: 'should add and remove todos at different indices',
            actions: [
                { type: 'add', todo: 'Buy groceries' },
                { type: 'add', todo: 'Walk the dog' },
                { type: 'add', todo: 'Do laundry' },
                { type: 'remove', index: 1 },
                 { type: 'list', expected: ['Buy groceries', 'Do laundry'] },
                { type: 'remove', index: 0 },
                { type: 'list', expected: ['Do laundry'] },
            ],
        },
        {
            description: 'should handle empty todo list',
            actions: [
                { type: 'list', expected: [] },
            ],
        },
         {
            description: 'should handle adding and removing multiple todos',
            actions: [
                { type: 'add', todo: 'Task 1' },
                { type: 'add', todo: 'Task 2' },
                { type: 'add', todo: 'Task 3' },
                { type: 'remove', index: 1 },
                { type: 'add', todo: 'Task 4' },
                { type: 'remove', index: 0 },
                { type: 'list', expected: ['Task 4', 'Task 3'] },
            ],
        },
    ];

    // Solution 1: Using an array and functions
    // Time Complexity: add O(1), remove O(n), list O(n), Memory Allocation: O(n)
    it('should implement todo list using an array and functions', () => {
        testCases.forEach(({ actions, description }) => {
            const todoList = createTodoList1();
            cy.log(`Testing: ${description}`);
            actions.forEach(({ type, todo, index, expected }) => {
                const startTime = performance.now();
                let result;
                if (type === 'add') {
                    todoList.add(todo);
                } else if (type === 'remove') {
                    todoList.remove(index);
                } else if (type === 'list') {
                    result = todoList.list();
                    expect(result).to.deep.equal(expected);
                }
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for action "${type}": ${executionTime}ms`);
            });
        });
    });

    // Solution 2: Using an object and methods
    // Time Complexity: add O(1), remove O(n), list O(n), Memory Allocation: O(n)
    it('should implement todo list using an object and methods', () => {
        testCases.forEach(({ actions, description }) => {
            const todoList = createTodoList2();
            cy.log(`Testing: ${description}`);
            actions.forEach(({ type, todo, index, expected }) => {
                const startTime = performance.now();
                let result;
                if (type === 'add') {
                    todoList.add(todo);
                } else if (type === 'remove') {
                    todoList.remove(index);
                } else if (type === 'list') {
                    result = todoList.list();
                    expect(result).to.deep.equal(expected);
                }
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for action "${type}": ${executionTime}ms`);
            });
        });
    });

    // Solution 3: Using a class
    // Time Complexity: add O(1), remove O(n), list O(n), Memory Allocation: O(n)
    it('should implement todo list using a class', () => {
        testCases.forEach(({ actions, description }) => {
            const todoList = createTodoList3();
            cy.log(`Testing: ${description}`);
            actions.forEach(({ type, todo, index, expected }) => {
                const startTime = performance.now();
                let result;
                if (type === 'add') {
                    todoList.add(todo);
                } else if (type === 'remove') {
                    todoList.remove(index);
                } else if (type === 'list') {
                    result = todoList.list();
                    expect(result).to.deep.equal(expected);
                }
                 const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for action "${type}": ${executionTime}ms`);
            });
        });
    });

    // Solution 4: Using a Map
    // Time Complexity: add O(1), remove O(1), list O(n), Memory Allocation: O(n)
    it('should implement todo list using a Map', () => {
        testCases.forEach(({ actions, description }) => {
            const todoList = createTodoList4();
            cy.log(`Testing: ${description}`);
            actions.forEach(({ type, todo, index, expected }) => {
                const startTime = performance.now();
                let result;
                if (type === 'add') {
                    todoList.add(todo);
                } else if (type === 'remove') {
                    todoList.remove(index);
                } else if (type === 'list') {
                    result = todoList.list();
                    expect(result).to.deep.equal(expected);
                }
                 const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for action "${type}": ${executionTime}ms`);
            });
        });
    });

    // Solution 5: Using closures
    // Time Complexity: add O(1), remove O(n), list O(n), Memory Allocation: O(n)
    it('should implement todo list using closures', () => {
        testCases.forEach(({ actions, description }) => {
            const todoList = createTodoList5();
            cy.log(`Testing: ${description}`);
            actions.forEach(({ type, todo, index, expected }) => {
                const startTime = performance.now();
                let result;
                if (type === 'add') {
                    todoList.add(todo);
                } else if (type === 'remove') {
                    todoList.remove(index);
                } else if (type === 'list') {
                    result = todoList.list();
                    expect(result).to.deep.equal(expected);
                }
                 const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for action "${type}": ${executionTime}ms`);
            });
        });
    });

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
});
