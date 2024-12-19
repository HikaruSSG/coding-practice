# 39 Create a function to generate Pascal's triangle Tutorial

## Prerequisites

*   Understanding of Pascal's triangle and its properties.
*   Knowledge of arrays or lists.
*   Familiarity with loops.

## Approach

### Approach 1: Iterative approach using two loops

This approach generates Pascal's triangle row by row, using two loops to calculate each element based on the previous row.

### Procedure

1. Define a function that takes an integer `numRows` as input, representing the number of rows to generate.
2. Create an empty list `triangle` to store the rows of Pascal's triangle.
3. Use a `for` loop to iterate from 0 to `numRows - 1` (outer loop, for each row):
    *   Create a new list `row` to represent the current row.
    *   Use another `for` loop to iterate from 0 to the current row number (inner loop, for each element in the row):
        *   If the current element is the first or last element in the row (index 0 or equal to the row number), add 1 to `row`.
        *   Otherwise, calculate the element by summing the two elements directly above it in the previous row: `triangle[i-1][j-1] + triangle[i-1][j]`.
        *   Add the calculated element to `row`.
    *   Add `row` to `triangle`.
4. Return `triangle`.

### Approach 2: Iterative approach using a single loop and list manipulation

This approach generates each row based on the previous row, using a single loop and list manipulation techniques.

### Procedure

1. Define a function that takes an integer `numRows` as input.
2. If `numRows` is 0, return an empty list.
3. Initialize `triangle` with the first row: `[[1]]`.
4. Use a `for` loop to iterate from 1 to `numRows - 1` (for each subsequent row):
    *   Get the previous row from `triangle`: `prevRow = triangle[-1]`.
    *   Create a new row `newRow` starting with 1: `newRow = [1]`.
    *   Use a `for` loop to iterate through the elements of `prevRow` (except the last one):
        *   Calculate the next element by summing the current element and the next element in `prevRow`.
        *   Append the calculated element to `newRow`.
    *   Append 1 to `newRow` (the last element of each row is always 1).
    *   Append `newRow` to `triangle`.
5. Return `triangle`.

### Approach 3: Recursive approach

This approach uses recursion to generate Pascal's triangle.

### Procedure

1. Define a recursive function that takes an integer `numRows` as input.
2. Base case: If `numRows` is 0, return an empty list.
3. Base case: If `numRows` is 1, return `[[1]]`.
4. Recursive step:
    *   Recursively call the function with `numRows - 1` to get the triangle with one fewer row.
    *   Get the last row of the returned triangle: `prevRow = triangle[-1]`.
    *   Create a new row `newRow` starting with 1: `newRow = [1]`.
    *   Use a `for` loop to iterate through the elements of `prevRow` (except the last one):
        *   Calculate the next element by summing the current element and the next element in `prevRow`.
        *   Append the calculated element to `newRow`.
    *   Append 1 to `newRow`.
    *   Append `newRow` to the `triangle`.
    *   Return `triangle`.

### Approach 4: Using combinations (binomial coefficients)

This approach uses the formula for combinations (nCr) to calculate each element of Pascal's triangle.

### Procedure

1. Define a function that takes an integer `numRows` as input.
2. Create an empty list `triangle`.
3. Use a `for` loop to iterate from 0 to `numRows - 1` (outer loop, for each row):
    *   Create a new list `row`.
    *   Use another `for` loop to iterate from 0 to the current row number (inner loop, for each element):
        *   Calculate the binomial coefficient (nCr) for the current row and element using a helper function or a formula. The formula for nCr is `n! / (r! * (n-r)!)`, where n is the row number and r is the element number.
        *   Add the calculated element to `row`.
    *   Add `row` to `triangle`.
4. Return `triangle`.

### Approach 5: Using dynamic programming

This approach uses dynamic programming to store and reuse previously calculated values.

### Procedure

1. Define a function that takes an integer `numRows` as input.
2. Create a 2D array (or list of lists) `dp` of size `numRows` x `numRows` initialized with 0s.
3. Use a `for` loop to iterate from 0 to `numRows - 1` (outer loop, for each row):
    * Set `dp[i][0]` and `dp[i][i]` to 1 (the first and last elements of each row are always 1).
    * Use another `for` loop to iterate from 1 to `i - 1` (inner loop, for the remaining elements in the row):
        * Calculate `dp[i][j]` as `dp[i-1][j-1] + dp[i-1][j]` (using the previously calculated values).
4. Create a list `triangle` from the `dp` array, including only the necessary elements (up to the current row number in each row).
5. Return `triangle`.
