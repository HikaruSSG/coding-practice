# 6 Calculate the sum of all numbers in an array Tutorial

## Prerequisites

*   Understanding of array data structures.
*   Basic knowledge of loops (e.g., for loop).
*   Familiarity with addition operator.

## Approach

### Approach 1: Using a loop

This approach involves iterating through the array and accumulating the sum of its elements.

### Procedure

1. Define a function that takes an array of numbers as input.
2. Initialize a variable `sum` to 0.
3. Start a loop that iterates through each element of the array.
4. In each iteration, add the current element to `sum`.
5. After the loop finishes, `sum` will contain the total sum of all numbers in the array.

### Approach 2: Using built-in functions (if available)

Some programming languages provide built-in functions for calculating the sum of elements in an array. This approach utilizes those functions directly.

### Procedure

1. Use the built-in function provided by the programming language to calculate the sum of the array elements.
2. Return the result.

### Approach 3: Using recursion

This approach involves using a recursive function to calculate the sum.

### Procedure

1. Define a recursive function that takes the array and its size as input.
2. Base case: If the array is empty (size is 0), return 0.
3. Recursive step:
    *   Return the sum of the first element and the result of calling the recursive function with the rest of the array (excluding the first element) and size reduced by 1.

### Approach 4: Divide and Conquer

This approach is similar to the recursive approach but explicitly divides the problem into smaller subproblems.

### Procedure

1. Define a function that takes the array, a start index, and an end index as input.
2. Base case: If the start index equals the end index, return the element at that index.
3. Find the middle index.
4. Recursively calculate the sum of the left half of the array.
5. Recursively calculate the sum of the right half of the array.
6. Return the sum of the two results.

### Approach 5: Using reduce/fold functions (if available)

Some programming languages provide higher-order functions like `reduce` or `fold` that can be used to accumulate a value over a collection.

### Procedure

1. Use the `reduce` or `fold` function provided by the programming language.
2. Provide a function that takes an accumulator and an element as input and returns the updated accumulator (in this case, the sum).
3. Provide an initial value for the accumulator (usually 0 for summation).
