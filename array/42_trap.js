/**
 * 当前元素所能接到的水取决于当前元素左右两边最大值的最小值，即 Math.min(leftMax,rightMax) - current
 * 可想而之，我们需要计算每个元素左侧最大值和右侧最大值
 * leftMax[0]=height[0]，rightMax[n−1]=height[n−1]
 * 当1≤i≤n−1是，leftMax[i] = Math.max(leftMax[i-1],height[i])
 * 当0≤i≤n−2 时 ，rightMax[i]=Math.max(leftMax[i+1],height[i])
 * 循环数据，求每个地方可接水量
*/
// var trap = function(height) {
//     const n = height.length
//     if(n == 0) return 0
//     let leftMax = new Array(n).fill(0);
//     leftMax[0] = height[0]
//     for(let i = 1;i<n;i++){
//         leftMax[i] = Math.max(leftMax[i-1],height[i])
//     }
//     let rightMax = new Array(n).fill(0);
//     rightMax[n-1] = height[n-1]
//     for(let i = n-2;i>=0;i--){
//         rightMax[i] = Math.max(rightMax[i+1],height[i])
//     }
//     let ans = 0;
//     for(let i =0;i<n;i++){
//         ans+= Math.min(leftMax[i],rightMax[i]) - height[i]
//     }
//     return ans
// };

var trap = function (height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let ans = 0
    while(left < right){
        leftMax = Math.max(leftMax,height[left])
        rightMax = Math.max(rightMax,height[right])
        if(height[left] < height[right]){
            ans += leftMax - height[left]
            left++
        }else{
             ans += rightMax - height[right]
            right--
        }
    }
    return ans
};
const nums = [4,2,0,3,2,5]
console.log(trap(nums))


