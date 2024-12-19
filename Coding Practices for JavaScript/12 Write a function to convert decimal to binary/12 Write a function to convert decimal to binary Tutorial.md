# 12 Write a function to convert decimal to binary Tutorial

## Prerequisites

*   Understanding of decimal and binary number systems.
*   Basic knowledge of arithmetic operations (division, modulo).
*   Familiarity with string manipulation or array data structures.

## Approach

### Approach 1: Using repeated division by 2

This approach involves repeatedly dividing the decimal number by 2 and keeping track of the remainders.

### Procedure

1. Define a function that takes a decimal number as input.
2. Initialize an empty string or array to store the binary digits.
3. While the decimal number is greater than 0:
    *   Divide the decimal number by 2.
    *   Get the remainder (0 or 1).
    *   Prepend the remainder to the binary string or array.
    *   Update the decimal number with the quotient.
4. If the binary string/array is empty, it means the original number was 0, so return "0".
5. Return the binary string or array (which represents the binary equivalent of the decimal number).

### Approach 2: Using bitwise operations

This approach uses bitwise operations to extract the binary digits.

### Procedure

1. Define a function that takes a decimal number as input.
2. Initialize an empty string or array to store the binary digits.
3. Determine the number of bits needed to represent the decimal number (e.g., using logarithm base 2).
4. Iterate from the most significant bit to the least significant bit:
    *   Use a bitwise AND operation between the decimal number and 2 raised to the power of the current bit position.
    *   If the result is non-zero, append "1" to the binary string/array; otherwise, append "0".
5. Return the binary string or array.

### Approach 3: Using built-in functions (if available)

Some programming languages provide built-in functions for converting decimal to binary. This approach utilizes those functions directly.

### Procedure

1. Use the built-in function provided by the programming language to convert the decimal number to its binary representation.
2. Return the result.

### Approach 4: Using recursion

This approach uses a recursive function to build the binary string.

### Procedure

1. Define a recursive function that takes a decimal number as input.
2. Base case: If the decimal number is 0, return "0".
3. Recursive step:
    *   Recursively call the function with the decimal number divided by 2.
    *   Concatenate the remainder of the decimal number divided by 2 to the result of the recursive call.
4. Return the final binary string.

### Approach 5: Using stack

This approach uses a stack to store the remainders in the correct order.

### Procedure

1. Define a function that takes a decimal number as input.
2. Initialize an empty stack.
3. While the decimal number is greater than 0:
    *   Divide the decimal number by 2.
    *   Push the remainder onto the stack.
    *   Update the decimal number with the quotient.
4. Initialize an empty string.
5. While the stack is not empty:
    *   Pop the top element from the stack and append it to the string.
6. If the string is empty, return "0".
7. Return the string.
