# 28 Create a method to find the first non-repeating character in a string Tutorial

## Prerequisites

*   Understanding of string data structures.
*   Familiarity with hash tables (dictionaries or maps) or arrays for counting.
*   Knowledge of loops and conditional statements.

## Approach

### Approach 1: Using a hash table to store character counts

This approach uses a hash table to store the count of each character in the string.

### Procedure

1. Define a function that takes a string `str` as input.
2. Create an empty hash table `charCounts` to store character counts.
3. Iterate through the string `str` character by character:
    *   If the character is already a key in `charCounts`, increment its value (count).
    *   Otherwise, add the character as a key to `charCounts` with a value of 1.
4. Iterate through the string `str` again:
    *   If the count of the current character in `charCounts` is 1, return the character (it is the first non-repeating character).
5. If the loop finishes without finding a non-repeating character, return a special value (e.g., `null`, `undefined`, or an empty string) to indicate that no such character exists.

### Approach 2: Using an array to store character counts (if the character set is limited)

This approach is similar to Approach 1 but uses an array instead of a hash table, which can be more efficient if the character set is limited (e.g., ASCII).

### Procedure

1. Define a function that takes a string `str` as input.
2. Create an array `charCounts` of size N (where N is the size of the character set) and initialize all elements to 0.
3. Iterate through the string `str` character by character:
    *   Get the ASCII (or other character code) value of the current character.
    *   Increment the value in `charCounts` at the index corresponding to the character's ASCII value.
4. Iterate through the string `str` again:
    *   If the count of the current character in `charCounts` (accessed using its ASCII value as the index) is 1, return the character.
5. If no non-repeating character is found, return a special value.

### Approach 3: Using two pointers

This approach uses two pointers to find the first non-repeating character without using extra space for a hash table or a large array. However, it has a higher time complexity.

### Procedure

1. Define a function that takes a string `str` as input.
2. Iterate through the string `str` using a loop with index `i` (outer loop):
    *   Initialize a boolean variable `isRepeating` to `false`.
    *   Iterate through the string `str` again using a nested loop with index `j` (inner loop):
        *   If `i` and `j` are not equal and the characters at indices `i` and `j` are the same, set `isRepeating` to `true` and break the inner loop.
    *   If `isRepeating` is `false` after the inner loop finishes, it means the character at index `i` is non-repeating, so return it.
3. If no non-repeating character is found, return a special value.

### Approach 4: Using a linked hash map (to preserve order)

This approach is similar to Approach 1 but uses a linked hash map (if available in your programming language) to preserve the order of characters as they appear in the string.

### Procedure

1. Define a function that takes a string `str` as input.
2. Create an empty linked hash map `charCounts`.
3. Iterate through the string `str` character by character:
    *   If the character is already a key in `charCounts`, increment its value (count).
    *   Otherwise, add the character as a key to `charCounts` with a value of 1.
4. Iterate through the keys of the `charCounts` (which are in the order they were inserted):
    *   If the count of the current character in `charCounts` is 1, return the character.
5. If no non-repeating character is found, return a special value.

### Approach 5: Using string methods (less efficient)

This approach uses string methods like `indexOf` and `lastIndexOf` to check if a character appears only once.

### Procedure

1. Define a function that takes a string `str` as input.
2. Iterate through the string `str` character by character:
    *   If `str.indexOf(char)` is equal to `str.lastIndexOf(char)`, it means the character appears only once, so return it.
3. If no non-repeating character is found, return a special value.
