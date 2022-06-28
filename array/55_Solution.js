var canJump = function(nums) {
    const n = nums.length
    if(n == 1) return true
    //记录所能到达的最大位置
    let rightMost = 0
    for(let i = 0; i<n; i++){
        //如果最大位置不能到达当前位置，则跳出
        if(rightMost < i) return false
        //如果最大位置超过最后一个位置，则返回true
        if(rightMost >= n-1) return true
        rightMost = rightMost >nums[i] + i ?rightMost:nums[i] + i
    }
};

