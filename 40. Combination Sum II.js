/**Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.

Example 1:
    Input: candidates = [10,1,2,7,6,1,5], target = 8
    Output:
    [
    [1,1,6],
    [1,2,5],
    [1,7],
    [2,6]
    ]
Example 2:
    Input: candidates = [2,5,2,1,2], target = 5
    Output:
    [
    [1,2,2],
    [5]
    ]
  */


//Brute force Implementation using Backtracking  -- runtime O(n^2)
var combinationSum2 = function (candidates, target) {
    let result = [],
        hash = {},
        templist = [];
    function backtracking(index, target, templist) {
        if (target === 0) {
            let x = [...templist].sort();
            if (!hash[x])
                result.push(x);
            hash[x] = 1;
            return;
        }
        if (target < 0) return;
        for (let i = index; i < candidates.length; i++) {
            templist.push(candidates[i]);
            backtracking(i + 1, target - candidates[i], templist);
            templist.pop();
            while (candidates[i] === candidates[i + 1])
                i++;
        }
    }
    backtracking(0, target, templist)
    return result;
};
console.log(combinationSum2(candidates = [10, 1, 2, 7, 6, 1, 5], target = 8));//[ [ 1, 2, 5 ], [ 1, 7 ], [ 1, 1, 6 ], [ 2, 6 ] ]



//Optimized Implementation   
let combinationSum2method2 = (candidates, target) => {
    const res = [];
    candidates.sort((a, b) => a - b);
    const Backtracking = (comb, t, i) => {
        if (t === 0) return res.push(comb);
        for (let j = i; j < candidates.length; j++) {
            if (j > i && candidates[j] === candidates[j - 1]) continue;
            if (candidates[j] <= t) Backtracking([...comb, candidates[j]], t - candidates[j], j + 1);
        }
    };
    Backtracking([], target, 0);
    return res;
};