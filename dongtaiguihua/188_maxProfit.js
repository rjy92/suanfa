var maxProfit = function (k, prices) {
    const n = prices.length
    if(n==0 || n== 1) return 0
    let dp = [];
    dp[0] =[];
    dp[0][0] = 0
    for(let i=1;i<=2*k;i++){
        if(!(i%2)){
            dp[0][i] = 0
        }else{
            dp[0][i] = -prices[0]
        }
        
    }
    for(let i=1;i<n;i++){
        dp[i] = [];
        dp[i][0] = 0
        for (let j = 0; j < 2 * k - 1; j += 2) {
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
            dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
        }
    }
    return dp[n-1][2*k]
};
console.log(maxProfit(2, [2, 4, 1]))

// 暴力解法
/**

for (int j = 0; j < 2 * k - 1; j += 2) {
    dp[i][j + 1] = max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
    dp[i][j + 2] = max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
}

for (int j = 1; j < 2 * k; j += 2) {
    dp[0][j] = -prices[0];
}

 */