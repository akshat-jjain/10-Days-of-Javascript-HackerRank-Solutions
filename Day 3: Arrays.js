/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var max = 0;
    var ma = -1
    nums.sort()
    for(var i=0;i<nums.length;i++) {
        if (max < nums[i]) {
            ma = max;
            max = nums[i]
        }
        if (nums[i] > ma && nums[i] < max) {
            ma = nums[i];
    }
    }
    return ma;
}
