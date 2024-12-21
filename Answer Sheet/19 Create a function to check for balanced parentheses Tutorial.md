# 19 Create a function to check for balanced parentheses Tutorial

## Prerequisites

*   Understanding of string data structures.
*   Basic knowledge of stack data structure.
*   Familiarity with loops and conditional statements.

## Approach

### Approach 1: Using a stack

This approach uses a stack to keep track of opening parentheses and checks if they are properly closed in the correct order.

### Procedure

1. Define a function that takes a string as input.
2. Initialize an empty stack.
3. Iterate through each character in the string:
    *   If the character is an opening parenthesis ('(', '[', or '{'), push it onto the stack.
    *   If the character is a closing parenthesis (')', ']', or '}'):
        *   If the stack is empty, return `false` (unbalanced).
        *   Pop the top element from the stack.
        *   If the popped element does not match the corresponding opening parenthesis for the current closing parenthesis, return `false` (unbalanced).
4. After iterating through the entire string, if the stack is empty, return `true` (balanced); otherwise, return `false` (unbalanced).

### Approach 2: Using a counter (for single type of parenthesis)

This approach is optimized for cases where there is only one type of parenthesis to check (e.g., '(' and ')'). It uses a counter to track the balance.

### Procedure

1. Define a function that takes a string as input.
2. Initialize a counter to 0.
3. Iterate through each character in the string:
    *   If the character is an opening parenthesis ('('), increment the counter.
    *   If the character is a closing parenthesis (')'):
        *   If the counter is 0, return `false` (unbalanced).
        *   Decrement the counter.
4. After iterating through the entire string, if the counter is 0, return `true` (balanced); otherwise, return `false` (unbalanced).

### Approach 3: Using recursion

This approach uses recursion to check for balanced parentheses.

### Procedure

1. Define a recursive function that takes a string as input.
2. Base cases:
    *   If the string is empty, return `true` (balanced).
    *   If the string has an odd number of characters, return `false` (unbalanced).
3. Find the first closing parenthesis.
4. If there is no closing parenthesis or if the closing parenthesis is at the beginning, return `false`.
5. Find the matching opening parenthesis for the first closing parenthesis.
6. If there is no matching opening parenthesis, return `false`.
7. Recursively call the function with the substring before the opening parenthesis and the substring after the closing parenthesis.
8. Return the result of the recursive calls.

### Approach 4: Using regular expressions (for simple cases)

This approach uses regular expressions to remove balanced pairs of parentheses iteratively until the string is empty or no more balanced pairs can be found.

### Procedure

1. Define a function that takes a string as input.
2. While the string contains any of "()", "[]", or "{}":
    *   Replace all occurrences of "()", "[]", and "{}" with empty strings.
3. If the string is empty, return `true` (balanced); otherwise, return `false` (unbalanced).

### Approach 5: Using two pointers

This approach uses two pointers to traverse the string, one from the beginning and one from the end, checking for matching pairs.

### Procedure

1. Define a function that takes a string as input.
2. Initialize `left` to 0 and `right` to the last index of the string.
3. While `left` is less than `right`:
    *   Move `left` forward until it points to an opening parenthesis.
    *   Move `right` backward until it points to a closing parenthesis.
    *   If `left` is greater than or equal to `right`, break the loop.
    *   If the parentheses at `left` and `right` do not match, return `false`.
    *   Increment `left` and decrement `right`.
4. If all pairs matched, return `true`; otherwise, return `false`.
