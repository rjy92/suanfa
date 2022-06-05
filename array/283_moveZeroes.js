// var moveZeroes = function(nums) {
//     let index = 0
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]==0){
//             nums.splice(i,1)
//             nums.push(0)
//             if(index+i == nums.length){
//                 break
//             }
//             i--
//             index++
//         }
//     }
//     return nums
// };
// var moveZeroes = function(nums){
//     if(!nums || nums.length == 0) return nums
//     let num = new Array(nums.length).fill(0)
//     let j = 0
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] != 0){
//             num[j] = nums[i]
//             j++
//         }
//     }
//     for(let i=0;i<num.length;i++){
//         nums[i] = num[i]
//     }
//     return nums
// }
// var moveZeroes = function(nums){
//     if(!nums || !nums.length == 1) return
//     let j = 0
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] != 0){
//             let temp = nums[i]
//             nums[i] = nums[j]
//             nums[j] = temp
//             j++
//         }
//     }

// }
var moveZeroes = function (nums){
    if(!nums || !nums.length == 1) return
    let fast  = 0;
    let slow = 0
    for(;fast<nums.length;fast++){
        if(nums[fast] != 0){
            if(slow != fast){ // 减少赋值次数
                nums[slow] = nums[fast]
            }
            slow++
        }
    }
    for(;slow<nums.length;slow++){
        nums[slow] = 0
    }
}
const nums = [0,1,0,3,12]
console.log(moveZeroes(nums))