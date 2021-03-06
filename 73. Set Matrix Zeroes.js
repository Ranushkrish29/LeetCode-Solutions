/*Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
You must do it in place.

Example 1:

        1   1   1           1   0   1

        1   0   1     =>    0   0   0

        1   1   1           1   0   1

    Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
    Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

        0   1   2   0           0   0   0   0

        3   4   5   2     =>    0   4   5   0

        1   3   1   5           0   3   1   0

    Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


Constraints:
    m == matrix.length
    n == matrix[0].length
    1 <= m, n <= 200
    -231 <= matrix[i][j] <= 231 - 1

Follow up:
    A straightforward solution using O(mn) space is probably a bad idea.
    A simple improvement uses O(m + n) space, but still not the best solution.
    Could you devise a constant space solution?*/


//Brute froce Implementation 
var setZeroes = function (matrix) {
    let obj = {};
    for (let i in matrix)
        for (let j in matrix[i])
            if (matrix[i][j] === 0) {
                obj[i + 'r'] = 1;
                obj[j + 'c'] = 1;
            }
    for (let i in matrix)
        for (let j in matrix[i])
            if (obj[i + 'r'] || obj[j + 'c'])
                matrix[i][j] = 0;
    return matrix;
};
// console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));


//
var setZeroes = function (matrix) {
    let c = {}, r = {};
    for (let i in matrix)
        for (let j in matrix[i])
            if (matrix[i][j] === 0) {
                c[i] = 1;
                r[j] = 1;
            }
    for (let i in c)
        for (let j in matrix[0])
            matrix[i][j] = 0;
    for (let i in r)
        for (let j in matrix)
            matrix[j][i] = 0;
    return matrix;
};
console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));


