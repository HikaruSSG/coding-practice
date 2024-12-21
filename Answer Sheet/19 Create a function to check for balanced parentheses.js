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
function isBalanced4(str) {
    let len;
    do {
        len = str.length;
        str = str.replace('()', '').replace('[]', '').replace('{}', '');
    } while (len !== str.length);
    return str.length === 0;
}
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
export { isBalanced1, isBalanced2, isBalanced3, isBalanced4, isBalanced5 };
