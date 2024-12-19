# 8 Implement a basic calculator Tutorial

## Prerequisites

*   Understanding of basic arithmetic operations (+, -, *, /).
*   Basic knowledge of conditional statements (if-else, switch).
*   Familiarity with function definitions and calls.
*   Understanding of object literals (for object-based approach).
*   Knowledge of closures (for function-returning-function approach).

## Approach

### Approach 1: Using if-else statements

The general approach to implementing a calculator using if-else statements involves checking the operator and performing the corresponding operation.

#### Procedure

1.  Define a function that takes two numbers and an operator as input.
2.  Use a series of if-else statements to check the operator.
3.  If the operator is '+', return the sum of the two numbers.
4.  If the operator is '-', return the difference of the two numbers.
5.  If the operator is '*', return the product of the two numbers.
6.  If the operator is '/', check if the second number is zero. If it is, return an error message. Otherwise, return the quotient of the two numbers.
7.  If the operator is not one of the above, return an 'Invalid operator' message.

### Approach 2: Using switch statement

This approach uses a switch statement to check the operator and perform the corresponding operation.

#### Procedure

1.  Define a function that takes two numbers and an operator as input.
2.  Use a switch statement to check the operator.
3.  For each case ('+', '-', '*', '/'), perform the corresponding operation and return the result.
4.  For the '/' case, check if the second number is zero. If it is, return an error message.
5.  If the operator is not one of the above, return an 'Invalid operator' message.

### Approach 3: Using an object literal for operations

This approach uses an object literal to store the operations as key-value pairs, where the key is the operator and the value is a function that performs the operation.

#### Procedure

1.  Define an object literal where the keys are the operators ('+', '-', '*', '/') and the values are functions that perform the corresponding operations.
2.  Define a function that takes two numbers and an operator as input.
3.  Check if the operator exists as a key in the object literal.
4.  If it does, call the corresponding function with the two numbers and return the result.
5.  If the operator is not found, return an 'Invalid operator' message.

### Approach 4: Using eval (not recommended for production)

This approach uses the `eval()` function to evaluate the expression.

#### Procedure

1.  Define a function that takes two numbers and an operator as input.
2.  Use the `eval()` function to evaluate the expression formed by concatenating the two numbers and the operator.
3.  Return the result of the evaluation.
4.  Use a try-catch block to handle any errors that may occur during evaluation.

### Approach 5: Using a function that returns a function

This approach uses a function that returns a function to perform the calculation.

#### Procedure

1.  Define a function `createCalculator` that takes an operator as input and returns a new function.
2.  The returned function takes two numbers as input.
3.  Inside the returned function, use if-else statements to check the operator and perform the corresponding operation.
4.  Define a function `calculate5` that takes two numbers and an operator as input.
5.  Call `createCalculator` with the operator to get the calculator function.
6.  Call the calculator function with the two numbers and return the result.
