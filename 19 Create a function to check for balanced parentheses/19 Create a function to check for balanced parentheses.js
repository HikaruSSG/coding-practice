// Create a function to check for balanced parentheses

// Solution 1: Using a stack
function isBalanced1(str) {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
// Pros: Efficient and easy to understand, uses a stack to keep track of opening parentheses.
// Cons: None.
// Recommended: This is generally the recommended approach due to its efficiency and clarity.

// Solution 2: Using recursion
function isBalanced2(str) {
    if (str.length === 0) {
        return true;
    }
    const first = str[0];
    if (first === '(' || first === '[' || first === '{') {
        let count = 1;
        for (let i = 1; i < str.length; i++) {
            if (str[i] === first) {
                count++;
            } else if (
                (first === '(' && str[i] === ')') ||
                (first === '[' && str[i] === ']') ||
                (first === '{' && str[i] === '}')
            ) {
                count--;
            }
            if (count === 0) {
                return isBalanced2(str.slice(1, i)) && isBalanced2(str.slice(i + 1));
            }
        }
        return false;
    } else if (first === ')' || first === ']' || first === '}') {
        return false;
    } else {
        return isBalanced2(str.slice(1));
    }
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large strings.

// Solution 3: Using a counter
function isBalanced3(str) {
    let count = 0;
    for (let char of str) {
        if (char === '(') {
            count++;
        } else if (char === ')') {
            count--;
        }
        if (count < 0) {
            return false;
        }
    }
    return count === 0;
}
// Pros: Simple and easy to understand, only works for parentheses.
// Cons: Does not handle other types of brackets, less flexible.

// Solution 4: Using replace
function isBalanced4(str) {
    let len;
    do {
        len = str.length;
        str = str.replace('()', '').replace('[]', '').replace('{}', '');
    } while (len !== str.length);
    return str.length === 0;
}
// Pros: Concise and easy to understand.
// Cons: Less efficient, may not handle nested parentheses correctly.

// Solution 5: Using a while loop and stack
function isBalanced5(str) {
    const stack = [];
    let i = 0;
    while (i < str.length) {
        const char = str[i];
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (
                (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return false;
            }
        }
        i++;
    }
    return stack.length === 0;
}
// Pros: Similar to the stack approach, uses a while loop.
// Cons: Slightly more verbose than the stack approach.
