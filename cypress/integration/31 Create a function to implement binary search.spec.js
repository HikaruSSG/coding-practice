describe('Binary Search', () => {
    const testCases = [
      { input: [[1, 2, 3, 4, 5], 3], expected: 2 },
      { input: [[1, 2, 3, 4, 5], 1], expected: 0 },
      { input: [[1, 2, 3, 4, 5], 5], expected: 4 },
      { input: [[1, 2, 3, 4, 5], 6], expected: -1 },
      { input: [[1, 2, 3, 4, 5], 0], expected: -1 },
      { input: [[2, 4, 6, 8, 10], 8], expected: 3 },
      { input: [[2, 4, 6, 8, 10], 3], expected: -1 },
      { input: [[1, 3, 5, 7, 9], 5], expected: 2 },
      { input: [[1, 3, 5, 7, 9], 2], expected: -1 },
      { input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7], expected: 6 },
      { input: [[1, 5, 7, 9, 11, 13, 15, 17, 19, 21], 13], expected: 5 },
      { input: [[1, 5, 7, 9, 11, 13, 15, 17, 19, 21], 2], expected: -1 },
      { input: [[1, 2], 2], expected: 1 },
      { input: [[1], 1], expected: 0 },
      { input: [[], 1], expected: -1 },
    ];

    // Solution 1: Using a while loop
    // Time Complexity: O(log n), Memory Allocation: O(1)
    it('should perform binary search using a while loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = binarySearch1(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using recursion
    // Time Complexity: O(log n), Memory Allocation: O(log n) due to call stack
    it('should perform binary search using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = binarySearch2(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using a for loop (less efficient)
    // Time Complexity: O(log n), Memory Allocation: O(1)
    it('should perform binary search using a for loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = binarySearch3(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a while loop and bitwise shift
    // Time Complexity: O(log n), Memory Allocation: O(1)
    it('should perform binary search using a while loop and bitwise shift', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = binarySearch4(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a do-while loop
    // Time Complexity: O(log n), Memory Allocation: O(1)
    it('should perform binary search using a do-while loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = binarySearch5(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function binarySearch1(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] === target) {
            return mid;
          } else if (arr[mid] < target) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return -1;
    }

    function binarySearch2(arr, target, left = 0, right = arr.length - 1) {
        if (left > right) {
            return -1;
        }
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            return binarySearch2(arr, target, mid + 1, right);
        } else {
            return binarySearch2(arr, target, left, mid - 1);
        }
    }

    function binarySearch3(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        for (; left <= right;) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    function binarySearch4(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = (left + right) >>> 1;
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    function binarySearch5(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let mid;
        do {
            mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } while (left <= right);
        return -1;
    }
});
