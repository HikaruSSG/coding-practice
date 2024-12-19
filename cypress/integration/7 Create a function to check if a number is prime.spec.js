describe('Prime Number Checker', () => {
    const testCases = [
      { input: 2, expected: true },
      { input: 3, expected: true },
      { input: 4, expected: false },
      { input: 5, expected: true },
      { input: 7, expected: true },
      { input: 10, expected: false },
      { input: 11, expected: true },
      { input: 13, expected: true },
      { input: 15, expected: false },
      { input: 17, expected: true },
      { input: 20, expected: false },
      { input: 23, expected: true },
      { input: 29, expected: true },
      { input: 30, expected: false },
      { input: 31, expected: true },
      { input: 1, expected: false },
      { input: 0, expected: false },
      { input: -1, expected: false },
    ];

    // Solution 1: Using a for loop
    // Time Complexity: O(sqrt(n)), Memory Allocation: O(1)
    it('should check if a number is prime using a for loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isPrime1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a while loop
    // Time Complexity: O(sqrt(n)), Memory Allocation: O(1)
    it('should check if a number is prime using a while loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isPrime2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using recursion
    // Time Complexity: O(sqrt(n)), Memory Allocation: O(sqrt(n)) due to call stack
    it('should check if a number is prime using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isPrime3(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 4: Optimized for loop
    // Time Complexity: O(sqrt(n)), Memory Allocation: O(1)
    it('should check if a number is prime using an optimized for loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isPrime4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using Array.every
    // Time Complexity: O(sqrt(n)), Memory Allocation: O(sqrt(n))
    it('should check if a number is prime using Array.every', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isPrime5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function isPrime1(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
    }

    function isPrime2(num) {
        if (num <= 1) return false;
        let i = 2;
        while (i <= Math.sqrt(num)) {
            if (num % i === 0) {
                return false;
            }
            i++;
        }
        return true;
    }

    function isPrime3(num, divisor = 2) {
        if (num <= 1) return false;
        if (divisor > Math.sqrt(num)) return true;
        if (num % divisor === 0) return false;
        return isPrime3(num, divisor + 1);
    }

    function isPrime4(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }

    function isPrime5(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        return Array.from({ length: Math.floor(Math.sqrt(num)) - 1 }, (_, i) => i + 2).every(divisor => {
            return num % divisor !== 0;
        });
    }
});
