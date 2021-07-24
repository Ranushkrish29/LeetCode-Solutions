/**Given a linked list, swap every two adjacent nodes and return its head.
 *  You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
    Input: head = [1,2,3,4]
    Output: [2,1,4,3]
Example 2:
    Input: head = []
    Output: []
Example 3:
    Input: head = [1]
    Output: [1] */

//  * Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//Optimized  Implementation      
var swapPairs = function (head) {
    let current = head;
    while (current) {
        if (current.next) {
            [current.val, current.next.val] = [current.next.val, current.val];
            current = current.next;
        }
        current = current.next;
    }
    return head;
};


//------------------------------------------------------------------------------------------
//helper convertions
//just for converting the given list to linkedlist and 
//converting the resultent linked list to list for simplicity 
function convets(l1, l2) {
    let dummyheadlist1 = new ListNode(0),
        linkedlist1 = dummyheadlist1;
    for (let i of l1) {
        dummyheadlist1.next = new ListNode(i)
        dummyheadlist1 = dummyheadlist1.next
    }
    //calls the main function 
    let resultlinkedlist = swapPairs(linkedlist1.next),
        resultlist = [],
        current = resultlinkedlist;
    while (current) {
        resultlist.push(current.val);
        current = current.next;
    }
    return resultlist;
}
console.log(convets([1, 2, 3, 4]))//[ 2, 1, 4, 3 ]