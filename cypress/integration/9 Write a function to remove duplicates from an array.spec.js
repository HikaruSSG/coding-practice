describe('Remove Duplicates from Array', () => {
    const testCases = [
      { input: [1, 2, 2, 3, 4, 4, 5], expected: [1, 2, 3, 4, 5] },
      { input: [1, 1, 1, 1, 1], expected: [1] },
      { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
      { input: [], expected: [] },
      { input: [1, 2, 3, 2, 1], expected: [1, 2, 3] },
      { input: [5, 4, 3, 2, 1], expected: [5, 4, 3, 2, 1] },
      { input: ['a', 'b', 'b', 'c', 'a'], expected: ['a', 'b', 'c'] },
      { input: [true, false, true, false], expected: [true, false] },
      { input: [null, null, undefined, undefined], expected: [null, undefined] },
      { input: [1, '1', 1, '1'], expected: [1, '1'] },
    ];

    // Solution 1: Using Set
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should remove duplicates using Set', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = removeDuplicates1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using filter
    // Time Complexity: O(n^2), Memory Allocation: O(n)
    it('should remove duplicates using filter', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = removeDuplicates2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using a for loop
    // Time Complexity: O(n^2), Memory Allocation: O(n)
    it('should remove duplicates using a for loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = removeDuplicates3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using reduce
    // Time Complexity: O(n^2), Memory Allocation: O(n)
    it('should remove duplicates using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = removeDuplicates4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using a Map
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should remove duplicates using a Map', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = removeDuplicates5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function removeDuplicates1(arr) {
        return [...new Set(arr)];
    }

    function removeDuplicates2(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    function removeDuplicates3(arr) {
        const uniqueArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (uniqueArr.indexOf(arr[i]) === -1) {
                uniqueArr.push(arr[i]);
            }
        }
        return uniqueArr;
    }

    function removeDuplicates4(arr) {
        return arr.reduce((unique, item) => {
            return unique.includes(item) ? unique : [...unique, item];
        }, []);
    }

    function removeDuplicates5(arr) {
        const uniqueMap = new Map();
        const uniqueArr = [];
        for (const item of arr) {
            if (!uniqueMap.has(item)) {
                uniqueMap.set(item, true);
                uniqueArr.push(item);
            }
        }
        return uniqueArr;
    }
});
