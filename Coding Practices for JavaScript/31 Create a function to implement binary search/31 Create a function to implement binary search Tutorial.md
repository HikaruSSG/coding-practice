# 31 Create a function to implement binary search Tutorial

## Prerequisites

*   Understanding of the binary search algorithm.
*   Knowledge of arrays and indexing.
*   Familiarity with comparison operators and loops (or recursion).

## Approach

### Approach 1: Iterative Binary Search

This approach uses a `while` loop to repeatedly divide the search space in half.

### Procedure

1. Define a function that takes a sorted array `arr` and a target value `target` as input.
2. Initialize two pointers:
    *   `left` to 0 (the start index of the array).
    *   `right` to `arr.length - 1` (the end index of the array).
3. Use a `while` loop with the condition `left <= right`:
    *   Calculate the middle index: `mid = Math.floor((left + right) / 2)`.
    *   If `arr[mid]` is equal to `target`, return `mid` (target found).
    *   If `arr[mid]` is less than `target`, update `left` to `mid + 1` (search in the right half).
    *   If `arr[mid]` is greater than `target`, update `right` to `mid - 1` (search in the left half).
4. If the loop finishes without finding the target, return -1 (or another special value indicating that the target is not present).

### Approach 2: Recursive Binary Search

This approach uses recursion to divide the search space in half.

### Procedure

1. Define a recursive function that takes a sorted array `arr`, a target value `target`, a `left` index, and a `right` index as input.
2. Base case: If `left > right`, return -1 (target not found).
3. Calculate the middle index: `mid = Math.floor((left + right) / 2)`.
4. If `arr[mid]` is equal to `target`, return `mid` (target found).
5. If `arr[mid]` is less than `target`, recursively call the function with `arr`, `target`, `mid + 1`, and `right` (search in the right half).
6. If `arr[mid]` is greater than `target`, recursively call the function with `arr`, `target`, `left`, and `mid - 1` (search in the left half).
7. Define a main function that takes `arr` and `target` as input:
    *   Call the recursive function with `arr`, `target`, 0, and `arr.length - 1`.
    *   Return the result.

### Approach 3: Using built-in binary search functions (if available)

Some programming languages provide built-in functions for performing binary search (e.g., `Arrays.binarySearch` in Java, `bisect_left` in Python).

### Procedure

1. Use the built-in binary search function provided by the language or library.
2. Pass the sorted array and the target value as input to the function.
3. The function will typically return the index of the target if found, or a negative value indicating where the target would be inserted to maintain the sorted order.
4. Handle the return value appropriately (e.g., check if it's negative to determine if the target was found).

### Approach 4: Binary Search with duplicate elements (finding first occurrence)

This approach modifies the iterative binary search to find the first occurrence of a target value in an array that may contain duplicate elements.

### Procedure

1. Define a function that takes a sorted array `arr` and a target value `target` as input.
2. Initialize `left` to 0 and `right` to `arr.length - 1`.
3. Initialize a variable `result` to -1 (to store the index of the first occurrence).
4. Use a `while` loop with the condition `left <= right`:
    *   Calculate `mid = Math.floor((left + right) / 2)`.
    *   If `arr[mid]` is equal to `target`:
        *   Update `result` to `mid`.
        *   Update `right` to `mid - 1` (continue searching on the left for an earlier occurrence).
    *   If `arr[mid]` is less than `target`, update `left` to `mid + 1`.
    *   If `arr[mid]` is greater than `target`, update `right` to `mid - 1`.
5. Return `result`.

### Approach 5: Binary Search with duplicate elements (finding last occurrence)

This approach is similar to Approach 4 but finds the last occurrence of the target value.

### Procedure

1. Define a function that takes a sorted array `arr` and a target value `target` as input.
2. Initialize `left` to 0 and `right` to `arr.length - 1`.
3. Initialize `result` to -1.
4. Use a `while` loop with the condition `left <= right`:
    *   Calculate `mid = Math.floor((left + right) / 2)`.
    *   If `arr[mid]` is equal to `target`:
        *   Update `result` to `mid`.
        *   Update `left` to `mid + 1` (continue searching on the right for a later occurrence).
    *   If `arr[mid]` is less than `target`, update `left` to `mid + 1`.
    *   If `arr[mid]` is greater than `target`, update `right` to `mid - 1`.
5. Return `result`.
