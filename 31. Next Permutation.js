/**Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
The replacement must be in place and use only constant extra memory.

Example 1:
    Input: nums = [1,2,3]
    Output: [1,3,2]
Example 2:
    Input: nums = [3,2,1]
    Output: [1,2,3]
Example 3:
    Input: nums = [1,1,5]
    Output: [1,5,1]
Example 4:
    Input: nums = [1]
    Output: [1] */



// Optimized Implementation    ---- runtime O(n)  
// I took one day to slove the problem :( , but i did :) 
// Runtime: 72 ms, faster than 99.15 % of JavaScript online submissions for Next Permutation.
// Memory Usage: 40.6 MB, less than 19.87 % of JavaScript online submissions for Next Permutation.
function helper(x, d) {
    for (let i = d; i < x.length; i++)
        if (x[i] > x[d])
            return i;
    return 0;
}
var nextPermutation = function (nums) {
    for (let i = nums.length - 2; i > -1; i--) {
        if (nums[i] < nums[i + 1]) {
            let x = nums.slice(i + 1,).sort((a, b) => a - b);
            nums.splice(i + 1, x.length, ...x);
            let min = helper(nums, i);
            [nums[i], nums[min]] = [nums[min], nums[i]];
            return nums
        }
    }
    return nums.sort((a, b) => a - b);
};
console.log(nextPermutation([4, 0, 5, 29, 14, 16, 9, 2, 12, 14, 7, 27, 15]))//[ 4, 0, 5, 29, 14, 16, 9, 2, 12, 14, 15, 7, 27 ]