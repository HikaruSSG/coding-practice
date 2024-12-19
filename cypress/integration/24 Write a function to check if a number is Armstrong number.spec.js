describe('Armstrong Number Checker', () => {
    const testCases = [
      { input: 0, expected: true },
      { input: 1, expected: true },
      { input: 153, expected: true },
      { input: 370, expected: true },
      { input: 371, expected: true },
      { input: 407, expected: true },
      { input: 123, expected: false },
      { input: 154, expected: false },
      { input: 372, expected: false },
      { input: 408, expected: false },
      { input: 1634, expected: true },
      { input: 8208, expected: true },
      { input: 9474, expected: true },
      { input: 54748, expected: true },
      { input: 1234, expected: false },
    ];

    // Solution 1: Using string conversion and for loop
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if a number is Armstrong using string conversion and for loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isArmstrong1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using while loop and modulo
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should check if a number is Armstrong using while loop and modulo', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isArmstrong2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using reduce
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if a number is Armstrong using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isArmstrong3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using recursion
    // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
    it('should check if a number is Armstrong using recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isArmstrong4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using forEach
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if a number is Armstrong using forEach', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isArmstrong5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function isArmstrong1(num) {
        const strNum = String(num);
        const n = strNum.length;
        let sum = 0;
        for (let digit of strNum) {
          sum += Math.pow(parseInt(digit), n);
        }
        return sum === num;
    }

    function isArmstrong2(num) {
        let sum = 0;
        let temp = num;
        const n = String(num).length;
        while (temp > 0) {
            const digit = temp % 10;
            sum += Math.pow(digit, n);
            temp = Math.floor(temp / 10);
        }
        return sum === num;
    }

    function isArmstrong3(num) {
        const strNum = String(num);
        const n = strNum.length;
        const sum = strNum.split('').reduce((acc, digit) => {
            return acc + Math.pow(parseInt(digit), n);
        }, 0);
        return sum === num;
    }

    function isArmstrong4(num, n = String(num).length, sum = 0, temp = num) {
        if (temp === 0) {
            return sum === num;
        }
        const digit = temp % 10;
        return isArmstrong4(num, n, sum + Math.pow(digit, n), Math.floor(temp / 10));
    }

    function isArmstrong5(num) {
        const strNum = String(num);
        const n = strNum.length;
        let sum = 0;
        strNum.split('').forEach(digit => {
            sum += Math.pow(parseInt(digit), n);
        });
        return sum === num;
    }
});
