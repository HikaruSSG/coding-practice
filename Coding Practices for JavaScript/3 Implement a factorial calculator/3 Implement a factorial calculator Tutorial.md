# 3 Implement a factorial calculator Tutorial

## Prerequisites

*   Understanding of the factorial concept (n! = n * (n-1) * ... * 2 * 1).
*   Basic knowledge of loops (e.g., for loop) or recursion.

## Approach

### Approach 1: Using a loop

This approach involves using a loop to calculate the factorial iteratively.

### Procedure

1. Define a function that takes an integer `n` as input.
2. If `n` is 0, return 1 (factorial of 0 is 1).
3. Initialize a variable `factorial` to 1.
4. Start a loop that iterates from 1 to `n`.
5. In each iteration, multiply `factorial` by the current number.
6. After the loop finishes, `factorial` will contain the factorial of `n`.

### Approach 2: Using recursion

This approach involves using a recursive function to calculate the factorial.

### Procedure

1. Define a recursive function that takes an integer `n` as input.
2. Base case: If `n` is 0, return 1 (factorial of 0 is 1).
3. Recursive step: Otherwise, return `n` multiplied by the result of calling the recursive function with `n-1`.

### Approach 3: Using memoization (for optimization)

This approach uses a cache (e.g., a dictionary or array) to store previously calculated factorials, avoiding redundant calculations.

### Procedure

1. Initialize an empty cache to store factorial values.
2. Define a recursive function that takes an integer `n` as input.
3. Check if the factorial of `n` is already in the cache. If so, return the cached value.
4. Base case: If `n` is 0, return 1.
5. Recursive step: Otherwise, calculate the factorial of `n` recursively, store it in the cache, and return the result.

### Approach 4: Using built-in functions (if available)

Some programming languages provide built-in functions for calculating factorials. This approach utilizes those functions directly.

### Procedure

1. Use the built-in factorial function provided by the programming language.
2. Return the result.

### Approach 5: Using an iterative approach with a while loop

This approach is similar to Approach 1 but uses a while loop instead of a for loop.

### Procedure

1. Define a function that takes an integer `n` as input.
2. If `n` is 0, return 1.
3. Initialize a variable `factorial` to 1 and a counter `i` to 1.
4. While `i` is less than or equal to `n`:
    *   Multiply `factorial` by `i`.
    *   Increment `i`.
5. Return `factorial`.
