/**Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:
    Input: nums = [0,1]
    Output: [[0,1],[1,0]]
Example 3:
    Input: nums = [1]
    Output: [[1]] 

-------------------------------------------------
Constraints:
    1 <= nums.length <= 6
    -10 <= nums[i] <= 10
    All the integers of nums are unique.
    */


// Optimized Implementaion     --- runtime O(n) || space O(n) 
var permute = function (nums) {
    let resultArray = new Array();

    function helper(nums, permutedValueArr) {
        if (nums.length == 0) {
            resultArray.push([...permutedValueArr]);  //push the copy of the permuted array 
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            //choose
            permutedValueArr.push(nums[i]); //0th value
            let decreasedNums = nums.filter((n, index) => index != i);
            //explore
            helper(decreasedNums, permutedValueArr);   //passing in the new decreased nums array
            //unchoose
            permutedValueArr.pop();  //start removing the elements from the last so you can make possible combinations of values with that 0th value 
        }
    }
    helper(nums, new Array());
    return resultArray;
};
console.log(permute([1, 2, 4]));



// Brute force Implementaion     --- runtime O(n) || space O(n) -- just for example :)
// Runtime: 80 ms, faster than 94.61 % of JavaScript online submissions for Permutations.
// Memory Usage: 41.5 MB, less than 82.56 % of JavaScript online submissions for Permutations.
// Simple concept :: 
//   6 premute = 1 constant value + 5 other premute ,and 5 other possibilities :
//      5 premute = 1 constant value + 4 other premute ,and 4 other possibilities :
//          4 premute = 1 constant value + 3 other premute ,and 3 other possibilities :
//              3 premute = 1 constant value + 2 other premute ,and 2 other possibilities :
//                  2 premute = swap the elements for two times 
//  Not so impresive ,but still works perfects with in the Constraints  : ) 

var permute = function (nums) {
    if (nums.length == 1)
        return [nums];
    if (nums.length == 2)
        return two(nums, []);
    if (nums.length == 3)
        return three(nums, []);
    if (nums.length == 4)
        return four(nums, []);
    if (nums.length == 5)
        return five(nums, []);
    if (nums.length == 6)
        return six(nums);
    function two(nums, prelist) {
        let list = []
        list.push([...prelist, nums[0], nums[1]]);
        list.push([...prelist, nums[1], nums[0]]);
        return list;
    }
    function three(nums, prelist) {
        let list = []
        list.push(...two([nums[1], nums[2]], [...prelist, nums[0]]));
        list.push(...two([nums[2], nums[0]], [...prelist, nums[1]]));
        list.push(...two([nums[0], nums[1]], [...prelist, nums[2]]));
        return list;
    }
    function four(nums, prelist) {
        let list = []
        list.push(...three([nums[1], nums[2], nums[3]], [...prelist, nums[0]]));
        list.push(...three([nums[2], nums[3], nums[0]], [...prelist, nums[1]]));
        list.push(...three([nums[3], nums[0], nums[1]], [...prelist, nums[2]]));
        list.push(...three([nums[0], nums[1], nums[2]], [...prelist, nums[3]]));
        return list;
    }
    function five(nums, prelist) {
        let list = []
        list.push(...four([nums[1], nums[2], nums[3], nums[4]], [...prelist, nums[0]]));
        list.push(...four([nums[2], nums[3], nums[4], nums[0]], [...prelist, nums[1]]));
        list.push(...four([nums[3], nums[4], nums[0], nums[1]], [...prelist, nums[2]]));
        list.push(...four([nums[4], nums[0], nums[1], nums[2]], [...prelist, nums[3]]));
        list.push(...four([nums[0], nums[1], nums[2], nums[3]], [...prelist, nums[4]]));
        return list;
    }
    function six(nums) {
        let list = []
        list.push(...five([nums[1], nums[2], nums[3], nums[4], nums[5]], [nums[0]]));
        list.push(...five([nums[2], nums[3], nums[4], nums[5], nums[0]], [nums[1]]));
        list.push(...five([nums[3], nums[4], nums[5], nums[0], nums[1]], [nums[2]]));
        list.push(...five([nums[4], nums[5], nums[0], nums[1], nums[2]], [nums[3]]));
        list.push(...five([nums[5], nums[0], nums[1], nums[2], nums[3]], [nums[4]]));
        list.push(...five([nums[0], nums[1], nums[2], nums[3], nums[4]], [nums[5]]));
        return list;
    }
};
// console.log(permute([1,2,3,4,5]));
//[[1, 2, 3, 4, 5],[1, 2, 3, 5, 4],[1, 2, 4, 5, 3],[1, 2, 4, 3, 5],[1, 2, 5, 3, 4],[1, 2, 5, 4, 3],[1, 3, 4, 5, 2],[1, 3, 4, 2, 5],[1, 3, 5, 2, 4],[1, 3, 5, 4, 2],[1, 3, 2, 4, 5],[1, 3, 2, 5, 4],[1, 4, 5, 2, 3],[1, 4, 5, 3, 2],[1, 4, 2, 3, 5],[1, 4, 2, 5, 3],[1, 4, 3, 5, 2],[1, 4, 3, 2, 5],[1, 5, 2, 3, 4],[1, 5, 2, 4, 3],[1, 5, 3, 4, 2],[1, 5, 3, 2, 4],[1, 5, 4, 2, 3],[1, 5, 4, 3, 2],[2, 3, 4, 5, 1],[2, 3, 4, 1, 5],[2, 3, 5, 1, 4],[2, 3, 5, 4, 1],[2, 3, 1, 4, 5],[2, 3, 1, 5, 4],[2, 4, 5, 1, 3],[2, 4, 5, 3, 1],[2, 4, 1, 3, 5],[2, 4, 1, 5, 3],[2, 4, 3, 5, 1],[2, 4, 3, 1, 5],[2, 5, 1, 3, 4],[2, 5, 1, 4, 3],[2, 5, 3, 4, 1],[2, 5, 3, 1, 4],[2, 5, 4, 1, 3],[2, 5, 4, 3, 1],[2, 1, 3, 4, 5],[2, 1, 3, 5, 4],[2, 1, 4, 5, 3],[2, 1, 4, 3, 5],[2, 1, 5, 3, 4],[2, 1, 5, 4, 3],[3, 4, 5, 1, 2],[3, 4, 5, 2, 1],[3, 4, 1, 2, 5],[3, 4, 1, 5, 2],[3, 4, 2, 5, 1],[3, 4, 2, 1, 5],[3, 5, 1, 2, 4],[3, 5, 1, 4, 2],[3, 5, 2, 4, 1],[3, 5, 2, 1, 4],[3, 5, 4, 1, 2],[3, 5, 4, 2, 1],[3, 1, 2, 4, 5],[3, 1, 2, 5, 4],[3, 1, 4, 5, 2],[3, 1, 4, 2, 5],[3, 1, 5, 2, 4],[3, 1, 5, 4, 2],[3, 2, 4, 5, 1],[3, 2, 4, 1, 5],[3, 2, 5, 1, 4],[3, 2, 5, 4, 1],[3, 2, 1, 4, 5],[3, 2, 1, 5, 4],[4, 5, 1, 2, 3],[4, 5, 1, 3, 2],[4, 5, 2, 3, 1],[4, 5, 2, 1, 3],[4, 5, 3, 1, 2],[4, 5, 3, 2, 1],[4, 1, 2, 3, 5],[4, 1, 2, 5, 3],[4, 1, 3, 5, 2],[4, 1, 3, 2, 5],[4, 1, 5, 2, 3],[4, 1, 5, 3, 2],[4, 2, 3, 5, 1],[4, 2, 3, 1, 5],[4, 2, 5, 1, 3],[4, 2, 5, 3, 1],[4, 2, 1, 3, 5],[4, 2, 1, 5, 3],[4, 3, 5, 1, 2],[4, 3, 5, 2, 1],[4, 3, 1, 2, 5],[4, 3, 1, 5, 2],[4, 3, 2, 5, 1],[4, 3, 2, 1, 5],[5, 1, 2, 3, 4],[5, 1, 2, 4, 3],[5, 1, 3, 4, 2],[5, 1, 3, 2, 4],[5, 1, 4, 2, 3],[5, 1, 4, 3, 2],[5, 2, 3, 4, 1],[5, 2, 3, 1, 4],[5, 2, 4, 1, 3],[5, 2, 4, 3, 1],[5, 2, 1, 3, 4],[5, 2, 1, 4, 3],[5, 3, 4, 1, 2],[5, 3, 4, 2, 1],[5, 3, 1, 2, 4],[5, 3, 1, 4, 2],[5, 3, 2, 4, 1],[5, 3, 2, 1, 4],[5, 4, 1, 2, 3],[5, 4, 1, 3, 2],[5, 4, 2, 3, 1],[5, 4, 2, 1, 3],[5, 4, 3, 1, 2],[5, 4, 3, 2, 1]]


