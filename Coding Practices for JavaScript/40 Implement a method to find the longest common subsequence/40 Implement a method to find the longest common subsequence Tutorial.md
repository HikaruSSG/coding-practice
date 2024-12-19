# 40 Implement a method to find the longest common subsequence Tutorial

## Prerequisites

*   Understanding of the concept of subsequences.
*   Knowledge of dynamic programming or recursion.
*   Familiarity with arrays or matrices.

## Approach

### Approach 1: Dynamic Programming

This approach uses dynamic programming to build a table that stores the lengths of common subsequences of prefixes of the two input strings.

### Procedure

1. Define a function that takes two strings, `str1` and `str2`, as input.
2. Create a 2D array (matrix) `dp` of size `(len(str1) + 1) x (len(str2) + 1)`.
    *   Initialize the first row and first column of `dp` to 0.
3. Iterate through the remaining cells of `dp` using nested loops (outer loop for rows from 1 to `len(str1)`, inner loop for columns from 1 to `len(str2)`):
    *   If `str1[i-1]` is equal to `str2[j-1]` (characters match):
        *   Set `dp[i][j]` to `dp[i-1][j-1] + 1` (add 1 to the length of the common subsequence of the prefixes).
    *   Otherwise (characters don't match):
        *   Set `dp[i][j]` to the maximum of `dp[i-1][j]` and `dp[i][j-1]` (take the longest common subsequence from the previous row or column).
4. The value `dp[len(str1)][len(str2)]` now contains the length of the longest common subsequence.
5. To reconstruct the actual LCS, backtrack through the `dp` array:
    *   Initialize an empty string `lcs`.
    *   Start from `i = len(str1)` and `j = len(str2)`.
    *   While `i > 0` and `j > 0`:
        *   If `str1[i-1]` is equal to `str2[j-1]`:
            *   Prepend `str1[i-1]` to `lcs`.
            *   Decrement `i` and `j`.
        *   Otherwise:
            *   If `dp[i-1][j]` is greater than `dp[i][j-1]`, decrement `i`.
            *   Otherwise, decrement `j`.
6. Return the `lcs` string.

### Approach 2: Recursive Approach with Memoization

This approach uses recursion to find the LCS, with memoization to avoid redundant calculations.

### Procedure

1. Define a recursive function that takes two strings, `str1` and `str2`, and their lengths `m` and `n` as input.
2. Create a 2D array `memo` of size `(m + 1) x (n + 1)` initialized with -1s (or another special value) to store the results of subproblems.
3. Base cases:
    *   If `m` or `n` is 0, return 0 (empty string has no common subsequence).
4. If `memo[m][n]` is not -1, return `memo[m][n]` (result already computed).
5. If `str1[m-1]` is equal to `str2[n-1]`:
    *   Set `memo[m][n]` to 1 plus the result of recursively calling the function with `str1`, `str2`, `m-1`, and `n-1`.
    *   Return `memo[m][n]`.
6. Otherwise:
    *   Set `memo[m][n]` to the maximum of the results of recursively calling the function with `str1`, `str2`, `m-1`, `n` and `str1`, `str2`, `m`, `n-1`.
    *   Return `memo[m][n]`.
7. Define a main function that takes `str1` and `str2` as input:
    *   Call the recursive function with `str1`, `str2`, `len(str1)`, and `len(str2)`.
    *   Return the result.
8. (Optional) To reconstruct the LCS, you can modify the recursive function to build the string during the recursive calls or use a similar backtracking approach as in Approach 1.

### Approach 3: Recursive Approach without Memoization (less efficient)

This approach uses recursion to find the LCS but does not store the results of subproblems, leading to repeated calculations and exponential time complexity.

### Procedure

1. Define a recursive function that takes two strings, `str1` and `str2`, and their lengths `m` and `n` as input.
2. Base cases:
    *   If `m` or `n` is 0, return 0 (empty string has no common subsequence).
3. If `str1[m-1]` is equal to `str2[n-1]`:
    *   Return 1 plus the result of recursively calling the function with `str1`, `str2`, `m-1`, and `n-1`.
4. Otherwise:
    *   Return the maximum of the results of recursively calling the function with `str1`, `str2`, `m-1`, `n` and `str1`, `str2`, `m`, `n-1`.
5. Define a main function that takes `str1` and `str2` as input:
    *   Call the recursive function with `str1`, `str2`, `len(str1)`, and `len(str2)`.
    *   Return the result.
6. (Optional) To reconstruct the LCS, you can modify the recursive function to build the string during the recursive calls.

### Approach 4: Using a Set to Store Common Subsequences (less efficient)

This approach generates all possible subsequences of one string and checks if they are also subsequences of the other string, keeping track of the longest common one.

### Procedure

1. Define a function that takes two strings, `str1` and `str2`, as input.
2. Generate all subsequences of `str1` using a recursive or iterative method and store them in a set `subsequences`.
3. Initialize an empty string `lcs` to store the longest common subsequence.
4. Iterate through the `subsequences` set:
    *   For each subsequence, check if it is also a subsequence of `str2` (using a helper function or string matching).
    *   If it is a subsequence of `str2` and its length is greater than the length of `lcs`, update `lcs`.
5. Return `lcs`.

### Approach 5: Using Suffix Trees (more advanced)

This approach uses a generalized suffix tree to find the longest common substring, which can then be used to find the longest common subsequence. This is a more advanced technique that requires understanding of suffix trees.

### Procedure

1. Build a generalized suffix tree for the two input strings.
2. Find the deepest node in the suffix tree that has leaf nodes from both strings in its subtree.
3. The path from the root to this node represents the longest common substring.
4. Use the longest common substring and potentially additional logic to determine the longest common subsequence.
