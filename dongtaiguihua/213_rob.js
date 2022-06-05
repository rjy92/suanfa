 var robRange = function (nums, start, end) {
     let first = nums[start],
         second = Math.max(nums[start], nums[start + 1])
     for (let i = start + 2; i <= end; i++) {
         const temp = second;
         second = Math.max(first + nums[i], second);
         first = temp;
     }
     return second
 }

 var rob = function (nums) {
     let n = nums.length
     if (n == 1) {
         return nums[0]
     } else if (n == 2) {
         return Math.max(nums[1], nums[0])
     }
     return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));
 };