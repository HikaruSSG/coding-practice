describe('Flatten Nested Array', () => {
    const testCases = [
      { input: [1, [2, 3], 4, [5, [6, 7]]], expected: [1, 2, 3, 4, 5, 6, 7] },
      { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
      { input: [], expected: [] },
      { input: [[1, 2], [3, 4], [5, 6]], expected: [1, 2, 3, 4, 5, 6] },
      { input: [1, [2, [3, [4, [5]]]]], expected: [1, 2, 3, 4, 5] },
      { input: [[[[[1]]]]], expected: [1] },
      { input: [1, [2], 3, [4], 5], expected: [1, 2, 3, 4, 5] },
      { input: [[], [], []], expected: [] },
      { input: [1, [2, 3], [4, [5, 6]], 7], expected: [1, 2, 3, 4, 5, 6, 7] },
      { input: [1, [2, [3, [4, [5, [6, [7]]]]]]], expected: [1, 2, 3, 4, 5, 6, 7] },
    ];

    // Solution 1: Using recursion
    // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
    it('should flatten array using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = flatten1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using reduce
    // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
    it('should flatten array using reduce', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = flatten2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using flat() method
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should flatten array using flat() method', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = flatten3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using a while loop and shift
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should flatten array using a while loop and shift', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = flatten4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using a for loop and splice
    // Time Complexity: O(n^2), Memory Allocation: O(1)
    it('should flatten array using a for loop and splice', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
           const inputCopy = [...input];
          const result = flatten5(inputCopy);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function flatten1(arr) {
        let flattened = [];
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            flattened.push(...flatten1(arr[i]));
          } else {
            flattened.push(arr[i]);
          }
        }
        return flattened;
    }

    function flatten2(arr) {
        return arr.reduce((flat, current) => {
          return flat.concat(Array.isArray(current) ? flatten2(current) : current);
        }, []);
    }

    function flatten3(arr) {
        return arr.flat(Infinity);
    }

    function flatten4(arr) {
        const stack = [...arr];
        const flattened = [];
        while (stack.length) {
            const current = stack.shift();
            if (Array.isArray(current)) {
                stack.unshift(...current);
            } else {
                flattened.push(current);
            }
        }
        return flattened;
    }

    function flatten5(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                arr.splice(i, 1, ...arr[i]);
                i--;
            }
        }
        return arr;
    }
});
