var maxArea = function(height) {
    let left = 0; right = height.length -1,max = 0
    for(let i=0;i<height.length;i++){
        max = Math.max(max, Math.min(height[left],height[right])*(right - left))
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return max
};
// 公示：
// 两个指针指向的数字中较小值∗指针之间的距离
// S(i,j)=min(h[i],h[j])×(j−i)
const height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))