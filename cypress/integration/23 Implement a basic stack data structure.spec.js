describe('Stack Data Structure', () => {
    const testCases = [
      {
        description: 'should push and pop items',
        actions: [
          { type: 'push', item: 1 },
          { type: 'push', item: 2 },
          { type: 'pop', expected: 2 },
          { type: 'pop', expected: 1 },
          { type: 'isEmpty', expected: true },
        ],
      },
      {
        description: 'should push and peek items',
        actions: [
          { type: 'push', item: 1 },
          { type: 'push', item: 2 },
          { type: 'peek', expected: 2 },
          { type: 'size', expected: 2 },
          { type: 'isEmpty', expected: false },
        ],
      },
      {
        description: 'should handle empty stack',
        actions: [
          { type: 'pop', expected: undefined },
          { type: 'peek', expected: undefined },
          { type: 'isEmpty', expected: true },
          { type: 'size', expected: 0 },
        ],
      },
      {
        description: 'should handle multiple push and pop operations',
        actions: [
          { type: 'push', item: 1 },
          { type: 'push', item: 2 },
          { type: 'push', item: 3 },
          { type: 'pop', expected: 3 },
          { type: 'push', item: 4 },
          { type: 'pop', expected: 4 },
          { type: 'pop', expected: 2 },
          { type: 'pop', expected: 1 },
          { type: 'isEmpty', expected: true },
        ],
      },
      {
        description: 'should handle push and size operations',
        actions: [
          { type: 'push', item: 1 },
          { type: 'size', expected: 1 },
          { type: 'push', item: 2 },
          { type: 'size', expected: 2 },
          { type: 'push', item: 3 },
          { type: 'size', expected: 3 },
        ],
      },
    ];

    // Solution 1: Using an array and methods
    // Time Complexity: push O(1), pop O(1), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement stack using an array and methods', () => {
      testCases.forEach(({ actions, description }) => {
        const stack = createStack1();
        cy.log(`Testing: ${description}`);
        actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
          if (type === 'push') {
            stack.push(item);
          } else if (type === 'pop') {
            result = stack.pop();
            expect(result).to.equal(expected);
          } else if (type === 'peek') {
            result = stack.peek();
            expect(result).to.equal(expected);
          } else if (type === 'isEmpty') {
            result = stack.isEmpty();
            expect(result).to.equal(expected);
          } else if (type === 'size') {
            result = stack.size();
            expect(result).to.equal(expected);
          }
           const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
        });
      });
    });

    // Solution 2: Using an object and methods
    // Time Complexity: push O(1), pop O(1), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement stack using an object and methods', () => {
        testCases.forEach(({ actions, description }) => {
          const stack = createStack2();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'push') {
              stack.push(item);
            } else if (type === 'pop') {
              result = stack.pop();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = stack.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = stack.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = stack.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 3: Using a class
    // Time Complexity: push O(1), pop O(1), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement stack using a class', () => {
        testCases.forEach(({ actions, description }) => {
          const stack = createStack3();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'push') {
              stack.push(item);
            } else if (type === 'pop') {
              result = stack.pop();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = stack.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = stack.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = stack.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 4: Using a linked list
    // Time Complexity: push O(1), pop O(1), peek O(1), isEmpty O(1), size O(n), Memory Allocation: O(n)
    it('should implement stack using a linked list', () => {
        testCases.forEach(({ actions, description }) => {
          const stack = createStack4();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'push') {
              stack.push(item);
            } else if (type === 'pop') {
              result = stack.pop();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = stack.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = stack.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = stack.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 5: Using closures
    // Time Complexity: push O(1), pop O(1), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement stack using closures', () => {
        testCases.forEach(({ actions, description }) => {
          const stack = createStack5();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'push') {
              stack.push(item);
            } else if (type === 'pop') {
              result = stack.pop();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = stack.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = stack.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = stack.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    function createStack1() {
        const stack = [];
        return {
          push: (item) => stack.push(item),
          pop: () => stack.pop(),
          peek: () => stack[stack.length - 1],
          isEmpty: () => stack.length === 0,
          size: () => stack.length,
        };
      }

    function createStack2() {
        const stack = [];
        return {
            push(item) {
                stack.push(item);
            },
            pop() {
                return stack.pop();
            },
            peek() {
                return stack[stack.length - 1];
            },
            isEmpty() {
                return stack.length === 0;
            },
            size() {
                return stack.length;
            }
        };
    }

    class Stack3 {
        constructor() {
            this.stack = [];
        }
        push(item) {
            this.stack.push(item);
        }
        pop() {
            return this.stack.pop();
        }
        peek() {
            return this.stack[this.stack.length - 1];
        }
        isEmpty() {
            return this.stack.length === 0;
        }
        size() {
            return this.stack.length;
        }
    }

    function createStack3() {
        return new Stack3();
    }

    function createStack4() {
        let head = null;
        return {
            push(item) {
                head = { value: item, next: head };
            },
            pop() {
                if (!head) return undefined;
                const value = head.value;
                head = head.next;
                return value;
            },
            peek() {
                return head ? head.value : undefined;
            },
            isEmpty() {
                return !head;
            },
            size() {
                let count = 0;
                let current = head;
                while (current) {
                    count++;
                    current = current.next;
                }
                return count;
            }
        };
    }

    function createStack5() {
        let stack = [];
        return {
            push: function(item) {
                stack.push(item);
            },
            pop: function() {
                return stack.pop();
            },
            peek: function() {
                return stack[stack.length - 1];
            },
            isEmpty: function() {
                return stack.length === 0;
            },
            size: function() {
                return stack.length;
            }
        };
    }
});
