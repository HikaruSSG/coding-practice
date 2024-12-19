# 16 Create a method to check if a number is a perfect square Tutorial

## Prerequisites

*   Understanding of perfect squares (a number that can be expressed as the product of an integer multiplied by itself).
*   Basic knowledge of arithmetic operations (square root, multiplication).
*   Familiarity with loops (optional, for some approaches).

## Approach

### Approach 1: Using the square root function

This approach involves calculating the square root of the number and checking if it's an integer.

### Procedure

1. Define a function that takes an integer `n` as input.
2. Calculate the square root of `n` using a built-in square root function (e.g., `Math.sqrt()` in JavaScript).
3. Check if the square root is an integer (e.g., by comparing it to its floor value or checking if the remainder when divided by 1 is 0).
4. If the square root is an integer, `n` is a perfect square; otherwise, it is not.

### Approach 2: Using a loop and subtraction

This approach involves repeatedly subtracting odd numbers from `n` until `n` becomes 0 or negative.

### Procedure

1. Define a function that takes an integer `n` as input.
2. If `n` is less than 0, return `false` (negative numbers cannot be perfect squares).
3. Initialize a variable `i` to 1 (representing the first odd number).
4. While `n` is greater than 0:
    *   Subtract `i` from `n`.
    *   Increment `i` by 2 (to get the next odd number).
5. If `n` is 0, it was a perfect square; otherwise, it was not.

### Approach 3: Using binary search

This approach uses binary search to find a potential integer square root within a range.

### Procedure

1. Define a function that takes an integer `n` as input.
2. If `n` is less than 0, return `false`.
3. Initialize `low` to 0 and `high` to `n`.
4. While `low` is less than or equal to `high`:
    *   Calculate `mid` as the average of `low` and `high`.
    *   Calculate `square` as `mid * mid`.
    *   If `square` is equal to `n`, return `true` (perfect square found).
    *   If `square` is less than `n`, update `low` to `mid + 1`.
    *   If `square` is greater than `n`, update `high` to `mid - 1`.
5. If the loop finishes without finding a perfect square, return `false`.

### Approach 4: Using Newton's method

This approach uses Newton's method to iteratively approximate the square root.

### Procedure

1. Define a function that takes an integer `n` as input.
2. If `n` is less than 0, return `false`.
3. Initialize an initial guess `x` to `n`.
4. Iterate a few times (e.g., 10 iterations):
    *   Update `x` to `(x + n / x) / 2`.
5. Check if `x * x` is equal to `n` (or very close to `n` within a small tolerance).
6. If it is, `n` is a perfect square; otherwise, it is not.

### Approach 5: Using the property of perfect squares

This approach utilizes the property that a perfect square can be represented as the sum of consecutive odd numbers.

### Procedure

1. Define a function that takes an integer `n` as input.
2. If `n` is less than 0, return `false`.
3. Initialize `sum` to 0 and `i` to 1.
4. While `sum` is less than `n`:
    *   Add `i` to `sum`.
    *   Increment `i` by 2.
5. If `sum` is equal to `n`, return `true`; otherwise, return `false`.
