describe('Merge Sort Algorithm', () => {
    const testCases = [
      { input: [5, 2, 8, 1, 9, 4], expected: [1, 2, 4, 5, 8, 9] },
      { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
      { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
      { input: [], expected: [] },
      { input: [1], expected: [1] },
      { input: [1, 1, 1, 1, 1], expected: [1, 1, 1, 1, 1] },
      { input: [-1, -2, -3, -4, -5], expected: [-5, -4, -3, -2, -1] },
      { input: [0, 0, 0, 0, 0], expected: [0, 0, 0, 0, 0] },
      { input: [5, 2, 8, 1, 9, 4, 0, -1], expected: [-1, 0, 1, 2, 4, 5, 8, 9] },
      { input: [10, 5, 2, 8, 1, 9, 4, 0, -1, -5], expected: [-5, -1, 0, 1, 2, 4, 5, 8, 9, 10] },
    ];

    // Solution 1: Using recursion
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should sort an array using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = mergeSort1([...input]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using a while loop and recursion
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should sort an array using a while loop and recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = mergeSort2([...input]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using a for loop and recursion
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should sort an array using a for loop and recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = mergeSort3([...input]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using a generator function
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should sort an array using a generator function', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = sortArray([...input]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using reduce
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should sort an array using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = mergeSort5([...input]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function mergeSort1(arr) {
        if (arr.length <= 1) {
          return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return merge(mergeSort1(left), mergeSort1(right));

        function merge(left, right) {
          let result = [];
          let i = 0;
          let j = 0;
          while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
              result.push(left[i]);
              i++;
            } else {
              result.push(right[j]);
              j++;
            }
          }
          return result.concat(left.slice(i)).concat(right.slice(j));
        }
    }

    function mergeSort2(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return merge(mergeSort2(left), mergeSort2(right));

        function merge(left, right) {
            let result = [];
            let i = 0;
            let j = 0;
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
            while (i < left.length) {
                result.push(left[i]);
                i++;
            }
            while (j < right.length) {
                result.push(right[j]);
                j++;
            }
            return result;
        }
    }

    function mergeSort3(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return merge(mergeSort3(left), mergeSort3(right));

        function merge(left, right) {
            let result = [];
            let i = 0;
            let j = 0;
            for (; i < left.length || j < right.length;) {
                if (j >= right.length || (i < left.length && left[i] <= right[j])) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
            return result;
        }
    }

    function* mergeSort4(arr) {
        if (arr.length <= 1) {
            yield arr;
            return;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        yield* merge(mergeSort4(left), mergeSort4(right));

        function* merge(left, right) {
            let i = 0;
            let j = 0;
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    yield left[i];
                    i++;
                } else {
                    yield right[j];
                    j++;
                }
            }
            while (i < left.length) {
                yield left[i];
                i++;
            }
            while (j < right.length) {
                yield right[j];
                j++;
            }
        }
    }

    function sortArray(arr) {
        return Array.from(mergeSort4(arr));
    }

    function mergeSort5(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return merge(mergeSort5(left), mergeSort5(right));

        function merge(left, right) {
            let i = 0;
            let j = 0;
            return [...left, ...right].reduce((result, _, index) => {
                if (j >= right.length || (i < left.length && left[i] <= right[j])) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
                return result;
            }, []);
        }
    }
});
