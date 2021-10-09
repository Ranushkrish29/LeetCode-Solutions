/**Given two binary strings a and b, return their sum as a binary string.

Example 1:
    Input: a = "11", b = "1"
    Output: "100"
Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"

Constraints:
    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself. */



//Brute Force Implementation 
var addBinary = function (a, b) {
    let sum = BigInt(0),
        final = "",
        finalx = '';
    for (let i = 0; i < a.length; i++)
        sum += BigInt(Math.pow(2, (a.length - i - 1)) * a[i]);
    for (let i = 0; i < b.length; i++)
        sum += BigInt(Math.pow(2, (b.length - i - 1)) * b[i]);
    if (!sum)
        return "0";
    while (sum) {
        final += sum % BigInt(2);
        sum = sum / BigInt(2);
    }
    for (let i = final.length - 1; i > -1; i--)
        finalx += final[i];
    return finalx;
};
console.log(addBinary(a = "1010", b = "1011"));//10101


//Optimized Implementation in space O(1)
var addBinary = function (a, b) {
    const aBin = `0b${a}`;
    const bBin = `0b${b}`;
    const sum = BigInt(aBin) + BigInt(bBin);
    return sum.toString(2);
};
console.log(addBinary(a = "1010", b = "1011"));//10101
