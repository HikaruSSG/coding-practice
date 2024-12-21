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
function flatten2(arr) {
  return arr.reduce((flat, current) => {
    return flat.concat(Array.isArray(current) ? flatten2(current) : current);
  }, []);
}
function flatten3(arr) {
    return arr.flat(Infinity);
}
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
function flatten5(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr.splice(i, 1, ...arr[i]);
            i--;
        }
    }
    return arr;
}
export { flatten1, flatten2, flatten3, flatten4, flatten5 };
