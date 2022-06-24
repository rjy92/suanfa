// var intersection = function(nums1, nums2) {
//     const myMap = new Map()
//     let ret = []
//     for(let i = 0;i<nums1.length;i++){
//         if(!myMap.get(nums1[i])){
//             myMap.set(nums1[i],true)
//         }
//     }
//     for(let i = 0;i<nums2.length;i++){
//         if(myMap.get(nums2[i])){
//             ret.push(nums2[i])
//             myMap.delete(nums2[i])
//         }
//     }
//     return ret
// }


var intersection = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    const length1 = nums1.length, length2 = nums2.length
    let index1 = 0, index2 = 0, pre
    const intersection = []
    while(index1 < length1 && index2 < length2){
        const num1 = nums1[index1]
        const num2 = nums2[index2]
        if(num1 == num2){
            if(pre != num2){
                intersection.push(num1)
                pre = num2
            }
            index1++
            index2++
        }else if(num1 > num2 ){
            index2 ++ 
        }else if(num1 < num2){
            index1++
        }
    }
    return intersection
}


const nums1 = [1,2,2,1]
const nums2 = [2,2]
console.log(intersection(nums1,nums2))