/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:
    Input: n = 1
    Output: ["()"]
Constraints:
    1 <= n <= 8 */



//Optimzied Implementation    ---- Backtracking  Method
var generateParenthesis = function (n) {
    let list = [];
    function backtracking(str, open, close) {
        if (str.length === n * 2) {
            list.push(str);
            return;
        }
        if (open < n && open >= close)
            backtracking(str + '(', open + 1, close);
        if (close < n)
            backtracking(str + ')', open, close + 1);
    }
    backtracking('', 0, 0);
    return list;
};
console.log(generateParenthesis(4))