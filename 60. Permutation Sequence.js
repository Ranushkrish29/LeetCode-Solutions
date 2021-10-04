/**The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
    "123"
    "132"
    "213"
    "231"
    "312"
    "321"
    Given n and k, return the kth permutation sequence.

Example 1:
    Input: n = 3, k = 3
    Output: "213"
Example 2:
    Input: n = 4, k = 9
    Output: "2314"
Example 3:
    Input: n = 3, k = 1
    Output: "123"

Constraints:
    1 <= n <= 9
    1 <= k <= n! */

//for Optimized Implementation ,jump to line 94 :


//Brute Force Implementation
function helper(num, nums) {
    let com = Infinity,
        index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (num < nums[i] && com > nums[i]) {
            com = nums[i];
            index = i;
        }
    }
    return index;
}
function getPermutation(n, k) {
    let str = [],
        i,
        p1;
    for (i = 1; i <= n; i++)
        str.push(i);

    for (i = 1; i < k; i++) {
        p1 = str.length - 1;
        while (str[p1 - 1] > str[p1])
            p1--;
        x = p1 + helper(str[p1 - 1], str.slice(p1));
        [str[p1 - 1], str[x]] = [str[x], str[p1 - 1]]
        str.splice(p1, str.length - p1, ...str.slice(p1).sort((a, b) => a - b));
    }
    return str.join('');
}
// console.log(getPermutation(4, 9));//2314


//Brute Force Implementation    -- using back tracking method  
function getPermutation(n, k) {

    let nums = [];
    for (let i = 1; i <= n; i++)
        nums.push(i);

    let result = [],
        count = 1;
    function helper(nums, premutationlist) {
        if (nums.length == 0) {
            count++;
            result.push([...premutationlist]);
            return;
        }
        if (count > k)
            return;
        for (let i = 0; i < nums.length; i++) {
            premutationlist.push(nums[i]);
            helper(nums.filter((n, index) => index != i), premutationlist)
            if (count > k)
                return;
            premutationlist.pop();
        }
    }
    helper(nums, []);
    return result[result.length - 1].join('');
}
console.log(getPermutation(8, 79));//12375468


//------------------------------------------------------------------------------------------------------------------

// Optimized Implementation 
// Runtime: 72 ms, faster than 97.32 % of JavaScript online submissions for Permutation Sequence.
// Memory Usage: 39.5 MB, less than 90.18 % of JavaScript online submissions for Permutation Sequence.
function getPermutation(n, k) {
    let list = [],
        str = '',
        factnum = n - 1,
        factorial = 1,
        posindex;
    k = k - 1;

    for (let i = 1; i <= n; i++)
        list.push(i);

    for (let j = 0; j < n; j++) {

        for (let i = 1; i <= factnum; i++)
            factorial *= i;

        posindex = Math.floor(k / factorial);
        str += list[posindex];
        list = list.filter((a, index) => { return index != posindex });
        k = k % factorial;
        factorial = 1;
        factnum--;

    }
    return str;
}
console.log(getPermutation(2, 2))
