var longestCommonSubsequence = function (text1, text2) {
    let m = text1.length, n = text2.length
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    // return dp[m][n]

    // 从后向前遍历，找到最终的子序列
    let res = []
    for (let i = m, j = n; i >= 1 && j >= 1 && dp[i][j] >= 1;) {
        if (text1[i - 1] == text2[j - 1]) {
            res.push(text1[i - 1])
            i--;
            j--;
        } else if (i == 1 || dp[i][j - 1] > dp[i - 1][j]) {
            j--
        } else {
            i--
        }
    }
    if (res.length == 0) return "-1";
    return res.reverse().join('');

}

let text1 = "abcde", text2 = "ace"
console.log(longestCommonSubsequence(text1, text2))