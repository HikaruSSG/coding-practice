// Create a function to generate Pascal's triangle

// Solution 1: Using nested for loops
function generatePascalsTriangle1(numRows) {
  if (numRows <= 0) {
    return [];
  }
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(row);
  }
  return triangle;
}
// Pros: Efficient and easy to understand, uses nested for loops for iteration.
// Cons: None.
// Recommended: This is generally the recommended approach due to its efficiency and clarity.

// Solution 2: Using recursion
function generatePascalsTriangle2(numRows) {
    if (numRows <= 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    const prevTriangle = generatePascalsTriangle2(numRows - 1);
    const prevRow = prevTriangle[prevTriangle.length - 1];
    const newRow = [];
    for (let i = 0; i < numRows; i++) {
        if (i === 0 || i === numRows - 1) {
            newRow.push(1);
        } else {
            newRow.push(prevRow[i - 1] + prevRow[i]);
        }
    }
    prevTriangle.push(newRow);
    return prevTriangle;
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large numbers of rows.

// Solution 3: Using map and reduce
function generatePascalsTriangle3(numRows) {
    if (numRows <= 0) {
        return [];
    }
    const triangle = [];
    for (let i = 0; i < numRows; i++) {
        triangle.push(Array(i + 1).fill(0).map((_, j) => {
            if (j === 0 || j === i) {
                return 1;
            } else {
                return triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }));
    }
    return triangle;
}
// Pros: Functional approach, uses map method.
// Cons: Less efficient than the nested for loop approach, more complex to understand.

// Solution 4: Using a while loop
function generatePascalsTriangle4(numRows) {
    if (numRows <= 0) {
        return [];
    }
    const triangle = [];
    let i = 0;
    while (i < numRows) {
        const row = [];
        let j = 0;
        while (j <= i) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
            j++;
        }
        triangle.push(row);
        i++;
    }
    return triangle;
}
// Pros: Similar to the nested for loop approach, uses while loops.
// Cons: Slightly more verbose than the nested for loop approach.

// Solution 5: Using a for loop and array destructuring
function generatePascalsTriangle5(numRows) {
    if (numRows <= 0) {
        return [];
    }
    const triangle = [];
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                const [prevRow] = triangle.slice(-1);
                row.push(prevRow[j - 1] + prevRow[j]);
            }
        }
        triangle.push(row);
    }
    return triangle;
}
// Pros: Similar to the nested for loop approach, uses array destructuring.
// Cons: Slightly more verbose than the nested for loop approach.
