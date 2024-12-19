# 7 Create a function to check if a number is prime Tutorial

## Prerequisites

*   Understanding of prime numbers (a number greater than 1 that has no positive divisors other than 1 and itself).
*   Basic knowledge of loops (e.g., for loop).
*   Familiarity with the modulo operator (%).

## Approach

### Approach 1: Trial division

This approach involves checking if the number is divisible by any number from 2 up to its square root.

### Procedure

1. Define a function that takes an integer `n` as input.
2. If `n` is less than 2, return `false` (not prime).
3. Start a loop that iterates from 2 up to the square root of `n`.
4. In each iteration, check if `n` is divisible by the current number using the modulo operator (%).
5. If `n` is divisible by any number, return `false` (not prime).
6. If the loop finishes without finding any divisors, return `true` (prime).

### Approach 2: Optimized trial division

This approach improves on the trial division by skipping even numbers after checking for divisibility by 2.

### Procedure

1. Define a function that takes an integer `n` as input.
2. If `n` is less than 2, return `false`.
3. If `n` is 2, return `true`.
4. If `n` is even (divisible by 2), return `false`.
5. Start a loop that iterates from 3 up to the square root of `n`, incrementing by 2 (checking only odd numbers).
6. In each iteration, check if `n` is divisible by the current number.
7. If `n` is divisible by any number, return `false`.
8. If the loop finishes without finding any divisors, return `true`.

### Approach 3: Using probabilistic primality tests (for large numbers)

For very large numbers, deterministic primality tests can be slow. Probabilistic tests like the Miller-Rabin test can provide a high probability of whether a number is prime.

### Procedure

1. Implement a probabilistic primality test algorithm (e.g., Miller-Rabin).
2. Run the test multiple times with different random bases to increase the confidence level.

### Approach 4: Using 6k ± 1 optimization

This approach further optimizes trial division by observing that all primes greater than 3 are of the form 6k ± 1.

### Procedure

1. Define a function that takes an integer `n` as input.
2. If `n` is less than or equal to 3, return `true` if `n` is greater than 1.
3. If `n` is divisible by 2 or 3, return `false`.
4. Start a loop that iterates from 5 up to the square root of `n`, incrementing by 6.
5. In each iteration, check if `n` is divisible by `i` or `i + 2`.
6. If `n` is divisible by either, return `false`.
7. If the loop finishes without finding any divisors, return `true`.

### Approach 5: Using built-in functions (if available)

Some programming languages or libraries provide built-in functions for primality testing. This approach utilizes those functions directly.

### Procedure

1. Use the built-in primality testing function provided by the programming language or library.
2. Return the result.
