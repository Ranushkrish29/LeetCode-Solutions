/*
Given an array of non - negative integers nums, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Your goal is to reach the last index in the minimum number of jumps.
You can assume that you can always reach the last index.


Example 1:
    Input: nums = [2, 3, 1, 1, 4]
    Output: 2
    Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:
    Input: nums = [2, 3, 0, 1, 4]
    Output: 2*/

var jump = function (nums) {
    if (nums.length <= 1) return 0;

    let jump = 1;
    let count = nums[0];
    let p_max = nums[0];

    for (var i = 1; i < nums.length; i++) {

        console.log(jump, count, p_max)
        if (count == 0) {
            jump += 1;
            count = p_max;
        } else
            p_max -= 1;

        if (p_max <= nums[i]) p_max = nums[i];
        count = count - 1;
    }
    return jump;
}
console.log(jump([1, 2, 3]));
