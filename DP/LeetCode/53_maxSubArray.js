// var maxSubArray = function (nums) {
//     const  n = nums.length
//     if(n==1) return nums[0]
//     let dp = [nums[0]]
    
//     for(let i=1;i<n;i++){
//         dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
//     }
//     console.log(dp)
//     // return maxSum
// }


// dp[i] = Max(dp[i-1],dp[i-1]+nums[i])


var maxSubArray = function (nums) {
    let pre = 0,
    maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
        console.log(pre, maxAns)
    });
    return maxAns;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))