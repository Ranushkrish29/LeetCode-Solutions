/**You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

Example 2:
    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step

Constraints:
    1 <= n <= 45 */


//Brute Force Implementation | using back-tracking method   | Runtime O(n!) 
var climbStairs = function (n) {
    let totalway = 0;
    function helper(sum) {
        if (sum == n)
            totalway += 1;
        if (sum >= n)
            return;
        helper(sum + 1);
        helper(sum + 2);
    }
    helper(0)
    return totalway
};

var climbStairs = function (n) {
    if (n < 2)
        return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
};
console.log(climbStairs(11))

let memo = []
var climbStairs = function (val) {
    if (memo[val]) return memo[val]
    if (val <= 2) return 1;
    else memo[val] = climbStairs(val - 1) + climbStairs(val - 2)
    return memo[val];
}


//Optimized Implementation   | Runtime O(n) | space (1)
var climbStairs = function (n) {
    let num1 = 0,
        num2 = 1;
    for (let i = 0; i < n; i++)
        [num1, num2] = [num2, num1 + num2];
    return num2
};
function climbStairs1(val) {
    let memo = [1, 1];
    for (let i = 2; i <= val; i++)
        memo[i] = memo[i - 1] + memo[i - 2];
    return memo[val]
}
console.log(climbStairs1(5))






