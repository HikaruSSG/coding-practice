# 25 Create a method to count word occurrences in a string Tutorial

## Prerequisites

*   Understanding of string data structures.
*   Familiarity with string methods (e.g., `split()`, `toLowerCase()`).
*   Knowledge of hash tables (dictionaries or maps).

## Approach

### Approach 1: Using a dictionary and split

This approach uses a dictionary to store word counts and the `split()` method to separate words.

### Procedure

1. Define a function that takes a string `str` as input.
2. Convert the string to lowercase using `toLowerCase()` (for case-insensitive counting).
3. Split the string into an array of words using `split()` (splitting by spaces or other delimiters).
4. Initialize an empty dictionary `wordCounts`.
5. Iterate through each word in the array:
    *   If the word is already a key in `wordCounts`, increment its value (count).
    *   Otherwise, add the word as a key to `wordCounts` with a value of 1.
6. Return the `wordCounts` dictionary.

### Approach 2: Using a regular expression to find words

This approach uses a regular expression to extract words, handling cases with punctuation or multiple spaces.

### Procedure

1. Define a function that takes a string `str` as input.
2. Convert the string to lowercase.
3. Use a regular expression (e.g., `/\b\w+\b/g`) to find all words in the string.
4. Initialize an empty dictionary `wordCounts`.
5. Iterate through the extracted words:
    *   If the word is already a key in `wordCounts`, increment its value.
    *   Otherwise, add the word as a key to `wordCounts` with a value of 1.
6. Return the `wordCounts` dictionary.

### Approach 3: Using collections.Counter (Python-specific)

This approach uses the `Counter` class from Python's `collections` module for efficient counting.

### Procedure

1. Define a function that takes a string `str` as input.
2. Convert the string to lowercase.
3. Split the string into an array of words using `split()`.
4. Use `collections.Counter(words)` to create a `Counter` object that stores word counts.
5. Return the `Counter` object (which is a dictionary subclass).

### Approach 4: Using reduce (functional approach)

This approach uses the `reduce` method (or equivalent) to accumulate word counts.

### Procedure

1. Define a function that takes a string `str` as input.
2. Convert the string to lowercase.
3. Split the string into an array of words using `split()`.
4. Use the `reduce` method on the array of words.
5. Provide a function that takes an accumulator (a dictionary of word counts) and the current word as input.
6. In the function, if the word is already a key in the accumulator, increment its value; otherwise, add the word as a key with a value of 1.
7. Return the updated accumulator.
8. Provide an empty dictionary as the initial value for the accumulator.
9. Return the final accumulator (the `wordCounts` dictionary).

### Approach 5: Using defaultdict (Python-specific)

This approach uses `defaultdict` from Python's `collections` module to simplify the counting process.

### Procedure

1. Define a function that takes a string `str` as input.
2. Convert the string to lowercase.
3. Split the string into an array of words using `split()`.
4. Create a `defaultdict` with `int` as the default factory (so new keys automatically get a default value of 0).
5. Iterate through each word in the array:
    *   Increment the value associated with the word in the `defaultdict` (it will automatically create the key with a value of 0 if it doesn't exist).
6. Return the `defaultdict` (which is a dictionary subclass).
