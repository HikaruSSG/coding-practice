describe('Factorial Calculator', () => {
    const testCases = [
      { input: 0, expected: 1 },
      { input: 1, expected: 1 },
      { input: 5, expected: 120 },
      { input: 10, expected: 3628800 },
      { input: 12, expected: 479001600 },
    ];

    // Solution 1: Using a for loop
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should calculate factorial using a for loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = factorial1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using recursion
    // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
    it('should calculate factorial using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = factorial2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using a while loop
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should calculate factorial using a while loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = factorial3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using reduce
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should calculate factorial using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = factorial4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a ternary operator with recursion
    // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
    it('should calculate factorial using a ternary operator with recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = factorial5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function factorial1(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
          result *= i;
        }
        return result;
    }

    function factorial2(n) {
        if (n === 0) {
          return 1;
        } else {
          return n * factorial2(n - 1);
        }
    }

    function factorial3(n) {
        let result = 1;
        while (n > 1) {
            result *= n;
            n--;
        }
        return result;
    }

    function factorial4(n) {
        if (n < 0) {
            return "Factorial is not defined for negative numbers";
        }
        if (n === 0) {
            return 1;
        }
        return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
    }

    function factorial5(n) {
        return n === 0 ? 1 : n * factorial5(n - 1);
    }
});
