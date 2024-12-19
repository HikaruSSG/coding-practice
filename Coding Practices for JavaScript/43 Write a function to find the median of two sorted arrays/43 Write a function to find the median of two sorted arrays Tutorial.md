# 43 Write a function to find the median of two sorted arrays Tutorial

## Prerequisites

*   Understanding of arrays and the concept of the median.
*   Knowledge of binary search or merging algorithms.

## Approach

### Approach 1: Merging and Finding Median

This approach merges the two sorted arrays into a single sorted array and then finds the median of the merged array.

### Procedure

1. Define a function that takes two sorted arrays, `arr1` and `arr2`, as input.
2. Merge the two arrays into a single sorted array `mergedArr` (you can use a merge function similar to the one used in mergesort).
3. Calculate the length of `mergedArr`.
4. If the length of `mergedArr` is odd:
    *   Return the element at index `Math.floor(mergedArr.length / 2)` (the middle element).
5. If the length of `mergedArr` is even:
    *   Return the average of the elements at indices `mergedArr.length / 2 - 1` and `mergedArr.length / 2` (the two middle elements).

### Approach 2: Binary Search on Smaller Array

This approach uses binary search on the smaller array to find the correct partition point that divides the elements into two halves such that the median can be determined.

### Procedure

1. Define a function that takes two sorted arrays, `arr1` and `arr2`, as input.
2. Ensure that `arr1` is the smaller array (if not, swap them).
3. Initialize `low` to 0 and `high` to the length of `arr1`.
4. Use a `while` loop with the condition `low <= high`:
    *   Calculate `partitionX = Math.floor((low + high) / 2)` (partition point for `arr1`).
    *   Calculate `partitionY = Math.floor((arr1.length + arr2.length + 1) / 2) - partitionX` (partition point for `arr2`).
    *   Find the maximum element on the left side of the partition in `arr1` (`maxLeftX`) and the minimum element on the right side (`minRightX`). Handle edge cases where `partitionX` is 0 or `arr1.length`.
    *   Similarly, find `maxLeftY` and `minRightY` for `arr2`.
    *   If `maxLeftX <= minRightY` and `maxLeftY <= minRightX`:
        *   This is the correct partition.
        *   If the total number of elements is odd, return `max(maxLeftX, maxLeftY)`.
        *   If the total number of elements is even, return `(max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2`.
    *   Else if `maxLeftX > minRightY`:
        *   Update `high` to `partitionX - 1` (search in the left half of `arr1`).
    *   Else:
        *   Update `low` to `partitionX + 1` (search in the right half of `arr1`).
5. If the loop finishes without finding a valid partition, throw an error or return a special value.

### Approach 3: Optimized Binary Search

This approach is a variation of Approach 2 that optimizes the binary search and handles edge cases more efficiently.

### Procedure

1. Define a function that takes two sorted arrays, `arr1` and `arr2`, as input.
2. Ensure that `arr1` is the smaller array (if not, swap them).
3. Initialize `low` to 0 and `high` to the length of `arr1`.
4. Use a `while` loop with the condition `low <= high`:
    * Calculate `partitionX = (low + high) >> 1` (bitwise right shift for faster division by 2).
    * Calculate `partitionY = ((arr1.length + arr2.length + 1) >> 1) - partitionX`.
    * Find `maxLeftX`, `minRightX`, `maxLeftY`, and `minRightY` as in Approach 2, handling edge cases using `Number.NEGATIVE_INFINITY` and `Number.POSITIVE_INFINITY`.
    * If `maxLeftX <= minRightY` and `maxLeftY <= minRightX`:
        * If the total number of elements is odd, return `max(maxLeftX, maxLeftY)`.
        * If the total number of elements is even, return `(max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0`.
    * Else if `maxLeftX > minRightY`:
        * Update `high` to `partitionX - 1`.
    * Else:
        * Update `low` to `partitionX + 1`.

### Approach 4: Recursive Approach (less efficient)

This approach uses recursion to find the median by repeatedly discarding portions of the arrays.

### Procedure

1. Define a recursive function that takes two sorted arrays, `arr1` and `arr2`, and their start and end indices as input.
2. Base cases:
    * If one of the arrays is empty, return the median of the other array.
    * If one of the arrays has only one element, find the median based on the other array's elements.
    * If both arrays have two elements, calculate the median using a formula.
3. Find the medians `m1` and `m2` of `arr1` and `arr2`, respectively.
4. If `m1` and `m2` are equal, return `m1` (or `m2`).
5. If `m1` is less than `m2`:
    * Recursively call the function with the right half of `arr1` and the left half of `arr2`.
6. If `m1` is greater than `m2`:
    * Recursively call the function with the left half of `arr1` and the right half of `arr2`.

### Approach 5: Kth Element Approach

This approach finds the kth element in the merged array, where k is the middle index (or indices for even length).

### Procedure

1. Define a function that takes two sorted arrays `arr1`, `arr2` and integer `k` as input.
2. Ensure `arr1` is shorter than `arr2`. If not, swap them.
3. If `arr1` is empty, return `arr2[k-1]`.
4. If `k` is 1, return the smaller of `arr1[0]` and `arr2[0]`.
5. Calculate `i = min(len(arr1), k // 2)` and `j = k - i`.
6. Compare `arr1[i-1]` and `arr2[j-1]`.
    * If `arr1[i-1] < arr2[j-1]`, recursively call the function with the right part of `arr1` (from index `i`), `arr2`, and `k-i`.
    * If `arr1[i-1] > arr2[j-1]`, recursively call the function with `arr1`, the right part of `arr2` (from index `j`), and `k-j`.
    * If `arr1[i-1] == arr2[j-1]`, return `arr1[i-1]`.
7. Define a main function that takes two sorted arrays `arr1` and `arr2` as input.
    * Calculate `totalLength = len(arr1) + len(arr2)`.
    * If `totalLength` is odd, call the kth element function with `k = (totalLength // 2) + 1`.
    * If `totalLength` is even, call the kth element function twice with `k = totalLength // 2` and `k = (totalLength // 2) + 1`, and return the average of the results.
