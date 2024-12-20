// Create a function to check if a number is prime

// Solution 1: Using a for loop
function isPrime1(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// Pros: Simple and easy to understand.
// Cons: Can be less efficient for large numbers.

// Solution 2: Using a while loop
function isPrime2(num) {
    if (num <= 1) return false;
    let i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}
// Pros: Similar to the for loop approach.
// Cons: Can be less efficient for large numbers.

// Solution 3: Using recursion
function isPrime3(num, divisor = 2) {
    if (num <= 1) return false;
    if (divisor > Math.sqrt(num)) return true;
    if (num % divisor === 0) return false;
    return isPrime3(num, divisor + 1);
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large numbers.

// Solution 4: Optimized for loop
function isPrime4(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
// Pros: More efficient than the basic for loop, optimized for performance.
// Cons: Slightly more complex to understand.
// Recommended: This is generally the recommended approach due to its efficiency.

// Solution 5: Using Array.every
function isPrime5(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    return Array.from({ length: Math.floor(Math.sqrt(num)) - 1 }, (_, i) => i + 2).every(divisor => {
        return num % divisor !== 0;
    });
}
// Pros: Functional approach, concise and readable.
// Cons: Less performant than the optimized for loop, more complex to understand.
