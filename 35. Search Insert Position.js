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


//method one    O(n) 
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++)
        if (nums[i] >= target)
            return i;
    return nums.length;
};

//method 2 using binary search;    O(n/2) 
var searchInsert = function (nums, target) {
    let mid = nums.length / 2, start, end;
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] < target) {
        start = mid + 1;
        end = nums.length;
    } else if (nums[mid] > target) {
        start = 0;
        end = mid + 1;
    } else {
        start = 0;
        end = nums.length;
    }
    for (let i = start; i < end; i++)
        if (nums[i] >= target)
            return i;
    return nums.length;
};

console.log(searchInsert([1, 2, 4, 6, 8, 9, 10], 10))