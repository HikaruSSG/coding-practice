describe('Longest Common Subsequence Finder', () => {
    const testCases = [
      { input: ['AGGTAB', 'GXTXAYB'], expected: 'GTAB' },
      { input: ['ABCD', 'AEBD'], expected: 'ABD' },
      { input: ['ABCDEF', 'ACDF'], expected: 'ACDF' },
      { input: ['AGGTAB', 'GXTXAYB'], expected: 'GTAB' },
      { input: ['ABCDGH', 'AEDFHR'], expected: 'ADH' },
      { input: ['ABC', 'DEF'], expected: '' },
      { input: ['', 'ABC'], expected: '' },
      { input: ['ABC', ''], expected: '' },
      { input: ['A', 'A'], expected: 'A' },
      { input: ['ABC', 'B'], expected: 'B' },
      { input: ['ABC', 'C'], expected: 'C' },
      { input: ['ABC', 'AB'], expected: 'AB' },
      { input: ['XMJYAUZ', 'MZJAWXU'], expected: 'MJAU' },
    ];

    // Solution 1: Using recursion
    // Time Complexity: O(2^n), Memory Allocation: O(n) due to call stack
    it('should find the longest common subsequence using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = longestCommonSubsequence1(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using dynamic programming (tabulation)
    // Time Complexity: O(m*n), Memory Allocation: O(m*n)
    it('should find the longest common subsequence using dynamic programming (tabulation)', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = longestCommonSubsequence2(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using dynamic programming (memoization)
    // Time Complexity: O(m*n), Memory Allocation: O(m*n)
    it('should find the longest common subsequence using dynamic programming (memoization)', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = longestCommonSubsequence3(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a while loop and recursion
    // Time Complexity: O(m*n), Memory Allocation: O(m*n)
    it('should find the longest common subsequence using a while loop and recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = longestCommonSubsequence4(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a for loop and dynamic programming
    // Time Complexity: O(m*n), Memory Allocation: O(m*n)
    it('should find the longest common subsequence using a for loop and dynamic programming', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = longestCommonSubsequence5(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function longestCommonSubsequence1(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        if (m === 0 || n === 0) {
          return "";
        }
        if (str1[m - 1] === str2[n - 1]) {
          return longestCommonSubsequence1(str1.slice(0, m - 1), str2.slice(0, n - 1)) + str1[m - 1];
        } else {
          const lcs1 = longestCommonSubsequence1(str1.slice(0, m - 1), str2);
          const lcs2 = longestCommonSubsequence1(str1, str2.slice(0, n - 1));
          return lcs1.length > lcs2.length ? lcs1 : lcs2;
        }
    }

    function longestCommonSubsequence2(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(""));
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
                } else {
                    dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
                }
            }
        }
        return dp[m][n];
    }

    function longestCommonSubsequence3(str1, str2) {
        const memo = {};
        const lcs = (i, j) => {
            if (i === 0 || j === 0) {
                return "";
            }
            if (memo[`${i},${j}`]) {
                return memo[`${i},${j}`];
            }
            if (str1[i - 1] === str2[j - 1]) {
                memo[`${i},${j}`] = lcs(i - 1, j - 1) + str1[i - 1];
            } else {
                const lcs1 = lcs(i - 1, j);
                const lcs2 = lcs(i, j - 1);
                memo[`${i},${j}`] = lcs1.length > lcs2.length ? lcs1 : lcs2;
            }
            return memo[`${i},${j}`];
        };
        return lcs(str1.length, str2.length);
    }

    function longestCommonSubsequence4(str1, str2) {
        let m = str1.length;
        let n = str2.length;
        const memo = {};
        const lcs = (i, j) => {
            if (i === 0 || j === 0) {
                return "";
            }
            if (memo[`${i},${j}`]) {
                return memo[`${i},${j}`];
            }
            if (str1[i - 1] === str2[j - 1]) {
                memo[`${i},${j}`] = lcs(i - 1, j - 1) + str1[i - 1];
            } else {
                const lcs1 = lcs(i - 1, j);
                const lcs2 = lcs(i, j - 1);
                memo[`${i},${j}`] = lcs1.length > lcs2.length ? lcs1 : lcs2;
            }
            return memo[`${i},${j}`];
        };
        return lcs(m, n);
    }

    function longestCommonSubsequence5(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(""));
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                if (i === 0 || j === 0) {
                    dp[i][j] = "";
                } else if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
                } else {
                    dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
                }
            }
        }
        return dp[m][n];
    }
});
