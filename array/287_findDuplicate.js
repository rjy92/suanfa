// var findDuplicate = function(nums) {
//     const n = nums.length

//     if(n == 0 || n ==1) return
//     nums.sort((a,b)=>a-b)
//     for(let i = 0;i<n-1;i++){
//         if(nums[i] == nums[i+1]){
//             return nums[i]
//         }
//     }
// };
var findDuplicate = function(nums){
    const map = new Map();
    for(let i = 0;i<nums.length;i++){
        if(map.get(nums[i])){
            return nums[i]
        }
        map.set(nums[i],true)

    }
}

const nums = [1,3,4,2,2]
console.log(findDuplicate(nums))