describe('Array Rotator', () => {
    const testCases = [
      { input: [[1, 2, 3, 4, 5], 2], expected: [3, 4, 5, 1, 2] },
      { input: [[1, 2, 3, 4, 5], 1], expected: [2, 3, 4, 5, 1] },
      { input: [[1, 2, 3, 4, 5], 0], expected: [1, 2, 3, 4, 5] },
      { input: [[1, 2, 3, 4, 5], 5], expected: [1, 2, 3, 4, 5] },
      { input: [[1, 2, 3, 4, 5], 7], expected: [3, 4, 5, 1, 2] },
      { input: [[1, 2, 3], 1], expected: [2, 3, 1] },
      { input: [[1, 2, 3], 2], expected: [3, 1, 2] },
      { input: [[1, 2, 3], 3], expected: [1, 2, 3] },
      { input: [[1, 2, 3], 4], expected: [2, 3, 1] },
      { input: [[1], 1], expected: [1] },
      { input: [[], 1], expected: [] },
    ];

    // Solution 1: Using slice and concat
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should rotate an array using slice and concat', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = rotateArray1([...input[0]], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using a for loop and push/shift
    // Time Complexity: O(n*k), Memory Allocation: O(1)
    it('should rotate an array using a for loop and push/shift', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = rotateArray2([...input[0]], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using splice
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should rotate an array using splice', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = rotateArray3([...input[0]], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using reverse
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should rotate an array using reverse', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = rotateArray4([...input[0]], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using a while loop and temp variable
    // Time Complexity: O(n*k), Memory Allocation: O(1)
    it('should rotate an array using a while loop and temp variable', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = rotateArray5([...input[0]], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function rotateArray1(arr, k) {
        const n = arr.length;
        k = k % n;
        return arr.slice(k).concat(arr.slice(0, k));
    }

    function rotateArray2(arr, k) {
        const n = arr.length;
        k = k % n;
        for (let i = 0; i < k; i++) {
            arr.push(arr.shift());
        }
        return arr;
    }

    function rotateArray3(arr, k) {
        const n = arr.length;
        k = k % n;
        arr.splice(0, 0, ...arr.splice(n - k, k));
        return arr;
    }

    function rotateArray4(arr, k) {
        const n = arr.length;
        k = k % n;
        reverse(arr, 0, n - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);
        return arr;

        function reverse(arr, start, end) {
            while (start < end) {
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        }
    }

    function rotateArray5(arr, k) {
        const n = arr.length;
        k = k % n;
        let i = 0;
        while (i < k) {
            const temp = arr[0];
            let j = 0;
            while (j < n - 1) {
                arr[j] = arr[j + 1];
                j++;
            }
            arr[n - 1] = temp;
            i++;
        }
        return arr;
    }
});
