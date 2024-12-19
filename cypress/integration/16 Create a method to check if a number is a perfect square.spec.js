describe('Perfect Square Checker', () => {
    const testCases = [
      { input: 0, expected: true },
      { input: 1, expected: true },
      { input: 4, expected: true },
      { input: 9, expected: true },
      { input: 16, expected: true },
      { input: 25, expected: true },
      { input: 2, expected: false },
      { input: 3, expected: false },
      { input: 5, expected: false },
      { input: 6, expected: false },
      { input: 7, expected: false },
      { input: 8, expected: false },
      { input: 10, expected: false },
      { input: 15, expected: false },
      { input: 24, expected: false },
      { input: 100, expected: true },
      { input: 121, expected: true },
      { input: 144, expected: true },
      { input: -1, expected: false },
      { input: -4, expected: false },
    ];

    // Solution 1: Using Math.sqrt and Number.isInteger
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should check if a number is a perfect square using Math.sqrt and Number.isInteger', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isPerfectSquare1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a for loop
    // Time Complexity: O(sqrt(n)), Memory Allocation: O(1)
    it('should check if a number is a perfect square using a for loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isPerfectSquare2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using binary search
    // Time Complexity: O(log n), Memory Allocation: O(1)
    it('should check if a number is a perfect square using binary search', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isPerfectSquare3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using while loop
    // Time Complexity: O(sqrt(n)), Memory Allocation: O(1)
    it('should check if a number is a perfect square using a while loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isPerfectSquare4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using bit manipulation
    // Time Complexity: O(log n), Memory Allocation: O(1)
    it('should check if a number is a perfect square using bit manipulation', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isPerfectSquare5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function isPerfectSquare1(num) {
        if (num < 0) return false;
        const sqrt = Math.sqrt(num);
        return Number.isInteger(sqrt);
    }

    function isPerfectSquare2(num) {
        if (num < 0) return false;
        for (let i = 0; i <= num; i++) {
            if (i * i === num) {
                return true;
            }
            if (i * i > num) {
                return false;
            }
        }
        return false;
    }

    function isPerfectSquare3(num) {
        if (num < 0) return false;
        if (num === 0) return true;
        let left = 1;
        let right = num;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (mid * mid === num) {
                return true;
            } else if (mid * mid < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }

    function isPerfectSquare4(num) {
        if (num < 0) return false;
        let i = 0;
        while (i * i <= num) {
            if (i * i === num) {
                return true;
            }
            i++;
        }
        return false;
    }

    function isPerfectSquare5(num) {
        if (num < 0) return false;
        if (num === 0) return true;
        let x = num;
        let y = Math.floor(x / 2);
        while (y * y > x) {
            x = y;
            y = Math.floor(x / 2);
        }
        return y * y === num;
    }
});
