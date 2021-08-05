/**Given an array of integers nums sorted in ascending order,find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
  */



//Brute Force Implementation  method -1        --- runtime O(n)  || Space  O(n)
var searchRange = function (nums, target) {
    let start = -1, end = -1;
    for (let i in nums)
        if (nums[i] == target) {
            start = i * 1
            break;
        }
    if (start != -1)
        for (let i = start; i < nums.length; i++)
            if (nums[i] !== target) {
                end = i - 1;
                break;
            } else if (nums[i] === target && i === nums.length - 1) {
                end = i;
                break;
            }
    return [start, end]
};
// console.log(searchRange(nums = [5, 7, 7, 8, 8, 10], target = 8));//[ 3 , 4 ]



//Brute Force Implementation  method -2        --- runtime O(n)  || Space  O(n)
var searchRange = function (nums, target) {
    let start = -1, end = -1;
    for (let i in nums)
        if (nums[i] == target) {
            start = i * 1
            break;
        }
    for (let i = nums.length - 1; i > -1; i--) {
        if (nums[i] == target) {
            end = i * 1
            break;
        }
    }
    return [start, end]
};
// console.log(searchRange(nums = [5, 7, 7, 8, 8, 10], target = 7));//[ 1 , 2 ]




//Optimizied Implementation --- runtime O(logn)  || Space  O(1)
// Runtime: 64 ms, faster than 97.77 % of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 40.4 MB, less than 44.03 % of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.

var searchRange = function (nums, target) {
    //return [-1,-1] ,if list is empty ,or if target is greater then the last element of the list. 
    if (!nums.length || nums[nums.length - 1] < target)
        return [-1, -1];

    let left = 0,
        right = nums.length,
        mid,
        found = true;
    //Find the number in the list .if present in the list return the index , else set found to false
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            found = false;
            break;
        } else if (nums[mid] > target)
            right = mid - 1;
        else if (nums[mid] < target)
            left = mid + 1;
    }
    //if found is false (target not present in the list ) then return [-1,-1]
    if (found)
        return [-1, -1];
    //To find the start and end of the target element in the list
    //this loop runs mid to end   -->
    for (let i = mid; i < nums.length; i++)
        if (nums[i] === target)
            right = i;
        else
            break;
    //this loop runs mid to start  <--
    for (let i = mid; i > -1; i--)
        if (nums[i] === target)
            left = i;
        else
            break;
    //return
    return [left, right]
}
// console.log(searchRange(nums = [2, 2, 2], target = 3));//[ -1 , -1 ]

