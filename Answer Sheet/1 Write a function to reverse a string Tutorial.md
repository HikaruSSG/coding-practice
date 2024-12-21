# 1 Write a function to reverse a string Tutorial

## Prerequisites

*   Understanding of string data structures.
*   Basic knowledge of loops (e.g., for loop).
*   Familiarity with string manipulation concepts.
*   Understanding of recursion (for recursive approach).
*   Knowledge of array methods (for array-based approaches).

## Approach

### Approach 1: Using a loop

The general approach to reversing a string involves iterating through the string from the end to the beginning and building a new string with the characters in reversed order.

### Procedure

1. Initialize an empty string called `reversedString`.
2. Start a loop that iterates from the last character of the input string down to the first character.
3. In each iteration, append the current character to `reversedString`.
4. After the loop finishes, `reversedString` will contain the reversed version of the input string.

### Approach 2: Using array manipulation

This approach converts the string to an array, reverses the array, and then joins the array back into a string.

### Procedure

1. Convert the input string into an array of characters.
2. Reverse the array in-place.
3. Join the elements of the reversed array back into a single string.
4. The resulting string is the reversed version of the input string.

### Approach 3: Using recursion

This approach involves using a recursive function to build the reversed string.

### Procedure

1. Define a recursive function that takes the input string as an argument.
2. If the string is empty, return the empty string (base case).
3. Otherwise, return the recursive call on the substring excluding the first character, concatenated with the first character.
4. The final result will be the reversed string.

### Approach 4: Using two pointers

This approach uses two pointers, one at the beginning and one at the end of the string, and swaps characters while moving the pointers towards the center.

### Procedure

1. Convert the string to an array of characters.
2. Initialize a left pointer to 0 and a right pointer to the last index of the array.
3. While the left pointer is less than the right pointer:
    *   Swap the characters at the left and right pointers.
    *   Increment the left pointer.
    *   Decrement the right pointer.
4. Convert the array back to a string.

### Approach 5: Using built-in functions (if available)

Some programming languages provide built-in functions for string reversal. This approach utilizes those functions directly.

### Procedure

1. Use the built-in string reversal function provided by the programming language.
2. Return the reversed string.
