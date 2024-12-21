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
function calculate4(num1, num2, operator) {
  try {
    return eval(`${num1} ${operator} ${num2}`);
  } catch (error) {
    return 'Invalid operator or expression';
  }
}
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
const operator = ['+', '-', '*', '/'];
