/**Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same
color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Example 1:
    Input: nums = [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
Example 2:
    Input: nums = [2,0,1]
    Output: [0,1,2]
Example 3:
    Input: nums = [0]
    Output: [0]
Example 4:
    Input: nums = [1]
    Output: [1]

Constraints:
    n == nums.length
    1 <= n <= 300
    nums[i] is 0, 1, or 2. */



//Brute Force Implementation 
var sortColors = function (nums) {
    let i = 0, j = 0, k = 0;
    for (let num = 0; num < nums.length; num++) {
        if (nums[num] == 0) {
            i++;
        } else if (nums[num] == 1) {
            j++;
        } else {
            k++;
        }
    }
    for (num = 0; num < i + j + k; num++) {
        if (num < i) {
            nums[num] = 0;
        } else if (num < (i + j)) {
            nums[num] = 1;
        } else {
            nums[num] = 2;
        }
    }
    return nums;
};
// console.log(sortColors([2, 0, 2, 1, 1, 0]))



//Optimized Implementaion 
var sortColors = function (nums) {

    let insertindex = 0;    //to store the current insert index postition in the list
    while (insertindex < nums.length) {
        let min = insertindex;
        //find the min number in the given limits  [ insetindex , <-- limits -->  , end ]
        for (let i = min; i < nums.length; i++)
            if (nums[min] >= nums[i])
                min = i;
        //swap the min number to the correct position in the list
        [nums[insertindex], nums[min]] = [nums[min], nums[insertindex]];
        //increament the insertindex
        insertindex++;
    }
    return nums;
};
console.log(sortColors([2, 0, 2, 1, 1, 0]))  //[ 0, 0, 1, 1, 2, 2 ]
