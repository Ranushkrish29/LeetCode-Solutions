/**Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

Example 1:
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
    Input: nums = [1]
    Output: 1

Example 3:
    Input: nums = [5,4,-1,7,8]
    Output: 23
  */


//Brute Force Implementation    Runtime O(n^2)  || space O(n)
var maxSubArray = function (nums) {
    let res = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum > res) res = sum;
        }
    }
    return res
};
console.log(maxSubArray([-1]));




//Optimized Method ( Kadane's Algorithm )    Runtime O(n)  || space O(n)
//Runtime: 68 ms, faster than 97.46% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 40.4 MB, less than 25.29 % of JavaScript online submissions for Maximum Subarray.
var maxSubArray = function (nums) {
    let maxSum = nums[0],
        currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (currSum < 0)
            currSum = 0;
        currSum += nums[i];
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));//6