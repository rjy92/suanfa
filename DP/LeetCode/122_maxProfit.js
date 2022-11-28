    var maxProfit = function (prices) {
        const n = prices.length
        if(n==1) return 0
        let dp = [];
        dp[0] =[];
        dp[0][0] = 0;
        dp[0][1] = -prices[0]
        for(let i=1;i<n;i++){
            dp[i]=[]
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        }
        return dp[n-1][0]
    };

    var maxProfit1 = function (prices) {
        const n = prices.length
        if (n == 1) return 0
        let dp = [];
        dp[0] = [];
        dp[0][0] = 0;
        dp[0][1] = -prices[0]
        let own = -prices[0],noOwn = 0
        for (let i = 1; i < n; i++) {
            
            let curNoOwn = Math.max(noOwn, own + prices[i])
            let curOwn = Math.max(own, noOwn - prices[i])
            own = curOwn;
            noOwn = curNoOwn
        }
        return noOwn
    };

    var maxProfit2 = function (prices) {
        let ans = 0;
        let n = prices.length;
        for (let i = 1; i < n; ++i) {
            ans += Math.max(0, prices[i] - prices[i - 1]);
        }
        return ans;
    };


    console.log(maxProfit2([7, 1, 5, 3, 6, 4]))
    /**
     * dp[i][0] = Max(dp[i-1][0],dp[i-1][1]+prices[i])
     * dp[i][1] = Max(dp[i-1][1],dp[i-1][0]-prices[i])
     */