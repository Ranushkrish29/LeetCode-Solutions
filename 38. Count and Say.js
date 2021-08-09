/**The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character.
Then for each group, say the number of characters, then say the character.
To convert the saying into a digit string, replace the counts with a number and concatenate every saying.


For example, the saying and conversion for digit string "3322251":
    "3322251"
    "'33'+'222'+'5'+'1'"
    two-3 , three-2 , one-5 , one-1
    "23321511"
Given a positive integer n, return the nth term of the count-and-say sequence.

Example 1:
    Input: n = 1
    Output: "1"
    Explanation: This is the base case.
Example 2:
    Input: n = 4
    Output: "1211"
    Explanation:
        countAndSay(1) = "1"
        countAndSay(2) = say "1" = one 1 = "11"
        countAndSay(3) = say "11" = two 1's = "21"
        countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211" */


//Brute Force Solution --- runtime O(n)
// Runtime: 76 ms, faster than 76.44 % of JavaScript online submissions for Count and Say.
// Memory Usage: 41.2 MB, less than 50.00 % of JavaScript online submissions for Count and Say.
function countAndSay(n) {
    if (n == 1)
        return '1';
    let str = '1',
        temp = '';
    for (let i = 1; i < n; i++) {
        let count = 1;
        for (let j = 0; j < str.length - 1; j++) {
            if (str[j] == str[j + 1]) {
                count++;
            } else {
                temp += count + '' + str[j];
                count = 0;
                count++;
            }
        }
        temp += count + '' + str[str.length - 1];
        str = temp;
        temp = '';
        count = 0;
    }
    return str;
}
console.log(countAndSay(5))//111221




//simplyfied version
function countAndSay(n) {
    if (n == 1)
        return '1';
    let str = '1',
        temp = '';
    for (let i = 1; i < n; i++) {
        let count = 0;
        for (let j = 0; j < str.length - 1; j++)
            if (str[j] == str[j + 1])
                count++;
            else {
                temp += ++count + '' + str[j];
                count = 0;
            }
        temp += ++count + '' + str[str.length - 1];
        [str, temp, count] = [temp, '', 0];
    }
    return str;
}