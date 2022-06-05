var deleteAndEarn = function (nums) {
    let maxVal = 0;
    for(const val of nums){
        maxVal = Math.max(maxVal,val)
    }

    const sum = new Array(maxVal + 1).fill(0);
    for (const val of nums) {
        sum[val] += val;
    }
    // 则sum 为sun[1],sum[2],sum[3]
    console.log(sum)

    return rob(sum);
};

const rob = (nums) => {
    let size = nums.length
    let first = nums[0],second = Math.max(nums[1],nums[0])
    console.log(size,first,second)
    for (let i = 2; i <size;i++) {
        let temp = second
        second = Math.max(first+nums[i],second)
        first = temp

        console.log(temp, second, first, i, nums[i])
    }
    
    return second
}

console.log(deleteAndEarn([3, 4, 2]))
/**
 * 在选择了x后， 该元素以及所有等于x - 1 或x + 1 的元素会从数组中删除， 若还有多个值为x 的元素， 
 * 由于所有等于x− 1 或 x + 1 的元素已经被删除， 
 * 我们可以直接删除 x 并获得其点数。 因此若选择了 x， 所有等于 x 的元素也应一同被选择， 以尽可能多地获得点数。
 * 
 */