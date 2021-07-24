/*
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
    Input:*/let lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
/*Output: [1,1,2,3,4,4,5,6] 
    Explanation: The linked-lists are:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:
Input: lists = []
Output: []
Example 3:
Input: lists = [[]]
Output: []
Constraints:
k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
*/

//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//Optimized Implementation
// Runtime: 88 ms, faster than 98.65 % of JavaScript online submissions for Merge k Sorted Lists.
// Memory Usage: 44.5 MB, less than 45.96 % of JavaScript online submissions for Merge k Sorted Lists.
var mergeKLists = function (lists) {
    let current, sortedlist = [];
    for (let i = 0; i < lists.length; i++) {
        current = lists[i]
        while (current) {
            sortedlist.push(current.val);
            current = current.next;
        }
    }
    sortedlist.sort((a, b) => a - b);
    let dummyheadlist = new ListNode(),
        linkedlist = dummyheadlist;
    for (let i = 0; i < sortedlist.length; i++) {
        dummyheadlist.next = new ListNode(sortedlist[i]);
        dummyheadlist = dummyheadlist.next
    }
    return linkedlist.next;
};

//------------------------------------------------------------------------------------------
//helper convertions
//just for converting the given list to linkedlist and 
//converting the resultent linked list to list for simplicity 
function convets(lists) {
    let dummyheadlist1 = new ListNode(0),
        linkedlist1 = dummyheadlist1,
        dummyheadlist2 = new ListNode(0),
        linkedlist2 = dummyheadlist2,
        dummyheadlist3 = new ListNode(0),
        linkedlist3 = dummyheadlist3;
    for (let i of lists[0]) {
        dummyheadlist1.next = new ListNode(i)
        dummyheadlist1 = dummyheadlist1.next
    }
    for (let i of lists[1]) {
        dummyheadlist2.next = new ListNode(i)
        dummyheadlist2 = dummyheadlist2.next
    }
    for (let i of lists[2]) {
        dummyheadlist3.next = new ListNode(i)
        dummyheadlist3 = dummyheadlist3.next
    }
    //calls the main function 
    let resultlinkedlist = mergeKLists([linkedlist1.next, linkedlist2.next, linkedlist3.next]),
        resultlist = [],
        current = resultlinkedlist;
    while (current) {
        resultlist.push(current.val);
        current = current.next;
    }
    return resultlist;
}
console.log(convets(lists))//[ 1, 1, 2, 3, 4, 4, 5, 6 ]