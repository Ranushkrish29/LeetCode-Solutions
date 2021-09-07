/**You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

    1   2   3               7   4   1
    
    4   5   6       ==>     8   5   2
    
    7   8   9               9   6   3

    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
    Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
    Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

Example 3:
    Input: matrix = [[1]]
    Output: [[1]]

Example 4:
    Input: matrix = [[1,2],[3,4]]
    Output: [[3,1],[4,2]] */



// Optimized Implementation  -- runtime O(n) || space O(1)
// Runtime: 68 ms, faster than 91.02% of JavaScript online submissions for Rotate Image.
// Memory Usage: 40.2 MB, less than 17.78 % of JavaScript online submissions for Rotate Image.
var rotate = function (matrix) {
    for (let x = 0, y = matrix.length - 1; x < matrix.length / 2 && y >= 0 && x < y; x++, y--)
        for (let i = 0, j = matrix.length - 1; i < matrix.length / 2 && j >= 0; i++, j--)
            [matrix[x][i], matrix[i][y], matrix[j][x], matrix[y][j]] = [matrix[j][x], matrix[x][i], matrix[y][j], matrix[i][y]];
    return matrix;
}
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))
//[ [ 15, 13, 2, 5 ],[14, 3, 4, 1],[12, 6, 8, 9],[16, 7, 10, 11] ]


/**
 *
        5    1    9   11   

        2    4    8   10    

        13   3    6    7

        15   14   12   16

    #first - rotate the four corners values to 90' (clock-wise)

        __            __
        5    1    9   11

        2    4    8   10

        13   3    6    7
        __            __
        15   14   12   16
                  
                |
                |
                V        
        __            __
        15    1    9   5
         
        2    4    8   10

        13   3    6    7
        __            __
        16   14   12   11

    then  - rotate the next element to the corners to 90' (clock-wise)

             __
        15    1    9   5
                      ___
        2    4    8   10
        ___
        13   3    6    7
                 ____
        16   14   12   11

                |
                |
                V
             __           
        15   13    9   5
                      ___
        2    4    8    1
        ___
        12   3    6    7
                  __
        16   14   10   11


    then  - rotate the next element to 90' (clock-wise)

                  ___
        15   13    9   5
        ___
        2    4    8    1
                      ___
        12   3    6    7
            ____
        16   14   10   11

                |
                |
                V
                  ___
        15   13    2   5
        ___
        14    4    8    1
                      ___
        12   3    6    9
            ____
        16   7   10   11


        The outer rotation is completed :
         then ,rotate  the inner elemeents to 90' (clock-wise)

        15   13    2    5
            ___   ___
        14   4     8    1
            ___   ___
        12   3     6    9

        16   7    10   11

                |
                |
                V
        
        15   13    2   5
            ___   ___
        14   3     4   1
            ___   ___
        12   6     8   9

        16   7    10   11
 */






// Brute Force Implementation -- runtime O(n) || space O(n)
var rotate = function (matrix) {
    let length = matrix[0].length,
        res = new Array(length).fill([]);
    temp = [];
    for (let i = 0; i < length; i++) {
        for (let j = length - 1; j >= 0; j--)
            temp.push(matrix[j][i]);
        res[i] = temp;
        temp = [];
    }
    matrix = res;
    return matrix;
}
// console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))


