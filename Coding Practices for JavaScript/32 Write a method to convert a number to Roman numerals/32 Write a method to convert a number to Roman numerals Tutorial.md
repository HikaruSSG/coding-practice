# 32 Write a method to convert a number to Roman numerals Tutorial

## Prerequisites

*   Understanding of Roman numeral system and its rules.
*   Basic knowledge of string manipulation.
*   Familiarity with loops or recursion.

## Approach

### Approach 1: Using a lookup table and iterative subtraction

This approach uses a lookup table to store the Roman numeral representations of specific values and iteratively subtracts the largest possible value from the number.

### Procedure

1. Define a function that takes an integer `num` as input.
2. Create a lookup table (e.g., an array of objects or a map) that stores pairs of values and their corresponding Roman numeral representations. The values should be in descending order:
    ```
    [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ]
    ```
3. Initialize an empty string `result` to store the Roman numeral representation.
4. Iterate through the lookup table:
    *   For each entry, while `num` is greater than or equal to the entry's `value`:
        *   Append the entry's `numeral` to `result`.
        *   Subtract the entry's `value` from `num`.
5. Return `result`.

### Approach 2: Using arrays for each place value

This approach uses separate arrays for thousands, hundreds, tens, and ones place values to construct the Roman numeral.

### Procedure

1. Define a function that takes an integer `num` as input.
2. Create four arrays:
    *   `thousands`: `['', 'M', 'MM', 'MMM']`
    *   `hundreds`: `['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']`
    *   `tens`: `['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']`
    *   `ones`: `['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']`
3. Extract the digits for each place value from `num` using integer division and modulo operations:
    *   `thousandsDigit = Math.floor(num / 1000)`
    *   `hundredsDigit = Math.floor((num % 1000) / 100)`
    *   `tensDigit = Math.floor((num % 100) / 10)`
    *   `onesDigit = num % 10`
4. Concatenate the corresponding Roman numeral representations from the arrays:
    *   `result = thousands[thousandsDigit] + hundreds[hundredsDigit] + tens[tensDigit] + ones[onesDigit]`
5. Return `result`.

### Approach 3: Recursive approach

This approach uses recursion to build the Roman numeral representation.

### Procedure

1. Define a recursive function that takes an integer `num` as input.
2. Define a lookup table as in Approach 1.
3. Base case: If `num` is 0, return an empty string.
4. Find the first entry in the lookup table whose `value` is less than or equal to `num`.
5. Return the entry's `numeral` concatenated with the result of recursively calling the function with `num` minus the entry's `value`.

### Approach 4: Using a map and a greedy algorithm

This approach uses a map to store the Roman numeral representations and a greedy algorithm to select the largest possible value.

### Procedure

1. Define a function that takes an integer `num` as input.
2. Create a map that stores pairs of values and their corresponding Roman numeral representations, similar to the lookup table in Approach 1.
3. Initialize an empty string `result`.
4. Iterate through the map's keys in descending order:
    *   While `num` is greater than or equal to the current key (value):
        *   Append the corresponding Roman numeral (value from the map) to `result`.
        *   Subtract the current key (value) from `num`.
5. Return `result`.

### Approach 5: Using a switch statement (less scalable)

This approach uses a `switch` statement to handle different ranges of numbers. This is less scalable for larger numbers but can be used for a limited range.

### Procedure

1. Define a function that takes an integer `num` as input.
2. Use a `switch` statement with different cases for different ranges of numbers (e.g., 1-3, 4, 5-8, 9, 10-39, 40-49, etc.).
3. Within each case, construct the Roman numeral representation based on the specific rules for that range.
4. Concatenate the results from different cases as needed.
5. Return the final Roman numeral string.
