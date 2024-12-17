// Create a method to find the longest increasing subsequence

// Solution 1: Using recursion
function longestIncreasingSubsequence1(arr) {
    if (arr.length === 0) {
        return [];
    }
    const findLIS = (index, prev) => {
        if (index === arr.length) {
            return [];
        }
        let include = [];
        if (arr[index] > prev) {
            include = [arr[index], ...findLIS(index + 1, arr[index])];
        }
        const exclude = findLIS(index + 1, prev);
        return include.length > exclude.length ? include : exclude;
    };
    return findLIS(0, -Infinity);
}

// Solution 2: Using dynamic programming (tabulation)
function longestIncreasingSubsequence2(arr) {
    if (arr.length === 0) {
        return [];
    }
    const n = arr.length;
    const dp = Array(n).fill(null).map(() => []);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i].length < dp[j].length) {
                dp[i] = [...dp[j]];
            }
        }
        dp[i].push(arr[i]);
    }
    let longest = [];
    for (let sub of dp) {
        if (sub.length > longest.length) {
            longest = sub;
        }
    }
    return longest;
}

// Solution 3: Using dynamic programming (memoization)
function longestIncreasingSubsequence3(arr) {
    if (arr.length === 0) {
        return [];
    }
    const memo = {};
    const findLIS = (index, prev) => {
        if (index === arr.length) {
            return [];
        }
        if (memo[`${index},${prev}`]) {
            return memo[`${index},${prev}`];
        }
        let include = [];
        if (arr[index] > prev) {
            include = [arr[index], ...findLIS(index + 1, arr[index])];
        }
        const exclude = findLIS(index + 1, prev);
        memo[`${index},${prev}`] = include.length > exclude.length ? include : exclude;
        return memo[`${index},${prev}`];
    };
    return findLIS(0, -Infinity);
}

// Solution 4: Using a while loop and dynamic programming
function longestIncreasingSubsequence4(arr) {
    if (arr.length === 0) {
        return [];
    }
    const n = arr.length;
    const dp = Array(n).fill(null).map(() => []);
    let i = 0;
    while (i < n) {
        let j = 0;
        while (j < i) {
            if (arr[i] > arr[j] && dp[i].length < dp[j].length) {
                dp[i] = [...dp[j]];
            }
            j++;
        }
        dp[i].push(arr[i]);
        i++;
    }
    let longest = [];
    let k = 0;
    while (k < dp.length) {
        if (dp[k].length > longest.length) {
            longest = dp[k];
        }
        k++;
    }
    return longest;
}

// Solution 5: Using a for loop and binary search
function longestIncreasingSubsequence5(arr) {
    if (arr.length === 0) {
        return [];
    }
    const tails = [];
    for (let num of arr) {
        let i = 0;
        let j = tails.length;
        while (i < j) {
            const mid = Math.floor((i + j) / 2);
            if (tails[mid] < num) {
                i = mid + 1;
            } else {
                j = mid;
            }
        }
        tails[i] = num;
    }
    return tails;
}
