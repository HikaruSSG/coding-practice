# 27 Write a function to rotate an array Tutorial

## Prerequisites

*   Understanding of array data structures.
*   Basic knowledge of array manipulation (e.g., slicing, shifting, popping).
*   Familiarity with loops and modular arithmetic (optional).

## Approach

### Approach 1: Using slicing (Python-specific)

This approach uses Python's slicing feature to create a new rotated array.

### Procedure

1. Define a function that takes an array `arr` and a number of rotations `k` as input.
2. Calculate the effective number of rotations by taking the modulo of `k` with the length of the array (`k = k % len(arr)`). This handles cases where `k` is larger than the array length.
3. Use slicing to create two subarrays:
    *   `arr[-k:]`: The last `k` elements of the array (the elements that will be moved to the front).
    *   `arr[:-k]`: All elements of the array except the last `k` elements.
4. Concatenate the two subarrays: `arr[-k:] + arr[:-k]`.
5. Return the new rotated array.

### Approach 2: Using a temporary array

This approach creates a new array and copies elements from the original array to their new positions.

### Procedure

1. Define a function that takes an array `arr` and a number of rotations `k` as input.
2. Calculate the effective number of rotations (`k = k % len(arr)`).
3. Create a new array `rotatedArr` of the same size as `arr`.
4. Iterate through the original array `arr` using a loop with index `i`:
    *   Calculate the new index for the current element: `newIndex = (i + k) % len(arr)`.
    *   Copy the element at index `i` from `arr` to `rotatedArr` at `newIndex`.
5. Return the `rotatedArr`.

### Approach 3: In-place rotation using reversal

This approach rotates the array in-place by reversing parts of the array.

### Procedure

1. Define a function that takes an array `arr` and a number of rotations `k` as input.
2. Calculate the effective number of rotations (`k = k % len(arr)`).
3. Define a helper function `reverse(arr, start, end)` that reverses the portion of the array `arr` between indices `start` and `end` (inclusive).
4. Reverse the entire array using `reverse(arr, 0, len(arr) - 1)`.
5. Reverse the first `k` elements using `reverse(arr, 0, k - 1)`.
6. Reverse the remaining elements from index `k` to the end using `reverse(arr, k, len(arr) - 1)`.
7. The original array `arr` is now rotated in-place.

### Approach 4: In-place rotation using cyclic replacements

This approach rotates the array in-place by moving elements one by one in cycles.

### Procedure

1. Define a function that takes an array `arr` and a number of rotations `k` as input.
2. Calculate the effective number of rotations (`k = k % len(arr)`).
3. Iterate `k` times using a loop with index `i` from 0 to `k-1`:
    * Store the element at index `i` in a temporary variable `temp`.
    * Initialize `currentIndex` to `i`.
    * Use a `do-while` loop:
        * Calculate the `nextIndex` where the current element should be moved: `nextIndex = (currentIndex + k) % len(arr)`.
        * Move the element at `nextIndex` to `currentIndex`.
        * Update `currentIndex` to `nextIndex`.
        * Repeat until `currentIndex` becomes equal to `i` again.
    * Place the `temp` value at the final `currentIndex`.

### Approach 5: Using a deque (double-ended queue)

This approach uses a deque data structure to efficiently rotate the elements.

### Procedure

1. Define a function that takes an array `arr` and a number of rotations `k` as input.
2. Create a deque from the array `arr`.
3. Use the `rotate()` method of the deque to rotate the elements by `k` positions (positive `k` for right rotation, negative `k` for left rotation).
4. Convert the deque back to an array.
5. Return the rotated array.
