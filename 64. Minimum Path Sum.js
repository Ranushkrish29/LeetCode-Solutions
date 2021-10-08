/**Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.

Example 1:
    ____________________________
    | start  |        |        |
    |___1____|___3____|___1____|
    |        |        |        |
    |___1____|___5____|___1____|
    |        |        | finish |
    |___4____|___2____|___1____|

    Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
    Output: 7
    Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:
    ____________________________
    | start  |        |        |
    |___1____|___2____|___3____|
    |        |        | finish |
    |___4____|___5____|___6____|

    Input: grid = [[1,2,3],[4,5,6]]
    Output: 12  

Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 200
    0 <= grid[i][j] <= 100 */

//For Optimized Implementation  jump to 56 line


//Brute Force Implementation  | using backtracking | (not working for large numbers) 
var minPathSum = function (grid) {

    let posWaysSum = Infinity;
    function hepler(x, y, sum) {
        if (x == grid.length - 1 && y == grid[0].length - 1)
            if (sum < posWaysSum)
                posWaysSum = sum;
        if (x < grid.length - 1)
            hepler(x + 1, y, sum + grid[x][y]);
        if (y < grid[0].length - 1)
            hepler(x, y + 1, sum + grid[x][y]);
    }
    hepler(0, 0, 0);
    return posWaysSum + grid[grid.length - 1][grid[0].length - 1];

};
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));//7

// Optimized Implementation  | Runtime O(n) | space O(1)
// Runtime: 68 ms, faster than 98.91 % of JavaScript online submissions for Minimum Path Sum.
// Memory Usage: 41 MB, less than 46.37 % of JavaScript online submissions for Minimum Path Sum.

//By doing this method, we can find the shortest distance for all the cell in the grid from the start point.

var minPathSum = function (grid) {
    //loops through all the cell in the grid:
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++)
            // if the position is (0,0) ,pass it...
            if (i == 0 && j == 0)
                continue
            // if i=0 then update the grid[0][j] position value by (0,j) + (0,j-1) position's value  { other_words:: current cell value + left cell of the current cell's value in the grid }
            else if (i == 0)
                grid[i][j] += grid[i][j - 1];
            // if j=0 then update the grid[i][0] position value by (i,0) + (i-1,0) position's value { other_words:: current cell value + top cell of the current cell's value in the grid }
            else if (j == 0)
                grid[i][j] += grid[i - 1][j];
            // else (both i and j are not equal to zero)
            else
                // current cell value + left cell of the current cell's value in the grid is smaller { < } then  current cell value + top cell of the current cell's value in the grid
                //if true ,update the grid[i][j] value by current cell value + left cell of the current cell's value in the grid
                if (grid[i][j] + grid[i][j - 1] < grid[i][j] + grid[i - 1][j])
                    grid[i][j] += grid[i][j - 1];
                //else ,update the grid[i][j] value by current cell value + top cell of the current cell's value in the grid
                else
                    grid[i][j] += grid[i - 1][j];
    //return the last cell value 
    return grid[grid.length - 1][grid[0].length - 1];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));//7

/**
For Example :

    Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
    ____________________________
    | start  |        |        |
    |___1____|___3____|___1____|
    |        |        |        |
    |___1____|___5____|___1____|
    |        |        | finish |
    |___4____|___2____|___1____|

    At the end , grid is updated to the shortest distance sum from the starting point :
    ____________________________
    | start  |        |        |
    |___1____|___4____|___5____|
    |        |        |        |
    |___2____|___7____|___6____|
    |        |        | finish |
    |___6____|___8____|___7____|   return the last cell value  (7 in this case)

        Output: 7
        Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

 */