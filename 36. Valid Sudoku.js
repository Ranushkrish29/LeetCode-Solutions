/**Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:
     _____________________________________
    | 5 | 3 |   ||   | 7 |   ||   |   |   |
    |___|___|___||___|___|___||___|___|___|
    | 6 |   |   || 1 | 9 | 5 ||   | 6 |   |
    |___|___|___||___|___|___||___|___|___|
    |   | 9 | 8 ||   |   |   ||   |   |   |
    |___|___|___||___|___|___||___|___|___|
    | 8 |   |   ||   | 6 |   ||   |   | 3 |
    |___|___|___||___|___|___||___|___|___|
    | 4 |   |   || 8 |   | 3 ||   |   | 1 |
    |___|___|___||___|___|___||___|___|___|
    | 7 |   |   ||   | 2 |   ||   |   | 6 |
    |___|___|___||___|___|___||___|___|___|
    |   | 6 |   ||   |   |   || 2 | 8 |   |
    |___|___|___||___|___|___||___|___|___|
    |   |   |   || 4 | 1 | 9 ||   |   | 5 |
    |___|___|___||___|___|___||___|___|___|
    |   |   |   ||   | 8 |   ||   | 7 | 9 |
    |___|___|___||___|___|___||___|___|___|

    Input: */let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]/*
    Output: true

Example 2:
    Input:
let board2 =
    [["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
 Output: false
 Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
             Since there are two 8's in the top left 3x3 sub-box, it is invalid. */



//Brute Force Implementation -1    --   Runtime O(n^2)   || space O(n)
// Runtime: 88 ms, faster than 85.10 % of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 41.4 MB, less than 80.68 % of JavaScript online submissions for Valid Sudoku.
var isValidSudoku = function (board) {
    let hash1 = {},
        hash2 = {};
    //To check 
    // Each row must contain the digits 1-9 without repetition.
    // Each column must contain the digits 1 - 9 without repetition.
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== '.')
                if (!hash1[board[i][j]])
                    hash1[board[i][j]] = true;
                else
                    return false;
            if (board[j][i] !== '.')
                if (!hash2[board[j][i]])
                    hash2[board[j][i]] = true;
                else
                    return false
        }
        hash1 = {};
        hash2 = {};
    }
    //To Check Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
    //boxindex-list stores the 'start and end indexes of all the 9 , 3x3 sub boxes grid'  
    let boxindex = [
        [0, 2, 0, 2], [0, 2, 3, 5], [0, 2, 6, 8],
        [3, 5, 0, 2], [3, 5, 3, 5], [3, 5, 6, 8],
        [6, 8, 0, 2], [6, 8, 3, 5], [6, 8, 6, 8]];
    for (let box of boxindex) { //loops through the boxindex to get 3x3 sub-boxes-grid indexes 
        for (let i = box[0]; i <= box[1]; i++) {
            for (let j = box[2]; j <= box[3]; j++)
                if (board[i][j] !== '.')
                    if (!hash1[board[i][j]])
                        hash1[board[i][j]] = true;
                    else
                        return false;
        }
        hash1 = {};
    }
    return true
};
// console.log(isValidSudoku(board));//true


//Optimized Implementation -2    --   Runtime O(n^2)   || space O(n)
// Runtime: 84 ms, faster than 92.61 % of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 42.5 MB, less than 47.97 % of JavaScript online submissions for Valid Sudoku.
var isValidSudoku = function (board) {
    let hash1 = {}, hash2 = {};
    // To check 
    // Each row must contain the digits 1-9 without repetition.
    // Each column must contain the digits 1 - 9 without repetition.
    // Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
    //boxindex-list stores the 'start and end indexes of all the 9 , 3x3 sub boxes grid'  
    let boxindex = [[0, 8, 0, 8], [0, 2, 0, 2], [0, 2, 3, 5], [0, 2, 6, 8], [3, 5, 3, 5], [3, 5, 6, 8], [6, 8, 6, 8]];
    for (let box in boxindex) { //loops through the boxindex to get 3x3 sub-boxes-grid indexes 
        for (let i = boxindex[box][0]; i <= boxindex[box][1]; i++) {
            for (let j = boxindex[box][2]; j <= boxindex[box][3]; j++) {
                if (board[i][j] !== '.')
                    if (!hash1[board[i][j]])
                        hash1[board[i][j]] = true;
                    else
                        return false;
                if (board[j][i] !== '.')
                    if (!hash2[board[j][i]])
                        hash2[board[j][i]] = true;
                    else
                        return false
            }
            if (box * 1 == 0) {
                hash2 = {};
                hash1 = {};
            }
        }
        if (box * 1 !== 0) {
            hash2 = {};
            hash1 = {};
        }
    }
    return true
};
let board3 = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."]]
console.log(isValidSudoku(board3));//false
