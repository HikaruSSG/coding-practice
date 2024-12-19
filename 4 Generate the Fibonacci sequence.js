// Generate the Fibonacci sequence

// Solution 1: Using a for loop
function fibonacci1(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}
// Pros: Clear and easy to understand, good performance.
// Cons: Slightly less concise than some other approaches.
// Recommended: This is generally the recommended approach due to its clarity and efficiency.

// Solution 2: Using a while loop
function fibonacci2(n) {
    const sequence = [];
    let a = 0, b = 1, count = 0;
    while (count < n) {
        sequence.push(a);
        const temp = a;
        a = b;
        b = temp + b;
        count++;
    }
    return sequence;
}
// Pros: Good performance, similar to the for loop approach.
// Cons: Slightly more verbose than the for loop approach.

// Solution 3: Using recursion
function fibonacci3(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const sequence = fibonacci3(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large numbers.

// Solution 4: Using generator function
function* fibonacci4() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

function getFibonacciSequence(n) {
    const generator = fibonacci4();
    const sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(generator.next().value);
    }
    return sequence;
}
// Pros: Memory efficient for very large sequences, can be used to generate infinite sequences.
// Cons: More complex to understand, requires additional code to use.

// Solution 5: Using array destructuring
function fibonacci5(n) {
    const sequence = [];
    let [a, b] = [0, 1];
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        [a, b] = [b, a + b];
    }
    return sequence;
}
// Pros: Concise and readable, uses array destructuring.
// Cons: Similar performance to the for loop approach.
