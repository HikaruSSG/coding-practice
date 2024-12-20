describe('Longest Increasing Subsequence Finder', () => {
    const testCases = [
      { input: [10, 22, 9, 33, 21, 50, 41, 60, 80], expected: [10, 22, 33, 41, 60, 80] },
      { input: [3, 10, 2, 1, 20], expected: [3, 10, 20] },
      { input: [10, 9, 2, 5, 3, 7, 101, 18], expected: [2, 3, 7, 101] },
      { input: [10, 22, 9, 33, 21, 50, 41, 60, 80, 1], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
      { input: [5, 4, 3, 2, 1], expected: [1] },
      { input: [], expected: [] },
      { input: [1, 2, 3, 1, 2, 3], expected: [1, 2, 3] },
      { input: [1, 3, 2, 4, 5], expected: [1, 2, 4, 5] },
      { input: [1, 5, 2, 8, 3, 7], expected: [1, 2, 3, 7] },
    ];

    // Solution 1: Using recursion
    // Time Complexity: O(2^n), Memory Allocation: O(n) due to call stack
    it('should find the longest increasing subsequence using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = longestIncreasingSubsequence1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using dynamic programming (tabulation)
    // Time Complexity: O(n^2), Memory Allocation: O(n^2)
    it('should find the longest increasing subsequence using dynamic programming (tabulation)', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = longestIncreasingSubsequence2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using dynamic programming (memoization)
    // Time Complexity: O(n^2), Memory Allocation: O(n^2)
    it('should find the longest increasing subsequence using dynamic programming (memoization)', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = longestIncreasingSubsequence3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using a while loop and dynamic programming
    // Time Complexity: O(n^2), Memory Allocation: O(n^2)
    it('should find the longest increasing subsequence using a while loop and dynamic programming', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = longestIncreasingSubsequence4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using a for loop and binary search
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should find the longest increasing subsequence using a for loop and binary search', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = longestIncreasingSubsequence5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          const expectedSubsequence = [];
          let current = -Infinity;
          for (let num of expected) {
            if (num > current) {
              expectedSubsequence.push(num);
              current = num;
            }
          }
          expect(result).to.deep.equal(expectedSubsequence);
        });
      });

    function longestIncreasingSubsequence1(arr) {
        if (arr.length === 0) {
            return [];
        }
        const findLIS = (index, prev) => {
            if (index === arr.length) {
                return [];
            }
            let include = [];
            if (arr[index] > prev) {
                include = [arr[index], ...findLIS(index + 1, arr[index])];
            }
            const exclude = findLIS(index + 1, prev);
            return include.length > exclude.length ? include : exclude;
        };
        return findLIS(0, -Infinity);
    }

    function longestIncreasingSubsequence2(arr) {
        if (arr.length === 0) {
            return [];
        }
        const n = arr.length;
        const dp = Array(n).fill(null).map(() => []);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (arr[i] > arr[j] && dp[i].length < dp[j].length) {
                    dp[i] = [...dp[j]];
                }
            }
            dp[i].push(arr[i]);
        }
        let longest = [];
        for (let sub of dp) {
            if (sub.length > longest.length) {
                longest = sub;
            }
        }
        return longest;
    }

    function longestIncreasingSubsequence3(arr) {
        if (arr.length === 0) {
            return [];
        }
        const memo = {};
        const findLIS = (index, prev) => {
            if (index === arr.length) {
                return [];
            }
            if (memo[`${index},${prev}`]) {
                return memo[`${index},${prev}`];
            }
            let include = [];
            if (arr[index] > prev) {
                include = [arr[index], ...findLIS(index + 1, arr[index])];
            }
            const exclude = findLIS(index + 1, prev);
            memo[`${index},${prev}`] = include.length > exclude.length ? include : exclude;
            return memo[`${index},${prev}`];
        };
        return findLIS(0, -Infinity);
    }

    function longestIncreasingSubsequence4(arr) {
        if (arr.length === 0) {
            return [];
        }
        const n = arr.length;
        const dp = Array(n).fill(null).map(() => []);
        let i = 0;
        while (i < n) {
            let j = 0;
            while (j < i) {
                if (arr[i] > arr[j] && dp[i].length < dp[j].length) {
                    dp[i] = [...dp[j]];
                }
                j++;
            }
            dp[i].push(arr[i]);
            i++;
        }
        let longest = [];
        let k = 0;
        while (k < dp.length) {
            if (dp[k].length > longest.length) {
                longest = dp[k];
            }
            k++;
        }
        return longest;
    }

    function longestIncreasingSubsequence5(arr) {
        if (arr.length === 0) {
            return [];
        }
        const tails = [];
        for (let num of arr) {
            let i = 0;
            let j = tails.length;
            while (i < j) {
                const mid = Math.floor((i + j) / 2);
                if (tails[mid] < num) {
                    i = mid + 1;
                } else {
                    j = mid;
                }
            }
            tails[i] = num;
        }
        return tails;
    }
});
