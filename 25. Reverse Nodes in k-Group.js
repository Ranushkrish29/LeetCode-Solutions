/**Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
k is a positive integer and is less than or equal to the length of the linked list.
If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
    Input: head = [1,2,3,4,5], k = 2
        
        1 -> 2 -> 3 -> 4 -> 5 -> null
                |
                V
        2 -> 1 -> 4 -> 3 -> 5 -> null

    Output: [2,1,4,3,5]
Example 2:
    Input: head = [1,2,3,4,5], k = 3

        1 -> 2 -> 3 -> 4 -> 5 -> null
                |
                V
        3 -> 2 -> 1 -> 4 -> 5 -> null

    Output: [3,2,1,4,5]
Example 3:
    Input: head = [1,2,3,4,5], k = 1
    Output: [1,2,3,4,5]
Example 4:
    Input: head = [1], k = 1
    Output: [1] */

// Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//Brute-Force Implementation    -   runtime O(n*k) || space O(n) 
function listreverse(list) {
    let dummy = [];
    for (let i = list.length - 1; i > -1; i--)
        dummy.push(list[i]);
    return dummy;
}
function reverseKGroup(head, k) {
    let list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }
    let start = 0
    for (let i = 1; i <= list.length; i++) {
        if (i % k === 0) {
            list.splice(start, k, ...listreverse(list.slice(start, i)))
            start = i;
        }
    }
    let dummyheadlist = new ListNode(),
        resultlist = dummyheadlist;
    for (let i = 0; i < list.length; i++) {
        dummyheadlist.next = new ListNode(list[i]);
        dummyheadlist = dummyheadlist.next;
    }
    return resultlist.next;
}

//Brute-Force Implementation 2    -   runtime O(n*k) || space O(n) 
function listreverse(list) {
    let dummy = [];
    for (let i = list.length - 1; i > -1; i--)
        dummy.push(list[i]);
    return dummy;
}
function reverseKGroup(head, k) {
    let list = [], current = head, x = 0;
    while (current) {
        list.push(current.val);
        current = current.next;
    }
    let start = 0
    for (let i = 1; i <= list.length; i++) {
        if (i % k === 0) {
            list.splice(start, k, ...listreverse(list.slice(start, i)))
            start = i;
        }
    }
    current = head;
    while (current) {
        current.val = list[x];
        current = current.next;
        x++;
    }
    return head;
}

//Optimized Implementation    -   runtime O(n*k) || space O(n) 
var reverseKGroup = function (head, k) {
    /*
    Approach: iterate through the list, whenever count is multiple of 'k' then reverse k nodes from start of this section.
    Also change next pointer of the tail of the last section
    */
    let curr, prev, temp, i = 0, count, ptr, start = null, newHead = null, prevTail = null, origPtrNext = null;
    ptr = head;
    while (ptr !== null) {
        i++;
        if (start === null) {
            start = ptr;
        }
        if (i % k === 0) {//Rerver k nodes from 'start'
            origPtrNext = ptr.next;//Keep ptr.next in a separte variable as ptr.next will be changed when we revers nodes from 'start' to 'ptr'
            count = 0;
            curr = start;
            prev = origPtrNext;
            while (count < k) {
                temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
                count++;
            }
            if (newHead === null) {//Last segment is NA for we won't "change next pointer of the tail of the last section" 
                newHead = prev;
            } else {//Change next pointer of the tail of the last section
                prevTail.next = prev;
            }
            prevTail = start;//Keep reference to the tail of the last section, as it's next pointer will be changed later.
            start = origPtrNext;//Next rever operation will be started from this node
        }
        if (origPtrNext !== null) {
            ptr = origPtrNext;
            origPtrNext = null;//Mark it used so after using it
        } else {
            ptr = ptr.next;
        }

    }
    return newHead;
};



//\\

// function reverselinkedlist(head, k) {
//     let current = head.next,
//         dummyheadlist = new ListNode(head.val),
//         count = 1;
//     while (current && count < k) {
//         let store = dummyheadlist;
//         dummyheadlist = new ListNode(current.val);
//         dummyheadlist.next = store;
//         count++
//         current = current.next;

//     }
//     return [dummyheadlist,current];
// }
// var reverseKGroup = function (head, k) {
//     if(k==1)return head;
//     let current = head,dummyheadlist=new ListNode(),linked=dummyheadlist;
//     let pre = head;
//     while(current){
//         pre = reverselinkedlist(head, k)[1]
//         console.log(  pre );
//         break;
//     }
// }

//------------------------------------------------------------------------------------------
//helper convertions
//just for converting the given list to linkedlist and 
//converting the resultent linked list to list for simplicity 
function convets(lists, k) {
    let dummyheadlist1 = new ListNode(0),
        linkedlist1 = dummyheadlist1;
    for (let i of lists) {
        dummyheadlist1.next = new ListNode(i)
        dummyheadlist1 = dummyheadlist1.next
    }
    //calls the main function 
    let resultlinkedlist = reverseKGroup(linkedlist1.next, k),
        resultlist = [],
        current = resultlinkedlist;
    while (current) {
        resultlist.push(current.val);
        current = current.next;
    }
    return resultlist;
}
console.log(convets([1, 2, 3, 4, 5], 4))//[ 1, 1, 2, 3, 4, 4, 5, 6 ]