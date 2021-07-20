/**Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

    Input: head = [1,2,3,4,5], n = 2

        1 -> 2 -> 3 -> 4 -> 5 -> null   -- > remove 2nd element form end ( which is 4 )
                |
                V
        1 -> 2 -> 3 -> 5 -> null

    Output: [1,2,3,5]

Example 2:
    Input: head = [1], n = 1
    Output: []

Example 3:
    Input: head = [1,2], n = 1
    Output: [1] */


// Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


//Optimized implementation 1      runtime O(n+n) || space O(n) ----- works very well
//  Runtime: 
//      60 ms, faster than 99.97% of JavaScript online submissions for Remove Nth Node From End of List.
//  Memory Usage:
//      40.1 MB, less than 77.58 % of JavaScript online submissions for Remove Nth Node From End of List.
// In this method ,first i converted the given linked-list to list .
// then, removed the specified index value from the end of the list ,using the negative indexing.
// then, i converted the list to linked list and returned it. 
var removeNthFromEnd = function (head, n) {
    let list = [],
        current = head,
        dummyheadlist = new ListNode(0),
        linkedlist = dummyheadlist;
    while (current) {
        list.push(current.val);
        current = current.next;
    }
    list.splice(-n, 1);
    for (let i of list) {
        dummyheadlist.next = new ListNode(i);
        dummyheadlist = dummyheadlist.next;
    }
    return linkedlist.next;
};



//Optimized Implementation 2 using recursion   --  runtime O(n+n) || space O(n) ----- works very well
//Runtime: 
//  80 ms, faster than 68.48 % of JavaScript online submissions for Remove Nth Node From End of List.
//Memory Usage:
//   40.3 MB, less than 46.57 % of JavaScript online submissions for Remove Nth Node From End of List.
function removeNthFromEnd(head, n) {
    let count = 0;
    function helper(currenthead) {
        if (currenthead.next === null)
            return;
        helper(currenthead.next);
        count++;
        console.log(count)
        if (n == count)
            [currenthead.next] = [currenthead.next.next];
        return currenthead;
    }
    let linkedlist = helper(head, n);
    return count + 1 === n ? head.next : linkedlist ? linkedlist : null
}



//------------------------------------------------------------------------------------------
//helper convertions
//just for converting the given list to linkedlist and 
//converting the resultent linked list to list for simplicity 
function convets(list, n) {
    let dummyheadlist = new ListNode(0),
        linkedlist = dummyheadlist;
    for (let i of list) {
        dummyheadlist.next = new ListNode(i)
        dummyheadlist = dummyheadlist.next
    }
    //calls the main function 
    let resultlinkedlist = removeNthFromEnd(linkedlist.next, n),
        resultlist = [],
        current = resultlinkedlist;
    console.log(resultlinkedlist)
    while (current) {
        resultlist.push(current.val);
        current = current.next;
    }
    return resultlist;
}

console.log(convets([1, 2, 3], n = 2))//[1,3]