var minCostClimbingStairs = function (cost) {
    let n=cost.length
    const dp = new Array(n+1)
    dp[0]=dp[1]=0
    for(let i=2;i<=n;i++){
        dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }

    return dp[n]
};

/**
 * i 为 ccost 的长度
 * 最小话费，若数组为dp,因为可以从0 或者1 开始出发，故dp[0] = dp[1]=0
 * 当 2 <= i <= n 时， 可以从下标 i - 1, cost[i - 1] 的话费和cost[i - 2] 的话费的最小值， 则状态转移公示为
 * dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 1] + cost[i - 2])
 * 
 */



 var minCostClimbingStairs = function (cost) {
     let n = cost.length
     const dp = new Array(n + 1)
     let prev = 0, curr = 0;
     for (let i = 2; i <= n; i++) {
        let next = Math.min(curr + cost[i - 1],prev+cost[i-2])
        prev =curr
        curr =next
     }

     return next
 };