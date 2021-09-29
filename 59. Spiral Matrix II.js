/**Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:

        1  ->   2  ->   3
                        |
                        V
        8  ->   9       4
        ^               |
        |               V
        7  <-   6  <-   5

    Input: n = 3
    Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:
    Input: n = 1
    Output: [[1]]

Constraints:
    1 <= n <= 20 */



// Brute Force Implementaion
// Runtime: 68 ms, faster than 91.00 % of JavaScript online submissions for Spiral Matrix II.
// Memory Usage: 39.2 MB, less than 22.88 % of JavaScript online submissions for Spiral Matrix II.

var generateMatrix = function (n) {

    let i = 0,
        j = 0,
        nloop = 1,
        curLayPos = 0,
        matrix = [];

    for (let i = 0; i < n; i++)
        matrix.push([]);

    while (nloop <= n * n) {
        matrix[i][j] = nloop;
        if (i == curLayPos && (j == curLayPos || j < n - 1 - curLayPos))
            if (j + 1 <= n - 1 - curLayPos) j++;
            else i++;
        else if (j == n - 1 - curLayPos && (i == curLayPos || i < (n - 1 - curLayPos)))
            i++;
        else if (i == (n - 1 - curLayPos) && j == n - 1 - curLayPos || j > curLayPos)
            j--;
        else if (j == curLayPos && (i == (n - 1 - curLayPos) || i < (n - 1 - curLayPos))) {
            i--;
            if (i - j == 1) curLayPos++;
        }
        nloop++;
    }
    return matrix;
};
console.log(generateMatrix(5));
//    [ [ 1,  2,  3,  4, 5],
//      [16, 17, 18, 19, 6],
//      [15, 24, 25, 20, 7],
//      [14, 23, 22, 21, 8],
//      [13, 12, 11, 10, 9] ]