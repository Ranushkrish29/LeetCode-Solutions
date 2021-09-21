/**Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:
    Input: intervals = [[1,4],[4,5]]
    Output: [[1,5]]
    Explanation: Intervals [1,4] and [4,5] are considered overlapping. 

Constraints:
    1 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 104 */



//Brute Force Implementation
var merge = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    });
    for (let i = 0; i < intervals.length - 1; i++)
        if (intervals[i][1] >= intervals[i + 1][0]) {
            let x = [...intervals[i], ...intervals[i + 1]].sort((a, b) => a - b);
            intervals.splice(i, 2, [x[0], x[3]]);
            i--;
        }
    return intervals;
};
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]));//[[1,10]]

//