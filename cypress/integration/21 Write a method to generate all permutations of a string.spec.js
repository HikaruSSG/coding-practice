describe('String Permutations Generator', () => {
    const testCases = [
      { input: 'abc', expected: ['abc', 'acb', 'bac', 'bca', 'cba', 'cab'] },
      { input: 'a', expected: ['a'] },
      { input: '', expected: [''] },
      { input: 'ab', expected: ['ab', 'ba'] },
      { input: 'abcd', expected: [
        'abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb',
        'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca',
        'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba',
        'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'
      ]},
      { input: 'aba', expected: [ 'aba', 'aab', 'baa', 'aba', 'aab', 'baa' ] },
    ];

    // Solution 1: Using recursion
    // Time Complexity: O(n! * n), Memory Allocation: O(n!)
    it('should generate permutations using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = generatePermutations1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using a for loop and splice
    // Time Complexity: O(n! * n), Memory Allocation: O(n)
    it('should generate permutations using a for loop and splice', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = generatePermutations2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using reduce
    // Time Complexity: O(n! * n), Memory Allocation: O(n!)
    it('should generate permutations using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = generatePermutations3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using a generator function
    // Time Complexity: O(n! * n), Memory Allocation: O(n)
    it('should generate permutations using a generator function', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = getAllPermutations(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using a while loop and array
    // Time Complexity: O(n! * n), Memory Allocation: O(n)
    it('should generate permutations using a while loop and array', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = generatePermutations5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function generatePermutations1(str) {
        if (str.length <= 1) {
          return [str];
        }
        const permutations = [];
        for (let i = 0; i < str.length; i++) {
          const char = str[i];
          const remainingChars = str.slice(0, i) + str.slice(i + 1);
          const subPermutations = generatePermutations1(remainingChars);
          for (let subPermutation of subPermutations) {
            permutations.push(char + subPermutation);
          }
        }
        return permutations;
    }

    function generatePermutations2(str) {
        if (str.length <= 1) {
            return [str];
        }
        const permutations = [];
        const chars = str.split('');
        const n = chars.length;
        const permute = (arr, l) => {
            if (l === n) {
                permutations.push(arr.join(''));
                return;
            }
            for (let i = l; i < n; i++) {
                [arr[l], arr[i]] = [arr[i], arr[l]];
                permute(arr, l + 1);
                [arr[l], arr[i]] = [arr[i], arr[l]];
            }
        };
        permute(chars, 0);
        return permutations;
    }

    function generatePermutations3(str) {
        if (str.length <= 1) {
            return [str];
        }
        return str.split('').reduce((acc, char, i) => {
            const remainingChars = str.slice(0, i) + str.slice(i + 1);
            const subPermutations = generatePermutations3(remainingChars);
            return acc.concat(subPermutations.map(subPermutation => char + subPermutation));
        }, []);
    }

    function* generatePermutations4(str) {
        if (str.length <= 1) {
            yield str;
            return;
        }
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const remainingChars = str.slice(0, i) + str.slice(i + 1);
            for (const subPermutation of generatePermutations4(remainingChars)) {
                yield char + subPermutation;
            }
        }
    }

    function getAllPermutations(str) {
        return Array.from(generatePermutations4(str));
    }

    function generatePermutations5(str) {
        if (str.length <= 1) {
            return [str];
        }
        const permutations = [];
        const chars = str.split('');
        const n = chars.length;
        const indices = Array(n).fill(0);
        let i = 0;
        while (i < n) {
            if (indices[i] < i) {
                if (i % 2 === 0) {
                    [chars[0], chars[i]] = [chars[i], chars[0]];
                } else {
                    [chars[indices[i]], chars[i]] = [chars[i], chars[indices[i]]];
                }
                permutations.push(chars.join(''));
                indices[i]++;
                i = 0;
            } else {
                indices[i] = 0;
                i++;
            }
        }
        return permutations;
    }
});
