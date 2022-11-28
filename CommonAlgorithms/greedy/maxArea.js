var maxArea = function(height) {
    const n = height.length
    let left = 0,right = n-1,res = 0 
    while(left < right){
        res = Math.max(res,Math.min(height[left],height[right])*(right - left))
        height[right] > height[left]? left++:right--
    }
    return res
};