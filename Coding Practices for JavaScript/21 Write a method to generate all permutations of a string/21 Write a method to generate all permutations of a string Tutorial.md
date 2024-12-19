# 21 Write a method to generate all permutations of a string Tutorial

## Prerequisites

*   Understanding of strings and recursion.
*   Knowledge of swapping characters in a string.
*   Familiarity with sets or lists to store results (optional).

## Approach

### Approach 1: Using recursion and backtracking

This approach uses recursion to generate permutations by swapping characters and backtracking to explore all possible arrangements.

### Procedure

1. Define a function `permute` that takes a string `str`, a starting index `l`, and an ending index `r` as input.
2. Base case: If `l` equals `r`, it means we have reached the end of the string, so print `str` (or add it to a result set/list).
3. Iterate from `i = l` to `r`:
    *   Swap the characters at indices `l` and `i` in `str`.
    *   Recursively call `permute` with `str`, `l + 1`, and `r`.
    *   Swap the characters at indices `l` and `i` back to their original positions (backtracking).
4. To generate all permutations, call `permute` with the original string, starting index 0, and ending index `str.length - 1`.

### Approach 2: Using a recursive helper function

This approach uses a recursive helper function to build permutations character by character.

### Procedure

1. Define a function `permutations` that takes a string `str` as input and returns a list/set of all permutations.
2. Define a helper function `permuteHelper` that takes two strings: `prefix` (the current permutation being built) and `remaining` (the remaining characters to be added).
3. Base case: If `remaining` is empty, add `prefix` to the result list/set.
4. Iterate through each character `c` in `remaining`:
    *   Create a new `newPrefix` by appending `c` to `prefix`.
    *   Create a new `newRemaining` by removing `c` from `remaining`.
    *   Recursively call `permuteHelper` with `newPrefix` and `newRemaining`.
5. In the `permutations` function, call `permuteHelper` with an empty string as the initial `prefix` and the input string `str` as `remaining`.
6. Return the result list/set.

### Approach 3: Using iteration and swapping (Heap's algorithm)

This approach uses an iterative algorithm based on swapping elements to generate permutations.

### Procedure

1. Define a function `permutations` that takes a string `str` as input.
2. Convert the string to an array of characters.
3. Implement Heap's algorithm:
    *   Create an array `c` of the same length as the string, initialized to 0s.
    *   Add the initial arrangement to the result list/set.
    *   Initialize `i` to 0.
    *   While `i` is less than the length of the string:
        *   If `c[i]` is less than `i`:
            *   If `i` is even, swap the first element with the element at index `i`.
            *   If `i` is odd, swap the element at index `c[i]` with the element at index `i`.
            *   Add the new arrangement to the result list/set.
            *   Increment `c[i]`.
            *   Reset `i` to 0.
        *   Else:
            *   Reset `c[i]` to 0.
            *   Increment `i`.
4. Return the result list/set.

### Approach 4: Using lexicographic ordering

This approach generates permutations in lexicographic (dictionary) order.

### Procedure

1. Define a function that takes a string as input.
2. Sort the string in ascending order.
3. Add the sorted string to the result list/set.
4. Implement the following steps repeatedly until the "last" permutation is reached:
    *   Find the largest index `i` such that `str[i] < str[i + 1]`. If no such index exists, the last permutation is reached.
    *   Find the largest index `j` such that `str[j] > str[i]`.
    *   Swap `str[i]` and `str[j]`.
    *   Reverse the substring from `str[i + 1]` to the end of the string.
    *   Add the new permutation to the result list/set.
5. Return the result list/set.

### Approach 5: Using a library function (if available)

Some programming languages provide built-in functions or libraries for generating permutations (e.g., `itertools.permutations` in Python). This approach utilizes those functions directly.

### Procedure

1. Use the built-in permutation function provided by the programming language or library.
2. Pass the input string to the function.
3. The function will return an iterator or a collection of all permutations.
4. Convert the result to a list or set if needed.
