describe('Missing Number Finder', () => {
    const testCases = [
      { input: [1, 2, 4, 5], expected: 3 },
      { input: [1, 3, 4, 5], expected: 2 },
      { input: [2, 3, 4, 5], expected: 1 },
      { input: [1, 2, 3, 5], expected: 4 },
      { input: [1, 2, 3, 4], expected: 5 },
      { input: [2, 4, 1, 5], expected: 3 },
      { input: [5, 2, 1, 4], expected: 3 },
      { input: [1, 2, 3, 4, 5, 6, 7, 8, 10], expected: 9 },
      { input: [10, 2, 1, 4, 5, 6, 7, 8, 9], expected: 3 },
      { input: [1, 3, 5, 2, 6, 8, 9, 10, 7], expected: 4 },
    ];

    // Solution 1: Using sum of numbers formula
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should find the missing number using sum of numbers formula', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findMissingNumber1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using XOR
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should find the missing number using XOR', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findMissingNumber2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using a for loop and comparison
    // Time Complexity: O(n log n), Memory Allocation: O(1)
    it('should find the missing number using a for loop and comparison', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findMissingNumber3([...input]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a while loop
    // Time Complexity: O(n log n), Memory Allocation: O(1)
    it('should find the missing number using a while loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findMissingNumber4([...input]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a Set
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should find the missing number using a Set', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findMissingNumber5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function findMissingNumber1(arr) {
        const n = arr.length + 1;
        const expectedSum = (n * (n + 1)) / 2;
        const actualSum = arr.reduce((sum, num) => sum + num, 0);
        return expectedSum - actualSum;
    }

    function findMissingNumber2(arr) {
        let xorSum = 0;
        for (let i = 1; i <= arr.length + 1; i++) {
            xorSum ^= i;
        }
        for (let num of arr) {
            xorSum ^= num;
        }
        return xorSum;
    }

    function findMissingNumber3(arr) {
        const sortedArr = arr.sort((a, b) => a - b);
        for (let i = 0; i < sortedArr.length; i++) {
            if (sortedArr[i] !== i + 1) {
                return i + 1;
            }
        }
        return sortedArr.length + 1;
    }

    function findMissingNumber4(arr) {
        let i = 1;
        const sortedArr = arr.sort((a, b) => a - b);
        while (i <= sortedArr.length) {
            if (sortedArr[i - 1] !== i) {
                return i;
            }
            i++;
        }
        return i;
    }

    function findMissingNumber5(arr) {
        const numSet = new Set(arr);
        for (let i = 1; i <= arr.length + 1; i++) {
            if (!numSet.has(i)) {
                return i;
            }
        }
    }
});
