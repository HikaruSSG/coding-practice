describe('Decimal to Binary Converter', () => {
    const testCases = [
      { input: 0, expected: '0' },
      { input: 1, expected: '1' },
      { input: 2, expected: '10' },
      { input: 3, expected: '11' },
      { input: 4, expected: '100' },
      { input: 5, expected: '101' },
      { input: 10, expected: '1010' },
      { input: 15, expected: '1111' },
      { input: 20, expected: '10100' },
      { input: 25, expected: '11001' },
      { input: 100, expected: '1100100' },
    ];

    // Solution 1: Using toString(2)
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should convert decimal to binary using toString(2)', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = decimalToBinary1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a while loop
    // Time Complexity: O(log n), Memory Allocation: O(log n)
    it('should convert decimal to binary using a while loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = decimalToBinary2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using recursion
    // Time Complexity: O(log n), Memory Allocation: O(log n) due to call stack
    it('should convert decimal to binary using recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = decimalToBinary3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using bitwise operations
    // Time Complexity: O(log n), Memory Allocation: O(log n)
    it('should convert decimal to binary using bitwise operations', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = decimalToBinary4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using array and join
    // Time Complexity: O(log n), Memory Allocation: O(log n)
    it('should convert decimal to binary using array and join', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = decimalToBinary5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function decimalToBinary1(decimal) {
        return decimal.toString(2);
    }

    function decimalToBinary2(decimal) {
        if (decimal === 0) {
            return "0";
        }
        let binary = "";
        while (decimal > 0) {
            binary = (decimal % 2) + binary;
            decimal = Math.floor(decimal / 2);
        }
        return binary;
    }

    function decimalToBinary3(decimal) {
        if (decimal === 0) {
            return "0";
        }
        if (decimal === 1) {
            return "1";
        }
        return decimalToBinary3(Math.floor(decimal / 2)) + (decimal % 2);
    }

    function decimalToBinary4(decimal) {
        if (decimal === 0) {
            return "0";
        }
        let binary = "";
        while (decimal > 0) {
            binary = (decimal & 1) + binary;
            decimal = decimal >> 1;
        }
        return binary;
    }

    function decimalToBinary5(decimal) {
        if (decimal === 0) {
            return "0";
        }
        const binaryArray = [];
        while (decimal > 0) {
            binaryArray.unshift(decimal % 2);
            decimal = Math.floor(decimal / 2);
        }
        return binaryArray.join('');
    }
});
