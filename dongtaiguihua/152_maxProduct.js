var maxProduct = function (nums) {
    const n = nums.length
    if(n==1) return nums[0]
    let dp = [nums[0]]
    for(let i=1;i<n;i++){
        dp[i] = Math.max(dp[i-1]*nums[i],nums[i])
    }
    
    return Math.max(...dp)
};

var maxProduct1 = function (nums) {
    const n = nums.length
    if (n == 1) return nums[0]
    let pre = nums[0],maxAns=0
    for (let i = 1; i < n; i++) {
        pre = Math.max(pre*nums[i],nums[i])
        maxAns = Math.max(pre,maxAns)
    }
    return maxAns
};

var maxProduct2 = function (nums) {
    const n = nums.length
    if (n == 1) return nums[0]

    let preMin = nums[0],minAns=0
    let preMax = nums[0],maxAns = 0
    let res =nums[0]
    for (let i = 1; i < n; i++) {
        minAns = preMin * nums[i]
        maxAns = preMax * nums[i]
        
        preMin = Math.min(minAns, maxAns, nums[i])
        preMax = Math.max(minAns, maxAns, nums[i])

        
        res = Math.max(preMax, res)
    }
    return res
};

// 考虑到负负得正

console.log(maxProduct2([-1,2, -1, 1, 1]))
// 暴力解法，求每个连续子数组的乘积
/**
 * 若全部为正数，则
 * dp[i] = dp[i-1]*nums[i],nums[i]
 */