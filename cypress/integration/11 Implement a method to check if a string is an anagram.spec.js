describe('Anagram Checker', () => {
    const testCases = [
      { input: ['listen', 'silent'], expected: true },
      { input: ['hello', 'world'], expected: false },
      { input: ['abc', 'cba'], expected: true },
      { input: ['aabb', 'bbaa'], expected: true },
      { input: ['a', 'a'], expected: true },
      { input: ['', ''], expected: true },
      { input: ['abc', 'abcd'], expected: false },
      { input: ['abc', 'ab'], expected: false },
      { input: ['anagram', 'nagaram'], expected: true },
      { input: ['rat', 'car'], expected: false },
      { input: ['A gentleman', 'Elegant man'], expected: true },
      { input: ['Debit card', 'Bad credit'], expected: true },
    ];

    // Solution 1: Using sort and compare
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should check if strings are anagrams using sort and compare', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isAnagram1(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using character counts
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if strings are anagrams using character counts', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isAnagram2(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using Map
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if strings are anagrams using Map', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isAnagram3(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using filter and includes
    // Time Complexity: O(n^2), Memory Allocation: O(n)
    it('should check if strings are anagrams using filter and includes', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isAnagram4(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using reduce
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if strings are anagrams using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isAnagram5(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function isAnagram1(str1, str2) {
        const sortedStr1 = str1.split("").sort().join("");
        const sortedStr2 = str2.split("").sort().join("");
        return sortedStr1 === sortedStr2;
    }

    function isAnagram2(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }
        const charCounts = {};
        for (let char of str1) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }
        for (let char of str2) {
            if (!charCounts[char]) {
                return false;
            }
            charCounts[char]--;
        }
        return true;
    }

    function isAnagram3(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }
        const charMap1 = new Map();
        const charMap2 = new Map();
        for (let char of str1) {
            charMap1.set(char, (charMap1.get(char) || 0) + 1);
        }
        for (let char of str2) {
            charMap2.set(char, (charMap2.get(char) || 0) + 1);
        }
        if (charMap1.size !== charMap2.size) {
            return false;
        }
        for (let [key, value] of charMap1) {
            if (charMap2.get(key) !== value) {
                return false;
            }
        }
        return true;
    }

    function isAnagram4(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }
        const arr1 = str1.split('');
        const arr2 = str2.split('');
        for (let char of arr1) {
            const index = arr2.indexOf(char);
            if (index > -1) {
                arr2.splice(index, 1);
            } else {
                return false;
            }
        }
        return arr2.length === 0;
    }

    function isAnagram5(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }
        const charCounts = str1.split('').reduce((counts, char) => {
            counts[char] = (counts[char] || 0) + 1;
            return counts;
        }, {});
        return str2.split('').every(char => {
            if (!charCounts[char]) {
                return false;
            }
            charCounts[char]--;
            return true;
        });
    }
});
