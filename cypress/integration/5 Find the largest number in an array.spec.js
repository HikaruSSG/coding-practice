describe('Find Largest Number in Array', () => {
    const testCases = [
      { input: [1, 2, 3, 4, 5], expected: 5 },
      { input: [5, 4, 3, 2, 1], expected: 5 },
      { input: [-1, -2, -3, -4, -5], expected: -1 },
      { input: [1, 5, 2, 8, 3], expected: 8 },
      { input: [10, 2, 5, 1, 9], expected: 10 },
      { input: [1], expected: 1 },
      { input: [], expected: -Infinity },
      { input: [1, 1, 1, 1, 1], expected: 1 },
      { input: [-1, -5, -2, -8, -3], expected: -1 },
      { input: [0, 0, 0, 0, 0], expected: 0 },
    ];

    // Solution 1: Using Math.max()
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should find the largest number using Math.max()', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findLargest1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a for loop
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should find the largest number using a for loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findLargest2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using reduce
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should find the largest number using reduce', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findLargest3(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 4: Using forEach
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should find the largest number using forEach', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findLargest4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a while loop
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should find the largest number using a while loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findLargest5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function findLargest1(arr) {
        if (arr.length === 0) {
            return -Infinity;
        }
        return Math.max(...arr);
    }

    function findLargest2(arr) {
        let largest = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > largest) {
            largest = arr[i];
          }
        }
        return largest;
    }

    function findLargest3(arr) {
        if (arr.length === 0) {
            return -Infinity;
        }
        return arr.reduce((largest, current) => {
          return current > largest ? current : largest;
        }, arr[0]);
    }

    function findLargest4(arr) {
        if (arr.length === 0) {
            return -Infinity;
        }
        let largest = arr[0];
        arr.forEach(num => {
            if (num > largest) {
                largest = num;
            }
        });
        return largest;
    }

    function findLargest5(arr) {
        if (arr.length === 0) {
            return -Infinity;
        }
        let largest = arr[0];
        let i = 1;
        while (i < arr.length) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
            i++;
        }
        return largest;
    }
});
