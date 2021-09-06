/**Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:
    Input: nums = [1,1,2]
    Output:
        [[1,1,2],
        [1,2,1],
        [2,1,1]]
Example 2:
    Input: nums = [1,2,3]
    Output:
        [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
  */



//Brute force Implementaion     --- runtime O(n) || space O(n) 
var permuteUnique = function (nums) {
    let resultArray = new Array(),
        hash = {};

    function helper(nums, permutedValueArr) {
        if (nums.length == 0) {
            if (!hash[[...permutedValueArr]])
                resultArray.push([...permutedValueArr]);//push the copy of the permuted array
            hash[[...permutedValueArr]] = 1;
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
// console.log(permuteUnique([1, 1, 1]));




//Optimized Implementaition 
var permuteUnique = function (nums) {
    nums.sort((a, b) => {
        return a - b
    })
    let result = []

    function backtracking(nums, permutedValueArr) {
        if (nums.length === 0) {
            result.push([...permutedValueArr])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i !== 0 && nums[i] == nums[i - 1]) continue

            permutedValueArr.push(nums[i])
            nums.splice(i, 1)
            backtracking(nums, permutedValueArr)
            nums.splice(i, 0, permutedValueArr.pop())
        }
    }
    backtracking(nums, new Array());
    return result
};
console.log(permuteUnique([1, 2, 1]))//[ [ 1, 1, 2 ], [ 1, 2, 1 ], [ 2, 1, 1 ] ]





// to delete the duplicate number in the list  -- just tried :)
let hash = {};
let x = [1, 2, 3, 4].filter((current) => {
    if (current in hash) {
    } else {
        hash[current] = true;
        return true
    }
});