# 42 Create a method to implement quick sort Tutorial

## Prerequisites

*   Understanding of the quicksort algorithm and its partitioning step.
*   Knowledge of recursion or iterative approaches using a stack.

## Approach

### Approach 1: Recursive Quicksort with Lomuto Partition Scheme

This approach uses recursion and the Lomuto partition scheme to sort the array.

### Procedure

1. Define a function `quicksort` that takes an array `arr`, a `low` index, and a `high` index as input.
2. Base case: If `low` is greater than or equal to `high`, the subarray is already sorted, so return.
3. Choose a pivot element (e.g., the last element `arr[high]`).
4. Implement the Lomuto partition scheme:
    *   Initialize a variable `i` to `low - 1`.
    *   Iterate from `j = low` to `high - 1`:
        *   If `arr[j]` is less than or equal to the pivot:
            *   Increment `i`.
            *   Swap `arr[i]` and `arr[j]`.
    *   Swap `arr[i + 1]` and `arr[high]` (place the pivot in its correct position).
    *   Return `i + 1` (the index of the pivot element).
5. Call the `partition` function to get the pivot index `p`.
6. Recursively call `quicksort` on the left subarray (`arr`, `low`, `p - 1`).
7. Recursively call `quicksort` on the right subarray (`arr`, `p + 1`, `high`).
8. Define a main function that takes an array `arr` as input:
    *   Call `quicksort` with `arr`, 0, and `arr.length - 1`.
    *   Return the sorted `arr`.

### Approach 2: Recursive Quicksort with Hoare Partition Scheme

This approach uses recursion and the Hoare partition scheme, which is generally more efficient than Lomuto's scheme.

### Procedure

1. Define a function `quicksort` that takes an array `arr`, a `low` index, and a `high` index as input.
2. Base case: If `low` is greater than or equal to `high`, the subarray is already sorted, so return.
3. Choose a pivot element (e.g., the first element `arr[low]`, the middle element, or a random element).
4. Implement the Hoare partition scheme:
    *   Initialize two pointers, `i` to `low - 1` and `j` to `high + 1`.
    *   Use an infinite `while` loop:
        *   Increment `i` until `arr[i]` is greater than or equal to the pivot.
        *   Decrement `j` until `arr[j]` is less than or equal to the pivot.
        *   If `i` is greater than or equal to `j`, return `j` (the partition point).
        *   Swap `arr[i]` and `arr[j]`.
5. Call the `partition` function to get the partition index `p`.
6. Recursively call `quicksort` on the left subarray (`arr`, `low`, `p`).
7. Recursively call `quicksort` on the right subarray (`arr`, `p + 1`, `high`).
8. Define a main function that takes an array `arr` as input:
    *   Call `quicksort` with `arr`, 0, and `arr.length - 1`.
    *   Return the sorted `arr`.

### Approach 3: Iterative Quicksort using a Stack

This approach uses a stack to simulate recursion and sort the array iteratively.

### Procedure

1. Define a function `quicksortIterative` that takes an array `arr` as input.
2. Create an empty stack `stack`.
3. Push the initial `low` (0) and `high` (`arr.length - 1`) indices onto the `stack`.
4. Use a `while` loop with the condition that the `stack` is not empty:
    *   Pop `high` and `low` from the `stack`.
    *   Call the `partition` function (using either Lomuto's or Hoare's scheme) to get the pivot index `p`.
    *   If `p - 1` is greater than `low`, push `low` and `p - 1` onto the `stack` (left subarray).
    *   If `p + 1` is less than `high`, push `p + 1` and `high` onto the `stack` (right subarray).
5. Return the sorted `arr`.

### Approach 4: Quicksort with Random Pivot Selection

This approach is similar to the recursive approaches but chooses a random pivot element in each step to improve average-case performance and reduce the likelihood of worst-case behavior.

### Procedure

1. Modify the `quicksort` function (either Lomuto's or Hoare's scheme) to accept an additional parameter `randomizePivot` (a boolean).
2. If `randomizePivot` is `true`:
    *   Before partitioning, choose a random index between `low` and `high`.
    *   Swap the element at the random index with the element at `low` (if using Hoare's scheme) or `high` (if using Lomuto's scheme).
3. Proceed with the partitioning as usual, using the element at `low` or `high` as the pivot.
4. Define a main function that takes an array `arr` and an optional `randomizePivot` flag as input:
    *   Call `quicksort` with `arr`, 0, `arr.length - 1`, and `randomizePivot`.
    *   Return the sorted `arr`.

### Approach 5: Quicksort with Median-of-Three Pivot Selection

This approach is another variation that aims to improve pivot selection by choosing the median of the first, middle, and last elements of the subarray.

### Procedure

1. Modify the `quicksort` function to accept an additional parameter `medianOfThree` (a boolean).
2. If `medianOfThree` is `true`:
    *   Before partitioning, calculate the middle index: `mid = Math.floor((low + high) / 2)`.
    *   Find the median among `arr[low]`, `arr[mid]`, and `arr[high]` using comparisons or a sorting network.
    *   Swap the median element with `arr[low]` (if using Hoare's scheme) or `arr[high]` (if using Lomuto's scheme).
3. Proceed with the partitioning as usual, using the element at `low` or `high` as the pivot.
4. Define a main function that takes an array `arr` and an optional `medianOfThree` flag as input:
    *   Call `quicksort` with `arr`, 0, `arr.length - 1`, and `medianOfThree`.
    *   Return the sorted `arr`.
