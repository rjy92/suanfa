var removeDuplicates = function(nums) {
    const n = nums.length
    if(n === 0) return
    let slow = 1,fast = 1
    while(fast<n){
        if(nums[fast] !== nums[fast-1]){
            nums[slow] = nums[fast]
            slow++
        }
        fast ++ 
    }
};