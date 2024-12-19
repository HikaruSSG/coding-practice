# 47 Create a method to find the longest increasing subsequence Tutorial

## Prerequisites

*   Understanding of the concept of subsequences.
*   Knowledge of dynamic programming or recursion.
*   Familiarity with arrays.

## Approach

### Approach 1: Dynamic Programming

This approach uses dynamic programming to build a table that stores the lengths of the longest increasing subsequences ending at each position of the input array.

### Procedure

1. Define a function that takes an array `arr` as input.
2. Create an array `dp` of the same size as `arr`, initialized with all elements set to 1. `dp[i]` will store the length of the longest increasing subsequence ending at `arr[i]`.
3. Iterate through the array `arr` using a loop with index `i` from 1 to `arr.length - 1`:
    *   Iterate through the elements before `arr[i]` using a nested loop with index `j` from 0 to `i - 1`:
        *   If `arr[i]` is greater than `arr[j]` (increasing subsequence condition) and `dp[i]` is less than or equal to `dp[j]` (potential for a longer subsequence):
            *   Update `dp[i]` to `dp[j] + 1`.
4. Find the maximum value in the `dp` array. This is the length of the longest increasing subsequence.
5. (Optional) To reconstruct the actual longest increasing subsequence, backtrack through the `dp` array:
    *   Initialize an empty list `lis`.
    *   Start from the index `i` where `dp[i]` is equal to the maximum length.
    *   Add `arr[i]` to `lis`.
    *   Iterate backward from `i - 1` to 0:
        *   If `arr[j]` is less than `arr[i]` and `dp[j]` is equal to `dp[i] - 1`, it means `arr[j]` is the previous element in the LIS.
        *   Update `i` to `j` and add `arr[j]` to `lis`.
    *   Reverse `lis` to get the correct order.
6. Return the maximum value in `dp` (and optionally the `lis`).

### Approach 2: Optimized Dynamic Programming with Binary Search

This approach optimizes the dynamic programming approach by using binary search to find the appropriate position for each element in the increasing subsequence.

### Procedure

1. Define a function that takes an array `arr` as input.
2. Create an empty list `tails` to store the smallest tail of all increasing subsequences of length `i+1` in `tails[i]`.
3. Iterate through the array `arr`:
    *   If the current element `num` is greater than all tails in `tails`, append it to `tails` (extends the longest increasing subsequence by 1).
    *   Otherwise, use binary search to find the smallest element in `tails` that is greater than or equal to `num` and replace it with `num` (this maintains the property that `tails` is always sorted and represents the smallest tails for increasing subsequences of different lengths).
4. The length of `tails` is the length of the longest increasing subsequence.
5. (Optional) To reconstruct the actual longest increasing subsequence, you can use an additional array to store predecessors or use a more complex backtracking approach.
6. Return the length of `tails` (and optionally the reconstructed LIS).

### Approach 3: Recursive Approach with Memoization

This approach uses recursion to find the LIS, with memoization to avoid redundant calculations.

### Procedure

1. Define a recursive function `_lis` that takes an array `arr`, an index `i`, and a previous element `prev` as input.
2. Create a memoization table (e.g., a 2D array or a dictionary) to store the results of subproblems.
3. Base case: If `i` is equal to the length of `arr`, return 0.
4. Check if the result for the current subproblem (`i`, `prev`) is already in the memoization table. If so, return the stored result.
5. Calculate the length of the LIS including `arr[i]` if it's greater than `prev`:
    *   `len1 = 1 + _lis(arr, i + 1, arr[i])`
6. Calculate the length of the LIS excluding `arr[i]`:
    *   `len2 = _lis(arr, i + 1, prev)`
7. Store the maximum of `len1` and `len2` in the memoization table for the current subproblem.
8. Return the maximum of `len1` and `len2`.
9. Define a main function that takes an array `arr` as input:
    *   Call the recursive function `_lis` with `arr`, 0, and a special value (e.g., `Number.NEGATIVE_INFINITY`) as the initial `prev`.
    *   Return the result.

### Approach 4: Patience Sort (more advanced)

This approach uses an algorithm called patience sorting, which is related to the card game solitaire, to find the LIS.

### Procedure

1. Define a function that takes an array `arr` as input.
2. Create an empty list of piles `piles`.
3. Iterate through the array `arr`:
    *   For each element `num`, find the leftmost pile in `piles` where the top card is greater than or equal to `num` using binary search.
    *   If such a pile is found, place `num` on top of that pile.
    *   Otherwise, create a new pile with `num` as the top card and add it to the end of `piles`.
4. The number of piles is the length of the longest increasing subsequence.
5. (Optional) To reconstruct the LIS, you can keep track of predecessors during the pile placement process or use a backtracking approach.
6. Return the number of piles (and optionally the reconstructed LIS).

### Approach 5: Using Segment Trees or Binary Indexed Trees (advanced)

These approaches use advanced data structures like segment trees or binary indexed trees to efficiently find the LIS. They are typically used when there are multiple queries for the LIS after modifying the array.

### Procedure

1. Build a segment tree or binary indexed tree that supports range maximum queries and point updates.
2. Initialize the tree with all values set to 0.
3. Iterate through the array `arr`:
    *   For each element `num`, query the tree for the maximum value in the range [0, `num`-1]. Let this maximum value be `max_len`.
    *   Update the value at index `num` in the tree to `max_len + 1`.
4. The maximum value in the tree after iterating through all elements is the length of the LIS.
5. (Optional) To reconstruct the LIS, you can store additional information in the tree nodes or use a backtracking approach.
