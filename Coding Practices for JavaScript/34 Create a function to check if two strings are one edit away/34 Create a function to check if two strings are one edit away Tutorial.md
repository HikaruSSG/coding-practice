# 34 Create a function to check if two strings are one edit away Tutorial

## Prerequisites

*   Understanding of strings and string operations.
*   Knowledge of loops and conditional statements.

## Approach

### Approach 1: Iterative comparison with a flag

This approach iterates through the strings, comparing characters and using a flag to track if an edit has been used.

### Procedure

1. Define a function that takes two strings, `str1` and `str2`, as input.
2. Calculate the lengths of `str1` and `str2`.
3. If the absolute difference in lengths is greater than 1, return `false` (more than one edit needed).
4. Initialize a variable `editUsed` to `false`.
5. Initialize two pointers, `i` to 0 (for `str1`) and `j` to 0 (for `str2`).
6. Use a `while` loop with the condition that `i` is less than the length of `str1` and `j` is less than the length of `str2`:
    *   If `str1[i]` is equal to `str2[j]`, increment both `i` and `j` (characters match).
    *   Otherwise (characters don't match):
        *   If `editUsed` is `true`, return `false` (more than one edit needed).
        *   Set `editUsed` to `true`.
        *   If the lengths of `str1` and `str2` are the same, increment both `i` and `j` (replacement).
        *   If `str1` is longer, increment `i` (deletion from `str1`).
        *   If `str2` is longer, increment `j` (insertion into `str1`).
7. After the loop, if there are remaining characters in either string and `editUsed` is `false`, set `editUsed` to `true`.
8. Return `true` if `editUsed` is `true` (one edit or zero edits), `false` otherwise.

### Approach 2: Optimized iterative comparison

This approach optimizes the iterative comparison by handling insertion, deletion, and replacement in a more concise way.

### Procedure

1. Define a function that takes two strings, `str1` and `str2`, as input.
2. If the absolute difference in lengths is greater than 1, return `false`.
3. Determine the shorter string (`s1`) and the longer string (`s2`).
4. Initialize two pointers, `i` to 0 (for `s1`) and `j` to 0 (for `s2`).
5. Initialize a variable `foundDifference` to `false`.
6. Use a `while` loop with the condition that `i` is less than the length of `s1` and `j` is less than the length of `s2`:
    *   If `s1[i]` is not equal to `s2[j]`:
        *   If `foundDifference` is `true`, return `false`.
        *   Set `foundDifference` to `true`.
        *   If the lengths are the same, increment `i` (replacement).
        *   Increment `j` (handle insertion or deletion in the longer string).
    *   Otherwise (characters match):
        *   Increment both `i` and `j`.
7. Return `true` (at most one edit).

### Approach 3: Using dynamic programming (less efficient for this problem)

This approach uses dynamic programming to calculate the edit distance between the two strings. It's less efficient for this specific problem but can be used for more general edit distance calculations.

### Procedure

1. Define a function that takes two strings, `str1` and `str2`, as input.
2. Create a 2D array `dp` of size `(len(str1) + 1) x (len(str2) + 1)`.
3. Initialize the first row and first column of `dp` to represent the edit distance when one of the strings is empty.
4. Iterate through the remaining cells of `dp` using nested loops:
    *   If `str1[i-1]` is equal to `str2[j-1]`, set `dp[i][j]` to `dp[i-1][j-1]` (no edit needed).
    *   Otherwise, set `dp[i][j]` to 1 plus the minimum of `dp[i-1][j]` (deletion), `dp[i][j-1]` (insertion), and `dp[i-1][j-1]` (replacement).
5. If `dp[len(str1)][len(str2)]` is less than or equal to 1, return `true`; otherwise, return `false`.

### Approach 4: Recursive approach (less efficient)

This approach uses recursion to check for one edit distance.

### Procedure

1. Define a recursive function that takes two strings, `str1` and `str2`, and their lengths `m` and `n` as input.
2. Base cases:
    * If `m` is 0, return `true` if `n` is less than or equal to 1, `false` otherwise.
    * If `n` is 0, return `true` if `m` is less than or equal to 1, `false` otherwise.
3. If `str1[m-1]` is equal to `str2[n-1]`, recursively call the function with `str1`, `str2`, `m-1`, and `n-1`.
4. Otherwise:
    * If `m` equals `n`, recursively call the function with `str1`, `str2`, `m-1`, and `n-1` (replacement).
    * If `m` is greater than `n`, recursively call the function with `str1`, `str2`, `m-1`, and `n` (deletion).
    * If `n` is greater than `m`, recursively call the function with `str1`, `str2`, `m`, and `n-1` (insertion).
    * If any of the recursive calls return `true`, return `true`.
5. Return `false` if none of the above conditions are met.

### Approach 5: One pass approach

This approach combines checking for insertion, deletion and replacement in one pass.

### Procedure

1. Define a function that takes two strings, `str1` and `str2` as input.
2. Calculate the lengths of `str1` and `str2` as `m` and `n` respectively.
3. If the absolute difference between `m` and `n` is greater than 1, return `false`.
4. Initialize count of edits to 0.
5. Initialize `i = 0` and `j = 0`.
6. While `i < m` and `j < n`:
    * If `str1[i]` is not equal to `str2[j]`:
        * If `count` is equal to 1, return `false`.
        * If `m` is greater than `n`, increment `i`.
        * Else If `n` is greater than `m`, increment `j`.
        * Else, increment both `i` and `j`.
        * Increment `count`.
    * Else, increment both `i` and `j`.
7. If `i < m` or `j < n`, increment `count`.
8. Return `true` if `count` is equal to 1, `false` otherwise.
