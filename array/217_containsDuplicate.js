// 强制循环
var containsDuplicate = function(nums) {
    if( nums.length == 0 || nums.length == 1) return false
    const obj = {}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            return true
        }
        obj[nums[i]] = true
    }
    return false

};
console.log(containsDuplicate(nums))