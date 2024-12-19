# 18 Write a function to sort an array without using built-in sort Tutorial

## Prerequisites

*   Understanding of array data structures.
*   Basic knowledge of comparison operators.
*   Familiarity with loops (e.g., for loop, while loop).

## Approach

### Approach 1: Bubble Sort

This approach repeatedly compares adjacent elements and swaps them if they are in the wrong order, causing larger elements to "bubble" to the end of the array.

### Procedure

1. Define a function that takes an array as input.
2. Get the length of the array.
3. Start an outer loop that iterates from 0 to the length of the array minus 1.
4. Start an inner loop that iterates from 0 to the length of the array minus the outer loop index minus 1.
5. In each inner loop iteration, compare the current element with the next element.
6. If the current element is greater than the next element, swap them.
7. After each pass of the outer loop, the largest unsorted element will be in its correct position at the end.
8. Repeat the process until the array is sorted.

### Approach 2: Selection Sort

This approach repeatedly finds the minimum element from the unsorted part of the array and places it at the beginning.

### Procedure

1. Define a function that takes an array as input.
2. Get the length of the array.
3. Start an outer loop that iterates from 0 to the length of the array minus 1.
4. Initialize `minIndex` to the outer loop index.
5. Start an inner loop that iterates from `minIndex + 1` to the length of the array.
6. In each inner loop iteration, compare the current element with the element at `minIndex`.
7. If the current element is smaller, update `minIndex` to the current index.
8. After the inner loop finishes, swap the element at `minIndex` with the element at the outer loop index.
9. Repeat the process until the array is sorted.

### Approach 3: Insertion Sort

This approach builds a sorted array one element at a time by repeatedly taking the next element from the unsorted part and inserting it into its correct position in the sorted part.

### Procedure

1. Define a function that takes an array as input.
2. Get the length of the array.
3. Start a loop that iterates from 1 to the length of the array.
4. Store the current element in a variable `key`.
5. Initialize a variable `j` to the previous index (i-1).
6. While `j` is greater than or equal to 0 and the element at index `j` is greater than `key`:
    *   Shift the element at index `j` one position to the right (to index `j+1`).
    *   Decrement `j`.
7. Insert `key` at index `j+1`.
8. Repeat the process until the array is sorted.

### Approach 4: Merge Sort

This approach is a divide-and-conquer algorithm that recursively divides the array into smaller subarrays, sorts them, and then merges them back together.

### Procedure

1. Define a function `mergeSort` that takes an array as input.
2. Base case: If the array has 0 or 1 element, it is already sorted, so return it.
3. Divide the array into two halves.
4. Recursively call `mergeSort` on the left half.
5. Recursively call `mergeSort` on the right half.
6. Define a function `merge` that takes two sorted arrays as input and merges them into a single sorted array.
7. In the `merge` function:
    *   Initialize an empty result array.
    *   Initialize pointers `i` and `j` to 0 for the left and right arrays, respectively.
    *   While `i` is less than the length of the left array and `j` is less than the length of the right array:
        *   Compare the elements at `i` and `j`.
        *   Append the smaller element to the result array and increment the corresponding pointer.
    *   Append any remaining elements from the left or right array to the result array.
8. Return the result of calling `merge` on the sorted left and right halves.

### Approach 5: Quick Sort

This approach is another divide-and-conquer algorithm that selects a 'pivot' element and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

### Procedure

1. Define a function `quickSort` that takes an array, a low index, and a high index as input.
2. Base case: If `low` is greater than or equal to `high`, the subarray is already sorted, so return.
3. Choose a pivot element (e.g., the last element).
4. Define a function `partition` that takes the array, `low`, and `high` as input and returns the index of the pivot element after partitioning.
5. In the `partition` function:
    *   Initialize `i` to `low - 1`.
    *   Iterate from `j = low` to `high - 1`:
        *   If the element at `j` is less than the pivot:
            *   Increment `i`.
            *   Swap the elements at `i` and `j`.
    *   Swap the pivot element (at `high`) with the element at `i + 1`.
    *   Return `i + 1` (the new index of the pivot).
6. Call `partition` to get the pivot index.
7. Recursively call `quickSort` on the subarray before the pivot (`low` to `pivotIndex - 1`).
8. Recursively call `quickSort` on the subarray after the pivot (`pivotIndex + 1` to `high`).
