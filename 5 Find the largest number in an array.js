// Find the largest number in an array

// Solution 1: Using Math.max()
function findLargest1(arr) {
  return Math.max(...arr);
}

// Solution 2: Using a for loop
function findLargest2(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Solution 3: Using reduce
function findLargest3(arr) {
  return arr.reduce((largest, current) => {
    return current > largest ? current : largest;
  }, arr[0]);
}

// Solution 4: Using forEach
function findLargest4(arr) {
    let largest = arr[0];
    arr.forEach(num => {
        if (num > largest) {
            largest = num;
        }
    });
    return largest;
}

// Solution 5: Using a while loop
function findLargest5(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let largest = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        i++;
    }
    return largest;
}
