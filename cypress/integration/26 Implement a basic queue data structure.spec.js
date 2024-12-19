describe('Queue Data Structure', () => {
    const testCases = [
      {
        description: 'should enqueue and dequeue items',
        actions: [
          { type: 'enqueue', item: 1 },
          { type: 'enqueue', item: 2 },
          { type: 'dequeue', expected: 1 },
          { type: 'dequeue', expected: 2 },
          { type: 'isEmpty', expected: true },
        ],
      },
      {
        description: 'should enqueue and peek items',
        actions: [
          { type: 'enqueue', item: 1 },
          { type: 'enqueue', item: 2 },
          { type: 'peek', expected: 1 },
          { type: 'size', expected: 2 },
          { type: 'isEmpty', expected: false },
        ],
      },
      {
        description: 'should handle empty queue',
        actions: [
          { type: 'dequeue', expected: undefined },
          { type: 'peek', expected: undefined },
          { type: 'isEmpty', expected: true },
          { type: 'size', expected: 0 },
        ],
      },
      {
        description: 'should handle multiple enqueue and dequeue operations',
        actions: [
          { type: 'enqueue', item: 1 },
          { type: 'enqueue', item: 2 },
          { type: 'enqueue', item: 3 },
          { type: 'dequeue', expected: 1 },
          { type: 'enqueue', item: 4 },
          { type: 'dequeue', expected: 2 },
          { type: 'dequeue', expected: 3 },
          { type: 'dequeue', expected: 4 },
          { type: 'isEmpty', expected: true },
        ],
      },
      {
        description: 'should handle enqueue and size operations',
        actions: [
          { type: 'enqueue', item: 1 },
          { type: 'size', expected: 1 },
          { type: 'enqueue', item: 2 },
          { type: 'size', expected: 2 },
          { type: 'enqueue', item: 3 },
          { type: 'size', expected: 3 },
        ],
      },
    ];

    // Solution 1: Using an array and methods
    // Time Complexity: enqueue O(1), dequeue O(n), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement queue using an array and methods', () => {
      testCases.forEach(({ actions, description }) => {
        const queue = createQueue1();
        cy.log(`Testing: ${description}`);
        actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
          if (type === 'enqueue') {
            queue.enqueue(item);
          } else if (type === 'dequeue') {
            result = queue.dequeue();
            expect(result).to.equal(expected);
          } else if (type === 'peek') {
            result = queue.peek();
            expect(result).to.equal(expected);
          } else if (type === 'isEmpty') {
            result = queue.isEmpty();
            expect(result).to.equal(expected);
          } else if (type === 'size') {
            result = queue.size();
            expect(result).to.equal(expected);
          }
           const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
        });
      });
    });

    // Solution 2: Using an object and methods
    // Time Complexity: enqueue O(1), dequeue O(n), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement queue using an object and methods', () => {
        testCases.forEach(({ actions, description }) => {
          const queue = createQueue2();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'enqueue') {
              queue.enqueue(item);
            } else if (type === 'dequeue') {
              result = queue.dequeue();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = queue.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = queue.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = queue.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 3: Using a class
    // Time Complexity: enqueue O(1), dequeue O(n), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement queue using a class', () => {
        testCases.forEach(({ actions, description }) => {
          const queue = createQueue3();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'enqueue') {
              queue.enqueue(item);
            } else if (type === 'dequeue') {
              result = queue.dequeue();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = queue.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = queue.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = queue.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 4: Using a linked list
    // Time Complexity: enqueue O(1), dequeue O(1), peek O(1), isEmpty O(1), size O(n), Memory Allocation: O(n)
    it('should implement queue using a linked list', () => {
        testCases.forEach(({ actions, description }) => {
          const queue = createQueue4();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'enqueue') {
              queue.enqueue(item);
            } else if (type === 'dequeue') {
              result = queue.dequeue();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = queue.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = queue.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = queue.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 5: Using closures
    // Time Complexity: enqueue O(1), dequeue O(n), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement queue using closures', () => {
        testCases.forEach(({ actions, description }) => {
          const queue = createQueue5();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'enqueue') {
              queue.enqueue(item);
            } else if (type === 'dequeue') {
              result = queue.dequeue();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = queue.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = queue.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = queue.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    function createQueue1() {
        const queue = [];
        return {
          enqueue: (item) => queue.push(item),
          dequeue: () => queue.shift(),
          peek: () => queue[0],
          isEmpty: () => queue.length === 0,
          size: () => queue.length,
        };
      }

    function createQueue2() {
        const queue = [];
        return {
            enqueue(item) {
                queue.push(item);
            },
            dequeue() {
                return queue.shift();
            },
            peek() {
                return queue[0];
            },
            isEmpty() {
                return queue.length === 0;
            },
            size() {
                return queue.length;
            }
        };
    }

    class Queue3 {
        constructor() {
            this.queue = [];
        }
        enqueue(item) {
            this.queue.push(item);
        }
        dequeue() {
            return this.queue.shift();
        }
        peek() {
            return this.queue[0];
        }
        isEmpty() {
            return this.queue.length === 0;
        }
        size() {
            return this.queue.length;
        }
    }

    function createQueue3() {
        return new Queue3();
    }

    function createQueue4() {
        let head = null;
        let tail = null;
        return {
            enqueue(item) {
                const newNode = { value: item, next: null };
                if (!head) {
                    head = newNode;
                    tail = newNode;
                } else {
                    tail.next = newNode;
                    tail = newNode;
                }
            },
            dequeue() {
                if (!head) return undefined;
                const value = head.value;
                head = head.next;
                if (!head) {
                    tail = null;
                }
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

    function createQueue5() {
        let queue = [];
        return {
            enqueue: function(item) {
                queue.push(item);
            },
            dequeue: function() {
                return queue.shift();
            },
            peek: function() {
                return queue[0];
            },
            isEmpty: function() {
                return queue.length === 0;
            },
            size: function() {
                return queue.length;
            }
        };
    }
});
