# 24 Write a function to check if a number is Armstrong number Tutorial

## Prerequisites

*   Understanding of Armstrong numbers (a number that is equal to the sum of its own digits each raised to the power of the number of digits).
*   Basic knowledge of arithmetic operations (modulo, division, exponentiation).
*   Familiarity with loops.

## Approach

### Approach 1: Using string conversion

This approach converts the number to a string to easily access its digits and calculate the power.

### Procedure

1. Define a function that takes an integer `n` as input.
2. Convert `n` to a string.
3. Get the number of digits in the string (which is the length of the string).
4. Initialize a variable `sum` to 0.
5. Iterate through each character (digit) in the string:
    *   Convert the character back to an integer.
    *   Raise the digit to the power of the number of digits.
    *   Add the result to `sum`.
6. If `sum` is equal to the original number `n`, return `true` (it is an Armstrong number); otherwise, return `false`.

### Approach 2: Without string conversion

This approach performs the calculations without converting the number to a string.

### Procedure

1. Define a function that takes an integer `n` as input.
2. Store the original number `n` in a temporary variable.
3. Initialize a variable `numDigits` to 0 (to count the number of digits).
4. While the temporary number is greater than 0:
    *   Increment `numDigits`.
    *   Divide the temporary number by 10 (integer division).
5. Reset the temporary number to the original number `n`.
6. Initialize a variable `sum` to 0.
7. While the temporary number is greater than 0:
    *   Get the last digit using the modulo operator (`% 10`).
    *   Raise the last digit to the power of `numDigits`.
    *   Add the result to `sum`.
    *   Divide the temporary number by 10 (integer division).
8. If `sum` is equal to the original number `n`, return `true`; otherwise, return `false`.

### Approach 3: Using logarithm to find the number of digits

This approach uses the base-10 logarithm to calculate the number of digits without string conversion or a loop.

### Procedure

1. Define a function that takes an integer `n` as input.
2. Calculate the number of digits using `numDigits = floor(log10(n)) + 1`.
3. Initialize a variable `sum` to 0.
4. Create a copy of the original number `n` in a temporary variable.
5. While the temporary number is greater than 0:
    *   Get the last digit using the modulo operator (`% 10`).
    *   Raise the last digit to the power of `numDigits`.
    *   Add the result to `sum`.
    *   Divide the temporary number by 10 (integer division).
6. If `sum` is equal to the original number `n`, return `true`; otherwise, return `false`.

### Approach 4: Recursive approach

This approach uses recursion to calculate the sum of the digits raised to the power of the number of digits.

### Procedure

1. Define a function that takes an integer `n` and the number of digits `numDigits` as input.
2. Base case: If `n` is 0, return 0.
3. Recursive step:
    *   Get the last digit of `n` using the modulo operator.
    *   Raise the last digit to the power of `numDigits`.
    *   Recursively call the function with `n / 10` (integer division) and `numDigits`.
    *   Return the sum of the result of the recursive call and the last digit raised to the power of `numDigits`.
4. Define a helper function that takes an integer `n` as input:
    *   Calculate the number of digits in `n`.
    *   Call the recursive function with `n` and the number of digits.
    *   Compare the result with `n` and return `true` if they are equal, `false` otherwise.

### Approach 5: Precompute powers (for optimization)

If you need to check many numbers, you can precompute the powers of digits to avoid redundant calculations.

### Procedure

1. Create a 2D array or a map to store precomputed powers. For example, `powers[i][j]` would store `i` raised to the power of `j`.
2. Define a function that takes an integer `n` as input.
3. Calculate the number of digits in `n`.
4. Initialize a variable `sum` to 0.
5. Create a copy of the original number `n` in a temporary variable.
6. While the temporary number is greater than 0:
    *   Get the last digit.
    *   Look up the precomputed power in the `powers` array/map using the last digit and the number of digits as indices.
    *   Add the result to `sum`.
    *   Divide the temporary number by 10.
7. If `sum` is equal to the original number `n`, return `true`; otherwise, return `false`.
