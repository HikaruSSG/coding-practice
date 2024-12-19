# 11 Implement a method to check if a string is an anagram Tutorial

## Prerequisites

*   Understanding of string data structures.
*   Familiarity with string manipulation concepts (e.g., converting to lowercase, removing non-alphanumeric characters).
*   Knowledge of sorting algorithms or hash tables/dictionaries.

## Approach

### Approach 1: Using sorting

This approach involves sorting the characters of both strings and comparing the sorted strings.

### Procedure

1. Define a function that takes two strings as input.
2. Preprocess both strings:
    *   Remove any non-alphanumeric characters.
    *   Convert both strings to lowercase.
3. Sort the characters of both strings.
4. Compare the sorted strings.
5. If the sorted strings are identical, the original strings are anagrams; otherwise, they are not.

### Approach 2: Using character count (hash table/dictionary)

This approach involves counting the occurrences of each character in both strings and comparing the counts.

### Procedure

1. Define a function that takes two strings as input.
2. Preprocess both strings as in Approach 1.
3. Create two hash tables (or dictionaries) to store the character counts for each string.
4. Iterate through the first string and update its character counts in the first hash table.
5. Iterate through the second string and update its character counts in the second hash table.
6. Compare the two hash tables.
7. If the hash tables are identical, the original strings are anagrams; otherwise, they are not.

### Approach 3: Using a single hash table

This approach is a variation of Approach 2 that uses a single hash table to track the difference in character counts between the two strings.

### Procedure

1. Define a function that takes two strings as input.
2. Preprocess both strings as in Approach 1.
3. Create a single hash table to store the character counts.
4. Iterate through the first string and increment the count for each character in the hash table.
5. Iterate through the second string and decrement the count for each character in the hash table.
6. Iterate through the hash table's values.
7. If all values are 0, the strings are anagrams; otherwise, they are not.

### Approach 4: Using prime number multiplication

This approach assigns a unique prime number to each letter of the alphabet and calculates a product for each string based on its characters.

### Procedure

1. Define a function that takes two strings as input.
2. Preprocess both strings as in Approach 1.
3. Assign a unique prime number to each letter of the alphabet (e.g., a=2, b=3, c=5, etc.).
4. Calculate a product for the first string by multiplying the prime numbers corresponding to its characters.
5. Calculate a product for the second string similarly.
6. If the products are equal, the strings are anagrams; otherwise, they are not.

### Approach 5: Using bit manipulation (for limited character sets)

If the strings are known to contain only characters from a limited set (e.g., lowercase English letters), bit manipulation can be used.

### Procedure

1. Define a function that takes two strings as input.
2. Preprocess both strings as in Approach 1.
3. Initialize a bitmask to 0.
4. Iterate through the first string:
    *   For each character, set the corresponding bit in the bitmask.
5. Iterate through the second string:
    *   For each character, clear the corresponding bit in the bitmask.
6. If the bitmask is 0 after processing both strings, they are anagrams; otherwise, they are not.
