// var sortColors = function(nums) {
//     if(nums.length == 0){
//         return nums
//     }
//     if(nums.length == 1) {
//         return nums
//     }

//     var targetNum = nums[0];
//     var leftArr = [];
//     var rightArr = [];
//     for (var i = 1; i < nums.length; i ++) {
//         const num = nums[i]
//         if(num<targetNum){
//             leftArr.push(num)
//         }else{
//             rightArr.push(num)
//         }
//     }
//     var newArr = sortColors(leftArr).concat(targetNum, sortColors(rightArr));
//     return newArr;
// };
// var sortColors = function(nums){
//     let p = 0
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] == 0){
//             swap(nums,i,p)
//             p++
//         } 
//     }
//     for(let i=p;i<nums.length;i++){
//         if(nums[i] == 1){
//             swap(nums,i,p)
//             p++
//         } 
//     }
//     return nums
// }

// function swap(nums,a,b){
//     let temp = nums[a]
//     nums[a] = nums[b]
//     nums[b] = temp
// }
var sortColors = function(nums){
    let p0 = 0
    let p1 = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 1){
            swap(nums,p1,i)
            p1++
        }
        if(nums[i] == 0){
            swap(nums,p0,i)
            if (p0 < p1) {
                swap(nums,i,p1)
            }
            p0++
            p1++
        }

    }
    return nums
}
function swap(nums,a,b){
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
}

nums = [2,0,2,1,1,0]
console.log(sortColors(nums))