function findMissingNumber1(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
function findMissingNumber2(arr) {
    let xorSum = 0;
    for (let i = 1; i <= arr.length + 1; i++) {
        xorSum ^= i;
    }
    for (let num of arr) {
        xorSum ^= num;
    }
    return xorSum;
}
function findMissingNumber3(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== i + 1) {
            return i + 1;
        }
    }
    return sortedArr.length + 1;
}
function findMissingNumber4(arr) {
    let i = 1;
    const sortedArr = arr.sort((a, b) => a - b);
    while (i <= sortedArr.length) {
        if (sortedArr[i - 1] !== i) {
            return i;
        }
        i++;
    }
    return i;
}
function findMissingNumber5(arr) {
    const numSet = new Set(arr);
    for (let i = 1; i <= arr.length + 1; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
}
