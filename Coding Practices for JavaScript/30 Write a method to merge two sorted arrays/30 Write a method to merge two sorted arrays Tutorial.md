# 30 Write a method to merge two sorted arrays Tutorial

## Prerequisites

*   Understanding of arrays and how they are indexed.
*   Knowledge of comparison operators.
*   Familiarity with loops.

## Approach

### Approach 1: Using a new array and three pointers

This approach creates a new array to store the merged result and uses three pointers to track the current positions in the two input arrays and the output array.

### Procedure

1. Define a function that takes two sorted arrays, `arr1` and `arr2`, as input.
2. Create a new array `mergedArr` with a size equal to the sum of the lengths of `arr1` and `arr2`.
3. Initialize three pointers:
    *   `i` to 0 (for `arr1`).
    *   `j` to 0 (for `arr2`).
    *   `k` to 0 (for `mergedArr`).
4. Use a `while` loop with the condition that `i` is less than the length of `arr1` and `j` is less than the length of `arr2`:
    *   Compare the elements `arr1[i]` and `arr2[j]`.
    *   If `arr1[i]` is smaller or equal, copy it to `mergedArr[k]` and increment `i`.
    *   Otherwise, copy `arr2[j]` to `mergedArr[k]` and increment `j`.
    *   Increment `k`.
5. After one of the input arrays is exhausted, copy the remaining elements from the other array to `mergedArr`:
    *   Use a `while` loop to copy remaining elements from `arr1` if `i` is less than the length of `arr1`.
    *   Use a `while` loop to copy remaining elements from `arr2` if `j` is less than the length of `arr2`.
6. Return the `mergedArr`.

### Approach 2: In-place merge (if one array has enough space)

This approach merges the two arrays into the first array, assuming it has enough extra space at the end to accommodate the elements of the second array.

### Procedure

1. Define a function that takes two sorted arrays, `arr1` (with extra space) and `arr2`, as input.
2. Initialize three pointers:
    *   `i` to the last element of the actual data in `arr1` (not the end of the array).
    *   `j` to the last element of `arr2`.
    *   `k` to the last position of `arr1` (including the extra space).
3. Use a `while` loop with the condition that `j` is greater than or equal to 0:
    *   If `i` is greater than or equal to 0 and `arr1[i]` is greater than `arr2[j]`:
        *   Copy `arr1[i]` to `arr1[k]`.
        *   Decrement `i`.
    *   Otherwise:
        *   Copy `arr2[j]` to `arr1[k]`.
        *   Decrement `j`.
    *   Decrement `k`.
4. The merged array is now stored in `arr1`.

### Approach 3: Using a priority queue (min-heap)

This approach uses a priority queue (min-heap) to efficiently merge the two arrays.

### Procedure

1. Define a function that takes two sorted arrays, `arr1` and `arr2`, as input.
2. Create a min-heap (priority queue).
3. Insert all elements from `arr1` and `arr2` into the min-heap.
4. Create a new array `mergedArr` with a size equal to the sum of the lengths of `arr1` and `arr2`.
5. Extract the minimum element from the min-heap repeatedly and add it to `mergedArr` until the heap is empty.
6. Return `mergedArr`.

### Approach 4: Using recursion

This approach uses recursion to merge the two arrays.

### Procedure

1. Define a recursive function that takes two sorted arrays, `arr1` and `arr2`, as input.
2. Base cases:
    *   If `arr1` is empty, return `arr2`.
    *   If `arr2` is empty, return `arr1`.
3. Recursive step:
    *   If the first element of `arr1` is smaller or equal to the first element of `arr2`:
        *   Return a new array with the first element of `arr1` followed by the result of recursively calling the function with the rest of `arr1` and `arr2`.
    *   Otherwise:
        *   Return a new array with the first element of `arr2` followed by the result of recursively calling the function with `arr1` and the rest of `arr2`.

### Approach 5: Using built-in merge functions (if available)

Some programming languages or libraries provide built-in functions for merging sorted arrays or lists (e.g., `heapq.merge` in Python).

### Procedure

1. Use the built-in merge function provided by the language or library.
2. Pass the two sorted arrays as input to the function.
3. The function will return an iterator or a new array containing the merged elements.
