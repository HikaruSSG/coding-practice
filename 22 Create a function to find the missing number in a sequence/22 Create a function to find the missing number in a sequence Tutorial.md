# 22 Create a function to find the missing number in a sequence Tutorial

## Prerequisites

*   Understanding of arithmetic sequences.
*   Basic knowledge of summation formulas.
*   Familiarity with loops or array operations.

## Approach

### Approach 1: Using the sum formula

This approach uses the formula for the sum of an arithmetic series to calculate the expected sum and compares it to the actual sum of the given sequence.

### Procedure

1. Define a function that takes an array `arr` representing the sequence as input.
2. Determine the length of the array `n`.
3. Calculate the expected sum of the complete sequence from 1 to `n+1` using the formula: `expectedSum = (n + 1) * (n + 2) / 2`.
4. Calculate the actual sum of the elements in the given array `arr`.
5. The difference between `expectedSum` and the actual sum is the missing number.

### Approach 2: Using XOR

This approach uses the XOR operation to find the missing number.

### Procedure

1. Define a function that takes an array `arr` representing the sequence as input.
2. Determine the length of the array `n`.
3. Initialize a variable `xor1` to 0.
4. Calculate the XOR of all numbers from 1 to `n+1` and store it in `xor1`.
5. Initialize a variable `xor2` to 0.
6. Calculate the XOR of all elements in the given array `arr` and store it in `xor2`.
7. The XOR of `xor1` and `xor2` gives the missing number.

### Approach 3: Using a set or hash table

This approach uses a set or hash table to keep track of the numbers present in the sequence.

### Procedure

1. Define a function that takes an array `arr` representing the sequence as input.
2. Determine the length of the array `n`.
3. Create an empty set or hash table.
4. Add all elements of the array `arr` to the set/hash table.
5. Iterate from 1 to `n+1`:
    *   If a number is not found in the set/hash table, it is the missing number.

### Approach 4: Using sorting

This approach involves sorting the array and then iterating through it to find the missing number.

### Procedure

1. Define a function that takes an array `arr` representing the sequence as input.
2. Determine the length of the array `n`.
3. Sort the array `arr` in ascending order.
4. If the first element of the sorted array is not 1, then 1 is the missing number.
5. Iterate through the sorted array from the second element:
    *   If the difference between the current element and the previous element is greater than 1, then the missing number is the previous element plus 1.
6. If the loop finishes without finding the missing number, then the missing number is `n+1`.

### Approach 5: Using binary search (if the array is sorted)

This approach uses binary search to find the missing number in a sorted array.

### Procedure

1. Define a function that takes a sorted array `arr` representing the sequence as input.
2. Determine the length of the array `n`.
3. Initialize `low` to 0 and `high` to `n - 1`.
4. While `low` is less than or equal to `high`:
    *   Calculate `mid` as the average of `low` and `high`.
    *   If `arr[mid]` is equal to `mid + 1`, it means the missing number is in the right half, so update `low` to `mid + 1`.
    *   Otherwise, the missing number is in the left half, so update `high` to `mid - 1`.
5. The missing number is `low + 1`.
