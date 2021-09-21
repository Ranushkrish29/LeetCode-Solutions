/**
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.

Example 1:
    Input: nums = [2,3,1,1,4]
    Output: true
    Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:
    Input: nums = [3,2,1,0,4]
    Output: false
    Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

Constraints:
    1 <= nums.length <= 104
    0 <= nums[i] <= 105 */


//Brute force Implemeantation 
function canJump(nums) {
    function helper(current, value) {
        if (value >= nums.length - 1)
            return true
        for (let i = current + 1; i <= value; i++) {
            if (nums[i] === 0)
                continue
            console.log(1)
            if (helper(i, i + nums[i]))
                return true;
        }
    }
    return helper(0, nums[0]) ? true : false
}
console.log(canJump([1, 3, 3, 0, 0, 0, 5, 2, 1, 0, 0]));


/**
Optimized Implementation   -- runtime O(n) |space O(1)

Runtime: 76 ms, faster than 97.62% of JavaScript online submissions for Jump Game.
Memory Usage: 43 MB, less than 54.64% of JavaScript online submissions for Jump Game.

  logic:
      loop the nums list from the end to start ( backward direction )
      if we find the number, which is greater then or equal to the number of loops we did till that position from backwards direction
      then set count = 0 
      finally if count=1 return true else false 

example with explaination :
[2, 3, 1, 1, 4]
     the count starts at 1

        [   2,   3,  1,  1,  4  ] 
          <-   <-   <-   <-  <-                     
                                count 0

            while the loop goes up count increases: 
            and checks  (nums[i] > = count)
                if true : set count =0 and continues the loop
            
              index   |  elements   |  count
                      |             |
                4     |     4       |   1 
                3     |     1       |   2
                2     |     1       |   3
                1     |     3       |   -> here the condition is true  (element > = count) // (3 >=3) so, count = 0 and increased by 1 for the current loop
                0     |     2       |   -> and condition is true again ( 2 >= 1) so, count = 0 and increased by 1 for the current loop

        finally if count == 1 return true else false   
 */

function canJump(nums) {
    let count = 1
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= count)
            count = 0;
        count++;
    }
    return count === 1 ? true : false;
}
console.log(canJump([2, 3, 1, 1, 4]));
