/**
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is rotated at an unknown
pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
    For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
    You must write an algorithm with O(log n) runtime complexity.

Example 1:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4
Example 2:
    Input: nums = [4,5,6,7,0,1,2], target = 3
    Output: -1
Example 3:
    Input: nums = [1], target = 0
    Output: -1
  */


//Brute Force Implementation   -- Runtime O(n) || sapce O(1)
var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++)
        if (nums[i] === target)
            return i;
    return -1;
};
// console.log(search(nums = [4, 5, 6, 7, 0, 1, 2], target = 0))//4


//Optimized Implementation    -- Runtime O(2logn) || sapce O(1)
var search = (nums, target) => {
    let start = 0, end = nums.length - 1;
    //To find the pivit index
    while (start < end) {
        mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target)
            return mid;
        else if (nums[start] < nums[mid] && nums[mid] < nums[end])
            break;
        else if (nums[start] < nums[mid])
            start = mid;
        else if (nums[start] > nums[mid]) {
            end = mid;
            if (start + 1 === mid) {
                if (target <= nums[nums.length - 1]) {
                    start = mid + 1;
                    end = nums.length - 1;
                } else {
                    start = 0;
                    end = mid - 1;
                }
                break;
            }
        } else {
            if (target <= nums[nums.length - 1]) {
                start = mid + 1;
                end = nums.length - 1;
            } else {
                start = 0;
                end = mid - 1;
            }
            break;
        }
    }
    //To find the number:
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] > target)
            end = mid - 1;
        else if (nums[mid] < target)
            start = mid + 1;
    }
    return -1;
}
console.log(search([3, 5], 0))//4
