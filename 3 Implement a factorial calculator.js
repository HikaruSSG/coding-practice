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

// Solution 4: Using eval (not recommended for production)
function calculate4(num1, operator, num2) {
    try {
        return eval(`${num1} ${operator} ${num2}`);
    } catch (e) {
        return "Invalid expression";
    }
}

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

// Implement a factorial calculator

// Solution 1: Using a for loop
function factorial1(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Solution 2: Using recursion
function factorial2(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial2(n - 1);
  }
}

// Solution 3: Using a while loop
function factorial3(n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

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

// Solution 5: Using a ternary operator with recursion
function factorial5(n) {
    return n === 0 ? 1 : n * factorial5(n - 1);
}
