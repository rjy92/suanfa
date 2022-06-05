var rob = function (nums) {

};

/*
    偷盗的最多金额
    偷盗第一个房间: dp[0]
    偷盗第二个房间: dp[1]
    则偷盗第i的房间的最多金额是dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    
*/

var rob = function (nums) {
    let n = nums.length
    let dp = new Array(n)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for(let i=2;i<n;i++){
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[n-1]
};


var rob = function (nums) {
    let n = nums.length
    
    let pre = nums[0],current = Math.max(nums[0], nums[1])
    for (let i = 2; i < n; i++) {
        let next = Math.max(current, pre + nums[i])
        pre = current
        current = next
    }
    return current
};
