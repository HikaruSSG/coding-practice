# 46 Write a function to implement merge sort Tutorial

## Prerequisites

*   Understanding of the merge sort algorithm and its divide-and-conquer approach.
*   Knowledge of recursion.
*   Familiarity with arrays and how to merge two sorted arrays.

## Approach

### Approach 1: Recursive Merge Sort with Top-Down Approach

This approach recursively divides the array into smaller subarrays, sorts them, and then merges them back together.

### Procedure

1. Define a function `mergeSort` that takes an array `arr` as input.
2. Base case: If the array has one or zero elements, it's already sorted, so return the array.
3. Find the middle index of the array: `mid = Math.floor(arr.length / 2)`.
4. Divide the array into two halves:
    *   `leftHalf = arr.slice(0, mid)`
    *   `rightHalf = arr.slice(mid)`
5. Recursively call `mergeSort` on the left half: `sortedLeftHalf = mergeSort(leftHalf)`.
6. Recursively call `mergeSort` on the right half: `sortedRightHalf = mergeSort(rightHalf)`.
7. Merge the two sorted halves using a helper function `merge` (explained below).
8. Return the merged and sorted array.

**Helper function `merge`:**

1. Define a function `merge` that takes two sorted arrays, `leftArr` and `rightArr`, as input.
2. Create an empty array `result` to store the merged elements.
3. Initialize two pointers, `i` to 0 (for `leftArr`) and `j` to 0 (for `rightArr`).
4. Use a `while` loop with the condition that `i` is less than the length of `leftArr` and `j` is less than the length of `rightArr`:
    *   If `leftArr[i]` is less than or equal to `rightArr[j]`:
        *   Append `leftArr[i]` to `result`.
        *   Increment `i`.
    *   Otherwise:
        *   Append `rightArr[j]` to `result`.
        *   Increment `j`.
5. After one of the arrays is exhausted, append the remaining elements from the other array to `result`.
6. Return `result`.

### Approach 2: Iterative Merge Sort with Bottom-Up Approach

This approach iteratively merges subarrays of increasing sizes until the entire array is sorted.

### Procedure

1. Define a function `mergeSortIterative` that takes an array `arr` as input.
2. Get the length of the array: `n = arr.length`.
3. Use a `for` loop to iterate through subarray sizes, starting from 1 and doubling in each iteration: `size = 1, 2, 4, 8, ...` (up to `n`).
4. Use another `for` loop to iterate through the array with a step of `2 * size`:
    *   Calculate the `leftStart` index.
    *   Calculate the `mid` index (the end of the left subarray).
    *   Calculate the `rightEnd` index (the end of the right subarray).
    *   Merge the two subarrays `arr[leftStart...mid]` and `arr[mid+1...rightEnd]` using the `merge` function (defined in Approach 1). You may need to handle cases where `mid` or `rightEnd` exceed the array bounds.
5. Return the sorted `arr`.

### Approach 3: In-Place Merge Sort (more complex)

This approach performs the merge sort operation directly within the input array without using extra space for subarrays (except for a small temporary array during merging). This is more complex to implement and often not significantly more efficient than the top-down or bottom-up approaches.

### Procedure

1. Define a function `mergeSortInPlace` that takes an array `arr`, a `start` index, and an `end` index as input.
2. Base case: If `start` is greater than or equal to `end`, the subarray is already sorted, so return.
3. Calculate the middle index: `mid = Math.floor((start + end) / 2)`.
4. Recursively call `mergeSortInPlace` on the left subarray (`arr`, `start`, `mid`).
5. Recursively call `mergeSortInPlace` on the right subarray (`arr`, `mid + 1`, `end`).
6. Implement an in-place `merge` function that merges the two sorted subarrays within `arr` using a small temporary array and careful index manipulation. This is the most complex part of the in-place approach.
7. Define a main function that takes an array `arr` as input:
    * Call `mergeSortInPlace` with `arr`, 0, and `arr.length - 1`.
    * Return the sorted `arr`.

### Approach 4: Using a Linked List for Merge Sort

This approach uses a linked list instead of an array, which can be more efficient for merging operations as it avoids shifting elements.

### Procedure

1. Define a `Node` class for the linked list with attributes for `data` and `next` (pointer to the next node).
2. Define a function `mergeSortLinkedList` that takes the head of a linked list as input.
3. Base case: If the list is empty or has only one node, it's already sorted, so return the head.
4. Find the middle node of the linked list using the slow/fast pointer technique.
5. Split the list into two halves at the middle node.
6. Recursively call `mergeSortLinkedList` on the left half.
7. Recursively call `mergeSortLinkedList` on the right half.
8. Implement a `merge` function that takes the heads of two sorted linked lists as input and merges them into a single sorted linked list.
9. Return the head of the merged list.

### Approach 5: Natural Merge Sort (optimized for partially sorted data)

This approach takes advantage of existing sorted runs within the input array to reduce the number of merge operations.

### Procedure

1. Define a function `naturalMergeSort` that takes an array `arr` as input.
2. Identify existing sorted runs (subsequences) within the array.
3. Use a loop or a queue to merge pairs of adjacent runs until only one sorted run remains.
4. Use the `merge` function (defined in Approach 1) to merge the runs.
5. Return the sorted `arr`.
