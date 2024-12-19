describe('Array Sorter', () => {
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

    // Solution 1: Bubble Sort
    // Time Complexity: O(n^2), Memory Allocation: O(1)
    it('should sort an array using bubble sort', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = bubbleSort1([...input]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Insertion Sort
    // Time Complexity: O(n^2), Memory Allocation: O(1)
    it('should sort an array using insertion sort', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = insertionSort2([...input]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Selection Sort
    // Time Complexity: O(n^2), Memory Allocation: O(1)
    it('should sort an array using selection sort', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = selectionSort3([...input]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Merge Sort
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should sort an array using merge sort', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = mergeSort4([...input]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Quick Sort
    // Time Complexity: O(n log n) average, O(n^2) worst case, Memory Allocation: O(log n)
    it('should sort an array using quick sort', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = quickSort5([...input]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function bubbleSort1(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
          }
        }
        return arr;
    }

    function insertionSort2(arr) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return arr;
    }

    function selectionSort3(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
        }
        return arr;
    }

    function mergeSort4(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return merge(mergeSort4(left), mergeSort4(right));

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

    function quickSort5(arr) {
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
        return [...quickSort5(left), pivot, ...quickSort5(right)];
    }
});
