// var sortedSquares = function(nums) {
//     nums.sort((a,b)=>{
//         return Math.abs(a) - Math.abs(b)
//     })
//     console.log('come in nums',nums)
//     let ret = []
//     for(let i= 0; i<nums.length;i++){
//         ret.push(nums[i]* nums[i])
//     }
//     return ret 
// };


var sortedSquares = function (nums) {
    const n = nums.length
    let slow = 0, fast = n - 1, ret = [],index = n-1
    while (slow <= fast) {
        if (Math.abs(nums[fast]) >= Math.abs(nums[slow])){
            ret[index] = nums[fast] * nums[fast]
            fast--
        }else{
            ret[index] = nums[slow] * nums[slow]
            slow ++
        }
        index--
    } 
    return ret
};
const nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums))