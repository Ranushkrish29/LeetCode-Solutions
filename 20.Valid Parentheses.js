/**Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Example 1:
    Input: s = "()"
    Output: true
Example 2:
    Input: s = "()[]{}"
    Output: true
Example 3:
    Input: s = "(]"
    Output: false
Example 4:
    Input: s = "([)]"
    Output: false
Example 5:
    Input: s = "{[]}"
    Output: true */



//Optimized Implementation      ----- runtime O(n)
//Runtime:
//      60 ms, faster than 99.79% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 
//      39.8 MB, less than 33.09 % of JavaScript online submissions for Valid Parentheses.
//using stacks technique: 
var isValid = function (s) {
    if (s.length % 2 === 1)
        return false;
    let stack = [],
        hash = { ')': '(', '}': '{', ']': '[' };
    for (let i of s) {
        if (i === '(' || i === '[' || i === '{')
            stack.push(i);
        else
            if (stack.pop() !== hash[i])
                return false;
    }
    return stack.length > 0 ? false : true;
};
console.log(isValid(s = "((()))"));//true
