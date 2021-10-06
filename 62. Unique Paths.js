/**A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?

Example 1:
    ________________________________________________________________
    | start  |        |        |        |        |        |        |
    |___*____|________|________|________|________|________|________|
    |        |        |        |        |        |        |        |
    |________|________|________|________|________|________|________|
    |        |        |        |        |        |        | finish |
    |________|________|________|________|________|________|___*____|

    Input: m = 3, n = 7
    Output: 28

Example 2:
    Input: m = 3, n = 2
    Output: 3
    Explanation:
    From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Down -> Down
    2. Down -> Down -> Right
    3. Down -> Right -> Down

Example 3:
    Input: m = 7, n = 3
    Output: 28

Example 4:
    Input: m = 3, n = 3
    Output: 6

Constraints:
    1 <= m, n <= 100 */


//Brute Force Implementation | unsig backtracking method | (not working for large numbers)
var uniquePaths = function (m, n) {
    let count = 0;
    function helper(x, y, temp) {
        if (x === m && y === n)
            count++;
        if (x < m)
            helper(x + 1, y, temp);
        if (y < n)
            helper(x, y + 1, temp);
    }
    helper(1, 1, []);
    return count;
};



//Optimized Implementation  runtime O(m*n) | space O(m*n)
var uniquePaths = function (m, n) {
    let grid = new Array(m);
    for (let i = 0; i < m; i++)
        grid[i] = new Array(n);

    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (j == 0 || i == 0)
                grid[i][j] = 1;
            else
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    return grid[m - 1][n - 1];
};


console.log(uniquePaths(100, 14))//33976189889821200