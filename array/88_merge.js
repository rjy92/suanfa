// var merge = function(nums1, m, nums2, n) {
//     // if(n==0) return nums1
//     // if(m == 0) return nums1.splice(m,nums1.length-m,...nums2)
//     nums1.splice(m,nums1.length-m,...nums2)
//     nums1.sort((a,b)=>a-b)
//     return nums1
// };

// var merge = function(nums1, m, nums2, n) {
//     let p1 = 0, p2 = 0;
//     const sorted = new Array(m + n).fill(0);
//     var cur;
   
//     while( p1<m || p2<n ){
//         console.log('come in merge',p1<m,p2<n ,p1 === m,p2 == n)
//         if(p1 === m){
//             cur = nums2[p2]
//             p2++
//         }else if(p2 == n){
//             cur = nums1[p1]
//             p1++
//         }else if(nums1[p1] <=  nums2[p2]){
//             cur = nums1[p1]
//             p1++
//         }else{
//             cur = nums2[p2]
//             p2++
//         }
//         console.log('cur',cur)
//         sorted[p1+p2-1] = cur
//     }
//     for(let i=0;i<sorted.length;i++){
//         nums1[i] = sorted[i]
//     }
//     return nums1
// }

var merge = function(nums1, m, nums2, n) {
    var p1 = m - 1, p2 = n - 1
    var total = m + n - 1,cur
    while(p1 >=0 || p2 >= 0){
        if(p1 === -1){
            cur = nums2[p2--]
        }else if(p2 === -1){
            cur = nums1[p1--]
        }else if(nums1[p1]<=nums2[p2]){
            cur = nums2[p2--]
        }else{
            cur = nums1[p1--]
        }
        nums1[total--] = cur
    }
    return nums1

}
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(merge(nums1, m, nums2, n))