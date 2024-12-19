describe('Calculate Sum of Array', () => {
    const testCases = [
      { input: [1, 2, 3, 4, 5], expected: 15 },
      { input: [10, 20, 30, 40, 50], expected: 150 },
      { input: [-1, -2, -3, -4, -5], expected: -15 },
      { input: [1, 5, 2, 8, 3], expected: 19 },
      { input: [10, 2, 5, 1, 9], expected: 27 },
      { input: [], expected: 0 },
      { input: [1], expected: 1 },
      { input: [0, 0, 0, 0, 0], expected: 0 },
      { input: [-1, -1, -1, -1, -1], expected: -5 },
      { input: [1, -1, 1, -1, 1], expected: 1 },
    ];

    // Solution 1: Using a for loop
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should calculate sum using a for loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = sumArray1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using reduce
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should calculate sum using reduce', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = sumArray2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using forEach
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should calculate sum using forEach', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = sumArray3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a while loop
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should calculate sum using a while loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = sumArray4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using recursion
    // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
    it('should calculate sum using recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = sumArray5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function sumArray1(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        return sum;
    }

    function sumArray2(arr) {
        return arr.reduce((sum, current) => sum + current, 0);
    }

    function sumArray3(arr) {
        let sum = 0;
        arr.forEach(num => {
            sum += num;
        });
        return sum;
    }

    function sumArray4(arr) {
        let sum = 0;
        let i = 0;
        while (i < arr.length) {
            sum += arr[i];
            i++;
        }
        return sum;
    }

    function sumArray5(arr) {
        if (arr.length === 0) {
            return 0;
        }
        return arr[0] + sumArray5(arr.slice(1));
    }
});
