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
export { generatePascalsTriangle1, generatePascalsTriangle2, generatePascalsTriangle3, generatePascalsTriangle4, generatePascalsTriangle5 };
