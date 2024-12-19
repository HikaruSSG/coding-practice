# 9 Write a function to remove duplicates from an array Tutorial

## Prerequisites

*   Understanding of array data structures.
*   Basic knowledge of loops (e.g., for loop).
*   Familiarity with data structures like sets (if using that approach).

## Approach

### Approach 1: Using a set

This approach leverages the property of sets to store only unique elements.

### Procedure

1. Define a function that takes an array as input.
2. Create a new set from the elements of the input array.
3. Convert the set back to an array.
4. Return the new array, which will contain only unique elements.

### Approach 2: Using a loop and an auxiliary array

This approach involves iterating through the array and adding elements to a new array only if they haven't been encountered before.

### Procedure

1. Define a function that takes an array as input.
2. Initialize an empty array called `uniqueArray`.
3. Start a loop that iterates through each element of the input array.
4. In each iteration, check if the current element is already present in `uniqueArray`.
5. If the element is not in `uniqueArray`, add it to `uniqueArray`.
6. After the loop finishes, `uniqueArray` will contain only the unique elements from the input array.

### Approach 3: Using filter and indexOf

This approach uses the `filter` method along with `indexOf` to keep only the first occurrence of each element.

### Procedure

1. Define a function that takes an array as input.
2. Use the `filter` method on the array.
3. For each element, use `indexOf` to find its first occurrence in the array.
4. If the index of the current element matches its first occurrence, keep it (return `true` in the filter callback).
5. The `filter` method will return a new array with only the unique elements.

### Approach 4: Using an object/map to track seen elements

This approach uses an object or map to keep track of elements that have already been encountered.

### Procedure

1. Define a function that takes an array as input.
2. Initialize an empty object/map called `seen`.
3. Initialize an empty array called `uniqueArray`.
4. Start a loop that iterates through each element of the input array.
5. In each iteration, check if the current element exists as a key in the `seen` object/map.
6. If the element is not in `seen`, add it to `uniqueArray` and add it as a key to `seen` (with any value, e.g., `true`).
7. After the loop finishes, `uniqueArray` will contain only the unique elements.

### Approach 5: Using reduce

This approach uses the `reduce` method to accumulate unique elements into a new array.

### Procedure

1. Define a function that takes an array as input.
2. Use the `reduce` method on the array.
3. Provide a function that takes an accumulator array and the current element as input.
4. Check if the current element is already in the accumulator array.
5. If it's not, add it to the accumulator array.
6. Return the updated accumulator array.
7. Provide an empty array as the initial value for the accumulator.
