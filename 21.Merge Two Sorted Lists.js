/**
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists.

Example 1:
    Input: l1 = [1,2,4], l2 = [1,3,4]
        linkedlist-1                 ->   1 -> 2 -> 4
        linkedlist-2                 ->   1 -> 3 -> 4
        Merged two sorted linkedlist ->   1 -> 1 -> 2 -> 3 -> 4 -> 4
    Output: [1,1,2,3,4,4]
Example 2:
    Input: l1 = [], l2 = []
    Output: []
Example 3:
    Input: l1 = [], l2 = [0]
    Output: [0] */

//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//Optimized Implementation    ----- Runtime : O(n) || sapce O(n)
// Runtime: 
//      72 ms, faster than 98.62 % of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage:
//      40.6 MB, less than 31.90 % of JavaScript online submissions for Merge Two Sorted Lists.
var mergeTwoLists = function (l1, l2) {
    let currentl1 = l1,
        currentl2 = l2,
        dummyheadlist = new ListNode(0),
        linkedlist = dummyheadlist;

    while (currentl1 !== null && currentl2 !== null) {
        if (currentl1.val <= currentl2.val) {
            dummyheadlist.next = new ListNode(currentl1.val);
            currentl1 = currentl1.next;
        } else {
            dummyheadlist.next = new ListNode(currentl2.val);
            currentl2 = currentl2.next;
        }
        dummyheadlist = dummyheadlist.next;
    }
    while (currentl1 !== null) {
        dummyheadlist.next = new ListNode(currentl1.val);
        currentl1 = currentl1.next;
        dummyheadlist = dummyheadlist.next;
    }
    while (currentl2 !== null) {
        dummyheadlist.next = new ListNode(currentl2.val);
        currentl2 = currentl2.next;
        dummyheadlist = dummyheadlist.next;
    }
    return linkedlist.next;
};


//same method using recurion method   
// Runtime: 80 ms, faster than 88.75 % of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.9 MB, less than 11.08 % of JavaScript online submissions for Merge Two Sorted Lists.
function mergeTwoLists2(l1, l2) {
    let dummylinkedlist = new ListNode(0),
        linkedlist = dummylinkedlist;
    var helper = (l1, l2) => {
        if (!l1 && !l2)
            return;
        else if (!l1 && l2) {
            dummylinkedlist.next = new ListNode(l2.val);
            dummylinkedlist = dummylinkedlist.next;
            helper(l1, l2.next);
        } else if (l1 && !l2) {
            dummylinkedlist.next = new ListNode(l1.val);
            dummylinkedlist = dummylinkedlist.next;
            helper(l1.next, l2);
        } else {
            if (l1.val <= l2.val) {
                dummylinkedlist.next = new ListNode(l1.val);
                dummylinkedlist = dummylinkedlist.next;
                helper(l1.next, l2);
            } else {
                dummylinkedlist.next = new ListNode(l2.val);
                dummylinkedlist = dummylinkedlist.next;
                helper(l1, l2.next);
            }
        }
    }
    helper(l1, l2);
    return linkedlist.next;
}

//------------------------------------------------------------------------------------------
//helper convertions
//just for converting the given list to linkedlist and 
//converting the resultent linked list to list for simplicity 
function convets(l1, l2) {
    let dummyheadlist1 = new ListNode(0),
        linkedlist1 = dummyheadlist1,
        dummyheadlist2 = new ListNode(0),
        linkedlist2 = dummyheadlist2;
    for (let i of l1) {
        dummyheadlist1.next = new ListNode(i)
        dummyheadlist1 = dummyheadlist1.next
    }
    for (let i of l2) {
        dummyheadlist2.next = new ListNode(i)
        dummyheadlist2 = dummyheadlist2.next
    }
    //calls the main function 
    let resultlinkedlist = mergeTwoLists2(linkedlist1.next, linkedlist2.next),
        resultlist = [],
        current = resultlinkedlist;
    while (current) {
        resultlist.push(current.val);
        current = current.next;
    }
    return resultlist;
}
console.log(convets(l1 = [1, 2, 3], l2 = [1, 3, 4]))//[ 1, 1, 2, 3, 4, 4 ]