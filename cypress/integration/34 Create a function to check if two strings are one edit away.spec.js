describe('One Edit Away Checker', () => {
    const testCases = [
      { input: ['pale', 'ple'], expected: true },
      { input: ['pales', 'pale'], expected: true },
      { input: ['pale', 'bale'], expected: true },
      { input: ['pale', 'bake'], expected: false },
      { input: ['pale', 'pale'], expected: true },
      { input: ['', 'a'], expected: true },
      { input: ['a', ''], expected: true },
      { input: ['', ''], expected: true },
      { input: ['abc', 'abcd'], expected: true },
      { input: ['abcd', 'abc'], expected: true },
      { input: ['abc', 'acb'], expected: true },
      { input: ['abc', 'adc'], expected: true },
      { input: ['abc', 'abd'], expected: true },
      { input: ['abc', 'abe'], expected: false },
      { input: ['pale', 'bales'], expected: false },
    ];

    // Solution 1: Using a for loop and character comparison
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should check if strings are one edit away using a for loop and character comparison', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isOneEditAway1(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a while loop and character comparison
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should check if strings are one edit away using a while loop and character comparison', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isOneEditAway2(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using filter and reduce
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should check if strings are one edit away using filter and reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isOneEditAway3(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a for loop and splice
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if strings are one edit away using a for loop and splice', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isOneEditAway4(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a for loop and character counts
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if strings are one edit away using a for loop and character counts', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isOneEditAway5(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function isOneEditAway1(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        if (Math.abs(len1 - len2) > 1) {
          return false;
        }
        let edits = 0;
        let i = 0;
        let j = 0;
        while (i < len1 && j < len2) {
          if (str1[i] === str2[j]) {
            i++;
            j++;
          } else {
            edits++;
            if (len1 > len2) {
              i++;
            } else if (len2 > len1) {
              j++;
            } else {
              i++;
              j++;
            }
          }
          if (edits > 1) {
            return false;
          }
        }
        if (i < len1 || j < len2) {
            edits++;
        }
        return edits <= 1;
    }

    function isOneEditAway2(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        if (Math.abs(len1 - len2) > 1) {
            return false;
        }
        let edits = 0;
        let i = 0;
        let j = 0;
        while (i < len1 && j < len2) {
            if (str1[i] === str2[j]) {
                i++;
                j++;
            } else {
                edits++;
                if (len1 > len2) {
                    i++;
                } else if (len2 > len1) {
                    j++;
                } else {
                    i++;
                    j++;
                }
            }
            if (edits > 1) {
                return false;
            }
        }
        if (i < len1 || j < len2) {
            edits++;
        }
        return edits <= 1;
    }

    function isOneEditAway3(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        if (Math.abs(len1 - len2) > 1) {
            return false;
        }
        let edits = 0;
        let i = 0;
        let j = 0;
        while (i < len1 && j < len2) {
            if (str1[i] === str2[j]) {
                i++;
                j++;
            } else {
                edits++;
                if (len1 > len2) {
                    i++;
                } else if (len2 > len1) {
                    j++;
                } else {
                    i++;
                    j++;
                }
            }
            if (edits > 1) {
                return false;
            }
        }
        if (i < len1 || j < len2) {
            edits++;
        }
        return edits <= 1;
    }

    function isOneEditAway4(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        if (Math.abs(len1 - len2) > 1) {
            return false;
        }
        let edits = 0;
        const arr1 = str1.split('');
        const arr2 = str2.split('');
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] === arr2[j]) {
                i++;
                j++;
            } else {
                edits++;
                if (arr1.length > arr2.length) {
                    arr1.splice(i, 1);
                } else if (arr2.length > arr1.length) {
                    arr2.splice(j, 1);
                } else {
                    arr1.splice(i, 1);
                    arr2.splice(j, 1);
                }
            }
            if (edits > 1) {
                return false;
            }
        }
        if (i < arr1.length || j < arr2.length) {
            edits++;
        }
        return edits <= 1;
    }

    function isOneEditAway5(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        if (Math.abs(len1 - len2) > 1) {
            return false;
        }
        let edits = 0;
        const charCounts = {};
        for (let char of str1) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }
        for (let char of str2) {
            if (charCounts[char]) {
                charCounts[char]--;
            } else {
                edits++;
            }
        }
        let remaining = 0;
        for (let char in charCounts) {
            remaining += charCounts[char];
        }
        return edits + remaining <= 1;
    }
});
