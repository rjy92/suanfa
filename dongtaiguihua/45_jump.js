var jump = function (nums) {
    let curIndex = 0
    let nextIndex = 0
    let steps = 0
    for (let i = 0; i < nums.length - 1; i++) {
        
        nextIndex = Math.max(nums[i] + i, nextIndex)
        if (i === curIndex) {
            curIndex = nextIndex
            steps++
        }
    }

    return steps
};

console.log(jump([2, 2, 1, 1, 4,1,2,1]))