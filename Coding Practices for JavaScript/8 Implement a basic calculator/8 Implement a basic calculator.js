// Solution 1: Using if-else statements
function calculate1(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      return 'Cannot divide by zero';
    }
    return num1 / num2;
  } else {
    return 'Invalid operator';
  }
}
// Pros: Simple and easy to understand.
// Cons: Can become verbose and harder to manage with more operations, not easily extensible.
// Recommended: Use for simple calculators with a limited number of operations.

// Solution 2: Using switch statement
function calculate2(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Cannot divide by zero';
      }
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}
// Pros: More concise than if-else statements for multiple cases, easier to read and maintain than nested if-else statements.
// Cons: Can still become verbose with many cases, not as flexible as other approaches.
// Recommended: Use for calculators with a moderate number of operations.

// Solution 3: Using an object literal for operations
const operations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => {
    if (num2 === 0) {
      return 'Cannot divide by zero';
    }
    return num1 / num2;
  },
};

function calculate3(num1, num2, operator) {
  if (operations[operator]) {
    return operations[operator](num1, num2);
  }
  return 'Invalid operator';
}
// Pros: Very flexible and extensible, easy to add new operations, clean and maintainable code.
// Cons: Slightly more complex than if-else or switch statements.
// Recommended: Use for calculators with a large number of operations or when extensibility is important.

// Solution 4: Using eval (not recommended for production)
function calculate4(num1, num2, operator) {
  try {
    return eval(`${num1} ${operator} ${num2}`);
  } catch (error) {
    return 'Invalid operator or expression';
  }
}
// Pros: Very concise and simple.
// Cons: Security risk, not recommended for production use, can be difficult to debug.
// Recommended: Avoid using eval() in production code. Use only for quick prototyping or testing.

// Solution 5: Using a function that returns a function
function createCalculator(operator) {
    return function(num1, num2) {
        if (operator === '+') {
            return num1 + num2;
        } else if (operator === '-') {
            return num1 - num2;
        } else if (operator === '*') {
            return num1 * num2;
        } else if (operator === '/') {
            if (num2 === 0) {
                return 'Cannot divide by zero';
            }
            return num1 / num2;
        } else {
            return 'Invalid operator';
        }
    }
}

function calculate5(num1, num2, operator) {
    const calculator = createCalculator(operator);
    return calculator(num1, num2);
}
// Pros: Demonstrates the use of closures and higher-order functions, can be useful for creating more complex calculators.
// Cons: More complex than other solutions, may not be necessary for a simple calculator.
// Recommended: Use when you need to create a calculator with more complex behavior or when you want to demonstrate the use of closures.

const operator = ['+', '-', '*', '/'];
