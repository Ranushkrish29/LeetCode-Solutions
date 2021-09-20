/**Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:

        1  ->   2  ->   3
                        |
                        V
        4  ->   5       6
        ^               |
        |               V
        7  <-   8  <-   9

    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]

Example 2:
    Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100 */


//Brute Force Implementation    Runtime O(n)
//  At first, we move by the RIGHT direction.
// If we meet the boundary cell then we change to the next direction.
// Directions are in order are [RIGHT, DOWN, LEFT, TOP].
// By completing one round in ordered direction move to the inner elements and Do the same process in same orderd direction .
var spiralOrder = function (matrix) {

    let i = 0,
        j = 0,
        nloop = 0,
        //currentLayerPosition  - this is responsible for choosing the elements which are not visited and to find the current layer:
        currentLayerPosition = 0,
        resList = [];

    if (matrix[0].length == 1) {
        while (nloop < matrix.length * matrix[0].length) {
            resList.push(matrix[nloop][0]);
            nloop++;
        }
    } else
        while (nloop < matrix.length * matrix[0].length) {
            resList.push(matrix[i][j]);
            if (i == currentLayerPosition && (j == currentLayerPosition || j < matrix[0].length - 1 - currentLayerPosition))
                if (j + 1 <= matrix[0].length - 1 - currentLayerPosition) j++;
                else i++;
            else if (j == matrix[0].length - 1 - currentLayerPosition && (i == currentLayerPosition || i < (matrix.length - 1 - currentLayerPosition)))
                i++;
            else if (i == (matrix.length - 1 - currentLayerPosition) && j == matrix[0].length - 1 - currentLayerPosition || j > currentLayerPosition)
                j--;
            else if (j == currentLayerPosition && (i == (matrix.length - 1 - currentLayerPosition) || i < (matrix.length - 1 - currentLayerPosition))) {
                i--;
                if (i - j == 1) currentLayerPosition++;
            }
            nloop++;
        }
    return resList;
};
console.log(spiralOrder(
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]]))//[ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]