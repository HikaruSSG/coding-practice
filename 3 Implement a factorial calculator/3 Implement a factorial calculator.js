// Implement a basic calculator with +, -, *, / operations

// Solution 1: Using if-else statements
function calculate1(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    return num1 / num2;
  } else {
    return "Invalid operator";
  }
}
// Pros: Straightforward and easy to understand for simple cases.
// Cons: Can become verbose and harder to manage with more operations.

// Solution 2: Using a switch statement
function calculate2(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
// Pros: More structured than if-else for multiple cases.
// Cons: Still somewhat verbose, can be less flexible than other approaches.

// Solution 3: Using an object literal
function calculate3(num1, operator, num2) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => {
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;
        }
    };
    return operations[operator] ? operations[operator](num1, num2) : "Invalid operator";
}
// Pros: Concise, flexible, and easy to extend with new operations.
// Cons: Slightly less readable for those unfamiliar with object literals.
// Recommended: This is generally the recommended approach due to its flexibility and conciseness.

// Solution 4: Using eval (not recommended for production)
function calculate4(num1, operator, num2) {
    try {
        return eval(`${num1} ${operator} ${num2}`);
    } catch (e) {
        return "Invalid expression";
    }
}
// Pros: Very concise.
// Cons: Insecure, can execute arbitrary code, not recommended for production.

// Solution 5: Using a function map
function calculate5(num1, operator, num2) {
    const operationMap = new Map([
        ['+', (a, b) => a + b],
        ['-', (a, b) => a - b],
        ['*', (a, b) => a * b],
        ['/', (a, b) => {
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;
        }]
    ]);
    const operation = operationMap.get(operator);
    return operation ? operation(num1, num2) : "Invalid operator";
}
// Pros: Similar to object literal, but uses a Map.
// Cons: Slightly more verbose than object literal, not as common for this use case.

// Implement a factorial calculator

// Solution 1: Using a for loop
function factorial1(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// Pros: Good performance, explicit control over the iteration process.
// Cons: Slightly more verbose than the recursive approach.
// Recommended: This is generally the recommended approach due to its performance and clarity.

// Solution 2: Using recursion
function factorial2(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial2(n - 1);
  }
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large numbers.

// Solution 3: Using a while loop
function factorial3(n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}
// Pros: Good performance, similar to the for loop approach.
// Cons: Slightly more verbose than the recursive approach.

// Solution 4: Using reduce
function factorial4(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (n === 0) {
        return 1;
    }
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
}
// Pros: Functional approach, concise and readable.
// Cons: Less performant than iterative approaches, more complex to understand.

// Solution 5: Using a ternary operator with recursion
function factorial5(n) {
    return n === 0 ? 1 : n * factorial5(n - 1);
}
// Pros: Very concise recursive approach.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large numbers.
