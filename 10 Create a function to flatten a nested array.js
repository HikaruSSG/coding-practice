// Create a function to flatten a nested array

// Solution 1: Using recursion
function flatten1(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened.push(...flatten1(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}

// Solution 2: Using reduce
function flatten2(arr) {
  return arr.reduce((flat, current) => {
    return flat.concat(Array.isArray(current) ? flatten2(current) : current);
  }, []);
}

// Solution 3: Using flat() method
function flatten3(arr) {
    return arr.flat(Infinity);
}

// Solution 4: Using a while loop and shift
function flatten4(arr) {
    const stack = [...arr];
    const flattened = [];
    while (stack.length) {
        const current = stack.shift();
        if (Array.isArray(current)) {
            stack.unshift(...current);
        } else {
            flattened.push(current);
        }
    }
    return flattened;
}

// Solution 5: Using a for loop and splice
function flatten5(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr.splice(i, 1, ...arr[i]);
            i--;
        }
    }
    return arr;
}
