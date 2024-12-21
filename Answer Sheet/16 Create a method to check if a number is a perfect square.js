function isPerfectSquare1(num) {
  if (num < 0) return false;
  const sqrt = Math.sqrt(num);
  return Number.isInteger(sqrt);
}
function isPerfectSquare2(num) {
    if (num < 0) return false;
    for (let i = 0; i <= num; i++) {
        if (i * i === num) {
            return true;
        }
        if (i * i > num) {
            return false;
        }
    }
    return false;
}
function isPerfectSquare3(num) {
    if (num < 0) return false;
    if (num === 0) return true;
    let left = 1;
    let right = num;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid === num) {
            return true;
        } else if (mid * mid < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}
function isPerfectSquare4(num) {
    if (num < 0) return false;
    let i = 0;
    while (i * i <= num) {
        if (i * i === num) {
            return true;
        }
        i++;
    }
    return false;
}
function isPerfectSquare5(num) {
    if (num < 0) return false;
    if (num === 0) return true;
    let x = num;
    let y = Math.floor(x / 2);
    while (y * y > x) {
        x = y;
        y = Math.floor(x / 2);
    }
    return y * y === num;
}
export { isPerfectSquare1, isPerfectSquare2, isPerfectSquare3, isPerfectSquare4, isPerfectSquare5 };
