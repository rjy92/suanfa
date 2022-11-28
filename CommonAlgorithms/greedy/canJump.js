var canJump = function (nums) {
    const n = nums.length
    if (n === 1) return true
    let ret = 0
    for (let i = 0; i < n; i++) {
        if (ret < i) return false
        if (ret >= n - 1) return true
        ret = Math.max(i + nums[i], ret)
    }
};