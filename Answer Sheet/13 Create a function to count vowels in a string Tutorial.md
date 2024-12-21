# 13 Create a function to count vowels in a string Tutorial

## Prerequisites

*   Understanding of string data structures.
*   Basic knowledge of loops (e.g., for loop).
*   Familiarity with string methods (e.g., `toLowerCase()`).

## Approach

### Approach 1: Using a loop and conditional checks

This approach involves iterating through the string and checking if each character is a vowel.

### Procedure

1. Define a function that takes a string as input.
2. Initialize a variable `vowelCount` to 0.
3. Convert the string to lowercase using `toLowerCase()`.
4. Start a loop that iterates through each character of the string.
5. In each iteration, check if the current character is one of the vowels ('a', 'e', 'i', 'o', 'u').
6. If the character is a vowel, increment `vowelCount`.
7. After the loop finishes, return `vowelCount`.

### Approach 2: Using a regular expression

This approach uses a regular expression to match all vowels in the string.

### Procedure

1. Define a function that takes a string as input.
2. Create a regular expression that matches all vowels (e.g., `/[aeiou]/gi`).
3. Use a string method (e.g., `match()` in JavaScript) to find all matches of the regular expression in the string.
4. If matches are found, return the number of matches (which represents the number of vowels); otherwise, return 0.

### Approach 3: Using a set of vowels

This approach uses a set to efficiently check if a character is a vowel.

### Procedure

1. Define a function that takes a string as input.
2. Create a set containing all vowels (both lowercase and uppercase).
3. Initialize a variable `vowelCount` to 0.
4. Start a loop that iterates through each character of the string.
5. In each iteration, check if the current character is present in the vowel set.
6. If the character is in the set, increment `vowelCount`.
7. After the loop finishes, return `vowelCount`.

### Approach 4: Using filter and includes

This approach uses the `filter` method (or equivalent) along with `includes` to count vowels.

### Procedure

1. Define a function that takes a string as input.
2. Create an array of vowels (e.g., `['a', 'e', 'i', 'o', 'u']`).
3. Convert the string to lowercase.
4. Use the `filter` method (or equivalent) on the string (after converting it to an array of characters if necessary).
5. In the filter callback, check if the current character is included in the vowel array using `includes`.
6. The `filter` method will return an array containing only the vowels.
7. Return the length of the filtered array.

### Approach 5: Using reduce

This approach uses the `reduce` method (or equivalent) to accumulate the vowel count.

### Procedure

1. Define a function that takes a string as input.
2. Create an array of vowels (e.g., `['a', 'e', 'i', 'o', 'u']`).
3. Convert the string to lowercase.
4. Use the `reduce` method (or equivalent) on the string (after converting it to an array of characters if necessary).
5. In the reduce callback, check if the current character is included in the vowel array.
6. If it is, increment the accumulator; otherwise, keep the accumulator the same.
7. Provide 0 as the initial value for the accumulator.
8. Return the final value of the accumulator.
