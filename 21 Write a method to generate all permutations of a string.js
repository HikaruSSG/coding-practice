// Write a method to generate all permutations of a string

// Solution 1: Using recursion
function generatePermutations1(str) {
  if (str.length <= 1) {
    return [str];
  }
  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = generatePermutations1(remainingChars);
    for (let subPermutation of subPermutations) {
      permutations.push(char + subPermutation);
    }
  }
  return permutations;
}

// Solution 2: Using a for loop and splice
function generatePermutations2(str) {
    if (str.length <= 1) {
        return [str];
    }
    const permutations = [];
    const chars = str.split('');
    const n = chars.length;
    const permute = (arr, l) => {
        if (l === n) {
            permutations.push(arr.join(''));
            return;
        }
        for (let i = l; i < n; i++) {
            [arr[l], arr[i]] = [arr[i], arr[l]];
            permute(arr, l + 1);
            [arr[l], arr[i]] = [arr[i], arr[l]];
        }
    };
    permute(chars, 0);
    return permutations;
}

// Solution 3: Using reduce
function generatePermutations3(str) {
    if (str.length <= 1) {
        return [str];
    }
    return str.split('').reduce((acc, char, i) => {
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const subPermutations = generatePermutations3(remainingChars);
        return acc.concat(subPermutations.map(subPermutation => char + subPermutation));
    }, []);
}

// Solution 4: Using a generator function
function* generatePermutations4(str) {
    if (str.length <= 1) {
        yield str;
        return;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        for (const subPermutation of generatePermutations4(remainingChars)) {
            yield char + subPermutation;
        }
    }
}

function getAllPermutations(str) {
    return Array.from(generatePermutations4(str));
}

// Solution 5: Using a while loop and array
function generatePermutations5(str) {
    if (str.length <= 1) {
        return [str];
    }
    const permutations = [];
    const chars = str.split('');
    const n = chars.length;
    const indices = Array(n).fill(0);
    let i = 0;
    while (i < n) {
        if (indices[i] < i) {
            if (i % 2 === 0) {
                [chars[0], chars[i]] = [chars[i], chars[0]];
            } else {
                [chars[indices[i]], chars[i]] = [chars[i], chars[indices[i]]];
            }
            permutations.push(chars.join(''));
            indices[i]++;
            i = 0;
        } else {
            indices[i] = 0;
            i++;
        }
    }
    return permutations;
}
