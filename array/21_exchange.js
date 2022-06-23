var exchange = function(nums) {
    if(!nums || nums.length === 0) return nums
    let res = []
    for(let i = 0;i<nums.length;i++){
        const cur = nums[i]
        if(cur%2){
            res.unshift(cur)
        }else{
            res.push(cur)
        }
    }
    return res
};

var exchange = function(nums) {
    if(!nums || nums.length === 0) return nums
    let left = 0,right = nums.length - 1
    while(left <= right){        
        if(nums[left]%2 === 1 ){
            ++left
        } 
        if(nums[right]%2 === 0){
            --right
        }
        if(left>=right){
            break
        }
        if(nums[right]%2 === 1 && nums[left]%2 === 0 ){
            [nums[left],nums[right]] = [nums[right],nums[left]]
            ++left
            --right 
        }
    }
    return nums
};


const nums = [11,9,3,7,16,4,2,0]
console.log(exchange(nums))