// 暴力接发
var maxProfit1 = function (prices) {
    const n = prices.length;
    let result = 0;
    for (let i = 0; i < n; i++) {
        for(let j=i+1;j<n;j++){
            result = Math.max(result,prices[j]-prices[i])
        }
    }
    return result
};

var maxProfit = function (prices) {
    const n = prices.length;
    if(1==n) return 0
    let dp = new Array(n)
    dp[0] =[]
    dp[0][1] = 0
    dp[0][0] = -prices[0]

    for(let i=1;i<n;i++){
        dp[i]=[]
        dp[i][0] = Math.max(-prices[i], dp[i - 1][0])
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
        
    }
    console.log(dp)
    return dp[n-1][1]   

};

var maxProfit2 = function (prices) {
    const n = prices.length;
    if (1 == n) return 0
    let profit=0
    let min = prices[0]
    for(let i=1;i<n;i++){
        min = Math.min(min,prices[i])
        profit = Math.max(profit,prices[i] - min)
    }
    return profit

};



var maxProfit = function (prices) {
    const n = prices.length;
    if (1 == n) return 0
    let dp = new Array(n)
    dp[0] = []
    dp[0][1] = 0
    dp[0][0] = -prices[0]

    for (let i = 1; i < n; i++) {
        dp[i] = []
        dp[i][0] = Math.max(-prices[i], dp[i - 1][0])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])

    }
    console.log(dp)
    return dp[n - 1][1]

};

var maxProfit3 = function (prices) {
    const n = prices.length;
    if (1 == n) return 0
    let noOwn = 0,own = -prices[0],preOwn = own, preNoOwn = noOwn;
    for (let i = 1; i < n; i++) {
        own = Math.max(-prices[i], preOwn)
        noOwn = Math.max(preNoOwn, preOwn + prices[i])
        preOwn = own, preNoOwn = noOwn;
    }
    return noOwn

};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit3([7, 1, 5, 3, 6, 4]))

// 当天股票的收益为dp[n]
/**
 * 当天持有股票
 * 前一天未持有股票，当天买入
 * 前一天持有股票，一直持有
 * dp[n][1] = dp[n - 1][0] - prices[i], dp[n - 1][1]
 * 
 * dp[n][0] = dp[n-1][0],dp[n-1][1]+prices[i]
 * 
 * Math.max(dp[n][1], dp[n][0])
 */
