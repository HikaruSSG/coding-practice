# 10 Create a function to flatten a nested array Tutorial

## Prerequisites

*   Understanding of array data structures.
*   Basic knowledge of recursion.
*   Familiarity with array methods like `concat` and `isArray`.

## Approach

### Approach 1: Using recursion

This approach involves recursively flattening each element of the array.

### Procedure

1. Define a function that takes an array as input.
2. Initialize an empty array called `flattenedArray`.
3. Start a loop that iterates through each element of the input array.
4. In each iteration, check if the current element is an array using `Array.isArray()`.
5. If the element is an array, recursively call the flatten function on it and concatenate the result to `flattenedArray`.
6. If the element is not an array, simply push it to `flattenedArray`.
7. After the loop finishes, return `flattenedArray`.

### Approach 2: Using reduce and concat

This approach uses the `reduce` method along with `concat` to recursively flatten the array.

### Procedure

1. Define a function that takes an array as input.
2. Use the `reduce` method on the array.
3. Provide a function that takes an accumulator array and the current element as input.
4. Check if the current element is an array.
5. If it is an array, recursively call the flatten function on it and concatenate the result to the accumulator.
6. If it's not an array, concatenate the element to the accumulator.
7. Return the updated accumulator.
8. Provide an empty array as the initial value for the accumulator.

### Approach 3: Using a stack (iterative approach)

This approach uses a stack to iteratively flatten the array.

### Procedure

1. Define a function that takes an array as input.
2. Initialize a stack with the input array.
3. Initialize an empty array called `flattenedArray`.
4. While the stack is not empty:
    *   Pop the last element from the stack.
    *   If the element is an array, push all its elements onto the stack.
    *   If the element is not an array, add it to the beginning of `flattenedArray`.
5. Return `flattenedArray`.

### Approach 4: Using a queue (iterative approach)

This approach is similar to Approach 3 but uses a queue instead of a stack.

### Procedure

1. Define a function that takes an array as input.
2. Initialize a queue with the input array.
3. Initialize an empty array called `flattenedArray`.
4. While the queue is not empty:
    *   Dequeue the first element from the queue.
    *   If the element is an array, enqueue all its elements to the queue.
    *   If the element is not an array, add it to the end of `flattenedArray`.
5. Return `flattenedArray`.

### Approach 5: Using built-in functions (if available)

Some programming languages provide built-in functions for flattening arrays (e.g., `flat()` in JavaScript). This approach utilizes those functions directly.

### Procedure

1. Use the built-in array flattening function provided by the programming language.
2. Specify the desired depth of flattening (if applicable).
3. Return the flattened array.
