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
console.log(addtwolinkedlistfun(head = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 15))//[ 4, 5, 6, 7, 8, 9, 1, 2, 3 ]



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

console.log(addtwolinkedlistfun(head = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 15))
console.log(6 % 5)