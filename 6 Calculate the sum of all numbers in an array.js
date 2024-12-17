// Calculate the sum of all numbers in an array

// Solution 1: Using a for loop
function sumArray1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Solution 2: Using reduce
function sumArray2(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

// Solution 3: Using forEach
function sumArray3(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

// Solution 4: Using a while loop
function sumArray4(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

// Solution 5: Using recursion
function sumArray5(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray5(arr.slice(1));
}
