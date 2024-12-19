describe('Vowel Counter', () => {
    const testCases = [
      { input: 'hello', expected: 2 },
      { input: 'world', expected: 1 },
      { input: 'AEIOU', expected: 5 },
      { input: 'aeiou', expected: 5 },
      { input: 'hEllO wOrld', expected: 2 },
      { input: '', expected: 0 },
      { input: '12345', expected: 0 },
      { input: 'programming', expected: 3 },
      { input: 'javascript', expected: 3 },
      { input: 'a', expected: 1 },
      { input: 'A', expected: 1 },
    ];

    // Solution 1: Using a for loop and includes
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should count vowels using a for loop and includes', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = countVowels1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using regex
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should count vowels using regex', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = countVowels2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using filter
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should count vowels using filter', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = countVowels3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using reduce
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should count vowels using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = countVowels4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a while loop
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should count vowels using a while loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = countVowels5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function countVowels1(str) {
        let count = 0;
        const vowels = "aeiouAEIOU";
        for (let char of str) {
          if (vowels.includes(char)) {
            count++;
          }
        }
        return count;
    }

    function countVowels2(str) {
        const matches = str.match(/[aeiouAEIOU]/g);
        return matches ? matches.length : 0;
    }

    function countVowels3(str) {
        const vowels = "aeiouAEIOU";
        return str.split('').filter(char => vowels.includes(char)).length;
    }

    function countVowels4(str) {
        const vowels = "aeiouAEIOU";
        return str.split('').reduce((count, char) => {
            return vowels.includes(char) ? count + 1 : count;
        }, 0);
    }

    function countVowels5(str) {
        let count = 0;
        const vowels = "aeiouAEIOU";
        let i = 0;
        while (i < str.length) {
            if (vowels.includes(str[i])) {
                count++;
            }
            i++;
        }
        return count;
    }
});
