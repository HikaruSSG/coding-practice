describe('Merge Sorted Arrays', () => {
    const testCases = [
      { input: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
      { input: [[1, 2, 3], [4, 5, 6]], expected: [1, 2, 3, 4, 5, 6] },
      { input: [[4, 5, 6], [1, 2, 3]], expected: [1, 2, 3, 4, 5, 6] },
      { input: [[1, 3, 5], [2, 4]], expected: [1, 2, 3, 4, 5] },
      { input: [[2, 4], [1, 3, 5]], expected: [1, 2, 3, 4, 5] },
      { input: [[1, 2, 3], []], expected: [1, 2, 3] },
      { input: [[], [1, 2, 3]], expected: [1, 2, 3] },
      { input: [[], []], expected: [] },
      { input: [[1, 2, 2, 3], [2, 3, 4, 5]], expected: [1, 2, 2, 2, 3, 3, 4, 5] },
      { input: [[-1, 0, 1], [-2, 2]], expected: [-2, -1, 0, 1, 2] },
    ];

    // Solution 1: Using concat and sort
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should merge two sorted arrays using concat and sort', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = mergeSortedArrays1(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using a while loop and two pointers
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should merge two sorted arrays using a while loop and two pointers', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = mergeSortedArrays2(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using recursion
    // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
    it('should merge two sorted arrays using recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = mergeSortedArrays3(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using a for loop and push
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should merge two sorted arrays using a for loop and push', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = mergeSortedArrays4(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using reduce
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should merge two sorted arrays using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = mergeSortedArrays5(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function mergeSortedArrays1(arr1, arr2) {
        return arr1.concat(arr2).sort((a, b) => a - b);
    }

    function mergeSortedArrays2(arr1, arr2) {
        const merged = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }
        }
        while (i < arr1.length) {
            merged.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            merged.push(arr2[j]);
            j++;
        }
        return merged;
    }

    function mergeSortedArrays3(arr1, arr2) {
        if (arr1.length === 0) {
            return arr2;
        }
        if (arr2.length === 0) {
            return arr1;
        }
        if (arr1[0] < arr2[0]) {
            return [arr1[0]].concat(mergeSortedArrays3(arr1.slice(1), arr2));
        } else {
            return [arr2[0]].concat(mergeSortedArrays3(arr1, arr2.slice(1)));
        }
    }

    function mergeSortedArrays4(arr1, arr2) {
        const merged = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length || j < arr2.length) {
            if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }
        }
        return merged;
    }

    function mergeSortedArrays5(arr1, arr2) {
        let i = 0;
        let j = 0;
        return [...arr1, ...arr2].reduce((merged, _, index) => {
            if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }
            return merged;
        }, []);
    }
});
