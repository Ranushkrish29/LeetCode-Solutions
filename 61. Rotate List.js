/** Given the head of a linked list, rotate the list to the right by k places.

Example 1:
    Input: head = [1,2,3,4,5], k = 2

    1 -> 2 -> 3 -> 4 -> 5
    Rotate 1:
        5 -> 1 -> 2 -> 3 -> 4
    Rotate 2:
        4 -> 5 -> 1 -> 2 -> 3
    Output: [4,5,1,2,3]

Example 2:
    Input: head = [0,1,2], k = 4
    Output: [2,0,1]


Constraints:
    The number of nodes in the list is in the range [0, 500].
    -100 <= Node.val <= 100
    0 <= k <= 2 * 109 */


//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//Brute force Implementation 
var rotateRight = function (head, k) {

    if (!head || head.next == null)
        return head;
    let length = 0,
        current = head;

    while (current) {
        length++;
        current = current.next
    }
    k = k % length;
    console.log(k)
    for (let i = 0; i < k; i++) {
        current = head;
        while (current) {
            if (current.next.next == null)
                break;
            current = current.next;
        }
        let newnode = new ListNode(current.next.val);
        current.next = null;
        newnode.next = head;
        head = newnode;
    }
    return head;
};
// console.log(addtwolinkedlistfun(head = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 15))//[ 4, 5, 6, 7, 8, 9, 1, 2, 3 ]




//Optimized Implementation 
// Runtime: 76 ms, faster than 96.63 % of JavaScript online submissions for Rotate List.
// Memory Usage: 40.8 MB, less than 16.33 % of JavaScript online submissions for Rotate List.
var rotateRight = function (head, k) {
    //return head if linked list is empty or having only one node :
    if (!head || head.next == null)
        return head;

    let length = 0,
        current = head;
    //find the length of the linkded list :
    while (current) {
        length++;
        current = current.next
    }
    //reduce the number of rotates if it is greater then the list-length itself : 
    k = k % length;
    //if rotate ==0 no rotate is need just return the head
    if (k == 0)
        return head;
    //Go through the linkded list nodes
    current = head;
    while (current) {
        //decrement the length
        length--;
        //if the length is equal to the rotates to be done : 
        //      Break the loop and the current will have element to be placed in the front
        if (length == k)
            break;
        current = current.next;
    }
    //set current.next to newnode
    let newnode = current.next;
    //and update the current.next to null ,cuz this is gonna be a last node in the linked list
    current.next = null;
    //set current to newnode ,newnode is the one which have the all nodes to be placed in front
    current = newnode;

    //loop through the current
    while (current) {
        //if the current.next is null :
        //      break the loop and the current will have last node of newnode
        if (current.next == null)
            break;
        current = current.next;
    }
    //and update the last node of the newnode to point the head
    current.next = head;
    //make the newnode as the head and return :
    head = newnode;
    return head;
};





///helper function -- converting given list to  linked list 
function addtwolinkedlistfun(list2, k) {
    let dummyheadlist2 = new ListNode(0),
        linkedlist2 = dummyheadlist2;
    for (let i of list2) {
        dummyheadlist2.next = new ListNode(i);
        dummyheadlist2 = dummyheadlist2.next;
    }
    let res = rotateRight(linkedlist2.next, k),
        list = [];
    while (res) {
        list.push(res.val);
        res = res.next
    }
    return list;
}
console.log(addtwolinkedlistfun(head = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 15))//[ 4, 5, 6, 7, 8, 9, 1, 2, 3 ]
console.log(addtwolinkedlistfun(head = [1, 2, 3, 4], k = 1))
