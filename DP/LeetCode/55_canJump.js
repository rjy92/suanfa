var canJump = function (nums) {
    let n = nums.length
    if(n==1) return true
    let cover = 0
    for(let i=0;i<=cover;i++){
        cover = Math.max(cover,i+nums[i])
        if(cover>=n-1{
            return true
        }
    }
    return false
};

// 元素和是否>= 数组长度
