function sumArray1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function sumArray2(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}
function sumArray3(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}
function sumArray4(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
function sumArray5(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray5(arr.slice(1));
}
export { sumArray1, sumArray2, sumArray3, sumArray4, sumArray5 };
