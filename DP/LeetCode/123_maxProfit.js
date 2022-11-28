


    
    // 则没天股票有5中国呢状态
    /**
当天股票未动
1。股票第一次买入,即当天买入，或者延用上一次买入状态
dp[i][1] = dp[i - 1][0] - prices[i], dp[i-1][1]
2 股票第一次卖出
 dp[i][2] = dp[i-1][1]+prices[i],dp[i-1][0]
3 股票第二次买入
dp[i][3] = dp[i-1][2]-prices[i],dp[i-1][3]
4 股票第二次卖出
dp[i][4] = dp[i-1][3]+prices[i],dp[i-1][4]

     */
// 方法：递归
    var maxProfit = function (prices) {
        const n= prices.length
        if(n==1 || n==0 ) return 0
        
        let dp = [];
        dp[0] = []
        dp[0][0] = 0
        dp[0][1] = -prices[0]
        dp[0][2] = 0
        dp[0][3] = -prices[0]
        dp[0][4] = 0;

        for(let i=1;i<n;i++){
            dp[i] = []
            dp[i][0] = dp[i-1][0]
            dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
            dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2])
            dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3])
            dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4])
        }

        console.log(dp)
        return dp[n-1][4]

    }


        var maxProfit1 = function (prices) {
            const n = prices.length
            if (n == 1 || n == 0) return 0

            let buy1 = -prices[0],buy2 = -prices[0],sel1= 0,sel2 =0

            for (let i = 1; i < n; i++) {
                buy1 = Math.max(-prices[i],buy1)
                sel1 = Math.max(buy1 +prices[i],sel1)
                buy2 = Math.max(sel1-prices[i],buy2)
                sel2 = Math.max(buy2+prices[i],sel2)
            }

            return sel2

        }

    console.log(maxProfit1([3, 2, 6, 5, 0, 3]))