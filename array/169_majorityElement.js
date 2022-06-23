// var majorityElement = function(nums) {
//     if(!nums || nums.length === 0 ) return []
//     if(nums.length == 1) return nums[0]
//     const length = nums.length
//     const map = new Map();

//     for(let i = 0;i<length;i++){
//         const num = nums[i]
//         if(!map.get(num)){
//             map.set(num,1)
//         }else{
//             map.set(num,map.get(num)+1)
//             if(map.get(num) > nums.length / 2){
//                 return num;
//             }
//         }
//     }
// };

// const majorityElement = nums => {
//     let count = 1;
//     let majority = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (count === 0) {
//             majority = nums[i];
//         }
//         if (nums[i] === majority) {
//             count++;
//         } else {
//             count--;
//         }
//     }
//     return majority;
// };

const majorityElement = nums=>{
    nums.sort((a,b)=> a-b)
    return nums[Math.floor(nums.length/2)]
}

const nums = [3,2,2,1,2]
console.log(majorityElement(nums))