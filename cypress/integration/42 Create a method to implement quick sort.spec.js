describe('Quick Sort Algorithm', () => {
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

    // Solution 1: Using recursion and partitioning
    // Time Complexity: O(n log n) average, O(n^2) worst case, Memory Allocation: O(n)
    it('should sort an array using recursion and partitioning', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = quickSort1([...input]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: In-place quick sort
    // Time Complexity: O(n log n) average, O(n^2) worst case, Memory Allocation: O(log n)
    it('should sort an array using in-place quick sort', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = quickSort2([...input]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using a while loop and recursion
    // Time Complexity: O(n log n) average, O(n^2) worst case, Memory Allocation: O(log n)
    it('should sort an array using a while loop and recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = quickSort3([...input]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using a for loop and recursion
    // Time Complexity: O(n log n) average, O(n^2) worst case, Memory Allocation: O(n)
    it('should sort an array using a for loop and recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = quickSort4([...input]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using a generator function
    // Time Complexity: O(n log n) average, O(n^2) worst case, Memory Allocation: O(log n)
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

    function quickSort1(arr) {
        if (arr.length <= 1) {
          return arr;
        }
        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] < pivot) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
        return [...quickSort1(left), pivot, ...quickSort1(right)];
    }

    function quickSort2(arr, left = 0, right = arr.length - 1) {
        if (left < right) {
            const pivotIndex = partition(arr, left, right);
            quickSort2(arr, left, pivotIndex - 1);
            quickSort2(arr, pivotIndex + 1, right);
        }
        return arr;

        function partition(arr, left, right) {
            const pivot = arr[right];
            let i = left - 1;
            for (let j = left; j < right; j++) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
            return i + 1;
        }
    }

    function quickSort3(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const stack = [[0, arr.length - 1]];
        while (stack.length > 0) {
            const [left, right] = stack.pop();
            if (left < right) {
                const pivotIndex = partition(arr, left, right);
                stack.push([left, pivotIndex - 1]);
                stack.push([pivotIndex + 1, right]);
            }
        }
        return arr;

        function partition(arr, left, right) {
            const pivot = arr[right];
            let i = left - 1;
            for (let j = left; j < right; j++) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
            return i + 1;
        }
    }

    function quickSort4(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...quickSort4(left), pivot, ...quickSort4(right)];
    }

    function* quickSort5(arr) {
        if (arr.length <= 1) {
            yield arr;
            return;
        }
        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        yield* quickSort5(left);
        yield pivot;
        yield* quickSort5(right);
    }

    function sortArray(arr) {
        return Array.from(quickSort5(arr));
    }
});
