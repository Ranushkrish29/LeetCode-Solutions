/**Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

Example 1:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true

Example 2:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
    Output: false

Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104 */

//Optimized Implementation

//Runtime: 68 ms, faster than 92.92% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 39.8 MB, less than 40.82 % of JavaScript online submissions for Search a 2D Matrix.
var searchMatrix = function (matrix, target) {
    let i = 0;
    while (target >= matrix[i][0]) {
        i++;
        if (matrix.length <= i) {
            break;
        }
    }
    i = (i == 0) ? 0 : i - 1;
    let start = 0,
        end = matrix[i].length - 1,
        mid = 0;
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        if (matrix[i][mid] == target) {
            return true;
        } else if (matrix[i][mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }
    return false
};


console.log(searchMatrix(matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 11));