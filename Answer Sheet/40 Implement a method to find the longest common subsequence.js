function longestCommonSubsequence1(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  if (m === 0 || n === 0) {
    return "";
  }
  if (str1[m - 1] === str2[n - 1]) {
    return longestCommonSubsequence1(str1.slice(0, m - 1), str2.slice(0, n - 1)) + str1[m - 1];
  } else {
    const lcs1 = longestCommonSubsequence1(str1.slice(0, m - 1), str2);
    const lcs2 = longestCommonSubsequence1(str1, str2.slice(0, n - 1));
    return lcs1.length > lcs2.length ? lcs1 : lcs2;
  }
}
function longestCommonSubsequence2(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(""));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
            } else {
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
            }
        }
    }
    return dp[m][n];
}
function longestCommonSubsequence3(str1, str2) {
    const memo = {};
    const lcs = (i, j) => {
        if (i === 0 || j === 0) {
            return "";
        }
        if (memo[`${i},${j}`]) {
            return memo[`${i},${j}`];
        }
        if (str1[i - 1] === str2[j - 1]) {
            memo[`${i},${j}`] = lcs(i - 1, j - 1) + str1[i - 1];
        } else {
            const lcs1 = lcs(i - 1, j);
            const lcs2 = lcs(i, j - 1);
            memo[`${i},${j}`] = lcs1.length > lcs2.length ? lcs1 : lcs2;
        }
        return memo[`${i},${j}`];
    };
    return lcs(str1.length, str2.length);
}
function longestCommonSubsequence4(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    const memo = {};
    const lcs = (i, j) => {
        if (i === 0 || j === 0) {
            return "";
        }
        if (memo[`${i},${j}`]) {
            return memo[`${i},${j}`];
        }
        if (str1[i - 1] === str2[j - 1]) {
            memo[`${i},${j}`] = lcs(i - 1, j - 1) + str1[i - 1];
        } else {
            const lcs1 = lcs(i - 1, j);
            const lcs2 = lcs(i, j - 1);
            memo[`${i},${j}`] = lcs1.length > lcs2.length ? lcs1 : lcs2;
        }
        return memo[`${i},${j}`];
    };
    return lcs(m, n);
}
function longestCommonSubsequence5(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(""));
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = "";
            } else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
            } else {
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
            }
        }
    }
    return dp[m][n];
}
