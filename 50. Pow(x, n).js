/**Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
    Input: x = 2.00000, n = 10
    Output: 1024.00000
Example 2:
    Input: x = 2.10000, n = 3
    Output: 9.26100
Example 3:
    Input: x = 2.00000, n = -2
    Output: 0.25000
    Explanation: 2-2 = 1/22 = 1/4 = 0.25 */


//using Math.pow
var myPow = function (x, n) {
    return Math.pow(x, n).toFixed(5)
};
console.log(myPow(2.0000, 10))//1024.00000



//with out using Math.pow
var myPow = function (x, n) {
    let res = x;
    if (n == 0)
        return 1
    for (let i = 1; i < Math.abs(n); i++)
        res = res * x;
    if (n < 0)
        res = 1 / res
    return res;
};
console.log(myPow(0, 1))



//using Math.pow
var myPow = function (x, n) {

    if (n == 0)
        return 1.0;
    if (n % 2 == 0)
        return myPow(x * x, n / 2);
    if (n > 0)
        return x * myPow(x, n - 1);
    return (1 / x) * myPow(x, n + 1);

}
console.log(myPow(0, 1))
