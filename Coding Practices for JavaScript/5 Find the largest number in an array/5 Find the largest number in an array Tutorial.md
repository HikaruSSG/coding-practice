# 5 Find the largest number in an array Tutorial

## Prerequisites

*   Understanding of array data structures.
*   Basic knowledge of loops (e.g., for loop).
*   Familiarity with comparison operators.

## Approach

### Approach 1: Using a loop

This approach involves iterating through the array and keeping track of the largest number found so far.

### Procedure

1. Define a function that takes an array of numbers as input.
2. Initialize a variable `largest` to the first element of the array.
3. Start a loop that iterates through the rest of the array (from the second element).
4. In each iteration, compare the current element to `largest`.
5. If the current element is greater than `largest`, update `largest` to the current element.
6. After the loop finishes, `largest` will contain the largest number in the array.

### Approach 2: Using built-in functions (if available)

Some programming languages provide built-in functions for finding the maximum value in an array. This approach utilizes those functions directly.

### Procedure

1. Use the built-in function provided by the programming language to find the maximum value in the array.
2. Return the result.

### Approach 3: Using sorting

This approach involves sorting the array and then taking the last element.

### Procedure

1. Sort the array in ascending order.
2. The largest number will be the last element of the sorted array.

### Approach 4: Using recursion

This approach involves using a recursive function to find the largest number.

### Procedure

1. Define a recursive function that takes the array and its size as input.
2. Base case: If the array has only one element, return that element.
3. Recursive step:
    *   Find the largest number in the rest of the array (excluding the first element) recursively.
    *   Compare the first element with the result of the recursive call.
    *   Return the larger of the two.

### Approach 5: Divide and Conquer

This approach is similar to the recursive approach but explicitly divides the problem into smaller subproblems.

### Procedure

1. Define a function that takes the array, a start index, and an end index as input.
2. Base case: If the start index equals the end index, return the element at that index.
3. Find the middle index.
4. Recursively find the largest number in the left half of the array.
5. Recursively find the largest number in the right half of the array.
6. Return the larger of the two results.
