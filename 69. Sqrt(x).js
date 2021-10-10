/**Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


Constraints:

0 <= x <= 231 - 1 */


//Brute Force Impementation
var mySqrt = function (x) {
    let num = 1;
    while (true) {
        if (num * num == x)
            return num;
        if (num * num > x)
            return num - 1;
        num++;
    }
};
// console.log(mySqrt(5545454))//2354

//Another Brute Force Implementation
var mySqrt = function (x) {
    let num = 0;
    while (++num)
        if (Math.floor(x / num) < num)
            return num - 1;
};
console.log(mySqrt(361))//19


//using build-in function 
var mySqrt = function (x) {
    return Math.floor(Math.sqrt(x));
}
console.log(mySqrt(64))//19


//Optimized implementation
var mySqrt = function (x) {
    if (x < 2) return x;
    let mid, left = 2, right = x / 2;
    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        let n = mid * mid;
        if (n == x) return mid;
        if (n < x) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
    return Math.floor(right)
};
