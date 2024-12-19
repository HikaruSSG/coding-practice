describe('First Non-Repeating Character Finder', () => {
    const testCases = [
      { input: 'leetcode', expected: 'l' },
      { input: 'loveleetcode', expected: 'l' },
      { input: 'aabb', expected: undefined },
      { input: 'abcabc', expected: undefined },
      { input: 'abcab', expected: 'c' },
      { input: 'a', expected: 'a' },
      { input: '', expected: undefined },
      { input: 'aabbccdde', expected: 'e' },
      { input: 'aabbccdd', expected: undefined },
      { input: 'programming', expected: 'p' },
      { input: 'aabbc', expected: 'c' },
    ];

    // Solution 1: Using an object literal
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should find the first non-repeating character using an object literal', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findFirstNonRepeating1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using Map
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should find the first non-repeating character using Map', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findFirstNonRepeating2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using indexOf and lastIndexOf
    // Time Complexity: O(n^2), Memory Allocation: O(1)
    it('should find the first non-repeating character using indexOf and lastIndexOf', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findFirstNonRepeating3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using filter
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should find the first non-repeating character using filter', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findFirstNonRepeating4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a for loop and break
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should find the first non-repeating character using a for loop and break', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findFirstNonRepeating5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function findFirstNonRepeating1(str) {
        const charCounts = {};
        for (let char of str) {
          charCounts[char] = (charCounts[char] || 0) + 1;
        }
        for (let char of str) {
          if (charCounts[char] === 1) {
            return char;
          }
        }
        return undefined;
    }

    function findFirstNonRepeating2(str) {
        const charCounts = new Map();
        for (let char of str) {
            charCounts.set(char, (charCounts.get(char) || 0) + 1);
        }
        for (let char of str) {
            if (charCounts.get(char) === 1) {
                return char;
            }
        }
        return undefined;
    }

    function findFirstNonRepeating3(str) {
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (str.indexOf(char) === str.lastIndexOf(char)) {
                return char;
            }
        }
        return undefined;
    }

    function findFirstNonRepeating4(str) {
        const charCounts = {};
        for (let char of str) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }
        const nonRepeatingChars = str.split('').filter(char => charCounts[char] === 1);
        return nonRepeatingChars[0];
    }

    function findFirstNonRepeating5(str) {
        const charCounts = {};
        for (let char of str) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (charCounts[char] === 1) {
                return char;
            }
        }
        return undefined;
    }
});
