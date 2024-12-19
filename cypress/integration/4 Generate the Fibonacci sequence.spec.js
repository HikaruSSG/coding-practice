describe('Fibonacci Sequence Generator', () => {
    const testCases = [
      { input: 0, expected: [] },
      { input: 1, expected: [0] },
      { input: 2, expected: [0, 1] },
      { input: 5, expected: [0, 1, 1, 2, 3] },
      { input: 10, expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] },
    ];

    // Solution 1: Using a for loop
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should generate Fibonacci sequence using a for loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = fibonacci1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using a while loop
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should generate Fibonacci sequence using a while loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = fibonacci2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using recursion
    // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
    it('should generate Fibonacci sequence using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = fibonacci3(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 4: Using generator function
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should generate Fibonacci sequence using a generator function', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = getFibonacciSequence(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using array destructuring
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should generate Fibonacci sequence using array destructuring', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = fibonacci5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function fibonacci1(n) {
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
          sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence.slice(0, n);
    }

    function fibonacci2(n) {
        const sequence = [];
        let a = 0, b = 1, count = 0;
        while (count < n) {
            sequence.push(a);
            const temp = a;
            a = b;
            b = temp + b;
            count++;
        }
        return sequence;
    }

    function fibonacci3(n) {
        if (n <= 0) {
          return [];
        } else if (n === 1) {
          return [0];
        } else if (n === 2) {
          return [0, 1];
        } else {
          const sequence = fibonacci3(n - 1);
          sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
          return sequence;
        }
    }

    function* fibonacci4() {
        let a = 0, b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }

    function getFibonacciSequence(n) {
        const generator = fibonacci4();
        const sequence = [];
        for (let i = 0; i < n; i++) {
            sequence.push(generator.next().value);
        }
        return sequence;
    }

    function fibonacci5(n) {
        const sequence = [];
        let [a, b] = [0, 1];
        for (let i = 0; i < n; i++) {
            sequence.push(a);
            [a, b] = [b, a + b];
        }
        return sequence;
    }
});
