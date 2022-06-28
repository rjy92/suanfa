// var isStraight = function(nums) {

// };

var isStraight = function (nums) {
    let kingsCount = 0;
    nums.sort((a, b) => a - b);
    let numsCount = 5;
    for (let i = 0; i < numsCount - 1; i++) {
      if (nums[i] == 0) kingsCount++;
      else if (nums[i] == nums[i + 1]) return false;
    }
    // kingsCount这时候已经指向0后面的数字了
    return nums[4] - nums[kingsCount] < 5;
  };