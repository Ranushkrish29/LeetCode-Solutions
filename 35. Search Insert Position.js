/**Given a sorted array of distinct integers and a target value, return the index if the target is found.
   If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2
Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1
Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4
Example 4:
    Input: nums = [1,3,5,6], target = 0
    Output: 0
Example 5:
    Input: nums = [1], target = 0
    Output: 0 */


//Brute Force Implementation   -   runtime O(n) || space O(1);
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++)
        if (nums[i] >= target)
            return i;
    return nums.length;
};

// Optimized implementation using binary search    -   runtime O(log n) || space O(1); 
// Runtime: 60 ms, faster than 99.65 % of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39.8 MB, less than 47.76 % of JavaScript online submissions for Search Insert Position.
var searchInsert = function (nums, target) {
    if (target <= nums[0])
        return 0;
    if (target > nums[nums.length - 1])
        return nums.length;
    let start = 0, end = nums.length - 1;
    while (start < end) {
        mid = Math.floor((end + start) / 2);
        if (nums[mid] > target)
            end = mid;
        else if (nums[mid] < target)
            start = mid + 1;
        else
            break;
    }
    return nums[mid] >= target ? mid : mid + 1
};
console.log(searchInsert(nums = [1, 3, 5, 6], target = 5))