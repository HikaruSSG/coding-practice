describe('Median of Two Sorted Arrays Finder', () => {
    const testCases = [
      { input: [[1, 3], [2]], expected: 2 },
      { input: [[1, 2], [3, 4]], expected: 2.5 },
      { input: [[1, 2, 3], [4, 5]], expected: 3 },
      { input: [[1, 2, 3], [4, 5, 6]], expected: 3.5 },
      { input: [[1, 2, 3, 4], [5, 6, 7, 8]], expected: 4.5 },
      { input: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]], expected: 5.5 },
      { input: [[1, 3, 5], [2, 4, 6]], expected: 3.5 },
      { input: [[1, 3, 5, 7], [2, 4, 6, 8]], expected: 4.5 },
      { input: [[1, 2], []], expected: 1.5 },
      { input: [[], [1, 2]], expected: 1.5 },
      { input: [[], []], expected: NaN },
      { input: [[1, 2, 3], [4]], expected: 2.5 },
      { input: [[1, 2], [3, 4, 5]], expected: 3 },
      { input: [[1, 2, 3, 4, 5], [6]], expected: 3.5 },
      { input: [[1, 2, 3, 4, 5], [6, 7]], expected: 4 },
    ];

    // Solution 1: Using merge and find median
    // Time Complexity: O((m+n) log (m+n)), Memory Allocation: O(m+n)
    it('should find the median using merge and find median', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findMedianSortedArrays1(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using binary search
    // Time Complexity: O(log(min(m,n))), Memory Allocation: O(1)
    it('should find the median using binary search', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findMedianSortedArrays2(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using a while loop and two pointers
    // Time Complexity: O(m+n), Memory Allocation: O(m+n)
    it('should find the median using a while loop and two pointers', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findMedianSortedArrays3(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a for loop and push
    // Time Complexity: O(m+n), Memory Allocation: O(m+n)
    it('should find the median using a for loop and push', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findMedianSortedArrays4(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using reduce
    // Time Complexity: O(m+n), Memory Allocation: O(m+n)
    it('should find the median using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findMedianSortedArrays5(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function findMedianSortedArrays1(arr1, arr2) {
        const merged = [...arr1, ...arr2].sort((a, b) => a - b);
        const mid = Math.floor(merged.length / 2);
        if (merged.length % 2 === 0) {
          return (merged[mid - 1] + merged[mid]) / 2;
        } else {
          return merged[mid];
        }
    }

    function findMedianSortedArrays2(arr1, arr2) {
        const m = arr1.length;
        const n = arr2.length;
        if (m > n) {
            return findMedianSortedArrays2(arr2, arr1);
        }
        let low = 0;
        let high = m;
        while (low <= high) {
            const partitionX = Math.floor((low + high) / 2);
            const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
            const maxX = partitionX === 0 ? -Infinity : arr1[partitionX - 1];
            const minX = partitionX === m ? Infinity : arr1[partitionX];
            const maxY = partitionY === 0 ? -Infinity : arr2[partitionY - 1];
            const minY = partitionY === n ? Infinity : arr2[partitionY];
            if (maxX <= minY && maxY <= minX) {
                if ((m + n) % 2 === 0) {
                    return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
                } else {
                    return Math.max(maxX, maxY);
                }
            } else if (maxX > minY) {
                high = partitionX - 1;
            } else {
                low = partitionX + 1;
            }
        }
    }

    function findMedianSortedArrays3(arr1, arr2) {
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
        const mid = Math.floor(merged.length / 2);
        if (merged.length % 2 === 0) {
            return (merged[mid - 1] + merged[mid]) / 2;
        } else {
            return merged[mid];
        }
    }

    function findMedianSortedArrays4(arr1, arr2) {
        const merged = [];
        let i = 0;
        let j = 0;
        for (; i < arr1.length || j < arr2.length;) {
            if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }
        }
        const mid = Math.floor(merged.length / 2);
        if (merged.length % 2 === 0) {
            return (merged[mid - 1] + merged[mid]) / 2;
        } else {
            return merged[mid];
        }
    }

    function findMedianSortedArrays5(arr1, arr2) {
        let i = 0;
        let j = 0;
        const merged = [...arr1, ...arr2].reduce((merged, _, index) => {
            if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }
            return merged;
        }, []);
        const mid = Math.floor(merged.length / 2);
        if (merged.length % 2 === 0) {
            return (merged[mid - 1] + merged[mid]) / 2;
        } else {
            return merged[mid];
        }
    }
});
