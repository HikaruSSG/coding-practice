// Generate the Fibonacci sequence

// Solution 1: Using a for loop
function fibonacci1(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

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
