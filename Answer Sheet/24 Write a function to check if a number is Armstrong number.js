function isArmstrong1(num) {
  const strNum = String(num);
  const n = strNum.length;
  let sum = 0;
  for (let digit of strNum) {
    sum += Math.pow(parseInt(digit), n);
  }
  return sum === num;
}
function isArmstrong2(num) {
    let sum = 0;
    let temp = num;
    const n = String(num).length;
    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, n);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
function isArmstrong3(num) {
    const strNum = String(num);
    const n = strNum.length;
    const sum = strNum.split('').reduce((acc, digit) => {
        return acc + Math.pow(parseInt(digit), n);
    }, 0);
    return sum === num;
}
function isArmstrong4(num, n = String(num).length, sum = 0, temp = num) {
    if (temp === 0) {
        return sum === num;
    }
    const digit = temp % 10;
    return isArmstrong4(num, n, sum + Math.pow(digit, n), Math.floor(temp / 10));
}
function isArmstrong5(num) {
    const strNum = String(num);
    const n = strNum.length;
    let sum = 0;
    strNum.split('').forEach(digit => {
        sum += Math.pow(parseInt(digit), n);
    });
    return sum === num;
}
