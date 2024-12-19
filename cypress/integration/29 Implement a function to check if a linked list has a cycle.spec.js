describe('Linked List Cycle Detector', () => {
    const createNode = (value) => ({ value: value, next: null });

    const createLinkedList = (values, cycleIndex = -1) => {
        let head = null;
        let current = null;
        let cycleNode = null;
        for (let i = 0; i < values.length; i++) {
            const newNode = createNode(values[i]);
            if (!head) {
                head = newNode;
                current = newNode;
            } else {
                current.next = newNode;
                current = newNode;
            }
            if (i === cycleIndex) {
                cycleNode = newNode;
            }
        }
        if (cycleNode) {
            current.next = cycleNode;
        }
        return head;
    };

    const testCases = [
      { input: createLinkedList([1, 2, 3, 4, 5]), expected: false },
      { input: createLinkedList([1, 2, 3, 4, 5], 2), expected: true },
      { input: createLinkedList([1, 2]), expected: false },
      { input: createLinkedList([1, 2], 0), expected: true },
      { input: createLinkedList([1], 0), expected: true },
      { input: createLinkedList([1]), expected: false },
      { input: createLinkedList([]), expected: false },
      { input: createLinkedList([1, 2, 3, 4, 5], 4), expected: true },
      { input: createLinkedList([1, 2, 3, 4, 5], 0), expected: true },
      { input: createLinkedList([1, 2, 3, 4, 5], 1), expected: true },
    ];

    // Solution 1: Using Floyd's cycle-finding algorithm (tortoise and hare)
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should detect cycle using Floyd\'s cycle-finding algorithm', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = hasCycle1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a Set
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should detect cycle using a Set', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = hasCycle2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using a Map
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should detect cycle using a Map', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = hasCycle3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a try-catch block (modifying the list)
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should detect cycle using a try-catch block (modifying the list)', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = hasCycle4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a while loop and a counter
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should detect cycle using a while loop and a counter', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = hasCycle5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function hasCycle1(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
          if (slow === fast) {
            return true;
          }
        }
        return false;
    }

    function hasCycle2(head) {
        const visited = new Set();
        let current = head;
        while (current) {
            if (visited.has(current)) {
                return true;
            }
            visited.add(current);
            current = current.next;
        }
        return false;
    }

    function hasCycle3(head) {
        const visited = new Map();
        let current = head;
        while (current) {
            if (visited.has(current)) {
                return true;
            }
            visited.set(current, true);
            current = current.next;
        }
        return false;
    }

    function hasCycle4(head) {
        try {
            let current = head;
            while (current) {
                if (current.visited) {
                    return true;
                }
                current.visited = true;
                current = current.next;
            }
            return false;
        } finally {
            let current = head;
            while (current) {
                delete current.visited;
                current = current.next;
            }
        }
    }

    function hasCycle5(head) {
        let current = head;
        let count = 0;
        while (current) {
            if (count > 10000) {
                return true;
            }
            current = current.next;
            count++;
        }
        return false;
    }
});
